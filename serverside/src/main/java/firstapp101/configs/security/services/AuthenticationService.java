/*
 * @bot-written
 * 
 * WARNING AND NOTICE
 * Any access, download, storage, and/or use of this source code is subject to the terms and conditions of the
 * Full Software Licence as accepted by you before being granted access to this source code and other materials,
 * the terms of which can be accessed on the Codebots website at https://codebots.com/full-software-licence. Any
 * commercial use in contravention of the terms of the Full Software Licence may be pursued by Codebots through
 * licence termination and further legal action, and be required to indemnify Codebots for any loss or damage,
 * including interest and costs. You are deemed to have accepted the terms of the Full Software Licence on any
 * access, download, storage, and/or use of this source code.
 * 
 * BOT WARNING
 * This file is bot-written.
 * Any changes out side of "protected regions" will be lost next time the bot makes any changes.
 */
package firstapp101.configs.security.services;

import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.util.WebUtils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;

import java.time.Duration;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Service used to handle JWT tokens granted to any authenticated requests made to the server. It offers the ability to
 * grant, check and remove JWT tokens associated with any {@link Authentication}s.
 */
@Component
@Slf4j
public class AuthenticationService {
	private static final String ERROR_INVALID_TOKEN = "Invalid Token";

	/**
	 * JWT expiration time duration in seconds. Default to 1 hour.
	 */
	@Value("${security.jwt-token-expiration-time-seconds}")
	private int jwtTokenExpirationTimeInSeconds;

	/**
	 * JWT secret used to encode JWT tokens.
	 */
	@Value("${security.jwt-secret}")
	private String jwtSecret;

	/**
	 * Max age in seconds for authentication cookie.
	 */
	@Value("${security.auth-token-age-seconds}")
	private int authTokenAgeInSeconds;

	/**
	 * Max age in seconds for CSRF cookie.
	 */
	@Value("${security.csrf-token-age-seconds}")
	private int csrfTokenAgeInSeconds;

	/**
	 * Cached users who are currently logged in.
	 */
	private final Map<String, Authentication> loggedInUsers;

	/**
	 * Lookup map used to retrieve CSRF tokens for each user.
	 */
	private final Map<String, String> csrfLookup;

	/**
	 * Check if the current environment is secure (i.e. HTTPS) or not.
	 */
	private boolean isSecure = true;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@Autowired
	public AuthenticationService(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			Environment env
	) {
		// % protected region % [Add any additional constructor logic before the main body here] off begin
		// % protected region % [Add any additional constructor logic before the main body here] end

		loggedInUsers = new HashMap<>();
		csrfLookup = new HashMap<>();

		for (String profile : env.getActiveProfiles()) {
			if (profile.equals("dev") || profile.equals("test")) {
				this.isSecure = false;
				break;
			}
		}

		// % protected region % [Add any additional constructor logic after the main body here] off begin
		// % protected region % [Add any additional constructor logic after the main body here] end
	}

	/**
	 * Add cookies to the given HTTP response to indicate that the user is now authorized.
	 *
	 * @param response       the HTTP response to confirm that the user has successfully authenticated
	 * @param authentication the authentication object containing the information of the currently authenticated user
	 */
	public synchronized void addAuthentication(@NonNull HttpServletResponse response, @NonNull Authentication authentication) {
		// % protected region % [Add any additional preprocessing logic for addAuthentication here] off begin
		// % protected region % [Add any additional preprocessing logic for addAuthentication here] end

		final String username = ((UserDetails) authentication.getPrincipal()).getUsername();

		// The JWT spec expects base64 encoding, let's encode it again (or for the first time) to ensure this
		String jwt = Jwts.builder()
				.setSubject(username)
				.setExpiration(Date.from(ZonedDateTime.now().plus(Duration.ofSeconds(jwtTokenExpirationTimeInSeconds)).toInstant()))
				.signWith(SignatureAlgorithm.HS512, jwtSecret)
				.compact();

		// % protected region % [Add any additional logic before configuring the response here] off begin
		// % protected region % [Add any additional logic before configuring the response here] end

		Cookie authCookie = new Cookie("AUTH-TOKEN", jwt);
		authCookie.setPath("/");
		authCookie.setMaxAge(authTokenAgeInSeconds);
		authCookie.setHttpOnly(true);
		authCookie.setSecure(isSecure);

		String csrfToken = UUID.randomUUID().toString();
		Cookie csrfCookie = new Cookie("XSRF-TOKEN", csrfToken);
		csrfCookie.setPath("/");
		csrfCookie.setMaxAge(csrfTokenAgeInSeconds);
		csrfCookie.setSecure(isSecure);

		response.addCookie(authCookie);
		response.addCookie(csrfCookie);

		// % protected region % [Add any additional logic before updating the cached users here] off begin
		// % protected region % [Add any additional logic before updating the cached users here] end

		loggedInUsers.put(username, authentication);
		csrfLookup.put(username, csrfToken);

		// % protected region % [Add any additional postprocessing logic for addAuthentication here] off begin
		// % protected region % [Add any additional postprocessing logic for addAuthentication here] end
	}

	/**
	 * Remove the JWT and the CSRF tokens in the given HTTP request from the store.
	 *
	 * @param request the HTTP request sent up by the client
	 */
	public synchronized void removeAuthentication(@NonNull HttpServletRequest request) {
		// % protected region % [Add any additional preprocessing logic for removeAuthentication here] off begin
		// % protected region % [Add any additional preprocessing logic for removeAuthentication here] end

		try {
			String jwtToken = getUsernameFromRequest(request);

			loggedInUsers.remove(jwtToken);
			csrfLookup.remove(jwtToken);
		} catch (InsufficientAuthenticationException e) {
			log.error(ERROR_INVALID_TOKEN);
		}

		// % protected region % [Add any additional postprocessing logic for removeAuthentication here] off begin
		// % protected region % [Add any additional postprocessing logic for removeAuthentication here] end
	}

	/**
	 * Retrieve the authentication details from the HTTP request.
	 *
	 * @param request the HTTP request sent up by the client
	 * @return the authentication details from the HTTP request
	 */
	public synchronized Authentication getAuthentication(@NonNull HttpServletRequest request) {
		// % protected region % [Add any additional preprocessing logic for getAuthentication here] off begin
		// % protected region % [Add any additional preprocessing logic for getAuthentication here] end

		try {
			return loggedInUsers.get(getUsernameFromRequest(request));
		} catch (InsufficientAuthenticationException e) {
			log.error(ERROR_INVALID_TOKEN);
			return null;
		}
	}

	/**
	 * Retrieve the CSRF details from the HTTP request.
	 *
	 * @param request the HTTP request sent up by the client
	 * @return CSRF details from the HTTP request
	 */
	public synchronized String getCsrfToken(@NonNull HttpServletRequest request) {
		// % protected region % [Add any additional preprocessing logic for getAuthentication here] off begin
		// % protected region % [Add any additional preprocessing logic for getAuthentication here] end

		try {
			return csrfLookup.get(getUsernameFromRequest(request));
		} catch (InsufficientAuthenticationException e) {
			log.error(ERROR_INVALID_TOKEN);
			return null;
		}
	}

	/**
	 * Given the HTTP request sent up by the client, retrieve the 'Authorization' header from it and convert it to a JWT
	 * token.
	 *
	 * @param request   the HTTP request sent up by the client
	 * @return the JWT token retrieved from the request
	 */
	private String getUsernameFromRequest(@NonNull HttpServletRequest request) {
		// % protected region % [Add any additional preprocessing logic for getUsernameFromRequest here] off begin
		// % protected region % [Add any additional preprocessing logic for getUsernameFromRequest here] end

		Cookie cookie = WebUtils.getCookie(request, "AUTH-TOKEN");

		if (cookie == null) {
			throw new InsufficientAuthenticationException("Missing token");
		}

		String token = URLDecoder.decode(cookie.getValue(), StandardCharsets.UTF_8);

		try {
			return Jwts.parser()
					.setSigningKey(jwtSecret)
					.parseClaimsJws(token)
					.getBody()
					.getSubject();
		} catch (SignatureException | MalformedJwtException | ExpiredJwtException e) {
			log.error(e.getMessage());

			loggedInUsers.remove(token);
			csrfLookup.remove(token);

			throw new InsufficientAuthenticationException(ERROR_INVALID_TOKEN);
		}
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
