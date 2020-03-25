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
import {RouterReducerState} from '@ngrx/router-store';
import {initialRouterState, RouterState} from '../../../../models/model.state';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonComponentModule} from '../../../components/common.component.module';
import {CookieService} from 'ngx-cookie-service';
import {Store} from '@ngrx/store';
import {ForgottenPasswordComponent} from './forgotten-password.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {ButtonGroupComponent} from '../../../components/buttonGroup/button.group.component';
import { cold, getTestScheduler } from 'jasmine-marbles';
import {ButtonComponent} from '../../../components/button/button.component';
import SpyObj = jasmine.SpyObj;

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

describe('Forgotten Password Component', () => {

	const TEST_USERNAME = 'test@example.com';

	let routerStore: MockStore<{ router: RouterReducerState<RouterState> }>;
	let httpMock: HttpTestingController;
	let httpClient: HttpClient;

	let forgottenPasswordComponentFixture: ComponentFixture<ForgottenPasswordComponent>;
	let forgottenPasswordComponent: ForgottenPasswordComponent;

	let authenticationService: SpyObj<AuthenticationService>;

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	beforeEach(() => {
		authenticationService = jasmine.createSpyObj('AuthenticationService', ['requestResetPassword']);

		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes([
					{
						path: 'forgotten-password',
						component: ForgottenPasswordComponent
					},
					// % protected region % [Add any additional routes here] off begin
					// % protected region % [Add any additional routes here] end
				]),
				CommonModule,
				ReactiveFormsModule,
				CommonComponentModule,
				HttpClientTestingModule,
				// % protected region % [Add any additional imports here] off begin
				// % protected region % [Add any additional imports here] end
			],
			declarations: [
				ForgottenPasswordComponent,
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
				{ provide: AuthenticationService, useValue: authenticationService},
				// % protected region % [Add any additional providers here] off begin
				// % protected region % [Add any additional providers here] end
			],
		});

		routerStore = TestBed.get<Store<{ router: RouterReducerState<RouterState> }>>(Store);
		httpMock = TestBed.get(HttpTestingController);
		httpClient = TestBed.get(HttpClient);

		forgottenPasswordComponentFixture = TestBed.createComponent(ForgottenPasswordComponent);
		forgottenPasswordComponent = forgottenPasswordComponentFixture.componentInstance;
		forgottenPasswordComponentFixture.detectChanges();

		// % protected region % [Add any additional logic before each test starting here] off begin
		// % protected region % [Add any additional logic before each test starting here] end
	});

	afterEach(() => {

		localStorage.clear();

		if (forgottenPasswordComponentFixture.nativeElement instanceof HTMLElement) {
			(forgottenPasswordComponentFixture.nativeElement as HTMLElement).remove();
		}

		// % protected region % [Add any additional logic after each test finished here] off begin
		// % protected region % [Add any additional logic after each test finished here] end
	});

	it('should create normally', () => {

		expect(forgottenPasswordComponent).not.toBeNull();

		// % protected region % [Add any additional logic for 'should create normally' here] off begin
		// % protected region % [Add any additional logic for 'should create normally' here] end
	});

	it('should have Reset Password title with correct dom structure', () => {

		const titleElements:DebugElement[] = forgottenPasswordComponentFixture.debugElement.queryAll(By.css('h2'));

		expect(titleElements.length).toEqual(1, 'Should have 1 h2 title element in the dom');

		const titleElement: DebugElement = titleElements[0];

		expect(titleElement.nativeElement.textContent.trim()).toEqual('Reset Password');

		// % protected region % [Add any additional logic for 'should have Reset Password title with correct dom structure' here] off begin
		// % protected region % [Add any additional logic for 'should have Reset Password title with correct dom structure' here] end
	});

	it('should have form element with correct dom structure', () => {
		const formElements:DebugElement[] = forgottenPasswordComponentFixture.debugElement.queryAll(By.css('form'));

		expect(formElements.length).toEqual(1, 'Should have 1 form element in the dom');

		const formElement: DebugElement = formElements[0];

		expect(formElement.nativeElement.className.split(' ')).toContain('reset-password', 'Form element class name not satisfies standard');

		// % protected region % [Add any additional logic for 'should have form element with correct dom structure' here] off begin
		// % protected region % [Add any additional logic for 'should have form element with correct dom structure' here] end
	});

	it('should have input elements with correct dom structure',() => {
		const textFieldElements:DebugElement[] = forgottenPasswordComponentFixture.debugElement.queryAll(By.css('cb-textfield'));

		expect(textFieldElements.length).toEqual(1, 'Should have 1 textfield element in the dom');

		// Check input and dom inside the input
		const textFieldElement: DebugElement = textFieldElements[0];
		expect(textFieldElement.nativeElement.className.split(' ')).toContain('input-group--is-required');

		const labelElement: DebugElement = textFieldElement.query(By.css('label'));
		const inputElement: DebugElement = textFieldElement.query(By.css('input'));

		expect(labelElement.nativeElement.textContent.trim()).toBe('Email Address');
		expect(inputElement.nativeElement.placeholder).toBe('Enter your email address here');

		// % protected region % [Add any additional logic for 'should have input elements with correct dom structure' here] off begin
		// % protected region % [Add any additional logic for 'should have input elements with correct dom structure' here] end

	});

	it('should have buttons with correct class', () => {
		// % protected region % [Add any additional logic before main logic for for 'should have buttons with correct class' here] off begin
		// % protected region % [Add any additional logic before main logic for for 'should have buttons with correct class' here] end		

		// Check buttons
		const buttonGroupElement: DebugElement = forgottenPasswordComponentFixture.debugElement.query(By.directive(ButtonGroupComponent));

		const buttonElements: DebugElement[] = buttonGroupElement.queryAll(By.directive(ButtonComponent));
		expect(buttonElements.length).toBe(2, 'Should have 2 buttons in button group');

		const resetButton = buttonElements[0];
		const cancelButton = buttonElements[1];

		const expectedResetButtonClass = ['btn', 'btn--md'];
		const actualResetButtonClass = resetButton.nativeElement.className.split(' ');

		expect(expectedResetButtonClass.every(buttonClass => actualResetButtonClass.includes(buttonClass))).toBeTruthy('Reset button not matches class names in standard');

		const expectedCancelButtonClass = ['btn', 'btn--md', 'btn--secondary'];
		const actualCancelButtonClass = cancelButton.nativeElement.className.split(' ');

		expect(expectedCancelButtonClass.every(buttonClass => actualCancelButtonClass.includes(buttonClass))).toBeTruthy('Cancel button not matches class names in standard');

		// % protected region % [Add any additional logic for 'should have buttons with correct class' here] off begin
		// % protected region % [Add any additional logic for 'should have buttons with correct class' here] end		
	});

	it('should call reset password function when click button with valid form', () => {
		// % protected region % [Add any additional logic before main logic for for 'should call reset password function when click button with valid form' here] off begin
		// % protected region % [Add any additional logic before main logic for for 'should call reset password function when click button with valid form' here] end		

		forgottenPasswordComponent.sendEmailForm.patchValue({
			'email': TEST_USERNAME
		});

		forgottenPasswordComponentFixture.detectChanges();

		const resetPasswordButton = forgottenPasswordComponentFixture.debugElement
			.queryAll(By.css('button'))
			.find((button) => button.nativeElement.textContent.trim() === 'Reset Password');

		spyOn(forgottenPasswordComponent, 'onSendResetPasswordEmailClicked');

		resetPasswordButton.triggerEventHandler('click', null);

		forgottenPasswordComponentFixture.detectChanges();

		forgottenPasswordComponentFixture.whenStable().then(() => {
			expect(forgottenPasswordComponent.onSendResetPasswordEmailClicked).toHaveBeenCalled();
		});

		// % protected region % [Add any additional logic for 'should call reset password function when click button with valid form' here] off begin
		// % protected region % [Add any additional logic for 'should call reset password function when click button with valid form' here] end		
	});

	it('should not call reset password function when click button with invalid form', () => {
		// % protected region % [Add any additional logic for 'should not call reset password function when click button with valid form' here] off begin
		// % protected region % [Add any additional logic for 'should not call reset password function when click button with valid form' here] end		

		forgottenPasswordComponentFixture.detectChanges();

		const resetPasswordButton = forgottenPasswordComponentFixture.debugElement
			.queryAll(By.css('button'))
			.find((button) => button.nativeElement.textContent.trim() === 'Reset Password');

		spyOn(forgottenPasswordComponent, 'onSendResetPasswordEmailClicked');

		resetPasswordButton.triggerEventHandler('click', null);

		forgottenPasswordComponentFixture.detectChanges();

		forgottenPasswordComponentFixture.whenStable().then(() => {
			expect(forgottenPasswordComponent.onSendResetPasswordEmailClicked).toHaveBeenCalledTimes(0);
		});
		
		// % protected region % [Add any additional logic for 'should not call reset password function when click button with valid form' here] off begin
		// % protected region % [Add any additional logic for 'should not call reset password function when click button with valid form' here] end		
	});

	it('should component update state when button is clicked', () => {
		// % protected region % [Add any additional logic before main logic for for 'should component update state when button is clicked' here] off begin
		// % protected region % [Add any additional logic before main logic for for 'should component update state when button is clicked' here] end		

		forgottenPasswordComponent.sendEmailForm.patchValue({
			'email': TEST_USERNAME
		});

		forgottenPasswordComponentFixture.detectChanges();

		const resetPasswordButton = forgottenPasswordComponentFixture.debugElement
			.queryAll(By.css('button'))
			.find((button) => button.nativeElement.textContent.trim() === 'Reset Password');

		const successResponse$ = cold('---x|', {
			x: {
				status: 200,
				statusText: 'OK'
			}
		});

		authenticationService.requestResetPassword.and.returnValue(successResponse$);

		forgottenPasswordComponent.onSendResetPasswordEmailClicked();
		forgottenPasswordComponentFixture.detectChanges();

		// Test the status before result return
		expect(forgottenPasswordComponent.sendingEmail).toBeTruthy();
		expect(resetPasswordButton.nativeElement.disabled).toBeTruthy();
		expect(forgottenPasswordComponent.emailSent).toBeFalsy();

		// Check whether request reset password function has been called with value from form
		expect(authenticationService.requestResetPassword).toHaveBeenCalledWith(TEST_USERNAME);
		
		// % protected region % [Add any additional logic for 'should component update state when button is clicked' here] off begin
		// % protected region % [Add any additional logic for 'should component update state when button is clicked' here] end		
	});

	it('should component update state after receiving success response', () => {
		// % protected region % [Add any additional logic before main logic for for 'should component update state after receiving success response' here] off begin
		// % protected region % [Add any additional logic before main logic for for 'should component update state after receiving success response' here] end		

		forgottenPasswordComponent.sendEmailForm.patchValue({
			'email': TEST_USERNAME
		});

		forgottenPasswordComponentFixture.detectChanges();

		const successResponse$ = cold('---x|', {
			x: {
				status: 200,
				statusText: 'OK'
			}
		});

		authenticationService.requestResetPassword.and.returnValue(successResponse$);

		forgottenPasswordComponent.onSendResetPasswordEmailClicked();
		forgottenPasswordComponentFixture.detectChanges();

		// Flush observable event
		getTestScheduler().flush();

		expect(forgottenPasswordComponent.sendingEmail).toBeFalsy();
		expect(forgottenPasswordComponent.emailSent).toBeTruthy();

		// % protected region % [Add any additional logic for 'should component update state after receiving success response' here] off begin
		// % protected region % [Add any additional logic for 'should component update state after receiving success response' here] end		
	});

	it('should component update state after receiving error', () => {
		// % protected region % [Add any additional logic before main logic for 'should component update state after receiving error' here] off begin
		// % protected region % [Add any additional logic before main logic for 'should component update state after receiving error' here] end		

		forgottenPasswordComponent.sendEmailForm.patchValue({
			'email': TEST_USERNAME
		});

		forgottenPasswordComponentFixture.detectChanges();

		const failResponse$ = cold('---#|', null, new HttpErrorResponse({
			status: 400,
			error: {
				error: 'unknown_user',
				error_description: 'Could not find the user. Please check your username.'
			}
		}));

		authenticationService.requestResetPassword.and.returnValue(failResponse$);

		forgottenPasswordComponent.onSendResetPasswordEmailClicked();
		forgottenPasswordComponentFixture.detectChanges();

		// Flush observable event
		getTestScheduler().flush();

		expect(forgottenPasswordComponent.sendingEmail).toBeFalsy();
		expect(forgottenPasswordComponent.emailSent).toBeFalsy();

		// % protected region % [Add any additional logic for 'should component update state after receiving error' here] off begin
		// % protected region % [Add any additional logic for 'should component update state after receiving error' here] end		
	});

	it('should display email sent view after email sent with correct dom', () => {
		// % protected region % [Add any additional logic before main logic for 'should display email sent view after email sent with correct dom' here] off begin
		// % protected region % [Add any additional logic before main logic for 'should display email sent view after email sent with correct dom' here] end		

		// Stimulate email is already sent
		forgottenPasswordComponent.emailSent = true;
		forgottenPasswordComponentFixture.detectChanges();

		// Check the dom structure
		const rootElement = forgottenPasswordComponentFixture.debugElement.query(By.css('.reset-password'));

		expect(rootElement).not.toBeNull('Root dom should have class reset-password');

		const textElements = rootElement.queryAll(By.css('p'));
		expect(textElements.length).toEqual(2, 'Should have two p tag in the dom');
		expect(textElements[0].nativeElement.textContent.trim()).toBe('You have a successfully reset your password.');
		expect(textElements[1].nativeElement.textContent.trim()).toBe('Please check your email to reset your password.');

		// Check return to login button
		const loginButton = rootElement.query(By.css('a'));
		expect(loginButton.nativeElement.textContent.trim()).toBe('Back to login', 'Login button content not matched');
		expect(loginButton.attributes['ng-reflect-router-link']).toBe('/login', 'Url should be /login');
		
		// % protected region % [Add any additional logic for 'should display email sent view after email sent with correct dom' here] off begin
		// % protected region % [Add any additional logic for 'should display email sent view after email sent with correct dom' here] end		
	});

	// % protected region % [Add any additional tests here] off begin
	// % protected region % [Add any additional tests here] end
});

