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

package firstapp101.configs.security.evaluators;

import firstapp101.configs.security.authorities.CustomGrantedAuthority;
import org.springframework.security.access.PermissionEvaluator;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import java.io.Serializable;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Custom permission evaluator to be used within the application. It allows methods to be annotated with normal Spring
 * security annotations such as {@link org.springframework.security.access.prepost.PreAuthorize} with
 * <code>hasPermission</code> to enforce security on those methods. This class integrates tightly with both
 * {@link firstapp101.entities.UserEntity} and {@link CustomGrantedAuthority}.
 */
public class CustomPermissionEvaluator implements PermissionEvaluator {

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	/**
	 * @inheritDoc
	 */
	@Override
	public boolean hasPermission(Authentication authentication, Object targetType, Object permission) {
		// % protected region % [Add any additional logic for hasPermission before the main body here] off begin
		// % protected region % [Add any additional logic for hasPermission before the main body here] end

		if ((authentication == null) || (targetType == null) || !(permission instanceof String)) {
			return false;
		}

		// % protected region % [Add any additional logic for hasPermission before checking for privilege here] off begin
		// % protected region % [Add any additional logic for hasPermission before checking for privilege here] end

		// % protected region % [Configure logic for checking privileges for hasPermission here] off begin
		if (targetType instanceof String) {
			return hasPrivilege(authentication, (String) targetType, permission.toString());
		} else {
			return hasPrivilege(authentication, targetType.getClass().getSimpleName(), permission.toString());
		}
		// % protected region % [Configure logic for checking privileges for hasPermission here] end
	}

	/**
	 * @inheritDoc
	 */
	@Override
	public boolean hasPermission(Authentication authentication, Serializable targetId, String targetType, Object permission) {
		// % protected region % [add any additional logic for hasPermission with targetType string here] off begin
		return hasPermission(authentication, targetType, permission);
		// % protected region % [add any additional logic for hasPermission with targetType string here] end
	}

	/**
	 * Method to check if the currently logged in user has permissions against the given target type.
	 *
	 * @param auth       the authentication detail for the currently logged in user
	 * @param targetType a string that denotes the simple name of the target type class, e.g. <code>RoleEntity</code>
	 * @param permission the permission against the target type. Can only be one of four cases: create, read, update and delete
	 * @return whether the currently logged in user has permission against the target type
	 */
	private boolean hasPrivilege(Authentication auth, String targetType, String permission) {
		boolean allowed = false;

		// % protected region % [Add any additional logic before the main body here] off begin
		// % protected region % [Add any additional logic before the main body here] end

		for (GrantedAuthority grantedAuth : auth.getAuthorities()) {
			CustomGrantedAuthority customGrantedAuth = (CustomGrantedAuthority) grantedAuth;
			if (customGrantedAuth.getTargetEntity().equals(targetType)) {
				switch (permission) {
					case "create":
						allowed = allowed || customGrantedAuth.isAllowCreate();
						break;
					case "read":
						allowed = allowed || customGrantedAuth.isAllowRead();
						break;
					case "update":
						allowed = allowed || customGrantedAuth.isAllowUpdate();
						break;
					case "delete":
						allowed = allowed || customGrantedAuth.isAllowDelete();
						break;
				}
			}
		}

		// % protected region % [Add any additional logic after the main body here] off begin
		// % protected region % [Add any additional logic after the main body here] end

		return allowed;
	}

	// % protected region % [Add any additional methods here] off begin
	// % protected region % [Add any additional methods here] end
}
