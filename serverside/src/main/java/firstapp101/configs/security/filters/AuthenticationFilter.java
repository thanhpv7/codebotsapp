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
package firstapp101.configs.security.filters;

import firstapp101.configs.security.services.AuthenticationService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.RegexRequestMatcher;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static firstapp101.configs.security.SecurityConfig.ANONYMOUS_USER;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Filter used to ensure that the user is authenticated before any action is taken. This filter will be run first before
 * any other authentication filters can run.
 */
public class AuthenticationFilter extends AbstractAuthenticationProcessingFilter {
	/**
	 * Service used to retrieve authentication details and CSRF tokens for every request.
	 */
	private final AuthenticationService authService;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	/**
	 * @param defaultFilterProcessesUrl URLs that this filter will be applied to
	 * @param authService               service used to retrieve authentication details and CSRF tokens
	 */
	public AuthenticationFilter(String defaultFilterProcessesUrl, AuthenticationService authService) {
		super(new RegexRequestMatcher(defaultFilterProcessesUrl, null));
		this.authService = authService;

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	/**
	 * @inheritDoc
	 */
	@Override
	public Authentication attemptAuthentication(
			HttpServletRequest request,
			HttpServletResponse response
	) throws AuthenticationException {
		// % protected region % [Add any additional logic for attemptAuthentication before the main body here] off begin
		// % protected region % [Add any additional logic for attemptAuthentication before the main body here] end

		// Check if CSRF token from the request matches that of the server.
		String requestCsrfToken = request.getHeader("XSRF-TOKEN");
		String csrfToken = authService.getCsrfToken(request);
		if (requestCsrfToken == null || !requestCsrfToken.equals(csrfToken)) {
			// % protected region % [Add any additional logic for attemptAuthentication before throwing exception on missing or invalid CSRF token here] off begin
			// % protected region % [Add any additional logic for attemptAuthentication before throwing exception on missing or invalid CSRF token here] end

			return ANONYMOUS_USER;
		}

		// % protected region % [Add any additional logic for attemptAuthentication before checking for authentication details here] off begin
		// % protected region % [Add any additional logic for attemptAuthentication before checking for authentication details here] end

		// Get the authentication detail of the current user.
		try{
			Authentication authentication = authService.getAuthentication(request);
			if (authentication == null) {
				// % protected region % [Add any additional logic for attemptAuthentication before throwing exception on missing authentication details here] off begin
				// % protected region % [Add any additional logic for attemptAuthentication before throwing exception on missing authentication details here] end

				return ANONYMOUS_USER;
			}

			// % protected region % [Add any additional logic for attemptAuthentication before returning the authentication details here] off begin
			// % protected region % [Add any additional logic for attemptAuthentication before returning the authentication details here] end

			return authentication;
		} catch(ExpiredJwtException e) {
			throw new InsufficientAuthenticationException("Token Expired", e);
		}
	}

	/**
	 * @inheritDoc
	 */
	@Override
	protected void successfulAuthentication(
			HttpServletRequest request,
			HttpServletResponse response,
			FilterChain chain,
			Authentication authResult
	) throws IOException, ServletException {
		// % protected region % [Add any additional logic for successfulAuthentication before the main body here] off begin
		// % protected region % [Add any additional logic for successfulAuthentication before the main body here] end

		SecurityContextHolder.getContext().setAuthentication(authResult);

		// % protected region % [Add any additional logic for successfulAuthentication after the main body here] off begin
		// % protected region % [Add any additional logic for successfulAuthentication after the main body here] end

		chain.doFilter(request, response);
	}

	/**
	 * @inheritDoc
	 */
	@Override
	protected void unsuccessfulAuthentication(
			HttpServletRequest request,
			HttpServletResponse response,
			AuthenticationException failed
	) throws IOException {
		// % protected region % [Add any additional logic for unsuccessfulAuthentication before the main body here] off begin
		// % protected region % [Add any additional logic for unsuccessfulAuthentication before the main body here] end

		SecurityContextHolder.clearContext();

		// % protected region % [Add any additional logic for unsuccessfulAuthentication before modifying the response here] off begin
		// % protected region % [Add any additional logic for unsuccessfulAuthentication before modifying the response here] end

		ObjectMapper mapper = new ObjectMapper();
		ObjectNode rootNode = mapper.createObjectNode();

		if (failed.getCause() instanceof ExpiredJwtException) {
			rootNode.put("error_description", "The login is timeout");
			rootNode.put("error", "token_expired");
		} else {
			rootNode.put("error_description", "The username/password combination is invalid.");
			rootNode.put("error", "invalid_grant");
		}

		response.getWriter().write(mapper.writeValueAsString(rootNode));

		response.setContentType("application/json");
		response.setStatus(401);

		// % protected region % [Add any additional logic for unsuccessfulAuthentication after the main body here] off begin
		// % protected region % [Add any additional logic for unsuccessfulAuthentication after the main body here] end
	}
}
