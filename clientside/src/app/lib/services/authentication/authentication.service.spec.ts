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

import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {Action, Store} from '@ngrx/store';
import {CookieService} from 'ngx-cookie-service';
import {Set} from 'immutable';
import {AuthenticationService, LoginHttpResponse} from './authentication.service';
import {environment} from '../../../../environments/environment';
import {NavigateRoutingAction} from '../../routing/routing.action';
import {LogOutAction} from '../../../models/model.action';
import * as uuid from 'uuid';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

describe('Authentication Service', () => {
	/**
	 * XSRF token used in the cookie service.
	 */
	const XSRF_TOKEN = '8B7DF143D91C716ECFA5FC1730022F6B421B05CEDEE8FD52B1FC65A96030AD52';

	/**
	 * Public roles that are assigned to anonymous user by default.
	 */
	const PUBLIC_ROLES = Set([
		'VISITORS',
		// % protected region % [Add any additional public roles here] off begin
		// % protected region % [Add any additional public roles here] end
	]);

	/**
	 * Admin roles that are assigned to user within Backend Admin special group.
	 */
	const ADMIN_ROLES = Set([
		// % protected region % [Add any additional public roles for here] off begin
		// % protected region % [Add any additional public roles for here] end
	]);

	let cookieService: jasmine.SpyObj<CookieService>;
	let store: jasmine.SpyObj<Store<any>>;
	let httpMock: HttpTestingController;
	let httpClient: HttpClient;
	let loginResponse: LoginHttpResponse;
	let authenticationService: AuthenticationService;

	// % protected region % [Add any additional variables here] off begin
	// % protected region % [Add any additional variables here] end

	beforeEach(() => {
		// % protected region % [Add any additional setupAll logic before the main body here] off begin
		// % protected region % [Add any additional setupAll logic before the main body here] end

		spyOn<Storage>(localStorage, 'setItem');
		spyOn<Storage>(localStorage, 'clear');

		cookieService = jasmine.createSpyObj<CookieService>('cookieService', ['get', 'deleteAll']);
		cookieService.get.and.callFake((args) => {
			return XSRF_TOKEN;
		});

		store = jasmine.createSpyObj<Store<any>>('store', [
			'dispatch',
			// % protected region % [Add any additional spy methods for store here] off begin
			// % protected region % [Add any additional spy methods for store here] end
		]);

		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				// % protected region % [Add any additional test imports here] off begin
				// % protected region % [Add any additional test imports here] end
			],
			providers: [
				{
					provide: CookieService,
					useValue: cookieService
				},
				{
					provide: Store,
					useValue: store
				},
				AuthenticationService,
				// % protected region % [Add any additional test providers here] off begin
				// % protected region % [Add any additional test providers here] end
			],
			// % protected region % [Add any additional testbed configuration here] off begin
			// % protected region % [Add any additional testbed configuration here] end
		});

		authenticationService = TestBed.get(AuthenticationService);
		httpMock = TestBed.get(HttpTestingController);
		httpClient = TestBed.get(HttpClient);

		// % protected region % [Add any additional setupAll logic after the main body here] off begin
		// % protected region % [Add any additional setupAll logic after the main body here] end
	});

	const parameters = [
		{
			// % protected region % [Configure parameters for Fishnatic here] off begin
			testName: 'Fishnatic',
			username: 'fishnatic@example.com',
			password: 'password',
			newPassword: 'new_password',
			token: uuid.v4(),
			groups: [
				'FISHNATIC',
			],
			// % protected region % [Configure parameters for Fishnatic here] end
		},
		{
			// % protected region % [Configure parameters for Admin here] off begin
			testName: 'Admin',
			username: 'admin@example.com',
			password: 'password',
			newPassword: 'new_password',
			token: uuid.v4(),
			groups: [
				'ADMIN',
			],
			// % protected region % [Configure parameters for Admin here] end
		},
		// % protected region % [Add any additional parameter here] off begin
		// % protected region % [Add any additional parameter here] end
	];

	parameters.forEach(param => {
		describe(param.testName, () => {
			beforeEach(() => {
				// % protected region % [Add any additional setupAll logic before the main body here] off begin
				// % protected region % [Add any additional setupAll logic before the main body here] end

				loginResponse = {
					body: {
						id: 'bfff56e0-70d6-43b8-a1f4-134d3d1663bb',
						username: param.username,
						groups: param.groups
					}
				} as LoginHttpResponse;

				// % protected region % [Add any additional setupAll logic after the main body here] off begin
				// % protected region % [Add any additional setupAll logic after the main body here] end
			});

			it('should have correct default roles on cold startup', () => {
				// % protected region % [Add any additional logic for "should have correct default roles on cold startup" before the main body here] off begin
				// % protected region % [Add any additional logic for "should have correct default roles on cold startup" before the main body here] end

				spyOn<Storage>(localStorage, 'getItem').and.returnValue(null);

				// % protected region % [Add any additional logic for "should have correct default roles on cold startup" here] off begin
				// % protected region % [Add any additional logic for "should have correct default roles on cold startup" here] end

				expect(authenticationService.publicRoles).toEqual(PUBLIC_ROLES);
				expect(authenticationService.adminRoles).toEqual(ADMIN_ROLES);
				expect(authenticationService.roles).toEqual(PUBLIC_ROLES);

				// % protected region % [Add any additional logic for "should have correct default roles on cold startup" after the main body here] off begin
				// % protected region % [Add any additional logic for "should have correct default roles on cold startup" after the main body here] end
			});

			it('should have correct default roles after server restarts', () => {
				// % protected region % [Add any additional logic for "should have correct default roles after server restarts" before the main body here] off begin
				// % protected region % [Add any additional logic for "should have correct default roles after server restarts" before the main body here] end

				const expectedRoles = Set(param.groups);

				spyOn<Storage>(localStorage, 'getItem').and.returnValue(JSON.stringify(expectedRoles.toArray()));
				authenticationService = new AuthenticationService(httpClient, cookieService, store);

				// % protected region % [Add any additional logic for "should have correct default roles after server restarts" here] off begin
				// % protected region % [Add any additional logic for "should have correct default roles after server restarts" here] end

				expect(authenticationService.publicRoles).toEqual(PUBLIC_ROLES);
				expect(authenticationService.adminRoles).toEqual(ADMIN_ROLES);
				expect(authenticationService.roles).toEqual(expectedRoles);

				// % protected region % [Add any additional logic for "should have correct default roles after server restarts" after the main body here] off begin
				// % protected region % [Add any additional logic for "should have correct default roles after server restarts" after the main body here] end
			});

			it('should login normally', () => {
				// % protected region % [Add any additional logic for "should login normally" before the main body here] off begin
				// % protected region % [Add any additional logic for "should login normally" before the main body here] end

				const username = param.username;
				const password = param.password;

				// % protected region % [Add any additional logic for "should login normally" here] off begin
				// % protected region % [Add any additional logic for "should login normally" here] end

				authenticationService.login(username, password).subscribe(
					(response: LoginHttpResponse) => {
						expect(localStorage.setItem).toHaveBeenCalledTimes(1);
						expect(authenticationService.roles.equals(Set(loginResponse.body.groups))).toBeTruthy();
					}
				);

				const params = new URLSearchParams();
				params.set('username', username);
				params.set('password', password);

				const httpRequest = httpMock.expectOne(`${environment.API_URL}/auth/login`);
				expect(httpRequest.request.headers.has('Content-Type')).toBeTruthy('Content type header was not set');
				expect(httpRequest.request.headers.get('Content-Type')).toEqual('application/x-www-form-urlencoded', 'Content type header was set incorrectly');
				expect(httpRequest.request.method).toEqual('POST', 'HTTP method does not match');
				expect(httpRequest.request.body).toEqual(params.toString());

				httpRequest.flush({
					id: 'bfff56e0-70d6-43b8-a1f4-134d3d1663bb',
					username: param.username,
					groups: param.groups
				}, {
					headers: {
						'Content-Type': 'application/json',
						'Set-Cookie': [
							`XSRF-TOKEN=${XSRF_TOKEN};Secure;Path=/;Max-Age=600;SameSite=strict`
						]
					},
					status: 200,
					statusText: 'OK'
				});

				// % protected region % [Add any additional logic for "should login normally" after the main body here] off begin
				// % protected region % [Add any additional logic for "should login normally" after the main body here] end
			});

			it('should clean properly', () => {
				// % protected region % [Add any additional logic for "should clean property" before the main body here] off begin
				// % protected region % [Add any additional logic for "should clean property" before the main body here] end

				const expectedRoles = Set(param.groups);

				spyOn<Storage>(localStorage, 'getItem').and.returnValue(JSON.stringify(expectedRoles.toArray()));
				authenticationService = new AuthenticationService(httpClient, cookieService, store);

				expect(authenticationService.roles).toEqual(expectedRoles);

				// % protected region % [Add any additional logic for "should clean property" before cleaning here] off begin
				// % protected region % [Add any additional logic for "should clean property" before cleaning here] end

				authenticationService.clean();

				expect(localStorage.clear).toHaveBeenCalledTimes(1);
				expect(cookieService.deleteAll).toHaveBeenCalledTimes(1);
				expect(authenticationService.roles).not.toEqual(expectedRoles);
				expect(authenticationService.roles).toEqual(PUBLIC_ROLES);

				// % protected region % [Add any additional logic for "should clean property" after the main body here] off begin
				// % protected region % [Add any additional logic for "should clean property" after the main body here] end
			});

			it('should login normally after resetting password', () => {
				// % protected region % [Add any additional logic for "should login normally after resetting password" before the main body here] off begin
				// % protected region % [Add any additional logic for "should login normally after resetting password" before the main body here] end

				const username = param.username;
				const password = param.newPassword;
				const token = param.token;

				// % protected region % [Add any additional logic for "should login normally" before call service method here] off begin
				// % protected region % [Add any additional logic for "should login normally" before call service method here] end

				authenticationService.resetPassword(username, token, password).subscribe(
					(response: LoginHttpResponse) => {
						expect(localStorage.setItem).toHaveBeenCalledTimes(1);
						expect(authenticationService.roles.equals(Set(response.body.groups))).toBeTruthy();
					}
				);

				const params = {
					username: username,
					token: token,
					password: password
				};

				const httpRequest = httpMock.expectOne(`${environment.API_URL}/api/authorization/reset-password`);
				expect(httpRequest.request.headers.has('Content-Type')).toBeFalsy('Not using default header');
				expect(httpRequest.request.method).toEqual('POST', 'HTTP method does not match');
				expect(httpRequest.request.body).toEqual(params);

				httpRequest.flush({
					id: uuid.v4(),
					username: param.username,
					groups: param.groups
				}, {
					headers: {
						'Content-Type': 'application/json',
						'Set-Cookie': [
							`XSRF-TOKEN=${XSRF_TOKEN};Secure;Path=/;Max-Age=600;SameSite=strict`
						]
					},
					status: 200,
					statusText: 'OK'
				});

				// % protected region % [Add any additional logic for "should login normally after resetting password" before the main body here] off begin
				// % protected region % [Add any additional logic for "should login normally after resetting password" before the main body here] end
			});
		});

		// % protected region % [Add any additional parameterised test cases here] off begin
		// % protected region % [Add any additional parameterised test cases here] end
	});

	it('should logout normally', () => {
		// % protected region % [Add any additional logic for "should logout normally" before the main body here] off begin
		// % protected region % [Add any additional logic for "should logout normally" before the main body here] end

		const authServiceCleanSpy = spyOn(authenticationService, 'clean');

		let index = 0;
		const actions = [
			new LogOutAction(),
			new NavigateRoutingAction(['/login'])
		];
		store.dispatch.and.callFake((action: Action) => {
			expect(action).toEqual(actions[index++]);

			// % protected region % [Add any additional logic for "should logout normally" to verify actions here] off begin
			// % protected region % [Add any additional logic for "should logout normally" to verify actions here] end
		});

		authenticationService.logout();

		const httpRequest = httpMock.expectOne(`${environment.API_URL}/auth/logout`);
		expect(httpRequest.request.method).toEqual('POST', 'HTTP method does not match');

		httpRequest.flush(null, {
			status: 200,
			statusText: 'OK'
		});

		expect(authServiceCleanSpy).toHaveBeenCalledTimes(1);
		expect(store.dispatch).toHaveBeenCalledTimes(2);

		// % protected region % [Add any additional logic for "should logout normally" after the main body here] off begin
		// % protected region % [Add any additional logic for "should logout normally" after the main body here] end
	});

	it('should send request reset password normally', () => {
		// % protected region % [Add any additional logic for "should send request reset password normally" before the main body here] off begin
		// % protected region % [Add any additional logic for "should send request reset password normally" before the main body here] end

		const username: string = 'random@example.com';

		authenticationService.requestResetPassword(username).subscribe(
			(response) => {
				// % protected region % [Add any additional logic in subscription for "should send request reset password normally" before the main body here] off begin
				// % protected region % [Add any additional logic in subscription for "should send request reset password normally" before the main body here] end
			}
		);

		const httpRequest = httpMock.expectOne(`${environment.API_URL}/api/authorization/request-reset-password`);
		expect(httpRequest.request.method).toEqual('POST', 'HTTP method does not match');
		expect(httpRequest.request.body).toEqual({
			username: username
		});

		httpRequest.flush(null, {
			status: 200,
			statusText: 'OK'
		});

		// % protected region % [Add any additional logic for "should send request reset password normally" after the main body here] off begin
		// % protected region % [Add any additional logic for "should send request reset password normally" after the main body here] end
	});

	// % protected region % [Add any additional test cases here] off begin
	// % protected region % [Add any additional test cases here] end
});
