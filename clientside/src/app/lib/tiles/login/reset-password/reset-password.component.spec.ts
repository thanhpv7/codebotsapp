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

import {AuthenticationService} from '../../../services/authentication/authentication.service';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {RouterReducerState} from '@ngrx/router-store';
import {RouterState} from '../../../../models/model.state';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from '../login.tile.routes';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonComponentModule} from '../../../components/common.component.module';
import {CookieService} from 'ngx-cookie-service';
import {Store} from '@ngrx/store';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {ResetPasswordComponent} from './reset-password.component';
import { cold, getTestScheduler } from 'jasmine-marbles';
import {ButtonComponent} from '../../../components/button/button.component';
import SpyObj = jasmine.SpyObj;
import {AlertComponent} from '../../../components/alert/alert.component';
import * as uuid from 'uuid';import {Router} from '@angular/router';
import * as routerAction from '../../../routing/routing.action';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

describe('Forgotten Password Component', () => {

	const TEST_USERNAME = 'test@example.com';
	const TEST_PASSWORD = 'new_password';
	const WRONG_PASSWORD = 'wrong_password';
	const SHORT_PASSWORD = 'test';
	const TEST_TOKEN = uuid.v1();
	const expectedRouterStateAfterReset = new routerAction.NavigateRoutingAction(['']);

	let routerStore: MockStore<{ router: RouterReducerState<RouterState> }>;
	let httpMock: HttpTestingController;
	let httpClient: HttpClient;
	let toastrService: ToastrService;

	let resetPasswordComponentFixture: ComponentFixture<ResetPasswordComponent>;
	let resetPasswordComponent: ResetPasswordComponent;

	const authenticationService: SpyObj<AuthenticationService> = jasmine.createSpyObj('AuthenticationService',
		['resetPassword']);

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes([
					{
						path: 'reset-password',
						component: ResetPasswordComponent
					},
					// % protected region % [Add any additional routes here] off begin
					// % protected region % [Add any additional routes here] end
				]),
				CommonModule,
				ReactiveFormsModule,
				CommonComponentModule,
				HttpClientTestingModule,
				ToastrModule.forRoot({
					toastComponent: AlertComponent,
					iconClasses: {
						success: 'alert__success',
						info: 'alert__info',
						warning: 'alert__warning',
						error: 'alert__danger'
					},
					toastClass: '',
					positionClass: 'alert-container',
					preventDuplicates: true
				}),
				// % protected region % [Add any additional imports here] off begin
				// % protected region % [Add any additional imports here] end
			],
			declarations: [
				ResetPasswordComponent,
				// % protected region % [Add any additional declarations here] off begin
				// % protected region % [Add any additional declarations here] end
			],
			providers: [
				CookieService,
				provideMockStore({
					initialState: {
						router: {
							state: {
								url: '/reset-password',
								urls: [],
								params: [],
								queryParams: {
									token: TEST_TOKEN,
									username: TEST_USERNAME
								},
								data: {},
							},
							navigationId: -1
						}
					}
				}),
				{ provide: AuthenticationService, useValue: authenticationService},
				// % protected region % [Add any additional providers here] off begin
				// % protected region % [Add any additional providers here] end
			],
		});

		routerStore = TestBed.get<Store<{ router: RouterReducerState<RouterState> }>>(Store);
		spyOn(routerStore, 'dispatch').and.callThrough();

		httpMock = TestBed.get(HttpTestingController);
		httpClient = TestBed.get(HttpClient);
		toastrService = TestBed.get(ToastrService);

		resetPasswordComponentFixture = TestBed.createComponent(ResetPasswordComponent);
		resetPasswordComponent = resetPasswordComponentFixture.componentInstance;
		resetPasswordComponentFixture.detectChanges();

		// % protected region % [Add any additional logic before each test starting here] off begin
		// % protected region % [Add any additional logic before each test starting here] end
	});

	afterEach(() => {

		localStorage.clear();

		if (resetPasswordComponentFixture.nativeElement instanceof HTMLElement) {
			(resetPasswordComponentFixture.nativeElement as HTMLElement).remove();
		}

		// % protected region % [Add any additional logic after each test finished here] off begin
		// % protected region % [Add any additional logic after each test finished here] end
	});

	it('should create normally', () => {

		expect(resetPasswordComponent).not.toBeNull();

		// % protected region % [Add any additional logic for 'should create normally' here] off begin
		// % protected region % [Add any additional logic for 'should create normally' here] end
	});

	it('should have Reset Password title with correct dom structure', () => {

		const titleElements:DebugElement[] = resetPasswordComponentFixture.debugElement.queryAll(By.css('h2'));

		expect(titleElements.length).toEqual(1, 'Should have 1 h2 title element in the dom');

		const titleElement: DebugElement = titleElements[0];

		expect(titleElement.nativeElement.textContent.trim()).toEqual('Set Password', 'Test of header is wrong');

		// % protected region % [Add any additional logic for 'should have Reset Password title with correct dom structure' here] off begin
		// % protected region % [Add any additional logic for 'should have Reset Password title with correct dom structure' here] end
	});

	it('should have form element with correct dom structure', () => {
		// % protected region % [Add any additional logic before main logic for for 'should have form element with correct dom structure' here] off begin
		// % protected region % [Add any additional logic before main logic for for 'should have form element with correct dom structure' here] end

		const formElements:DebugElement[] = resetPasswordComponentFixture.debugElement.queryAll(By.css('form'));

		expect(formElements.length).toEqual(1, 'Should have 1 form element in the dom');

		const formElement: DebugElement = formElements[0];

		expect(formElement.nativeElement.className.split(' ')).toContain('reset-password', 'Form element class name not satisfies standard');

		// % protected region % [Add any additional logic for 'should have form element with correct dom structure' here] off begin
		// % protected region % [Add any additional logic for 'should have form element with correct dom structure' here] end
	});

	it('should have input elements with correct dom structure',() => {
		// % protected region % [Add any additional logic before main logic for for 'should have input elements with correct dom structure' here] off begin
		// % protected region % [Add any additional logic before main logic for for 'should have input elements with correct dom structure' here] end

		const textFieldElements:DebugElement[] = resetPasswordComponentFixture.debugElement.queryAll(By.css('cb-textfield'));

		expect(textFieldElements.length).toEqual(2, 'Should have 2 textfield element in the dom');

		// Check input of new password
		const newPasswordElement: DebugElement = textFieldElements[0];
		expect(newPasswordElement.nativeElement.className.split(' ')).toContain('input-group--is-required');

		const newPasswordLabel: DebugElement = newPasswordElement.query(By.css('label'));
		const newPasswordInput: DebugElement = newPasswordElement.query(By.css('input'));

		expect(newPasswordLabel.nativeElement.textContent.trim()).toBe('New Password');
		expect(newPasswordInput.nativeElement.placeholder).toBe('Enter your new password here');

		// Check input of confirm password
		const confirmPasswordElement: DebugElement = textFieldElements[1];
		expect(confirmPasswordElement.nativeElement.className.split(' ')).toContain('input-group--is-required');

		const confirmPasswordLabel: DebugElement = confirmPasswordElement.query(By.css('label'));
		const confirmPasswordInput: DebugElement = confirmPasswordElement.query(By.css('input'));

		expect(confirmPasswordLabel.nativeElement.textContent.trim()).toBe('Confirm Password');
		expect(confirmPasswordInput.nativeElement.placeholder).toBe('Confirm your new password here');

		// % protected region % [Add any additional logic for 'should have input elements with correct dom structure' here] off begin
		// % protected region % [Add any additional logic for 'should have input elements with correct dom structure' here] end
	});

	it('should have buttons with correct class', () => {
		// % protected region % [Add any additional logic before main logic for for 'should have buttons with correct class' here] off begin
		// % protected region % [Add any additional logic before main logic for for 'should have buttons with correct class' here] end

		// Check buttons
		const buttonElements: DebugElement[] = resetPasswordComponentFixture.debugElement.queryAll(By.directive(ButtonComponent));
		expect(buttonElements.length).toBe(1, 'Should have 1 buttons in button group');

		const updateButton = buttonElements[0];

		const expectedUpdateButtonClass = ['btn', 'btn--md'];
		const actualUpdateButtonClass = updateButton.nativeElement.className.split(' ');

		expect(expectedUpdateButtonClass.every(buttonClass => actualUpdateButtonClass.includes(buttonClass))).toBeTruthy('Reset button not matches class names in standard');
		expect(updateButton.nativeElement.textContent.trim()).toBe('Update Password', 'Text of update button is wrong');

		// % protected region % [Add any additional logic for 'should have buttons with correct class' here] off begin
		// % protected region % [Add any additional logic for 'should have buttons with correct class' here] end
	});

	it('should check password has minimum length 10', () => {
		// % protected region % [Add any additional logic before main logic for for 'should check password has minimum length 10' here] off begin
		// % protected region % [Add any additional logic before main logic for for 'should check password has minimum length 10' here] end

		const textFieldElements:DebugElement[] = resetPasswordComponentFixture.debugElement.queryAll(By.css('input'));

		// Input short password
		textFieldElements[0].nativeElement.value = SHORT_PASSWORD;
		textFieldElements[1].nativeElement.value = SHORT_PASSWORD;
		textFieldElements[0].nativeElement.dispatchEvent(new Event('input'));
		textFieldElements[1].nativeElement.dispatchEvent(new Event('input'));

		resetPasswordComponentFixture.detectChanges();

		resetPasswordComponentFixture.whenStable().then(() => {
			expect(resetPasswordComponent.resetPasswordForm.invalid).toBeTruthy();
			expect(resetPasswordComponent.resetPasswordForm.controls.password.errors.hasOwnProperty('minlength'));
			let minLengthError = resetPasswordComponent.resetPasswordForm.controls.password.errors.minlength;
			expect(minLengthError.hasOwnProperty('requiredLength')).toBeTruthy();
			expect(minLengthError.requiredLength).toBe(10, 'Min length should be 10');

			// % protected region % [Add any additional logic after component stable for 'should check password has minimum length 10' here] off begin
			// % protected region % [Add any additional logic after component stable for 'should check password has minimum length 10' here] end
		});

		// % protected region % [Add any additional logic for 'should check password has minimum length 10' here] off begin
		// % protected region % [Add any additional logic for 'should check password has minimum length 10' here] end
	});

	it('should call reset password function when click button with valid form', () => {
		// % protected region % [Add any additional logic before main logic for for 'should call reset password function when click button with valid form' here] off begin
		// % protected region % [Add any additional logic before main logic for for 'should call reset password function when click button with valid form' here] end

		resetPasswordComponent.resetPasswordForm.patchValue({
			'password': TEST_PASSWORD,
			'confirmPassword': TEST_PASSWORD
		});

		resetPasswordComponentFixture.detectChanges();

		const resetPasswordButton = resetPasswordComponentFixture.debugElement.query(By.css('button'));

		spyOn(resetPasswordComponent, 'onResetPasswordClicked');

		resetPasswordButton.triggerEventHandler('click', null);

		resetPasswordComponentFixture.detectChanges();

		resetPasswordComponentFixture.whenStable().then(() => {
			expect(resetPasswordComponent.onResetPasswordClicked).toHaveBeenCalled();
		});

		// % protected region % [Add any additional logic for 'should call reset password function when click button with valid form' here] off begin
		// % protected region % [Add any additional logic for 'should call reset password function when click button with valid form' here] end
	});

	it('should not call reset password function when click button with valid form', () => {
		// % protected region % [Add any additional logic for 'should not call reset password function when click button with valid form' here] off begin
		// % protected region % [Add any additional logic for 'should not call reset password function when click button with valid form' here] end

		resetPasswordComponent.resetPasswordForm.patchValue({
			'password': TEST_PASSWORD,
			'confirmPassword': WRONG_PASSWORD
		});

		resetPasswordComponentFixture.detectChanges();

		const resetPasswordButton = resetPasswordComponentFixture.debugElement.query(By.css('button'));

		spyOn(resetPasswordComponent, 'onResetPasswordClicked');

		resetPasswordButton.triggerEventHandler('click', null);

		resetPasswordComponentFixture.detectChanges();

		resetPasswordComponentFixture.whenStable().then(() => {
			expect(resetPasswordComponent.onResetPasswordClicked).not.toHaveBeenCalled();
		});

		// % protected region % [Add any additional logic for 'should not call reset password function when click button with valid form' here] off begin
		// % protected region % [Add any additional logic for 'should not call reset password function when click button with valid form' here] end
	});

	it('should component update state when button is clicked', () => {
		// % protected region % [Add any additional logic before main logic for for 'should component update state when button is clicked' here] off begin
		// % protected region % [Add any additional logic before main logic for for 'should component update state when button is clicked' here] end

		resetPasswordComponent.resetPasswordForm.patchValue({
			'password': TEST_PASSWORD,
			'confirmPassword': TEST_PASSWORD
		});

		resetPasswordComponentFixture.detectChanges();

		const updatePasswordButton = resetPasswordComponentFixture.debugElement
			.queryAll(By.css('button'))
			.find((button) => button.nativeElement.textContent.trim() === 'Update Password');

		const successResponse$ = cold('---x|', {
			x: {
				status: 200,
				statusText: 'OK',
				body: {
					id: uuid.v1(),
					username: TEST_USERNAME,
					groups: ['TESTER']
				}
			}
		});

		authenticationService.resetPassword.and.returnValue(successResponse$);

		resetPasswordComponent.onResetPasswordClicked();
		resetPasswordComponentFixture.detectChanges();

		expect(authenticationService.resetPassword).toHaveBeenCalledWith(TEST_USERNAME, TEST_TOKEN, TEST_PASSWORD);
		expect(resetPasswordComponent.sendingRequest).toBeTruthy('State should be updated when sending request');
		expect(updatePasswordButton.nativeElement.disabled).toBeTruthy('Update button should be disalbed while sending request');

		// % protected region % [Add any additional logic for 'should component update state when button is clicked' here] off begin
		// % protected region % [Add any additional logic for 'should component update state when button is clicked' here] end
	});

	it('should update state after receiving success response', () => {
		// % protected region % [Add any additional logic before main logic for for 'should update state after receiving success response' here] off begin
		// % protected region % [Add any additional logic before main logic for for 'should update state after receiving success response' here] end

		resetPasswordComponent.resetPasswordForm.patchValue({
			'password': TEST_PASSWORD,
			'confirmPassword': TEST_PASSWORD
		});

		resetPasswordComponentFixture.detectChanges();

		const successResponse$ = cold('---x|', {
			x: {
				status: 200,
				statusText: 'OK',
				body: {
					id: uuid.v1(),
					username: TEST_USERNAME,
					groups: ['TESTER']
				}
			}
		});

		const toastrSuccess = spyOn(toastrService, 'success');

		authenticationService.resetPassword.and.returnValue(successResponse$);

		resetPasswordComponent.onResetPasswordClicked();
		resetPasswordComponentFixture.detectChanges();

		getTestScheduler().flush();
		// Check whether success is called redirect
		expect(routerStore.dispatch).toHaveBeenCalledWith(expectedRouterStateAfterReset);
		expect(toastrSuccess).toHaveBeenCalledWith('Password is successfully reset');

		// % protected region % [Add any additional logic for 'should update state after receiving success response' here] off begin
		// % protected region % [Add any additional logic for 'should update state after receiving success response' here] end
	});

	it('should update state after receiving error', () => {
		// % protected region % [Add any additional logic before main logic for 'should update state after receiving error' here] off begin
		// % protected region % [Add any additional logic before main logic for 'should update state after receiving error' here] end

		resetPasswordComponent.resetPasswordForm.patchValue({
			'password': TEST_PASSWORD,
			'confirmPassword': TEST_PASSWORD
		});

		const updatePasswordButton = resetPasswordComponentFixture.debugElement
			.queryAll(By.css('button'))
			.find((button) => button.nativeElement.textContent.trim() === 'Update Password');

		resetPasswordComponentFixture.detectChanges();

		const failResponse$ = cold('#|', null, new HttpErrorResponse({
			status: 400,
			error: {
				error: 'missing_arguments',
				message: 'Token is missing from the request.'
			}
		}));

		authenticationService.resetPassword.and.returnValue(failResponse$);

		resetPasswordComponent.onResetPasswordClicked();
		resetPasswordComponentFixture.detectChanges();

		getTestScheduler().flush();
		resetPasswordComponentFixture.detectChanges();

		// Check whether success is called redirect
		expect(routerStore.dispatch).not.toHaveBeenCalledWith(expectedRouterStateAfterReset);
		expect(resetPasswordComponent.sendingRequest).toBeFalsy();
		resetPasswordComponentFixture.detectChanges();
		expect(updatePasswordButton.nativeElement.disabled).toBeFalsy();

		// % protected region % [Add any additional logic for 'should update state after receiving error' here] off begin
		// % protected region % [Add any additional logic for 'should update state after receiving error' here] end
	});

	// % protected region % [Add any additional tests here] off begin
	// % protected region % [Add any additional tests here] end
});