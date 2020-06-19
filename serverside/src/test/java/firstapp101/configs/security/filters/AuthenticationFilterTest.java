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

import firstapp101.configs.security.SecurityConfig;
import firstapp101.configs.security.authorities.CustomGrantedAuthority;
import firstapp101.configs.security.services.AuthenticationService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.ImmutableList;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import javax.servlet.FilterChain;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.*;
import static org.mockito.Mockito.*;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Tag("authentication")
@Tag("filter")
@Tag("security")
// % protected region % [Add any additional test tags or configuration here] off begin
// % protected region % [Add any additional test tags or configuration here] end
public class AuthenticationFilterTest {
	private final String USER_USERNAME = "test@example.com";
	private final String USER_PASSWORD = "password";

	// Filter under test
	private AuthenticationFilter authFilter;

	@Mock
	private AuthenticationService authService;

	@Mock
	private Authentication authentication;

	@Mock
	private UserDetails userDetails;

	@Mock
	private SecurityContext securityContext;

	// Mock request and response to be used for the tests.
	private MockHttpServletResponse response;
	private MockHttpServletRequest request;

	private List<GrantedAuthority> anonymousRoles;

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

		request = new MockHttpServletRequest();
		response = new MockHttpServletResponse();

		SecurityContextHolder.setContext(securityContext);

		authFilter = new AuthenticationFilter("", authService);

		anonymousRoles = ImmutableList.of(
			// % protected region % [Add any additional anonymous roles here] off begin
			// % protected region % [Add any additional anonymous roles here] end
			new CustomGrantedAuthority("ROLE_ANONYMOUS", "", false, false, false, false)
		);

		// % protected region % [Add any additional logic for setup after the main body here] off begin
		// % protected region % [Add any additional logic for setup after the main body here] end
	}

	@AfterEach
	void tearDown() {
		// % protected region % [Add any additional logic for tearDown before the main body here] off begin
		// % protected region % [Add any additional logic for tearDown before the main body here] end

		SecurityContextHolder.clearContext();

		// % protected region % [Add any additional logic for tearDown after the main body here] off begin
		// % protected region % [Add any additional logic for tearDown after the main body here] end
	}

	@Test
	void normalAttemptAuthentication() {
		// % protected region % [Add any additional logic for normalAttemptAuthentication before the main body here] off begin
		// % protected region % [Add any additional logic for normalAttemptAuthentication before the main body here] end

		String csrfToken = UUID.randomUUID().toString();
		when(authService.getCsrfToken(request)).thenReturn(csrfToken);
		when(authService.getAuthentication(request)).thenReturn(authentication);
		FilterChain chain = mock(FilterChain.class);

		// Ensure that the request is properly setup with cookies and CSRF.
		request.addHeader("XSRF-TOKEN", csrfToken);

		// % protected region % [Add any additional logic for normalAttemptAuthentication before assertions here] off begin
		// % protected region % [Add any additional logic for normalAttemptAuthentication before assertions here] end

		Authentication auth = authFilter.attemptAuthentication(request, response);

		assertNotNull(auth);
		assertEquals(authentication, auth);

		try {
			authFilter.successfulAuthentication(request, response, chain, auth);
		} catch (Exception e) {
			e.printStackTrace();
			fail("Unexpected exception found");
		}

		verify(securityContext, atLeast(1)).setAuthentication(auth);

		// % protected region % [Add any additional logic for normalAttemptAuthentication after the main body here] off begin
		// % protected region % [Add any additional logic for normalAttemptAuthentication after the main body here] end
	}

	@Test
	void missingCsrfToken() {
		// % protected region % [Add any additional logic for missingCsrfToken before the main body here] off begin
		// % protected region % [Add any additional logic for missingCsrfToken before the main body here] end

		String csrfToken = UUID.randomUUID().toString();
		when(authService.getCsrfToken(request)).thenReturn(csrfToken);
		when(authService.getAuthentication(request)).thenReturn(authentication);

		// % protected region % [Add any additional logic for missingCsrfToken before the assertions here] off begin
		// % protected region % [Add any additional logic for missingCsrfToken before the assertions here] end

		Authentication anonymousUser = authFilter.attemptAuthentication(request, response);

		assertTrue(anonymousUser instanceof AnonymousAuthenticationToken);
		assertEquals(SecurityConfig.ANONYMOUS_USERNAME, anonymousUser.getPrincipal());
		assertEquals(SecurityConfig.ANONYMOUS_KEY.hashCode(), ((AnonymousAuthenticationToken) anonymousUser).getKeyHash());
		assertThat(anonymousUser.getAuthorities(), is(anonymousRoles));

		// % protected region % [Add any additional logic for missingCsrfToken after the main body here] off begin
		// % protected region % [Add any additional logic for missingCsrfToken after the main body here] end
	}

	@Test
	void mismatchCsrfToken() {
		// % protected region % [Add any additional logic for mismatchCsrfToken before the main body here] off begin
		// % protected region % [Add any additional logic for mismatchCsrfToken before the main body here] end

		String csrfToken = UUID.randomUUID().toString();
		when(authService.getCsrfToken(request)).thenReturn(csrfToken);
		when(authService.getAuthentication(request)).thenReturn(authentication);

		// Ensure that the request is properly setup with cookies and CSRF.
		request.addHeader("XSRF-TOKEN", csrfToken + "-random");

		// % protected region % [Add any additional logic for mismatchCsrfToken before the assertions here] off begin
		// % protected region % [Add any additional logic for mismatchCsrfToken before the assertions here] end

		Authentication anonymousUser = authFilter.attemptAuthentication(request, response);

		assertTrue(anonymousUser instanceof AnonymousAuthenticationToken);
		assertEquals(SecurityConfig.ANONYMOUS_USERNAME, anonymousUser.getPrincipal());
		assertEquals(SecurityConfig.ANONYMOUS_KEY.hashCode(), ((AnonymousAuthenticationToken) anonymousUser).getKeyHash());
		assertThat(anonymousUser.getAuthorities(), is(anonymousRoles));

		// % protected region % [Add any additional logic for mismatchCsrfToken after the main body here] off begin
		// % protected region % [Add any additional logic for mismatchCsrfToken after the main body here] end
	}

	@Test
	void missingAuthentication() {
		// % protected region % [Add any additional logic for missingAuthentication before the main body here] off begin
		// % protected region % [Add any additional logic for missingAuthentication before the main body here] end

		String csrfToken = UUID.randomUUID().toString();
		when(authService.getCsrfToken(request)).thenReturn(csrfToken);
		when(authService.getAuthentication(request)).thenReturn(null);

		// Ensure that the request is properly setup with cookies and CSRF.
		request.addHeader("XSRF-TOKEN", csrfToken + "-random");

		// % protected region % [Add any additional logic for missingAuthentication before the assertions here] off begin
		// % protected region % [Add any additional logic for missingAuthentication before the assertions here] end

		Authentication anonymousUser = authFilter.attemptAuthentication(request, response);

		assertTrue(anonymousUser instanceof AnonymousAuthenticationToken);
		assertEquals(SecurityConfig.ANONYMOUS_USERNAME, anonymousUser.getPrincipal());
		assertEquals(SecurityConfig.ANONYMOUS_KEY.hashCode(), ((AnonymousAuthenticationToken) anonymousUser).getKeyHash());
		assertThat(anonymousUser.getAuthorities(), is(anonymousRoles));

		// % protected region % [Add any additional logic for missingAuthentication after the main body here] off begin
		// % protected region % [Add any additional logic for missingAuthentication after the main body here] end
	}

	@Test
	void unsuccessfulAuthentication() {
		// % protected region % [Add any additional logic for unsuccessfulAuthentication before the main body here] off begin
		// % protected region % [Add any additional logic for unsuccessfulAuthentication before the main body here] end

		ObjectMapper mapper = new ObjectMapper();

		try {
			authFilter.unsuccessfulAuthentication(request, response, new AuthenticationCredentialsNotFoundException(null));
			Map<String, String> json = mapper.readValue(response.getContentAsString(), new TypeReference<Map<String, String>>(){});

			// % protected region % [Add any additional logic for unsuccessfulAuthentication before the main assertions here] off begin
			// % protected region % [Add any additional logic for unsuccessfulAuthentication before the main assertions here] end

			// Check that exception handling is correct.
			assertEquals(401, response.getStatus());
			assertEquals("application/json", response.getContentType());
			assertEquals("invalid_grant", json.get("error"));
			assertEquals("The username/password combination is invalid.", json.get("error_description"));

			// % protected region % [Add any additional logic for unsuccessfulAuthentication after the main body here] off begin
			// % protected region % [Add any additional logic for unsuccessfulAuthentication after the main body here] end

		} catch (Exception e) {
			e.printStackTrace();
			fail("Unexpected exception found");
		}
	}
}