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
package firstapp101.configs.security.exceptions;

import org.springframework.security.core.AuthenticationException;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Exception being thrown when the token is not matched
 */
public class TokenNotMatchException extends AuthenticationException {

	public TokenNotMatchException(String msg, Throwable t) {
		super(msg, t);

		// % protected region % [Add any additional logic for constructor with msg and throwable here] off begin
		// % protected region % [Add any additional logic for constructor with msg and throwable here] end
	}

	public TokenNotMatchException(String msg) {
		super(msg);

		// % protected region % [Add any additional logic for constructor with msg here] off begin
		// % protected region % [Add any additional logic for constructor with msg here] end
	}

	public TokenNotMatchException() {
		this("Token does not match");

		// % protected region % [Add any additional logic for no args constructor here] off begin
		// % protected region % [Add any additional logic for no args constructor here] end
	}
}
