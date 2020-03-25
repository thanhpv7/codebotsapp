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
package firstapp101.utils;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hamcrest.MatcherAssert;
import org.junit.Assert;
import lombok.NonNull;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.List;
import java.util.Map;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.cookie;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.hamcrest.collection.IsIterableContainingInOrder.*;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Utility class for processing request
 */
public class RequestUtil {
	/**
	 * Given a map, parse it to a json object and build post request to rest password
	 * @param endpoint Url of endpoint to send to
	 * @param body Map of the key and value to put in request body as json
	 * @return The result of Request
	 * @throws Exception Errors being thrown by Mock Request.
	 */
	public static ResultActions sendRequestByEndpointWithJsonBody(@NonNull MockMvc mvc, @NonNull String endpoint, @NonNull Map<String, Object> body) throws Exception {
		// % protected region % [Add any additional logic before sendRequestByEndpoint here] off begin
		// % protected region % [Add any additional logic before sendRequestByEndpoint here] end

		ObjectMapper mapper = new ObjectMapper();

		String requestBody = mapper.writeValueAsString(body);

		ResultActions result = mvc.perform(
				post(endpoint)
						.contentType(MediaType.APPLICATION_JSON)
						.accept(MediaType.APPLICATION_JSON)
						.content(requestBody)
		);

		// % protected region % [Add any additional logic after sendRequestByEndpoint here] off begin
		// % protected region % [Add any additional logic after sendRequestByEndpoint here] end
		return result;
	}

	/**
	 * Give the response from server, check whether error type and error description matches standard
	 * @param result Response from the server
	 * @param expectedError Expected error
	 * @param expectedDescription Expected error description
	 * @param statusCode Response code of request
	 * @throws Exception Error being thrown by ResultActions
	 */
	public static void checkErrorResponse(@NonNull ResultActions result, @NonNull String expectedError,
	                                      @NonNull String expectedDescription, int statusCode) throws Exception {
		// % protected region % [Add any additional logic before checkErrorResponse here] off begin
		// % protected region % [Add any additional logic before checkErrorResponse here] end

		ObjectMapper mapper = new ObjectMapper();
		
		MockHttpServletResponse response = result.andReturn().getResponse();

		Map responseBody = mapper.readValue(response.getContentAsString(), Map.class);

		String errorType = (String) responseBody.get("error");
		String errorDescription = (String) responseBody.get("error_description");

		// Check the body of failed response
		Assert.assertEquals(expectedError, errorType);
		Assert.assertEquals(expectedDescription, errorDescription);
		Assert.assertEquals(response.getStatus(), statusCode);

		// % protected region % [Add any additional logic after checkErrorResponse here] off begin
		// % protected region % [Add any additional logic after checkErrorResponse here] end
	}

	/**
	 * Give the response from server, check whether error type and error description matches standard
	 * @param result Response from the server
	 * @param expectedError Expected error
	 * @param expectedDescription Expected error description
	 * @param httpStatus HttpStatus in Enum format
	 * @throws Exception Exception Errors being thrown by Mock Request.
	 */
	public static void checkErrorResponse(@NonNull ResultActions result, @NonNull String expectedError, @NonNull String expectedDescription, @NonNull HttpStatus httpStatus) throws Exception {
		RequestUtil.checkErrorResponse(result, expectedError, expectedDescription, httpStatus.value());
	}

	/**
	 * Util cass to check whether response matches standard login response
	 * @param result Result of request
	 * @param expectedUserId User id expected to return
	 * @param expectedUsername User name expected to return
	 * @param expectedRoles User roles exptected to return
	 * @throws Exception Exception Errors being thrown by Mock Request.
	 */
	public static void checkSuccessfulLoginResponse(@NonNull ResultActions result, @NonNull String expectedUserId, @NonNull String expectedUsername, @NonNull List<String> expectedRoles) throws  Exception {

		ObjectMapper mapper = new ObjectMapper();
		// Test the outer response first.
		result.andExpect(status().isOk());
		result.andExpect(cookie().exists("XSRF-TOKEN"));
		result.andExpect(cookie().exists("AUTH-TOKEN"));

		// Test the actual JSON content.
		result.andDo(rs -> {
			Map<String, Object> actual = mapper.readValue(rs.getResponse().getContentAsString(), new TypeReference<Map<String, Object>>() {
			});

			Assert.assertNotNull(actual.get("id"));
			Assert.assertEquals(expectedUserId, actual.get("id"));
			Assert.assertEquals(expectedUsername, actual.get("username"));

			List<String> groups = (List<String>) actual.get("groups");
			MatcherAssert.assertThat(groups, contains(expectedRoles.toArray()));
		});
	}
}