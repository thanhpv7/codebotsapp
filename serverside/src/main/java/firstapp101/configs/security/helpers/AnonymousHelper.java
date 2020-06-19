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
package firstapp101.configs.security.helpers;

import firstapp101.configs.security.authorities.CustomGrantedAuthority;
import lombok.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Helper class exists to run piece of code with elevated permission. This class is required for some of the
 * functionality in the application, such as login or insert test data. Otherwise the application will reject any
 * attempts to interact with the database since authentication is needed (and thus the "you can't login because you're
 * not logged in" problem).
 * <p>
 * <strong>Important note</strong>: This class is not meant to be used unless absolutely necessary. Developers should
 * adopt best security practices instead of using this as a work around security.
 */
public final class AnonymousHelper {
	/**
	 * Anonymous user with elevated permissions in order to satisfy the security checking.
	 */
	private static final Authentication anonymousUser = setupAnonymousUser();

	/**
	 * Create and return an anonymous user with elevated permissions. Note that this will only get runs once.
	 *
	 * @return an anonymous user with elevated permissions.
	 */
	private static Authentication setupAnonymousUser() {
		List<CustomGrantedAuthority> authorities = new ArrayList<>();

		CustomGrantedAuthority speciesAuthority = new CustomGrantedAuthority(
				"ROLE_SPECIES",
				"SpeciesEntity",
				true,
				true,
				true,
				true
		);
		authorities.add(speciesAuthority);

		CustomGrantedAuthority tankAuthority = new CustomGrantedAuthority(
				"ROLE_TANK",
				"TankEntity",
				true,
				true,
				true,
				true
		);
		authorities.add(tankAuthority);

		CustomGrantedAuthority fishAuthority = new CustomGrantedAuthority(
				"ROLE_FISH",
				"FishEntity",
				true,
				true,
				true,
				true
		);
		authorities.add(fishAuthority);

		CustomGrantedAuthority adminAuthority = new CustomGrantedAuthority(
				"ROLE_ADMIN",
				"AdminEntity",
				true,
				true,
				true,
				true
		);
		authorities.add(adminAuthority);

		CustomGrantedAuthority fishnaticAuthority = new CustomGrantedAuthority(
				"ROLE_FISHNATIC",
				"FishnaticEntity",
				true,
				true,
				true,
				true
		);
		authorities.add(fishnaticAuthority);

		CustomGrantedAuthority roleAuthority = new CustomGrantedAuthority(
				"ROLE_ROLE",
				"RoleEntity",
				true,
				true,
				true,
				true
		);
		authorities.add(roleAuthority);

		CustomGrantedAuthority privilegeAuthority = new CustomGrantedAuthority(
				"ROLE_PRIVILEGE",
				"PrivilegeEntity",
				true,
				true,
				true,
				true
		);
		authorities.add(privilegeAuthority);

		CustomGrantedAuthority userAuthority = new CustomGrantedAuthority(
				"ROLE_USER",
				"UserEntity",
				true,
				true,
				true,
				true
		);
		authorities.add(userAuthority);

		// % protected region % [Add any additional authorities here] off begin
		// % protected region % [Add any additional authorities here] end

		return new UsernamePasswordAuthenticationToken(null, null, authorities);
	}

	/**
	 * Given a runnable, run it with an anonymous user with elevated permissions. It is guaranteed that once the task
	 * is done or failed, the permissions will be cleared. If this method is called when there's already a user logged
	 * in, then their permissions will be restored when the method finishes.
	 *
	 * @param taskToPerform a task to be run with elevated permissions
	 */
	public static void runAnonymously(@NonNull Runnable taskToPerform) {
		Authentication oldAuthentication = SecurityContextHolder.getContext().getAuthentication();
		try {
			SecurityContextHolder.getContext().setAuthentication(anonymousUser);
			taskToPerform.run();
		} finally {
			SecurityContextHolder.clearContext();
			SecurityContextHolder.getContext().setAuthentication(oldAuthentication);
		}
	}

	/**
	 * Given a supplier, run it with an anonymous user with elevated permissions and then return the value. It is
	 * guaranteed that once the task is done or failed, the permissions will be cleared. If this method is called when
	 * there's already a user logged in, then their permissions will be restored when the method finishes.
	 *
	 * @param taskToPerform a task to be run with elevated permissions
	 * @return the result supplied by the given task
	 */
	public static <T> T runAnonymouslyAndReturnValue(@NonNull Supplier<T> taskToPerform) {
		Authentication oldAuthentication = SecurityContextHolder.getContext().getAuthentication();
		try {
			SecurityContextHolder.getContext().setAuthentication(anonymousUser);
			return taskToPerform.get();
		} finally {
			SecurityContextHolder.clearContext();
			SecurityContextHolder.getContext().setAuthentication(oldAuthentication);
		}
	}
}