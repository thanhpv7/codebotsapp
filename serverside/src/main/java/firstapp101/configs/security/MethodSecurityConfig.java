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
package firstapp101.configs.security;

import firstapp101.configs.security.evaluators.CustomPermissionEvaluator;
import firstapp101.configs.security.expressions.CustomMethodSecurityExpressionHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.PermissionEvaluator;
import org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.GlobalMethodSecurityConfiguration;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true, jsr250Enabled = true)
public class MethodSecurityConfig extends GlobalMethodSecurityConfiguration {

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	/**
	 * Configure a custom expression handler to use custom permission-based security as denoted in
	 * {@link CustomPermissionEvaluator}.
	 */
	@Override
	protected MethodSecurityExpressionHandler createExpressionHandler() {
		// % protected region % [Configure custom method security expression handler here] off begin
		return new CustomMethodSecurityExpressionHandler(permissionEvaluator());
		// % protected region % [Configure custom method security expression handler here] end
	}

	/**
	 * Custom permission evaluator to be used for permission-based security within the application.
	 */
	@Bean
	public PermissionEvaluator permissionEvaluator() {
		// % protected region % [Configure custom permission evaluator here] off begin
		return new CustomPermissionEvaluator();
		// % protected region % [Configure custom permission evaluator here] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}