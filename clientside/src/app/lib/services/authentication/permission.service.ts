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

import {Injectable} from '@angular/core';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * The Service to manage the permission in the client side.
 * @class PermissionService
 * @package lib.service.authentication.permission
 */
@Injectable({
	providedIn: 'root'
})
export class PermissionService {

	/**
	 * @property {Set<string>>} roles
	 */
	get roles(): Set<string> {
		let rolesString = localStorage.getItem('roles');
		return new Set(rolesString ? JSON.parse(rolesString) : []);
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	/**
	 * Check whether the user has permission to access to page / entity
	 *
	 * @param expectedRoles the role expected by the page / entity
	 * @return boolean whether user is allowed to access page / entity
	 */
	isPermitted(expectedRoles: string[] = []): boolean {
		return expectedRoles.some(role => this.roles.has(role));
	}

	/**
	 * Check whether the user is an administrator
	 */
	isAdmin(): boolean {
		return this.roles.has('ADMIN');
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
