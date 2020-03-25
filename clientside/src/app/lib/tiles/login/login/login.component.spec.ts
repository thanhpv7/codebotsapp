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

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Store} from '@ngrx/store';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {RouterReducerState} from '@ngrx/router-store/src/reducer';
import {CookieService} from 'ngx-cookie-service';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';
import {LoginComponent} from './login.component';
import {initialRouterState, RouterState} from '../../../../models/model.state';
import {AuthenticationService} from '../../../services/authentication/authentication.service';
import {CommonComponentModule} from '../../../components/common.component.module';
import {routes} from '../login.tile.routes';
import {LoginTileComponent} from '../login.tile.component';
import {ResetPasswordComponent} from '../reset-password/reset-password.component';
import {environment} from '../../../../../environments/environment';
import {PublicGuard} from '../../../guards/authentication.guard';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

describe('Login Component', () => {
	let authenticationService: AuthenticationService;
	let routerStore: MockStore<{ router: RouterReducerState<RouterState> }>;
	let httpMock: HttpTestingController;
	let httpClient: HttpClient;

	let loginComponentFixture: ComponentFixture<LoginComponent>;
	let loginComponent: LoginComponent;

	beforeEach(() => {
		// % protected region % [Add any additional setup logic before the main body here] off begin
		// % protected region % [Add any additional setup logic before the main body here] end

		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes([
					{
						path: 'login',
						component: LoginComponent,
						canActivate: [
							PublicGuard,
							// % protected region % [Add any additional guards for the login tile here] off begin
							// % protected region % [Add any additional guards for the login tile here] end
						],
						// % protected region % [Add any additional routes configuration here] off begin
						// % protected region % [Add any additional routes configuration here] end
					},
				]),
				CommonModule,
				ReactiveFormsModule,
				CommonComponentModule,
				HttpClientTestingModule,
				// % protected region % [Add any additional test imports here] off begin
				// % protected region % [Add any additional test imports here] end
			],
			declarations: [
				LoginTileComponent,
				LoginComponent,
				ResetPasswordComponent,
				// % protected region % [Add any additional declarations here] off begin
				// % protected region % [Add any additional declarations here] end
			],
			providers: [
				CookieService,
				provideMockStore({
					initialState: {
						router: initialRouterState
					}
				}),
				AuthenticationService,
				// % protected region % [Add any additional test providers here] off begin
				// % protected region % [Add any additional test providers here] end
			],
			// % protected region % [Add any additional testbed configuration here] off begin
			// % protected region % [Add any additional testbed configuration here] end
		});

		authenticationService = TestBed.get(AuthenticationService);
		routerStore = TestBed.get<Store<{ router: RouterReducerState<RouterState> }>>(Store);
		httpMock = TestBed.get(HttpTestingController);
		httpClient = TestBed.get(HttpClient);

		loginComponentFixture = TestBed.createComponent(LoginComponent);
		loginComponent = loginComponentFixture.componentInstance;
		loginComponentFixture.detectChanges();

		// % protected region % [Add any additional setup logic after the main body here] off begin
		// % protected region % [Add any additional setup logic after the main body here] end
	});

	afterEach(() => {
		// % protected region % [Add any additional teardown logic before the main body here] off begin
		// % protected region % [Add any additional teardown logic before the main body here] end

		localStorage.clear();

		// % protected region % [Add any additional teardown logic after the main body here] off begin
		// % protected region % [Add any additional teardown logic after the main body here] end
	});

	it('should create normally', () => {
		// % protected region % [Add any additional logic for "should create normally" before the main body here] off begin
		// % protected region % [Add any additional logic for "should create normally" before the main body here] end

		expect(loginComponent).not.toBeNull();

		// % protected region % [Add any additional logic for "should create normally" after the main body here] off begin
		// % protected region % [Add any additional logic for "should create normally" after the main body here] end
	});

	it('should have a valid form element', () => {
		// % protected region % [Add any additional logic for "should have a valid form element" before the main body here] off begin
		// % protected region % [Add any additional logic for "should have a valid form element" before the main body here] end

		const loginEl: HTMLElement = loginComponentFixture.nativeElement;
		const formEl: HTMLElement = loginEl.querySelector('form.login');
		expect(formEl).not.toBeNull('Form not found');

		// % protected region % [Add any additional logic for "should have a valid form element" after the main body here] off begin
		// % protected region % [Add any additional logic for "should have a valid form element" after the main body here] end
	});

	it('should have a valid username text field', () => {
		// % protected region % [Add any additional logic for "should have a valid username text field" before the main body here] off begin
		// % protected region % [Add any additional logic for "should have a valid username text field" before the main body here] end

		const loginEl: HTMLElement = loginComponentFixture.nativeElement;
		const formEl: HTMLElement = loginEl.querySelector('form.login');

		const emailDivEl: HTMLElement = formEl.querySelector('div.input-group.input-group--is-required[aria-live="assertive"]');
		expect(emailDivEl).not.toBeNull('Wrapping div not found');

		const labelEl: HTMLElement = emailDivEl.querySelector('label[for="username-field"]');
		expect(labelEl).not.toBeNull('Username label not found');
		expect(labelEl.textContent).toEqual('Username');

		const inputEl: HTMLElement = emailDivEl.querySelector('input[type="email"][placeholder="Enter your email address here"][name="username"]');
		expect(inputEl).not.toBeNull('Username input field not found');

		// % protected region % [Add any additional logic for "should have a valid username text field" after the main body here] off begin
		// % protected region % [Add any additional logic for "should have a valid username text field" after the main body here] end
	});

	it('should have a valid password text field', () => {
		// % protected region % [Add any additional logic for "should have a valid password text field" before the main body here] off begin
		// % protected region % [Add any additional logic for "should have a valid password text field" before the main body here] end

		const loginEl: HTMLElement = loginComponentFixture.nativeElement;
		const formEl: HTMLElement = loginEl.querySelector('form.login');

		const passwordDivEl: HTMLElement = formEl.querySelectorAll<HTMLElement>('div.input-group.input-group--is-required[aria-live="assertive"]')[1];
		expect(passwordDivEl).not.toBeNull('Wrapping div not found');

		const labelEl: HTMLElement = passwordDivEl.querySelector('label[for="password-field"]');
		expect(labelEl).not.toBeNull('Password label not found');
		expect(labelEl.textContent).toEqual('Password');

		const inputEl: HTMLElement = passwordDivEl.querySelector('input[type="password"][placeholder="Enter your password here"][name="password"]');
		expect(inputEl).not.toBeNull('Password input field not found');

		// % protected region % [Add any additional logic for "should have a valid password text field" after the main body here] off begin
		// % protected region % [Add any additional logic for "should have a valid password text field" after the main body here] end
	});

	it('should have a valid button group', () => {
		// % protected region % [Add any additional logic for "should have a valid button group" before the main body here] off begin
		// % protected region % [Add any additional logic for "should have a valid button group" before the main body here] end

		const loginEl: HTMLElement = loginComponentFixture.nativeElement;
		const formEl: HTMLElement = loginEl.querySelector('form.login');

		const buttonGroupEl: HTMLElement = formEl.querySelector('section.btn-group.btn-group--horizontal');
		expect(buttonGroupEl).not.toBeNull('Button group not found');

		const loginBtn = buttonGroupEl.querySelector<HTMLButtonElement>('button.btn.btn--md');
		expect(loginBtn.textContent).toEqual('Login', 'Login button not found');

		const registerBtn = buttonGroupEl.querySelector<HTMLAnchorElement>('a.btn.btn--md.btn--secondary');
		expect(registerBtn.textContent).toEqual('Register', 'Register button not found');

		// % protected region % [Add any additional logic for "should have a valid button group" after the main body here] off begin
		// % protected region % [Add any additional logic for "should have a valid button group" after the main body here] end
	});

	it('should have a valid forgot password link', () => {
		// % protected region % [Add any additional logic for "should have a valid forgot password link" before the main body here] off begin
		// % protected region % [Add any additional logic for "should have a valid forgot password link" before the main body here] end

		const loginEl: HTMLElement = loginComponentFixture.nativeElement;
		const formEl: HTMLElement = loginEl.querySelector('form.login');
		const forgotPasswordEl = formEl.nextElementSibling as HTMLAnchorElement;
		expect(forgotPasswordEl).not.toBeNull('Forgot password link not found');
		expect(forgotPasswordEl.textContent).toEqual('Forgot your password?');
		expect(forgotPasswordEl.getAttribute('href')).toEqual('/forgotten-password');

		// % protected region % [Add any additional logic for "should have a valid forgot password link" after the main body here] off begin
		// % protected region % [Add any additional logic for "should have a valid forgot password link" after the main body here] end
	});

	it('should validate the email correctly if wrong email', () => {
		// % protected region % [Add any additional logic for "should validate the email correctly if wrong email" before the main body here] off begin
		// % protected region % [Add any additional logic for "should validate the email correctly if wrong email" before the main body here] end

		expect(loginComponent.loginForm.get('email').invalid).toBeTruthy();
		enterEmail('user');
		expect(loginComponent.loginForm.get('email').invalid).toBeTruthy();
		enterEmail('');
		expect(loginComponent.loginForm.get('email').invalid).toBeTruthy();

		// % protected region % [Add any additional logic for "should validate the email correctly if wrong email" before the main body here] off begin
		// % protected region % [Add any additional logic for "should validate the email correctly if wrong email" before the main body here] end
	});

	it('should validate the password correctly if empty', () => {
		// % protected region % [Add any additional logic for "should validate the password correctly if empty" before the main body here] off begin
		// % protected region % [Add any additional logic for "should validate the password correctly if empty" before the main body here] end

		expect(loginComponent.loginForm.get('password').invalid).toBeTruthy();
		enterPassword('password');
		expect(loginComponent.loginForm.get('password').invalid).toBeFalsy();
		enterPassword('');
		expect(loginComponent.loginForm.get('password').invalid).toBeTruthy();

		// % protected region % [Add any additional logic for "should validate the password correctly if empty" before the main body here] off begin
		// % protected region % [Add any additional logic for "should validate the password correctly if empty" before the main body here] end
	});

	describe('login', () => {
		let authServiceLogin: jasmine.Spy;
		let routerStoreDispatch: jasmine.Spy;

		// % protected region % [Add any additional variables for login suite here] off begin
		// % protected region % [Add any additional variables for login suite here] end

		beforeEach(() => {
			// % protected region % [Add any additional setup for login suite before the main body here] off begin
			// % protected region % [Add any additional setup for login suite before the main body here] end

			authServiceLogin = spyOn(authenticationService, 'login').and.callThrough();
			routerStoreDispatch = spyOn(routerStore, 'dispatch').and.callThrough();

			// % protected region % [Add any additional setup for login suite after the main body here] off begin
			// % protected region % [Add any additional setup for login suite after the main body here] end
		});

		it('should login normally with correct credentials', () => {
			// % protected region % [Add any additional setup for "should login normally with correct credentials" before the main body here] off begin
			// % protected region % [Add any additional setup for "should login normally with correct credentials" before the main body here] end

			enterEmail('user@example.com');
			enterPassword('password');
			clickLoginButton();

			// % protected region % [Add any additional setup for "should login normally with correct credentials" here] off begin
			// % protected region % [Add any additional setup for "should login normally with correct credentials" here] end

			expect(authServiceLogin).toHaveBeenCalledTimes(1);

			const httpRequest = httpMock.expectOne(`${environment.API_URL}/auth/login`);
			httpRequest.flush({
				id: 'random',
				username: 'user@example.com',
				password: 'password',
				groups: ['ROLE_USER']
			}, {
				status: 200,
				statusText: 'OK'
			});

			expect(routerStoreDispatch).toHaveBeenCalledTimes(1);
			expect(loginComponent.loginFailed).toBeFalsy();

			// % protected region % [Add any additional setup for "should login normally with correct credentials" after the main body here] off begin
			// % protected region % [Add any additional setup for "should login normally with correct credentials" after the main body here] end
		});

		it('should not login with wrong credentials', () => {
			// % protected region % [Add any additional setup for "should not login with wrong credentials" before the main body here] off begin
			// % protected region % [Add any additional setup for "should not login with wrong credentials" before the main body here] end

			enterEmail('user@example.com');
			enterPassword('password');
			clickLoginButton();

			// % protected region % [Add any additional setup for "should not login with wrong credentials" here] off begin
			// % protected region % [Add any additional setup for "should not login with wrong credentials" here] end

			expect(authServiceLogin).toHaveBeenCalledTimes(1);

			const httpRequest = httpMock.expectOne(`${environment.API_URL}/auth/login`);
			httpRequest.flush({
				error: 'invalid_grant',
				error_description: 'The username/password combination is invalid.'
			}, {
				status: 401,
				statusText: 'Unauthorized'
			});

			expect(routerStoreDispatch).toHaveBeenCalledTimes(0);
			expect(loginComponent.loginFailed).toBeTruthy();

			// % protected region % [Add any additional setup for "should not login with wrong credentials" after the main body here] off begin
			// % protected region % [Add any additional setup for "should not login with wrong credentials" after the main body here] end
		});

		// % protected region % [Add any additional test cases for login suite here] off begin
		// % protected region % [Add any additional test cases for login suite here] end
	});

	// % protected region % [Add any additional test cases here] off begin
	// % protected region % [Add any additional test cases here] end

	/**
	 * Simple helper method to insert text into the email text field.
	 */
	const enterEmail = (email: string): void => {
		const loginDebugEl = loginComponentFixture.debugElement;
		const emailDebugEl = loginDebugEl.query(By.css('input[type="email"]'));
		expect(emailDebugEl).not.toBeNull();
		const emailEl = emailDebugEl.nativeElement as HTMLInputElement;
		emailEl.value = email;
		emailEl.dispatchEvent(new Event('input'));
		loginComponentFixture.detectChanges();
	};

	/**
	 * Simple helper method to insert text into the password text field.
	 */
	const enterPassword = (password: string): void => {
		const loginDebugEl = loginComponentFixture.debugElement;
		const passwordDebugEl = loginDebugEl.query(By.css('input[type="password"]'));
		expect(passwordDebugEl).not.toBeNull();
		const passwordEl = passwordDebugEl.nativeElement as HTMLInputElement;
		passwordEl.value = password;
		passwordEl.dispatchEvent(new Event('input'));
		loginComponentFixture.detectChanges();
	};

	/**
	 * Simple helper method to click the login button.
	 */
	const clickLoginButton = (): void => {
		const loginDebugEl = loginComponentFixture.debugElement;
		const loginBtnDebugEl = loginDebugEl.query(By.css('button.btn.btn--md'));
		expect(loginBtnDebugEl).not.toBeNull();
		const loginBtnEl = loginBtnDebugEl.nativeElement as HTMLButtonElement;
		expect(loginBtnEl.textContent).toContain('Login');
		loginBtnEl.click();
		loginComponentFixture.detectChanges();
	};

	// % protected region % [Add any additional helper methods here] off begin
	// % protected region % [Add any additional helper methods here] end
});
