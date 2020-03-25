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

import {CommonModule, Location} from '@angular/common';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Store} from '@ngrx/store';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {ModalDialogModule, ModalDialogService} from 'ngx-modal-dialog';
import {RegisterSelectComponent} from './register-select.component';
import {CommonComponentModule} from '../../../components/common.component.module';
import {NavigateRoutingAction} from '../../../routing/routing.action';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

describe('Register Select Tile', () => {

	const userTypes = [
		// % protected region % [Add any additional user types here] off begin
		// % protected region % [Add any additional user types here] end
	];

	let store: MockStore<any>;
	let registerSelectFixture: ComponentFixture<RegisterSelectComponent>;
	let registerSelectComponent: RegisterSelectComponent;
	let router: Router;
	let location: Location;

	// % protected region % [Add any additional variables here] off begin
	// % protected region % [Add any additional variables here] end

	beforeEach(() => {
		// % protected region % [Add any additional setup before the main body here] off begin
		// % protected region % [Add any additional setup before the main body here] end

		TestBed.configureTestingModule({
			declarations: [
				RegisterSelectComponent,
				// % protected region % [Add any additional declarations here] off begin
				// % protected region % [Add any additional declarations here] end
			],
			imports: [
				CommonModule,
				RouterTestingModule.withRoutes([
					{
						path: 'register',
						children: [
							{
								path: '',
								redirectTo: 'select',
								pathMatch: 'full'
							},
							{
								path: 'select',
								component: RegisterSelectComponent
							}
						]
					}
				]),
				ReactiveFormsModule,
				CommonComponentModule,
				HttpClientTestingModule,
				ModalDialogModule.forRoot(),
				// % protected region % [Add any additional test bed imports here] off begin
				// % protected region % [Add any additional test bed imports here] end
			],
			providers: [
				ModalDialogService,
				provideMockStore({
					initialState: {
						// % protected region % [Add any custom NGRX initial state here] off begin
						// % protected region % [Add any custom NGRX initial state here] end
					}
				})
			],
			// % protected region % [Add any additional test bed configuration here] off begin
			// % protected region % [Add any additional test bed configuration here] end
		});

		store = TestBed.get(Store);
		registerSelectFixture = TestBed.createComponent(RegisterSelectComponent);
		registerSelectComponent = registerSelectFixture.componentInstance;
		registerSelectFixture.detectChanges();
		router = TestBed.get(Router);
		location = TestBed.get(Location);

		// % protected region % [Add any additional setup after the main body here] off begin
		// % protected region % [Add any additional setup after the main body here] end
	});

	it('should redirect to /register/select when navigate to /register', fakeAsync(() => {
		// % protected region % [Add any additional logic for "should redirect to /register/select when navigate to /register" before the main body here] off begin
		// % protected region % [Add any additional logic for "should redirect to /register/select when navigate to /register" before the main body here] end

		router.navigate(['/register']);
		tick();
		expect(location.path()).toEqual('/register/select');

		// % protected region % [Add any additional logic for "should redirect to /register/select when navigate to /register" after the main body here] off begin
		// % protected region % [Add any additional logic for "should redirect to /register/select when navigate to /register" after the main body here] end
	}));

	it('should have correct form tag', () => {
		// % protected region % [Add any additional logic for "should have correct form tag" before the main body here] off begin
		// % protected region % [Add any additional logic for "should have correct form tag" before the main body here] end

		const formEl: HTMLFormElement = registerSelectFixture.nativeElement.querySelector('form.register.register-user-type');
		expect(formEl).not.toBeNull();

		// % protected region % [Add any additional logic for "should have correct form tag" after the main body here] off begin
		// % protected region % [Add any additional logic for "should have correct form tag" after the main body here] end
	});

	it('should have correct title', () => {
		// % protected region % [Add any additional logic for "should have correct title" before the main body here] off begin
		// % protected region % [Add any additional logic for "should have correct title" before the main body here] end

		const headingEl: HTMLHeadingElement = registerSelectFixture.nativeElement.querySelector('form.register.register-user-type > h2');
		expect(headingEl).not.toBeNull();

		// % protected region % [Add any additional logic for "should have correct title" after the main body here] off begin
		// % protected region % [Add any additional logic for "should have correct title" after the main body here] end
	});

	it('should have correct dropdown', () => {
		// % protected region % [Add any additional logic for "should have correct dropdown" before the main body here] off begin
		// % protected region % [Add any additional logic for "should have correct dropdown" before the main body here] end

		const dropdownEl: HTMLElement = registerSelectFixture.nativeElement.querySelector('form.register.register-user-type > div.input-group__dropdown');
		expect(dropdownEl).not.toBeNull();

		// % protected region % [Add any additional logic for "should have correct dropdown" after the main body here] off begin
		// % protected region % [Add any additional logic for "should have correct dropdown" after the main body here] end
	});

	it('should have correct button group', () => {
		// % protected region % [Add any additional logic for "should have correct button group" before the main body here] off begin
		// % protected region % [Add any additional logic for "should have correct button group" before the main body here] end

		const buttonGroup: HTMLElement = registerSelectFixture.nativeElement.querySelector('form.register.register-user-type > div.btn-group--horizontal');
		expect(buttonGroup).not.toBeNull();

		const buttons = buttonGroup.querySelectorAll<HTMLButtonElement>('button.btn.btn--md');
		expect(buttons.length).toEqual(2);
		expect(buttons[0].textContent).toEqual('Confirm');
		expect(buttons[0].disabled).toBeTruthy();
		expect(buttons[1].textContent).toEqual('Cancel');
		expect(buttons[1].classList.contains('btn--secondary')).toBeTruthy();

		// % protected region % [Add any additional logic for "should have correct button group" after the main body here] off begin
		// % protected region % [Add any additional logic for "should have correct button group" after the main body here] end
	});

	it('should go back to the default page when cancelling while selecting a user type', () => {
		// % protected region % [Add any additional logic for "should go back to the default page when cancelling while selecting a user type" before the main body here] off begin
		// % protected region % [Add any additional logic for "should go back to the default page when cancelling while selecting a user type" before the main body here] end

		const buttonGroup: HTMLElement = registerSelectFixture.nativeElement.querySelector('form.register.register-user-type > div.btn-group--horizontal');
		const buttons = buttonGroup.querySelectorAll<HTMLButtonElement>('button.btn.btn--md');
		const cancelButton = buttons[1];

		cancelButton.dispatchEvent(new Event('click'));

		registerSelectFixture.detectChanges();

		// Need XPath to search for the correct element.
		const modalEl = (registerSelectFixture.nativeElement as HTMLElement).nextElementSibling;
		expect(modalEl).not.toBeNull();
		const yesButton = modalEl.querySelector('div.modal__actions > button:nth-child(1)');
		expect(yesButton.textContent.trim()).toEqual('Yes');

		yesButton.dispatchEvent(new Event('click'));
		registerSelectFixture.detectChanges();

		store.scannedActions$.subscribe(
			action => {
				expect(action instanceof NavigateRoutingAction).toBeTruthy();
				const navAction = action as NavigateRoutingAction;
				expect(navAction.commands).toEqual(['/']);
			}
		);

		// % protected region % [Add any additional logic for "should go back to the default page when cancelling while selecting a user type" after the main body here] off begin
		// % protected region % [Add any additional logic for "should go back to the default page when cancelling while selecting a user type" after the main body here] end
	});

	it('should go back to the register select page if declining cancellation while selecting a user type', () => {
		// % protected region % [Add any additional logic for "should go back to the register select page if declining cancellation while selecting a user type" before the main body here] off begin
		// % protected region % [Add any additional logic for "should go back to the register select page if declining cancellation while selecting a user type" before the main body here] end

		const buttonGroup: HTMLElement = registerSelectFixture.nativeElement.querySelector('form.register.register-user-type > div.btn-group--horizontal');
		const buttons = buttonGroup.querySelectorAll<HTMLButtonElement>('button.btn.btn--md');
		const cancelButton = buttons[1];

		cancelButton.dispatchEvent(new Event('click'));

		registerSelectFixture.detectChanges();

		// Need XPath to search for the correct element.
		const modalEl = (registerSelectFixture.nativeElement as HTMLElement).nextElementSibling;
		expect(modalEl).not.toBeNull();
		const noButton = modalEl.querySelector('div.modal__actions > button:nth-child(2)');
		expect(noButton.textContent.trim()).toEqual('No');
		noButton.dispatchEvent(new Event('click'));

		registerSelectFixture.detectChanges();

		store.scannedActions$.subscribe(
			action => {
				if (action instanceof NavigateRoutingAction) {
					fail('Not supposed to navigate to other pages');
				}
			}
		);

		// % protected region % [Add any additional logic for "should go back to the register select page if declining cancellation while selecting a user type" after the main body here] off begin
		// % protected region % [Add any additional logic for "should go back to the register select page if declining cancellation while selecting a user type" after the main body here] end
	});

	userTypes.forEach(userType => {
		it(`should allow confirmation when select ${userType.key}`, () => {
			// % protected region % [Add any additional logic for "should allow confirmation when select a user type" before the main body here] off begin
			// % protected region % [Add any additional logic for "should allow confirmation when select a user type" before the main body here] end

			const userTypeFormControl = registerSelectComponent.formGroup.get('userType') as FormControl;
			userTypeFormControl.setValue(userType.value);
			userTypeFormControl.markAsDirty();

			registerSelectFixture.detectChanges();

			const buttonGroup: HTMLElement = registerSelectFixture.nativeElement.querySelector('form.register.register-user-type > div.btn-group--horizontal');
			const buttons = buttonGroup.querySelectorAll<HTMLButtonElement>('button.btn.btn--md');
			const confirmButton = buttons[0];
			expect(confirmButton.disabled).toBeFalsy();

			confirmButton.dispatchEvent(new Event('click'));

			store.scannedActions$.subscribe(
				action => {
					expect(action instanceof NavigateRoutingAction).toBeTruthy();
					const navAction = action as NavigateRoutingAction;
					expect(navAction.commands).toEqual([`/register/${userType.value}`]);
				}
			);

			// % protected region % [Add any additional logic for "should allow confirmation when select a user type" after the main body here] off begin
			// % protected region % [Add any additional logic for "should allow confirmation when select a user type" after the main body here] end
		});
	});
});
