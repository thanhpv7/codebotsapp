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
package firstapp101.configs.security.handlers;

import firstapp101.configs.security.services.AuthenticationService;
import firstapp101.configs.security.services.UserService;
import firstapp101.entities.UserEntity;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Custom handler for authentication upon login successfully.
 */
@Component
@Slf4j
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

	private final AuthenticationService authService;
	private final UserService userService;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	public CustomAuthenticationSuccessHandler(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			AuthenticationService authService,
			UserService userService
	) {
		// % protected region % [Add any additional constructor logic before the main body here] off begin
		// % protected region % [Add any additional constructor logic before the main body here] end

		this.authService = authService;
		this.userService = userService;

		// % protected region % [Add any additional constructor logic after the main body here] off begin
		// % protected region % [Add any additional constructor logic after the main body here] end
	}

	/**
	 * @inheritDoc
	 */
	@Override
	public void onAuthenticationSuccess(
			HttpServletRequest request,
			HttpServletResponse response,
			Authentication authResult
	) throws IOException, ServletException {
		// % protected region % [Add any additional loginSuccessHandler logic before the main body here] off begin
		// % protected region % [Add any additional loginSuccessHandler logic before the main body here] end

		authService.addAuthentication(response, authResult);

		// % protected region % [Add any additional loginSuccessHandler logic before modifying the response here] off begin
		// % protected region % [Add any additional loginSuccessHandler logic before modifying the response here] end

		List<String> roles = userService.getRoleByUserName(authResult.getName());

		ObjectMapper mapper = new ObjectMapper();
		ObjectNode rootNode = mapper.createObjectNode();

		UserEntity user = (UserEntity) authResult.getPrincipal();
		rootNode.put("id", user.getId().toString());
		rootNode.put("username", user.getUsername());

		ArrayNode rolesNode = rootNode.putArray("groups");
		roles.forEach(rolesNode::add);
		response.getWriter().write(mapper.writeValueAsString(rootNode));

		response.setStatus(200);
		response.setContentType("application/json");

		// % protected region % [Add any additional loginSuccessHandler logic after the main body here] off begin
		// % protected region % [Add any additional loginSuccessHandler logic after the main body here] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}