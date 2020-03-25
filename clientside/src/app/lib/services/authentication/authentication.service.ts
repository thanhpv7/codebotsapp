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

import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {Set} from 'immutable';
import {environment} from '../../../../environments/environment';
import {LogOutAction} from '../../../models/model.action';
import {NavigateRoutingAction} from '../../routing/routing.action';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Login HTTP response with structure complying to the security standard.
 */
export type LoginHttpResponse = HttpResponse<{
	id: string,
	username: string,
	groups: string[],
	// % protected region % [Add any additional login response properties here] off begin
	// % protected region % [Add any additional login response properties here] end
}>;

/**
 * Service used to handle all authentication operations against the backend. It offers basic functionality such as
 * logging a user in and out. Note that this service does not handle anything else aside from those basic functionality.
 */
@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	/**
	 * Key name for XSRF cookie.
	 */
	static readonly XSRF_COOKIE_NAME = 'XSRF-TOKEN';

	/**
	 * All of the public roles that will be given to the user by default.
	 */
	private internalPublicRoles: Set<string>;

	/**
	 * All of the roles that grant backend admin access.
	 */
	private internalAdminRoles: Set<string>;

	/**
	 * All of the roles that the current user has.
	 */
	private internalRoles: Set<string>;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	/**
	 * Return the XSRF token received from the server side.
	 */
	get xsrfToken() {
		return this.cookieService.get(AuthenticationService.XSRF_COOKIE_NAME);
	}

	/**
	 * Check that the app is logged in, we don't care about the expiry date of the token here as that is handled server
	 * side.
	 */
	get isLoggedIn(): boolean {
		return !!this.xsrfToken;
	}

	/**
	 * Return the public roles assigned to users by default.
	 */
	get publicRoles(): Set<string> {
		return this.internalPublicRoles;
	}

	/**
	 * Return the admin roles assignable to users.
	 */
	get adminRoles(): Set<string> {
		return this.internalAdminRoles;
	}

	/**
	 * Return the roles assigned to users when logged in.
	 */
	get roles(): Set<string> {
		return this.internalRoles;
	}

	constructor(
		private httpClient: HttpClient,
		private cookieService: CookieService,
		private store: Store<any>,
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional constructor logic before the main body here] off begin
		// % protected region % [Add any additional constructor logic before the main body here] end

		this.internalPublicRoles = Set([
			'VISITORS',
			// % protected region % [Add any additional public roles here] off begin
			// % protected region % [Add any additional public roles here] end
		]);

		this.internalAdminRoles = Set([
			// % protected region % [Add any additional public roles here] off begin
			// % protected region % [Add any additional public roles here] end
		]);

		if (!!localStorage.getItem('roles')) {
			this.internalRoles = Set(JSON.parse(localStorage.getItem('roles')));
		} else {
			this.internalRoles = this.internalPublicRoles;
		}

		// % protected region % [Add any additional constructor logic after the main body here] off begin
		// % protected region % [Add any additional constructor logic after the main body here] end
	}

	/**
	 * Logging the given user into the backend. Also set the JWT token upon successful.
	 *
	 * @param username the username of the user to be logged in
	 * @param password the password of the user to be logged in
	 */
	login(username: string, password: string): Observable<LoginHttpResponse> {
		const body = new URLSearchParams();
		body.set('username', username);
		body.set('password', password);

		// % protected region % [Add any additional logic before sending login request here] off begin
		// % protected region % [Add any additional logic before sending login request here] end

		return this.httpClient.post(`${environment.API_URL}/auth/login`, body.toString(), {
			observe: 'response',
			headers: new HttpHeaders({
				'Content-Type': 'application/x-www-form-urlencoded',
				// % protected region % [Add any additional request headers for login here] off begin
				// % protected region % [Add any additional request headers for login here] end
			}),
			withCredentials: true,
			// % protected region % [Add any additional request options for login here] off begin
			// % protected region % [Add any additional request options for login here] end
		}).pipe(
			tap((response: LoginHttpResponse) => {
				this.afterAuthenticated(response);
			}),
			// % protected region % [Add any additional logic to handle returned response here] off begin
			// % protected region % [Add any additional logic to handle returned response here] end
		);

		// % protected region % [Add any additional logic after sent logout request here] off begin
		// % protected region % [Add any additional logic after sent logout request here] end
	}

	/**
	 * Logging the current user out by removing JWT token from storage.
	 */
	logout() {
		// % protected region % [Add any additional logic before logging out here] off begin
		// % protected region % [Add any additional logic before logging out here] end

		this.httpClient.post(`${environment.API_URL}/auth/logout`, {
			// % protected region % [Add any additional request body here] off begin
			// % protected region % [Add any additional request body here] end
		}, {
			// % protected region % [Add any additional request options for logout here] off begin
			// % protected region % [Add any additional request options for logout here] end
		}).subscribe(
			response => {
				// % protected region % [Add any additional logic before successfully logged out here] off begin
				// % protected region % [Add any additional logic before successfully logged out here] end

				this.onLogout();

				// % protected region % [Add any additional logic after successfully logged out here] off begin
				// % protected region % [Add any additional logic after successfully logged out here] end
			},
			error => {
				// % protected region % [Add any additional logic before unsuccessfully logged out here] off begin
				// % protected region % [Add any additional logic before unsuccessfully logged out here] end

				this.onLogout();

				// % protected region % [Add any additional logic after unsuccessfully logged out here] off begin
				// % protected region % [Add any additional logic after unsuccessfully logged out here] end
			},
			() => {
				// % protected region % [Add any additional logic after completed here] off begin
				// % protected region % [Add any additional logic after completed here] end
			}
		);
	}

	/**
	 * Send Post request to server to request sending reset password email
	 * @param {string} email
	 * @return {Observable<Object>}
	 */
	requestResetPassword(email: string) {

		// % protected region % [Add any additional logic before sending request reset password request here] off begin
		// % protected region % [Add any additional logic before sending request reset password request here] end

		return this.httpClient.post(`${environment.API_URL}/api/authorization/request-reset-password`, {
			username: email,
			// % protected region % [Add any additional fields to request body here for request reset password request] off begin
			// % protected region % [Add any additional fields to request body here for request reset password request] end
		}).pipe(
			// % protected region % [Add any additional operatiors here for request reset password request] off begin
			// % protected region % [Add any additional operatiors here for request reset password request] end
		)

	}

	/**
	 * Send Post request to server to reset password
	 * @param {string} username
	 * @param {string} token
	 * @param {string} password
	 * @return {Observable<any>}
	 */
	resetPassword(username: string, token: string, password: string): Observable<LoginHttpResponse> {

		// % protected region % [Add any additional logic before sending reset password request here] off begin
		// % protected region % [Add any additional logic before sending reset password request here] end

		return this.httpClient.post(`${environment.API_URL}/api/authorization/reset-password`, {
			username: username,
			token: token,
			password: password,
			// % protected region % [Add any additional fields to request body here for reset password] off begin
			// % protected region % [Add any additional fields to request body here for reset password] end
		}, {
			observe: 'response',
			withCredentials: true,
			// % protected region % [Add any additional options to request header here for reset password] off begin
			// % protected region % [Add any additional options to request header here for reset password] end
		}).pipe(
			// Put in the jwt and roles into the browser
			tap((response: LoginHttpResponse) => {

				// % protected region % [Add any additional logic here before afterAuthenticated being called] off begin
				// % protected region % [Add any additional logic here before afterAuthenticated being called] end

				this.afterAuthenticated(response);

				// % protected region % [Add any additional logic here after reset password success] off begin
				// % protected region % [Add any additional logic here after reset password success] end
			}),
			// % protected region % [Add any additional logic after sending reset password here] off begin
			// % protected region % [Add any additional logic after sending reset password here] end

		);
	}

	/**
	 * Clean out session storage to fully reset the site.
	 */
	clean() {
		localStorage.clear();
		this.cookieService.deleteAll();
		this.internalRoles = this.internalPublicRoles;
	}

	/**
	 * Do a cross check to see if the current user has any role that matches any of the given expected roles.
	 *
	 * @param expectedRoles the roles to be cross checked against
	 * @return whether user has any role that matches any of the given expected roles
	 */
	isPermitted(expectedRoles: string[] = []): boolean {
		return expectedRoles.some(role => this.internalRoles.has(role));
	}

	/**
	 * Check whether the current user has backend admin access.
	 *
	 * @return whether the current user has backend admin access
	 */
	isAdmin(): boolean {
		return this.internalRoles.some(role => this.internalAdminRoles.has(role));
	}

	/**
	 * Handler to be called when logging out.
	 */
	private onLogout() {
		// % protected region % [Add any additional logic for onLogout before the main body here] off begin
		// % protected region % [Add any additional logic for onLogout before the main body here] end

		this.clean();
		this.store.dispatch(new LogOutAction());
		this.store.dispatch(new NavigateRoutingAction(['/login']));

		// % protected region % [Add any additional logic for onLogout after the main body here] off begin
		// % protected region % [Add any additional logic for onLogout after the main body here] end
	}

	/**
	 * Handler to be called after being authenticated
	 */
	private afterAuthenticated(response: LoginHttpResponse) {
		// % protected region % [Add any additional logic for afterAuthenticated before the main body here] off begin
		// % protected region % [Add any additional logic for afterAuthenticated before the main body here] end

		const roles = response.body.groups;
		localStorage.setItem('roles', JSON.stringify(roles));
		this.internalRoles = Set(roles);

		// % protected region % [Add any additional logic for afterAuthenticated after the main body here] off begin
		// % protected region % [Add any additional logic for afterAuthenticated after the main body here] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
