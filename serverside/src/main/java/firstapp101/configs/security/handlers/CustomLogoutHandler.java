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
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Custom handler for authentication upon login successfully.
 */
@Component
@Slf4j
public class CustomLogoutHandler implements LogoutSuccessHandler {

	private final AuthenticationService authService;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	public CustomLogoutHandler(
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
			AuthenticationService authService
	) {
		// % protected region % [Add any additional constructor logic before the main body here] off begin
		// % protected region % [Add any additional constructor logic before the main body here] end

		this.authService = authService;

		// % protected region % [Add any additional constructor logic after the main body here] off begin
		// % protected region % [Add any additional constructor logic after the main body here] end
	}

	/**
	 * @inheritDoc
	 */
	@Override
	public void onLogoutSuccess(
			HttpServletRequest request,
			HttpServletResponse response,
			Authentication auth
	) throws IOException {
		// % protected region % [Add any additional logout logic before the main body here] off begin
		// % protected region % [Add any additional logout logic before the main body here] end

		authService.removeAuthentication(request);

		if (request.getParameter("redirect") != null) {
			// % protected region % [Add any additional logout logic for redirect before the main body here] off begin
			// % protected region % [Add any additional logout logic for redirect before the main body here] end

			response.sendRedirect(request.getParameter("redirect"));

			// % protected region % [Add any additional logout logic for redirect after the main body here] off begin
			// % protected region % [Add any additional logout logic for redirect after the main body here] end
		} else {
			// % protected region % [Add any additional logout logic for no redirect before the main body here] off begin
			// % protected region % [Add any additional logout logic for no redirect before the main body here] end

			response.setStatus(200);

			// % protected region % [Add any additional logout logic for no redirect after the main body here] off begin
			// % protected region % [Add any additional logout logic for no redirect after the main body here] end
		}
	}
		// % protected region % [Add any additional logout logic after the main body here] off begin
		// % protected region % [Add any additional logout logic after the main body here] end
}