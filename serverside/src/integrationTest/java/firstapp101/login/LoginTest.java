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
package firstapp101.login;

import firstapp101.SpringTestConfiguration;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hamcrest.MatcherAssert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.context.WebApplicationContext;

import java.util.*;

import static org.junit.Assert.*;
import static org.hamcrest.collection.IsIterableContainingInOrder.*;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

// % protected region % [Add any additional imports for setup before the main body here] off begin
// % protected region % [Add any additional imports for setup before the main body here] end

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = SpringTestConfiguration.class)
@ActiveProfiles("test")
public class LoginTest {
	@Autowired
	private TestRestTemplate testRestTemplate;

	@Autowired
	private WebApplicationContext context;

	@Autowired
	private ObjectMapper mapper;

	private MockMvc mvc;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

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
	@SuppressWarnings("unchecked")
	public void loginWithFishnaticEntity_shouldSucceedWith200() throws Exception {
		// % protected region % [Add any additional logic for loginWithFishnaticEntity_shouldSucceedWith200 before the main body here] off begin
		// % protected region % [Add any additional logic for loginWithFishnaticEntity_shouldSucceedWith200 before the main body here] end

		LinkedMultiValueMap<String, String> body = new LinkedMultiValueMap<>();
		body.add("username", "fishnatic@example.com");
		body.add("password", "password");

		ResultActions result = mvc.perform(
				post("/auth/login")
						.contentType(MediaType.APPLICATION_FORM_URLENCODED)
						.accept(MediaType.APPLICATION_JSON)
						.params(body)
		);

		// Test the outer response first.
		result.andExpect(status().isOk());
		result.andExpect(cookie().exists("XSRF-TOKEN"));

		// Test the actual JSON content.
		result.andDo(rs -> {
			Map<String, Object> actual = mapper.readValue(rs.getResponse().getContentAsString(), new TypeReference<Map<String, Object>>() {
			});

			assertNotNull(actual.get("id"));
			assertEquals("fishnatic@example.com", actual.get("username"));

			List<String> groups = (List<String>) actual.get("groups");
			MatcherAssert.assertThat(groups, contains(
					"FISHNATIC"
			));

			// % protected region % [Add any additional content assertions for loginWithFishnaticEntity_shouldSucceedWith200 here] off begin
			// % protected region % [Add any additional content assertions for loginWithFishnaticEntity_shouldSucceedWith200 here] end
		});

		// % protected region % [Add any additional assertions for loginWithFishnaticEntity_shouldSucceedWith200 here] off begin
		// % protected region % [Add any additional assertions for loginWithFishnaticEntity_shouldSucceedWith200 here] end
	}

	@Test
	public void loginWithFishnaticEntityButWrongEmail_shouldFailWith401() throws Exception {
		// % protected region % [Add any additional logic for loginWithFishnaticEntityButWrongEmail_shouldFailWith401 before the main body here] off begin
		// % protected region % [Add any additional logic for loginWithFishnaticEntityButWrongEmail_shouldFailWith401 before the main body here] end

		LinkedMultiValueMap<String, String> body = new LinkedMultiValueMap<>();
		body.add("username", "fishnatic-random@example.com");
		body.add("password", "password");

		ResultActions result = mvc.perform(
				post("/auth/login")
						.contentType(MediaType.APPLICATION_FORM_URLENCODED)
						.accept(MediaType.APPLICATION_JSON)
						.params(body)
		);

		// Test the outer response first.
		result.andExpect(status().is(HttpStatus.UNAUTHORIZED.value()));

		// Test the actual JSON content.
		result.andDo(rs -> {
			Map<String, String> actual = mapper.readValue(rs.getResponse().getContentAsString(), new TypeReference<Map<String, Object>>() {
			});

			assertEquals("The username/password combination is invalid.", actual.get("error_description"));
			assertEquals("invalid_grant", actual.get("error"));

			// % protected region % [Add any additional content assertions for loginWithFishnaticEntityButWrongEmail_shouldFailWith401 here] off begin
			// % protected region % [Add any additional content assertions for loginWithFishnaticEntityButWrongEmail_shouldFailWith401 here] end
		});

		// % protected region % [Add any additional assertions for loginWithFishnaticEntityButWrongEmail_shouldFailWith401 here] off begin
		// % protected region % [Add any additional assertions for loginWithFishnaticEntityButWrongEmail_shouldFailWith401 here] end
	}

	@Test
	public void loginWithFishnaticEntityButWrongPassword_shouldFailWith401() throws Exception {
		// % protected region % [Add any additional logic for loginWithFishnaticEntityButWrongPassword_shouldFailWith401 before the main body here] off begin
		// % protected region % [Add any additional logic for loginWithFishnaticEntityButWrongPassword_shouldFailWith401 before the main body here] end

		LinkedMultiValueMap<String, String> body = new LinkedMultiValueMap<>();
		body.add("username", "fishnatic@example.com");
		body.add("password", "password-random");

		ResultActions result = mvc.perform(
				post("/auth/login")
						.contentType(MediaType.APPLICATION_FORM_URLENCODED)
						.accept(MediaType.APPLICATION_JSON)
						.params(body)
		);

		// Test the outer response first.
		result.andExpect(status().is(HttpStatus.UNAUTHORIZED.value()));

		// Test the actual JSON content.
		result.andDo(rs -> {
			Map<String, String> actual = mapper.readValue(rs.getResponse().getContentAsString(), new TypeReference<Map<String, Object>>() {
			});

			assertEquals("The username/password combination is invalid.", actual.get("error_description"));
			assertEquals("invalid_grant", actual.get("error"));

			// % protected region % [Add any additional content assertions for loginWithFishnaticEntityButWrongPassword_shouldFailWith401 here] off begin
			// % protected region % [Add any additional content assertions for loginWithFishnaticEntityButWrongPassword_shouldFailWith401 here] end
		});

		// % protected region % [Add any additional assertions for loginWithFishnaticEntityButWrongPassword_shouldFailWith401 here] off begin
		// % protected region % [Add any additional assertions for loginWithFishnaticEntityButWrongPassword_shouldFailWith401 here] end
	}

	@Test
	public void loginWithFishnaticEntityWithNoEmail_shouldFailWith401() throws Exception {
		// % protected region % [Add any additional logic for loginWithFishnaticEntityWithNoEmail_shouldFailWith401 before the main body here] off begin
		// % protected region % [Add any additional logic for loginWithFishnaticEntityWithNoEmail_shouldFailWith401 before the main body here] end

		LinkedMultiValueMap<String, String> body = new LinkedMultiValueMap<>();
		body.add("password", "password-random");

		ResultActions result = mvc.perform(
				post("/auth/login")
						.contentType(MediaType.APPLICATION_FORM_URLENCODED)
						.accept(MediaType.APPLICATION_JSON)
						.params(body)
		);

		// Test the outer response first.
		result.andExpect(status().is(HttpStatus.UNAUTHORIZED.value()));

		// Test the actual JSON content.
		result.andDo(rs -> {
			Map<String, String> actual = mapper.readValue(rs.getResponse().getContentAsString(), new TypeReference<Map<String, Object>>() {
			});

			assertEquals("The username/password combination is invalid.", actual.get("error_description"));
			assertEquals("invalid_grant", actual.get("error"));

			// % protected region % [Add any additional content assertions for loginWithFishnaticEntityWithNoEmail_shouldFailWith401 here] off begin
			// % protected region % [Add any additional content assertions for loginWithFishnaticEntityWithNoEmail_shouldFailWith401 here] end
		});

		// % protected region % [Add any additional assertions for loginWithFishnaticEntityWithNoEmail_shouldFailWith401 here] off begin
		// % protected region % [Add any additional assertions for loginWithFishnaticEntityWithNoEmail_shouldFailWith401 here] end
	}

	@Test
	public void loginWithFishnaticEntityWithNoPassword_shouldFailWith401() throws Exception {
		// % protected region % [Add any additional logic for loginWithFishnaticEntityWithNoPassword_shouldFailWith401 before the main body here] off begin
		// % protected region % [Add any additional logic for loginWithFishnaticEntityWithNoPassword_shouldFailWith401 before the main body here] end

		LinkedMultiValueMap<String, String> body = new LinkedMultiValueMap<>();
		body.add("username", "fishnatic@example.com");

		ResultActions result = mvc.perform(
				post("/auth/login")
						.contentType(MediaType.APPLICATION_FORM_URLENCODED)
						.accept(MediaType.APPLICATION_JSON)
						.params(body)
		);

		// Test the outer response first.
		result.andExpect(status().is(HttpStatus.UNAUTHORIZED.value()));

		// Test the actual JSON content.
		result.andDo(rs -> {
			Map<String, String> actual = mapper.readValue(rs.getResponse().getContentAsString(), new TypeReference<Map<String, Object>>() {
			});

			assertEquals("The username/password combination is invalid.", actual.get("error_description"));
			assertEquals("invalid_grant", actual.get("error"));

			// % protected region % [Add any additional content assertions for loginWithFishnaticEntityWithNoPassword_shouldFailWith401 here] off begin
			// % protected region % [Add any additional content assertions for loginWithFishnaticEntityWithNoPassword_shouldFailWith401 here] end
		});

		// % protected region % [Add any additional assertions for loginWithFishnaticEntityWithNoPassword_shouldFailWith401 here] off begin
		// % protected region % [Add any additional assertions for loginWithFishnaticEntityWithNoPassword_shouldFailWith401 here] end
	}

	@Test
	public void loginWithFishnaticEntityWithNoEmailPassword_shouldFailWith401() throws Exception {
		// % protected region % [Add any additional logic for loginWithFishnaticEntityWithNoEmailPassword_shouldFailWith401 before the main body here] off begin
		// % protected region % [Add any additional logic for loginWithFishnaticEntityWithNoEmailPassword_shouldFailWith401 before the main body here] end

		LinkedMultiValueMap<String, String> body = new LinkedMultiValueMap<>();

		ResultActions result = mvc.perform(
				post("/auth/login")
						.contentType(MediaType.APPLICATION_FORM_URLENCODED)
						.accept(MediaType.APPLICATION_JSON)
						.params(body)
		);

		// Test the outer response first.
		result.andExpect(status().is(HttpStatus.UNAUTHORIZED.value()));

		// Test the actual JSON content.
		result.andDo(rs -> {
			Map<String, String> actual = mapper.readValue(rs.getResponse().getContentAsString(), new TypeReference<Map<String, Object>>() {
			});

			assertEquals("The username/password combination is invalid.", actual.get("error_description"));
			assertEquals("invalid_grant", actual.get("error"));

			// % protected region % [Add any additional content assertions for loginWithFishnaticEntityWithNoEmailPassword_shouldFailWith401 here] off begin
			// % protected region % [Add any additional content assertions for loginWithFishnaticEntityWithNoEmailPassword_shouldFailWith401 here] end
		});

		// % protected region % [Add any additional assertions for loginWithFishnaticEntityWithNoEmailPassword_shouldFailWith401 here] off begin
		// % protected region % [Add any additional assertions for loginWithFishnaticEntityWithNoEmailPassword_shouldFailWith401 here] end
	}

	@Test
	@SuppressWarnings("unchecked")
	public void loginWithAdminEntity_shouldSucceedWith200() throws Exception {
		// % protected region % [Add any additional logic for loginWithAdminEntity_shouldSucceedWith200 before the main body here] off begin
		// % protected region % [Add any additional logic for loginWithAdminEntity_shouldSucceedWith200 before the main body here] end

		LinkedMultiValueMap<String, String> body = new LinkedMultiValueMap<>();
		body.add("username", "admin@example.com");
		body.add("password", "password");

		ResultActions result = mvc.perform(
				post("/auth/login")
						.contentType(MediaType.APPLICATION_FORM_URLENCODED)
						.accept(MediaType.APPLICATION_JSON)
						.params(body)
		);

		// Test the outer response first.
		result.andExpect(status().isOk());
		result.andExpect(cookie().exists("XSRF-TOKEN"));

		// Test the actual JSON content.
		result.andDo(rs -> {
			Map<String, Object> actual = mapper.readValue(rs.getResponse().getContentAsString(), new TypeReference<Map<String, Object>>() {
			});

			assertNotNull(actual.get("id"));
			assertEquals("admin@example.com", actual.get("username"));

			List<String> groups = (List<String>) actual.get("groups");
			MatcherAssert.assertThat(groups, contains(
					"ADMIN"
			));

			// % protected region % [Add any additional content assertions for loginWithAdminEntity_shouldSucceedWith200 here] off begin
			// % protected region % [Add any additional content assertions for loginWithAdminEntity_shouldSucceedWith200 here] end
		});

		// % protected region % [Add any additional assertions for loginWithAdminEntity_shouldSucceedWith200 here] off begin
		// % protected region % [Add any additional assertions for loginWithAdminEntity_shouldSucceedWith200 here] end
	}

	@Test
	public void loginWithAdminEntityButWrongEmail_shouldFailWith401() throws Exception {
		// % protected region % [Add any additional logic for loginWithAdminEntityButWrongEmail_shouldFailWith401 before the main body here] off begin
		// % protected region % [Add any additional logic for loginWithAdminEntityButWrongEmail_shouldFailWith401 before the main body here] end

		LinkedMultiValueMap<String, String> body = new LinkedMultiValueMap<>();
		body.add("username", "admin-random@example.com");
		body.add("password", "password");

		ResultActions result = mvc.perform(
				post("/auth/login")
						.contentType(MediaType.APPLICATION_FORM_URLENCODED)
						.accept(MediaType.APPLICATION_JSON)
						.params(body)
		);

		// Test the outer response first.
		result.andExpect(status().is(HttpStatus.UNAUTHORIZED.value()));

		// Test the actual JSON content.
		result.andDo(rs -> {
			Map<String, String> actual = mapper.readValue(rs.getResponse().getContentAsString(), new TypeReference<Map<String, Object>>() {
			});

			assertEquals("The username/password combination is invalid.", actual.get("error_description"));
			assertEquals("invalid_grant", actual.get("error"));

			// % protected region % [Add any additional content assertions for loginWithAdminEntityButWrongEmail_shouldFailWith401 here] off begin
			// % protected region % [Add any additional content assertions for loginWithAdminEntityButWrongEmail_shouldFailWith401 here] end
		});

		// % protected region % [Add any additional assertions for loginWithAdminEntityButWrongEmail_shouldFailWith401 here] off begin
		// % protected region % [Add any additional assertions for loginWithAdminEntityButWrongEmail_shouldFailWith401 here] end
	}

	@Test
	public void loginWithAdminEntityButWrongPassword_shouldFailWith401() throws Exception {
		// % protected region % [Add any additional logic for loginWithAdminEntityButWrongPassword_shouldFailWith401 before the main body here] off begin
		// % protected region % [Add any additional logic for loginWithAdminEntityButWrongPassword_shouldFailWith401 before the main body here] end

		LinkedMultiValueMap<String, String> body = new LinkedMultiValueMap<>();
		body.add("username", "admin@example.com");
		body.add("password", "password-random");

		ResultActions result = mvc.perform(
				post("/auth/login")
						.contentType(MediaType.APPLICATION_FORM_URLENCODED)
						.accept(MediaType.APPLICATION_JSON)
						.params(body)
		);

		// Test the outer response first.
		result.andExpect(status().is(HttpStatus.UNAUTHORIZED.value()));

		// Test the actual JSON content.
		result.andDo(rs -> {
			Map<String, String> actual = mapper.readValue(rs.getResponse().getContentAsString(), new TypeReference<Map<String, Object>>() {
			});

			assertEquals("The username/password combination is invalid.", actual.get("error_description"));
			assertEquals("invalid_grant", actual.get("error"));

			// % protected region % [Add any additional content assertions for loginWithAdminEntityButWrongPassword_shouldFailWith401 here] off begin
			// % protected region % [Add any additional content assertions for loginWithAdminEntityButWrongPassword_shouldFailWith401 here] end
		});

		// % protected region % [Add any additional assertions for loginWithAdminEntityButWrongPassword_shouldFailWith401 here] off begin
		// % protected region % [Add any additional assertions for loginWithAdminEntityButWrongPassword_shouldFailWith401 here] end
	}

	@Test
	public void loginWithAdminEntityWithNoEmail_shouldFailWith401() throws Exception {
		// % protected region % [Add any additional logic for loginWithAdminEntityWithNoEmail_shouldFailWith401 before the main body here] off begin
		// % protected region % [Add any additional logic for loginWithAdminEntityWithNoEmail_shouldFailWith401 before the main body here] end

		LinkedMultiValueMap<String, String> body = new LinkedMultiValueMap<>();
		body.add("password", "password-random");

		ResultActions result = mvc.perform(
				post("/auth/login")
						.contentType(MediaType.APPLICATION_FORM_URLENCODED)
						.accept(MediaType.APPLICATION_JSON)
						.params(body)
		);

		// Test the outer response first.
		result.andExpect(status().is(HttpStatus.UNAUTHORIZED.value()));

		// Test the actual JSON content.
		result.andDo(rs -> {
			Map<String, String> actual = mapper.readValue(rs.getResponse().getContentAsString(), new TypeReference<Map<String, Object>>() {
			});

			assertEquals("The username/password combination is invalid.", actual.get("error_description"));
			assertEquals("invalid_grant", actual.get("error"));

			// % protected region % [Add any additional content assertions for loginWithAdminEntityWithNoEmail_shouldFailWith401 here] off begin
			// % protected region % [Add any additional content assertions for loginWithAdminEntityWithNoEmail_shouldFailWith401 here] end
		});

		// % protected region % [Add any additional assertions for loginWithAdminEntityWithNoEmail_shouldFailWith401 here] off begin
		// % protected region % [Add any additional assertions for loginWithAdminEntityWithNoEmail_shouldFailWith401 here] end
	}

	@Test
	public void loginWithAdminEntityWithNoPassword_shouldFailWith401() throws Exception {
		// % protected region % [Add any additional logic for loginWithAdminEntityWithNoPassword_shouldFailWith401 before the main body here] off begin
		// % protected region % [Add any additional logic for loginWithAdminEntityWithNoPassword_shouldFailWith401 before the main body here] end

		LinkedMultiValueMap<String, String> body = new LinkedMultiValueMap<>();
		body.add("username", "admin@example.com");

		ResultActions result = mvc.perform(
				post("/auth/login")
						.contentType(MediaType.APPLICATION_FORM_URLENCODED)
						.accept(MediaType.APPLICATION_JSON)
						.params(body)
		);

		// Test the outer response first.
		result.andExpect(status().is(HttpStatus.UNAUTHORIZED.value()));

		// Test the actual JSON content.
		result.andDo(rs -> {
			Map<String, String> actual = mapper.readValue(rs.getResponse().getContentAsString(), new TypeReference<Map<String, Object>>() {
			});

			assertEquals("The username/password combination is invalid.", actual.get("error_description"));
			assertEquals("invalid_grant", actual.get("error"));

			// % protected region % [Add any additional content assertions for loginWithAdminEntityWithNoPassword_shouldFailWith401 here] off begin
			// % protected region % [Add any additional content assertions for loginWithAdminEntityWithNoPassword_shouldFailWith401 here] end
		});

		// % protected region % [Add any additional assertions for loginWithAdminEntityWithNoPassword_shouldFailWith401 here] off begin
		// % protected region % [Add any additional assertions for loginWithAdminEntityWithNoPassword_shouldFailWith401 here] end
	}

	@Test
	public void loginWithAdminEntityWithNoEmailPassword_shouldFailWith401() throws Exception {
		// % protected region % [Add any additional logic for loginWithAdminEntityWithNoEmailPassword_shouldFailWith401 before the main body here] off begin
		// % protected region % [Add any additional logic for loginWithAdminEntityWithNoEmailPassword_shouldFailWith401 before the main body here] end

		LinkedMultiValueMap<String, String> body = new LinkedMultiValueMap<>();

		ResultActions result = mvc.perform(
				post("/auth/login")
						.contentType(MediaType.APPLICATION_FORM_URLENCODED)
						.accept(MediaType.APPLICATION_JSON)
						.params(body)
		);

		// Test the outer response first.
		result.andExpect(status().is(HttpStatus.UNAUTHORIZED.value()));

		// Test the actual JSON content.
		result.andDo(rs -> {
			Map<String, String> actual = mapper.readValue(rs.getResponse().getContentAsString(), new TypeReference<Map<String, Object>>() {
			});

			assertEquals("The username/password combination is invalid.", actual.get("error_description"));
			assertEquals("invalid_grant", actual.get("error"));

			// % protected region % [Add any additional content assertions for loginWithAdminEntityWithNoEmailPassword_shouldFailWith401 here] off begin
			// % protected region % [Add any additional content assertions for loginWithAdminEntityWithNoEmailPassword_shouldFailWith401 here] end
		});

		// % protected region % [Add any additional assertions for loginWithAdminEntityWithNoEmailPassword_shouldFailWith401 here] off begin
		// % protected region % [Add any additional assertions for loginWithAdminEntityWithNoEmailPassword_shouldFailWith401 here] end
	}


	// % protected region % [Add any additional test cases here] off begin
	// % protected region % [Add any additional test cases here] end
}