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
package firstapp101.account;


import firstapp101.SpringTestConfiguration;
import firstapp101.utils.*;
import firstapp101.configs.security.helpers.AnonymousHelper;
import firstapp101.entities.*;
import firstapp101.lib.token.models.TokenEntity;
import firstapp101.lib.token.services.TokenService;
import firstapp101.services.*;
import firstapp101.configs.security.services.AuthenticationService;
import org.junit.*;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.mock.web.*;
import org.springframework.security.core.Authentication;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.*;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.icegreen.greenmail.util.GreenMailUtil;
import javax.mail.internet.MimeMessage;
import javax.mail.MessagingException;
import java.util.*;
import java.time.OffsetDateTime;
import java.util.stream.Collectors;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Integrated test for the whole reset password functionality
 */
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = SpringTestConfiguration.class)
@ActiveProfiles("test")
public class ResetPasswordTest {

	@Autowired
	private WebApplicationContext context;
	
	@Autowired
	private FishnaticService fishnaticService;

	@Autowired
	private AdminService adminService;

	@Autowired
	private TokenService tokenService;

	@Autowired
	private AuthenticationService authenticationService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Rule
	public SmtpServerRule smtpServerRule = new SmtpServerRule();

	@Value("${clientside.hostname}")
	private String clientsideHost;

	private final String resetPasswordEndpoint = "/api/authorization/reset-password";
	private final String requestResetPasswordEndpoint = "/api/authorization/request-reset-password";

	private MockMvc mvc;

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	@Before
	public void setup() {
		// % protected region % [Add any additional logic for setup before the main body here] off begin
		// % protected region % [Add any additional logic for setup before the main body here] end

		mvc = MockMvcBuilders
				.webAppContextSetup(context)
				.apply(springSecurity())
				.build();

		// % protected region % [Add any additional logic for setup after the main body here] off begin
		// % protected region % [Add any additional logic for setup after the main body here] end
	}

	@Test
	@DirtiesContext
	public void requestToResetPasswordWithFishnaticEntity_shouldSucceedWith200() throws Exception {

		String username = "fishnatic@example.com";

		ResultActions result = sendToRequestResetPassword(username);

		// % protected region % [Add any additional logic after sendRequestResetPasswordRequest in requestToResetPasswordWithFishnatic here] off begin
		// % protected region % [Add any additional logic after sendRequestResetPasswordRequest in requestToResetPasswordWithFishnatic here] end

		// Check whether token is created and check the content of email
		AnonymousHelper.runAnonymously(() -> {
			UserEntity userEntity = fishnaticService.findByEmail(username).orElseThrow();
			try {

				// % protected region % [Add any additional logic before check data in requestToResetPasswordWithFishnatic here] off begin
				// % protected region % [Add any additional logic before check data in requestToResetPasswordWithFishnatic here] end

				// Check whether reset password token is created and link to the user
				Assert.assertNotEquals(1, userEntity.getResetPasswordToken());

				// Get the Reset password token
				TokenEntity tokenEntity = userEntity.getResetPasswordToken().iterator().next();

				// % protected region % [Add any additional logic before check email content in requestToResetPasswordWithFishnatic here] off begin
				// % protected region % [Add any additional logic before check email content in requestToResetPasswordWithFishnatic here] end

				// Check email content
				this.checkResetPasswordEmail(userEntity.getFirstName(), username, tokenEntity);

				// % protected region % [Add any additional logic after check email content in requestToResetPasswordWithFishnatic here] off begin
				// % protected region % [Add any additional logic after check email content in requestToResetPasswordWithFishnatic here] end

			} catch (Exception except) {
				Assert.fail("Could not find user entity");
			}
		});

		// % protected region % [Add any additional asserts in requestToResetPasswordWithFishnatic here] off begin
		// % protected region % [Add any additional asserts in requestToResetPasswordWithFishnatic here] end
	}

	@Test
	@DirtiesContext
	public void requestToResetPasswordWithAdminEntity_shouldSucceedWith200() throws Exception {

		String username = "admin@example.com";

		ResultActions result = sendToRequestResetPassword(username);

		// % protected region % [Add any additional logic after sendRequestResetPasswordRequest in requestToResetPasswordWithAdmin here] off begin
		// % protected region % [Add any additional logic after sendRequestResetPasswordRequest in requestToResetPasswordWithAdmin here] end

		// Check whether token is created and check the content of email
		AnonymousHelper.runAnonymously(() -> {
			UserEntity userEntity = adminService.findByEmail(username).orElseThrow();
			try {

				// % protected region % [Add any additional logic before check data in requestToResetPasswordWithAdmin here] off begin
				// % protected region % [Add any additional logic before check data in requestToResetPasswordWithAdmin here] end

				// Check whether reset password token is created and link to the user
				Assert.assertNotEquals(1, userEntity.getResetPasswordToken());

				// Get the Reset password token
				TokenEntity tokenEntity = userEntity.getResetPasswordToken().iterator().next();

				// % protected region % [Add any additional logic before check email content in requestToResetPasswordWithAdmin here] off begin
				// % protected region % [Add any additional logic before check email content in requestToResetPasswordWithAdmin here] end

				// Check email content
				this.checkResetPasswordEmail(userEntity.getFirstName(), username, tokenEntity);

				// % protected region % [Add any additional logic after check email content in requestToResetPasswordWithAdmin here] off begin
				// % protected region % [Add any additional logic after check email content in requestToResetPasswordWithAdmin here] end

			} catch (Exception except) {
				Assert.fail("Could not find user entity");
			}
		});

		// % protected region % [Add any additional asserts in requestToResetPasswordWithAdmin here] off begin
		// % protected region % [Add any additional asserts in requestToResetPasswordWithAdmin here] end
	}


	@Test
	public void requestToResetPassword_withInValidUsername() throws Exception{

		Map<String, Object> body = new HashMap<>();

		body.put("username", "not_exist@example.com");
		// % protected region % [Add any additional request parameters in requestToResetPassword_withInValidUsername here] off begin
		// % protected region % [Add any additional request parameters in requestToResetPassword_withInValidUsername here] end

		ResultActions result = RequestUtil.sendRequestByEndpointWithJsonBody(mvc, requestResetPasswordEndpoint, body);

		// % protected region % [Add any additional logic after sending request in requestToResetPassword_withInValidUsername here] off begin
		// % protected region % [Add any additional logic after sending request in requestToResetPassword_withInValidUsername here] end

		// Test response body
		String expectedError = "unknown_user";
		String expectedErrorDescription = "Could not find the user. Please check your username.";
		RequestUtil.checkErrorResponse(result, expectedError, expectedErrorDescription, HttpStatus.NOT_FOUND);
		
		// % protected region % [Add any additional logic after sending asserts in requestToResetPassword_withInValidUsername here] off begin
		// % protected region % [Add any additional logic after sending asserts in requestToResetPassword_withInValidUsername here] end
	}

	@Test
	public void requestToResetPassword_missingUserName() throws Exception{

		Map<String, Object> body = new HashMap<>();
		
		// % protected region % [Add any additional request parameters in requestToResetPassword_missingUserName here] off begin
		// % protected region % [Add any additional request parameters in requestToResetPassword_missingUserName here] end

		ResultActions result = RequestUtil.sendRequestByEndpointWithJsonBody(mvc, requestResetPasswordEndpoint, body);

		// % protected region % [Add any additional logic after sending request in requestToResetPassword_missingUserName here] off begin
		// % protected region % [Add any additional logic after sending request in requestToResetPassword_missingUserName here] end

		// Test the response.
		String errorType = "missing_arguments";
		String errorDescription = "Username is required";
		RequestUtil.checkErrorResponse(result, errorType, errorDescription, HttpStatus.BAD_REQUEST);

		// % protected region % [Add any additional asserts in requestToResetPassword_missingUserName here] off begin
		// % protected region % [Add any additional asserts in requestToResetPassword_missingUserName here] end
	}

	@Test
	public void resetPasswordWithFishnaticEntity_shouldSucceedWith200() throws Exception {

		

		String username =  "fishnatic@example.com";
		String newPassword = "new_password";
		
		// Sending request and create token first
		sendToRequestResetPassword(username);
		
		Map<String, Object> body = new HashMap<>();

		AnonymousHelper.runAnonymously(() -> {

			body.put("username", username);

			UserEntity userEntity = this.fishnaticService.findByEmail(username).orElseThrow();
			TokenEntity tokenEntity = userEntity.getResetPasswordToken().iterator().next();

			body.put("token", tokenEntity.getToken());
			body.put("password", newPassword);
			
			// % protected region % [Add any additional logic in runAnonymously in resetPasswordWithFishnatic here] off begin
			// % protected region % [Add any additional logic in runAnonymously in resetPasswordWithFishnatic here] end
		});

		ResultActions resultActions = RequestUtil.sendRequestByEndpointWithJsonBody(mvc, resetPasswordEndpoint, body);


		AnonymousHelper.runAnonymously(() -> {
			// % protected region % [Add any additional logic after sending request in resetPasswordWithFishnatic here] off begin
			// % protected region % [Add any additional logic after sending request in resetPasswordWithFishnatic here] end
			
			UserEntity userEntity = this.fishnaticService.findByEmail(username).orElseThrow();

			List<String> expectedRoles = userEntity.getRoles().stream().map(RoleEntity::getName).collect(Collectors.toList());
			try {
				RequestUtil.checkSuccessfulLoginResponse(resultActions, userEntity.getId().toString(), username, expectedRoles);

				// Check whether token is remove
				String tokenString = (String) body.get("token");
				Assert.assertTrue(tokenService.findByToken(tokenString).isEmpty());
				Assert.assertTrue(userEntity.getResetPasswordToken().stream().noneMatch(tokenEntity -> tokenEntity.getToken().equals(tokenString)));

				// Check password is reset
				Assert.assertTrue(passwordEncoder.matches(newPassword, userEntity.getPassword()));

				checkUserLoggedIn(resultActions.andReturn().getResponse(), username);

				// % protected region % [Add any additional logic in runAnonymously after sending request in resetPasswordWithFishnatic here] off begin
				// % protected region % [Add any additional logic in runAnonymously after sending request in resetPasswordWithFishnatic here] end

			} catch (Exception except) {
				Assert.fail("Failed to find data from database.");
			}
		});

		// % protected region % [Add any additional asserts in resetPasswordWithFishnatic here] off begin
		// % protected region % [Add any additional asserts in resetPasswordWithFishnatic here] end
	}

	@Test
	@DirtiesContext
	public void resetPasswordWithFishnaticEntity_tokenExpired() throws Exception {

		// Request a new token
		this.requestToResetPasswordWithFishnaticEntity_shouldSucceedWith200();

		String username =  "fishnatic@example.com";
		String newPassword = "new_password";
		Map<String, Object> body = new HashMap<>();
		
		AnonymousHelper.runAnonymously(() -> {
			// % protected region % [Add any additional logic before query from service in requestToResetPasswordWithFishnatic here] off begin
			// % protected region % [Add any additional logic before query from service in requestToResetPasswordWithFishnatic here] end

			body.put("username", username);

			UserEntity userEntity = this.fishnaticService.findByEmail(username).orElseThrow();
			TokenEntity tokenEntity = userEntity.getResetPasswordToken().iterator().next();

			// Update date token to make it expired
			tokenEntity.setExpiryDateTime(OffsetDateTime.now().minusSeconds(1));
			tokenService.updateToken(tokenEntity);

			body.put("token", tokenEntity.getToken());
			body.put("password", newPassword);

			// % protected region % [Add any additional logic in runAnonymously in requestToResetPasswordWithFishnatic here] off begin
			// % protected region % [Add any additional logic in runAnonymously in requestToResetPasswordWithFishnatic here] end
		});

		// % protected region % [Add any additional logic before sendRequestByEndpoint in requestToResetPasswordWithFishnatic here] off begin
		// % protected region % [Add any additional logic before sendRequestByEndpoint in requestToResetPasswordWithFishnatic here] end
		
		ResultActions result = RequestUtil.sendRequestByEndpointWithJsonBody(mvc, resetPasswordEndpoint, body);

		// % protected region % [Add any additional logic after sendRequestByEndpoint in requestToResetPasswordWithFishnatic here] off begin
		// % protected region % [Add any additional logic after sendRequestByEndpoint in requestToResetPasswordWithFishnatic here] end

		// % protected region % [Add any additional logic before RequestUtil.checkErrorResponse in requestToResetPasswordWithFishnatic here] off begin
		// % protected region % [Add any additional logic before RequestUtil.checkErrorResponse in requestToResetPasswordWithFishnatic here] end

		String expectedError = "token_invalid";
		String expectedErrorDescription = "Token has expired. Please reset your password again.";
		RequestUtil.checkErrorResponse(result, expectedError, expectedErrorDescription, HttpStatus.UNAUTHORIZED);

		// % protected region % [Add any additional asserts in requestToResetPasswordWithFishnatic here] off begin
		// % protected region % [Add any additional asserts in requestToResetPasswordWithFishnatic here] end
	}

	@Test
	@DirtiesContext
	public void resetPasswordWithFishnaticEntity_tokenNotMatched() throws Exception {

		// Request a new token
		this.requestToResetPasswordWithFishnaticEntity_shouldSucceedWith200();

		String username =  "fishnatic@example.com";
		String newPassword = "new_password";
		Map<String, Object> body = new HashMap<>();

		body.put("username", username);
		body.put("token", UUID.randomUUID().toString());
		body.put("password", newPassword);

		// % protected region % [Add any additional logic before sending response in resetPasswordWithFishnaticEntity_tokenNotMatched here] off begin
		// % protected region % [Add any additional logic before sending response in resetPasswordWithFishnaticEntity_tokenNotMatched here] end

		ResultActions result = RequestUtil.sendRequestByEndpointWithJsonBody(mvc, resetPasswordEndpoint, body);

		// % protected region % [Add any additional logic after sending response in resetPasswordWithFishnaticEntity_tokenNotMatched here] off begin
		// % protected region % [Add any additional logic after sending response in resetPasswordWithFishnaticEntity_tokenNotMatched here] end

		String expectedError = "token_invalid";
		String expectedErrorDescription = "Reset password tokens do not match";

		// % protected region % [Add any additional logic before RequestUtil.checkErrorResponse in resetPasswordWithFishnaticEntity_tokenNotMatched here] off begin
		// % protected region % [Add any additional logic before RequestUtil.checkErrorResponse in resetPasswordWithFishnaticEntity_tokenNotMatched here] end

		RequestUtil.checkErrorResponse(result, expectedError, expectedErrorDescription, HttpStatus.UNAUTHORIZED);
		
		// % protected region % [Add any additional asserts in requestToResetPasswordWithFishnatic here] off begin
		// % protected region % [Add any additional asserts in requestToResetPasswordWithFishnatic here] end
	}

	@Test
	public void resetPasswordWithAdminEntity_shouldSucceedWith200() throws Exception {

		

		String username =  "admin@example.com";
		String newPassword = "new_password";
		
		// Sending request and create token first
		sendToRequestResetPassword(username);
		
		Map<String, Object> body = new HashMap<>();

		AnonymousHelper.runAnonymously(() -> {

			body.put("username", username);

			UserEntity userEntity = this.adminService.findByEmail(username).orElseThrow();
			TokenEntity tokenEntity = userEntity.getResetPasswordToken().iterator().next();

			body.put("token", tokenEntity.getToken());
			body.put("password", newPassword);
			
			// % protected region % [Add any additional logic in runAnonymously in resetPasswordWithAdmin here] off begin
			// % protected region % [Add any additional logic in runAnonymously in resetPasswordWithAdmin here] end
		});

		ResultActions resultActions = RequestUtil.sendRequestByEndpointWithJsonBody(mvc, resetPasswordEndpoint, body);


		AnonymousHelper.runAnonymously(() -> {
			// % protected region % [Add any additional logic after sending request in resetPasswordWithAdmin here] off begin
			// % protected region % [Add any additional logic after sending request in resetPasswordWithAdmin here] end
			
			UserEntity userEntity = this.adminService.findByEmail(username).orElseThrow();

			List<String> expectedRoles = userEntity.getRoles().stream().map(RoleEntity::getName).collect(Collectors.toList());
			try {
				RequestUtil.checkSuccessfulLoginResponse(resultActions, userEntity.getId().toString(), username, expectedRoles);

				// Check whether token is remove
				String tokenString = (String) body.get("token");
				Assert.assertTrue(tokenService.findByToken(tokenString).isEmpty());
				Assert.assertTrue(userEntity.getResetPasswordToken().stream().noneMatch(tokenEntity -> tokenEntity.getToken().equals(tokenString)));

				// Check password is reset
				Assert.assertTrue(passwordEncoder.matches(newPassword, userEntity.getPassword()));

				checkUserLoggedIn(resultActions.andReturn().getResponse(), username);

				// % protected region % [Add any additional logic in runAnonymously after sending request in resetPasswordWithAdmin here] off begin
				// % protected region % [Add any additional logic in runAnonymously after sending request in resetPasswordWithAdmin here] end

			} catch (Exception except) {
				Assert.fail("Failed to find data from database.");
			}
		});

		// % protected region % [Add any additional asserts in resetPasswordWithAdmin here] off begin
		// % protected region % [Add any additional asserts in resetPasswordWithAdmin here] end
	}

	@Test
	@DirtiesContext
	public void resetPasswordWithAdminEntity_tokenExpired() throws Exception {

		// Request a new token
		this.requestToResetPasswordWithAdminEntity_shouldSucceedWith200();

		String username =  "admin@example.com";
		String newPassword = "new_password";
		Map<String, Object> body = new HashMap<>();
		
		AnonymousHelper.runAnonymously(() -> {
			// % protected region % [Add any additional logic before query from service in requestToResetPasswordWithAdmin here] off begin
			// % protected region % [Add any additional logic before query from service in requestToResetPasswordWithAdmin here] end

			body.put("username", username);

			UserEntity userEntity = this.adminService.findByEmail(username).orElseThrow();
			TokenEntity tokenEntity = userEntity.getResetPasswordToken().iterator().next();

			// Update date token to make it expired
			tokenEntity.setExpiryDateTime(OffsetDateTime.now().minusSeconds(1));
			tokenService.updateToken(tokenEntity);

			body.put("token", tokenEntity.getToken());
			body.put("password", newPassword);

			// % protected region % [Add any additional logic in runAnonymously in requestToResetPasswordWithAdmin here] off begin
			// % protected region % [Add any additional logic in runAnonymously in requestToResetPasswordWithAdmin here] end
		});

		// % protected region % [Add any additional logic before sendRequestByEndpoint in requestToResetPasswordWithAdmin here] off begin
		// % protected region % [Add any additional logic before sendRequestByEndpoint in requestToResetPasswordWithAdmin here] end
		
		ResultActions result = RequestUtil.sendRequestByEndpointWithJsonBody(mvc, resetPasswordEndpoint, body);

		// % protected region % [Add any additional logic after sendRequestByEndpoint in requestToResetPasswordWithAdmin here] off begin
		// % protected region % [Add any additional logic after sendRequestByEndpoint in requestToResetPasswordWithAdmin here] end

		// % protected region % [Add any additional logic before RequestUtil.checkErrorResponse in requestToResetPasswordWithAdmin here] off begin
		// % protected region % [Add any additional logic before RequestUtil.checkErrorResponse in requestToResetPasswordWithAdmin here] end

		String expectedError = "token_invalid";
		String expectedErrorDescription = "Token has expired. Please reset your password again.";
		RequestUtil.checkErrorResponse(result, expectedError, expectedErrorDescription, HttpStatus.UNAUTHORIZED);

		// % protected region % [Add any additional asserts in requestToResetPasswordWithAdmin here] off begin
		// % protected region % [Add any additional asserts in requestToResetPasswordWithAdmin here] end
	}

	@Test
	@DirtiesContext
	public void resetPasswordWithAdminEntity_tokenNotMatched() throws Exception {

		// Request a new token
		this.requestToResetPasswordWithAdminEntity_shouldSucceedWith200();

		String username =  "admin@example.com";
		String newPassword = "new_password";
		Map<String, Object> body = new HashMap<>();

		body.put("username", username);
		body.put("token", UUID.randomUUID().toString());
		body.put("password", newPassword);

		// % protected region % [Add any additional logic before sending response in resetPasswordWithAdminEntity_tokenNotMatched here] off begin
		// % protected region % [Add any additional logic before sending response in resetPasswordWithAdminEntity_tokenNotMatched here] end

		ResultActions result = RequestUtil.sendRequestByEndpointWithJsonBody(mvc, resetPasswordEndpoint, body);

		// % protected region % [Add any additional logic after sending response in resetPasswordWithAdminEntity_tokenNotMatched here] off begin
		// % protected region % [Add any additional logic after sending response in resetPasswordWithAdminEntity_tokenNotMatched here] end

		String expectedError = "token_invalid";
		String expectedErrorDescription = "Reset password tokens do not match";

		// % protected region % [Add any additional logic before RequestUtil.checkErrorResponse in resetPasswordWithAdminEntity_tokenNotMatched here] off begin
		// % protected region % [Add any additional logic before RequestUtil.checkErrorResponse in resetPasswordWithAdminEntity_tokenNotMatched here] end

		RequestUtil.checkErrorResponse(result, expectedError, expectedErrorDescription, HttpStatus.UNAUTHORIZED);
		
		// % protected region % [Add any additional asserts in requestToResetPasswordWithAdmin here] off begin
		// % protected region % [Add any additional asserts in requestToResetPasswordWithAdmin here] end
	}

	@Test
	public void testResetPassword_withMissingArguments() throws Exception {
		String username =  "admin@example.com";
		String newPassword = "new_password";
		Map<String, Object> body = new HashMap<>();

		body.put("username", username);
		body.put("password", newPassword);

		// % protected region % [Add any additional logic before sending response in testResetPassword_withMissingArguments here] off begin
		// % protected region % [Add any additional logic before sending response in testResetPassword_withMissingArguments here] end

		ResultActions result = RequestUtil.sendRequestByEndpointWithJsonBody(mvc, resetPasswordEndpoint, body);

		// % protected region % [Add any additional logic after sending response in testResetPassword_withMissingArguments here] off begin
		// % protected region % [Add any additional logic after sending response in testResetPassword_withMissingArguments here] end

		String expectedError = "missing_arguments";
		String expectedErrorDescription = "Token is missing from the request.";

		// % protected region % [Add any additional logic before RequestUtil.checkErrorResponse in testResetPassword_withMissingArguments here] off begin
		// % protected region % [Add any additional logic before RequestUtil.checkErrorResponse in testResetPassword_withMissingArguments here] end

		RequestUtil.checkErrorResponse(result, expectedError, expectedErrorDescription, HttpStatus.BAD_REQUEST);
	
		// % protected region % [Add any additional asserts in testResetPassword_withMissingArguments here] off begin
		// % protected region % [Add any additional asserts in testResetPassword_withMissingArguments here] end
	}

	/**
	 * Sending a mock request to reuqest to reeset password
	 * @param username Username to reset password
	 * @throws Exception Exception thrown when trying to send request
	 */
	private ResultActions sendToRequestResetPassword(String username) throws Exception {
		Map<String, Object> body = new HashMap<>();
		body.put("username", username);

		// % protected region % [Add any additional logic before sending request in sendToRequestResetPassword here] off begin
		// % protected region % [Add any additional logic before sending request in sendToRequestResetPassword here] end

		ResultActions result = RequestUtil.sendRequestByEndpointWithJsonBody(mvc, requestResetPasswordEndpoint, body);

		// % protected region % [Add any additional logic after sending request in sendToRequestResetPassword here] off begin
		// % protected region % [Add any additional logic after sending request in sendToRequestResetPassword here] end

		return result;
	}

	/**
	 * Check Whether email is sent, and content in email
	 * @throws MessagingException Error being thrown by SMTP server.
	 */
	private void checkResetPasswordEmail(String username, String email, TokenEntity tokenEntity) throws MessagingException {
		// % protected region % [Add any additional logic before checkResetPasswordEmail here] off begin
		// % protected region % [Add any additional logic before checkResetPasswordEmail here] end
		
		// Check Smtp Server and get email
		MimeMessage[] receivedMessages = smtpServerRule.getMessages();
		Assert.assertEquals(1, receivedMessages.length);
		MimeMessage resetPasswordEmail = receivedMessages[0];
		Assert.assertEquals("Reset Password", resetPasswordEmail.getSubject());
		String emailContent = GreenMailUtil.getBody(resetPasswordEmail);

		String greetingMessage = String.format("Hi %s,", username);
		Assert.assertTrue(emailContent.contains(greetingMessage));

		String resetPasswordUrl = generateResetPasswordUrl(tokenEntity, email);
		Assert.assertTrue(emailContent.contains(String.format("<a class=\"btn\" href=\"%s\">Reset Password</a>", resetPasswordUrl)));

		// % protected region % [Add any additional logic after checkResetPasswordEmail here] off begin
		// % protected region % [Add any additional logic after checkResetPasswordEmail here] end
	}

	/**
	 * Generate token for reset password token in client side
	 */
	private String generateResetPasswordUrl(TokenEntity tokenEntity, String username) {
		String url = String.format("%s/reset-password?token=%s&username=%s", clientsideHost, tokenEntity.getToken(), username);
		
		// % protected region % [Add any additional logic in generateResetPasswordUrl here] off begin
		// % protected region % [Add any additional logic in generateResetPasswordUrl here] end

		return url;
	}

	/**
	 * Check whether whether could use cookie in response for authentication
	 * @param httpServletResponse Response after reset password
	 * @param username
	 */
	private void checkUserLoggedIn(MockHttpServletResponse httpServletResponse, String username) {

		MockHttpServletRequest httpServletRequest = new MockHttpServletRequest();

		httpServletRequest.setCookies(httpServletResponse.getCookies());

		// Check whether user is authenticated in server with cookie in response
		Authentication authentication =  this.authenticationService.getAuthentication(httpServletRequest);
		Assert.assertEquals(authentication.getName(), username);

		// Check whther csrf token i valid
		String csrfToken = this.authenticationService.getCsrfToken(httpServletRequest);
		Assert.assertNotNull(csrfToken);

		// % protected region % [Add any additional logic in checkUserLoggedIn here] off begin
		// % protected region % [Add any additional logic in checkUserLoggedIn here] end
	}

	// % protected region % [Add any additional methods here] off begin
	// % protected region % [Add any additional methods here] end
}
