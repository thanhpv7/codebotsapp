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

import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthenticationService} from '../services/authentication/authentication.service';
import {NavigateRoutingAction} from '../routing/routing.action';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Guard used to make sure that the user has to be logged in before he can view other pages. By default, if the user is
 * not logged in, the guard will automatically redirect the user back to the login page.
 */
@Injectable({
	providedIn: 'root'
})
export class RoleGuard implements CanActivate {

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
			private router: Router,
			private authenticationService: AuthenticationService,
			private store: Store<any>,
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	/**
	 * @inheritDoc
	 */
	canActivate(
			route: ActivatedRouteSnapshot,
			state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (this.authenticationService.isPermitted(route.data.expectedRoles)) {
			return true;
		} else {
			// If the use is not logged in, redirect to login page.
			this.authenticationService.isLoggedIn ?
				this.store.dispatch(new NavigateRoutingAction(['/403'])) :
				this.store.dispatch(new NavigateRoutingAction(['/login'], {
					queryParams: {
						redirectTo: state.url
					}
				}));
			return false;
		}
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
