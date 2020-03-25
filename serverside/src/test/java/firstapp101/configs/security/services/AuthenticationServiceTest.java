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

import io.jsonwebtoken.Jwts;
import lombok.*;
import org.junit.jupiter.api.*;
import org.mockito.*;
import org.springframework.mock.env.MockEnvironment;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.util.ReflectionTestUtils;

import javax.servlet.http.Cookie;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Tag("authentication")
@Tag("service")
@Tag("security")
public class AuthenticationServiceTest {
	private final String USER_USERNAME = "test@example.com";
	private final String USER_PASSWORD = "password";

	// Service under test
	private AuthenticationService authService;
	private MockEnvironment env;

	// Mock request and response to be used with the service.
	private MockHttpServletResponse response;
	private MockHttpServletRequest request;

	// Various properties
	private String jwtSecret;
	private int jwtTokenExpirationTimeInSeconds;
	private int authTokenAgeInSeconds;
	private int csrfTokenAgeInSeconds;

	@Mock
	private Authentication authentication;

	@Mock
	private UserDetails userDetails;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	@BeforeEach
	void setup() {
		// % protected region % [Add any additional logic for setup before the main body here] off begin
		// % protected region % [Add any additional logic for setup before the main body here] end

		MockitoAnnotations.initMocks(this);

		when(userDetails.getUsername()).thenReturn(USER_USERNAME);
		when(userDetails.getPassword()).thenReturn(USER_PASSWORD);
		when(authentication.getPrincipal()).thenReturn(userDetails);

		// % protected region % [Config authentication service properties here] off begin
		jwtSecret = "ENsozfv7Xdo^TzG8WjhPSe!&r5kfCJB$haQ3raVicFSo94Cr*m&78NY3v5oyENy@bzpZSzNhpSC";
		jwtTokenExpirationTimeInSeconds = 400;
		authTokenAgeInSeconds = 500;
		csrfTokenAgeInSeconds = 600;
		// % protected region % [Config authentication service properties here] end

		env = new MockEnvironment();
		request = new MockHttpServletRequest();
		response = new MockHttpServletResponse();

		// % protected region % [Add any additional modification to the environment here here] off begin
		// % protected region % [Add any additional modification to the environment here here] end

		authService = new AuthenticationService(
				// % protected region % [Add any additional authentication service arguments here] off begin
				// % protected region % [Add any additional authentication service arguments here] end
				env
		);

		ReflectionTestUtils.setField(authService, "jwtTokenExpirationTimeInSeconds", jwtTokenExpirationTimeInSeconds);
		ReflectionTestUtils.setField(authService, "jwtSecret", jwtSecret);
		ReflectionTestUtils.setField(authService, "authTokenAgeInSeconds", authTokenAgeInSeconds);
		ReflectionTestUtils.setField(authService, "csrfTokenAgeInSeconds", csrfTokenAgeInSeconds);

		// % protected region % [Add any additional logic for setup after the main body here] off begin
		// % protected region % [Add any additional logic for setup after the main body here] end
	}

	@AfterEach
	void tearDown() {
		// % protected region % [Add any additional logic for tearDown here] off begin
		// % protected region % [Add any additional logic for tearDown here] end
	}

	@Test
	void cookiesMustBeSet() {
		// % protected region % [Add any additional logic for cookiesMustBeSet before the main body here] off begin
		// % protected region % [Add any additional logic for cookiesMustBeSet before the main body here] end

		authService.addAuthentication(response, authentication);
		Cookie authCookie = response.getCookie("AUTH-TOKEN");
		Cookie csrfCookie = response.getCookie("XSRF-TOKEN");

		// % protected region % [Add any additional logic for cookiesMustBeSet before the assertions here] off begin
		// % protected region % [Add any additional logic for cookiesMustBeSet before the assertions here] end

		// Check if auth cookie exists.
		assertNotNull(authCookie);
		assertEquals("/", authCookie.getPath());
		assertEquals(authTokenAgeInSeconds, authCookie.getMaxAge());
		assertTrue(authCookie.isHttpOnly());
		assertTrue(authCookie.getSecure());

		// Check if XSRF cookie exists.
		assertNotNull(csrfCookie);
		assertEquals("/", csrfCookie.getPath());
		assertEquals(csrfTokenAgeInSeconds, csrfCookie.getMaxAge());
		assertFalse(csrfCookie.isHttpOnly());
		assertTrue(csrfCookie.getSecure());

		// Check that JWT encoding is correct.
		assertEquals(USER_USERNAME, getUsernameFromJwtToken(authCookie.getValue()));

		// % protected region % [Add any additional logic for cookiesMustBeSet after the main body here] off begin
		// % protected region % [Add any additional logic for cookiesMustBeSet after the main body here] end
	}

	@Test
	void authCookieFromRequest() {
		// % protected region % [Add any additional logic for authCookieFromRequest before the main body here] off begin
		// % protected region % [Add any additional logic for authCookieFromRequest before the main body here] end

		// Ensure that the user has previously logged in and and now makes requests.
		authService.addAuthentication(response, authentication);
		Cookie authCookie = response.getCookie("AUTH-TOKEN");
		request.setCookies(authCookie);

		// % protected region % [Add any additional logic for authCookieFromRequest before the assertions here] off begin
		// % protected region % [Add any additional logic for authCookieFromRequest before the assertions here] end

		// Check that authentication details were added correctly.
		assertEquals(authentication, authService.getAuthentication(request));

		authService.removeAuthentication(request);

		// Check that authentication is removed properly.
		assertNull(authService.getAuthentication(request));

		// % protected region % [Add any additional logic for authCookieFromRequest after the main body here] off begin
		// % protected region % [Add any additional logic for authCookieFromRequest after the main body here] end
	}

	@Test
	void invalidAuthCookieFromRequest() {
		// % protected region % [Add any additional logic for csrfCookieFromRequest before the main body here] off begin
		// % protected region % [Add any additional logic for csrfCookieFromRequest before the main body here] end

		// Ensure that the user has previously logged in and and now makes requests.
		authService.addAuthentication(response, authentication);
		Cookie authCookie = new Cookie("AUTH-TOKEN", "random-string");
		request.setCookies(authCookie);

		// % protected region % [Add any additional logic for csrfCookieFromRequest before the assertions here] off begin
		// % protected region % [Add any additional logic for csrfCookieFromRequest before the assertions here] end

		// Check that authentication details were added correctly.
		assertNull(authService.getAuthentication(request));

		// % protected region % [Add any additional logic for csrfCookieFromRequest after the main body here] off begin
		// % protected region % [Add any additional logic for csrfCookieFromRequest after the main body here] end
	}

	@Test
	void csrfCookieFromRequest() {
		// % protected region % [Add any additional logic for csrfCookieFromRequest before the main body here] off begin
		// % protected region % [Add any additional logic for csrfCookieFromRequest before the main body here] end

		// Ensure that the user has previously logged in and and now makes requests.
		authService.addAuthentication(response, authentication);
		Cookie authCookie = response.getCookie("AUTH-TOKEN");
		request.setCookies(authCookie);
		String csrfToken = response.getCookie("XSRF-TOKEN").getValue();

		// % protected region % [Add any additional logic for csrfCookieFromRequest before the assertions here] off begin
		// % protected region % [Add any additional logic for csrfCookieFromRequest before the assertions here] end

		// Check that authentication details were added correctly.
		assertEquals(csrfToken, authService.getCsrfToken(request));

		authService.removeAuthentication(request);

		// Check that CSRF token is removed properly.
		assertNull(authService.getCsrfToken(request));

		// % protected region % [Add any additional logic for csrfCookieFromRequest after the main body here] off begin
		// % protected region % [Add any additional logic for csrfCookieFromRequest after the main body here] end
	}

	@Test
	void invalidCsrfCookieFromRequest() {
		// % protected region % [Add any additional logic for csrfCookieFromRequest before the main body here] off begin
		// % protected region % [Add any additional logic for csrfCookieFromRequest before the main body here] end

		// Ensure that the user has previously logged in and and now makes requests.
		authService.addAuthentication(response, authentication);
		Cookie authCookie = new Cookie("AUTH-TOKEN", "random-string");
		request.setCookies(authCookie);

		// % protected region % [Add any additional logic for csrfCookieFromRequest before the assertions here] off begin
		// % protected region % [Add any additional logic for csrfCookieFromRequest before the assertions here] end

		assertNull(authService.getCsrfToken(request));

		// % protected region % [Add any additional logic for csrfCookieFromRequest after the main body here] off begin
		// % protected region % [Add any additional logic for csrfCookieFromRequest after the main body here] end
	}

	/**
	 * Given a JWT token, decode it and return back the username.
	 *
	 * @param token the JWT token to be decoded
	 * @return the username from the token
	 */
	private String getUsernameFromJwtToken(@NonNull String token) {
		return Jwts.parser()
				.setSigningKey(jwtSecret)
				.parseClaimsJws(token)
				.getBody()
				.getSubject();
	}
}