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
package firstapp101.configs.security.controllers;

import firstapp101.configs.security.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.Map;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@RestController
@RequestMapping(path = "/api/authorization")
public class AuthenticationController {

	private final UserService userService;

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	@Autowired
	public AuthenticationController(
			// % protected region % [Add any constructor parameters here] off begin
			// % protected region % [Add any constructor parameters here] end
			UserService userService
	) {
		this.userService= userService;

		// % protected region % [Add any logic for constructor here] off begin
		// % protected region % [Add any logic for constructor here] end
	}

	@RequestMapping(method = POST, path = "request-reset-password")
	public ResponseEntity requestResetPassword(@RequestBody Map<String, String> requestBody) throws Exception {

		String username = requestBody.get("username");

		if (username == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body(Map.of(
							"error", "missing_arguments",
							"error_description", "Username is required"
					));
		}

		// % protected region % [Add any logic for constructor here before invoke forgottenPassword method] off begin
		// % protected region % [Add any logic for constructor here before invoke forgottenPassword method] end

		try {
			userService.forgottenPassword(username);

			// % protected region % [Add any logic for constructor here after invoke forgottenPassword method] off begin
			// % protected region % [Add any logic for constructor here after invoke forgottenPassword method] end
		} catch (AuthenticationCredentialsNotFoundException authExcept) {
			return ResponseEntity
					.status(HttpStatus.NOT_FOUND)
					.body(
							Map.of(
									"error", "unknown_user",
									"error_description", "Could not find the user. Please check your username."
							)
					);
		} catch (Exception except) {
			throw new RuntimeException(except);
		}

		// % protected region % [Add any logic for constructor here before returning value from requestResetPassword] off begin
		// % protected region % [Add any logic for constructor here before returning value from requestResetPassword] end

		return new ResponseEntity(HttpStatus.OK);
	}
}
