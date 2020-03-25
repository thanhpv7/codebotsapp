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

import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {Params, Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication/authentication.service';
import {TextfieldType} from '../../../components/textfield/textfield.component';
import {Store} from '@ngrx/store';
import {RouterState} from '../../../../models/model.state';
import {getRouterState} from '../../../../models/model.selector';
import {NavigateRoutingAction} from '../../../routing/routing.action';
import {passwordVerifyTest} from '../../../services/validation/validation.service';
import * as routerAction from '../../../routing/routing.action';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Component({
	selector: 'cb-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

	TextfieldType = TextfieldType;

	/**
	 * Token to reset password.
	 */
	token: string;

	/**
	 * Username which is matched to token
	 */
	username: string;

	/**
	 * State of Router
	 */
	routerState$: Observable<RouterState>;

	/**
	 * Query Parameters extract from Router State
	 */
	queryParams: Params;

	/**
	 * Default Url to redirect to after login
	 */
	defaultUrlToRedirectTo = '';

	/**
	 * Whether is sending request to serverside
	 */
	sendingRequest = false;

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	resetPasswordForm = new FormGroup({
		password: new FormControl('', [Validators.required, Validators.minLength(10)]),
		confirmPassword: new FormControl('', [Validators.required, passwordVerifyTest()]),
		// % protected region % [Add any additional form controls here] off begin
		// % protected region % [Add any additional form controls here] end
	});

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
		private readonly authenticationService: AuthenticationService,
		private readonly toastrService: ToastrService,
		private readonly routerStore: Store<{ router: RouterState }>) {

		// % protected region % [Add any additional logic before main process of constructor here] off begin
		// % protected region % [Add any additional logic before main process of constructor here] end

		this.routerState$ = this.routerStore.select(getRouterState);

		let routerSubscription = this.routerState$.subscribe(routerState => {

			this.queryParams = routerState.queryParams;
			this.token = this.queryParams['token'];
			this.username = this.queryParams['username'];

			if (!this.token || !this.username) {
				// Unsubscribe to avoid infinite loop
				this.routerStore.dispatch(new NavigateRoutingAction(['/login']));
				routerSubscription.unsubscribe();
			}

			// % protected region % [Add additional logic in routerSubscription here] off begin
			// % protected region % [Add additional logic in routerSubscription here] end
		});

		// % protected region % [Add additional logic in constructor here] off begin
		// % protected region % [Add additional logic in constructor here] end
	}

	/**
	 * Event be triggered when update password button is clicked
	 * Will send reset password request to server side.
	 */
	onResetPasswordClicked() {
		// % protected region % [Add additional logic before main process in onResetPasswordClicked here] off begin
		// % protected region % [Add additional logic before main process in onResetPasswordClicked here] end

		let password = this.resetPasswordForm.getRawValue().password;
		this.sendingRequest = true;

		this.authenticationService.resetPassword(this.username, this.token, password).subscribe(
			(response) => {

				this.toastrService.success('Password is successfully reset');

				let redirectUrl = this.queryParams.redirectTo ?
					this.queryParams.redirectTo :
					this.defaultUrlToRedirectTo;

				// % protected region % [Add any additional logic before moving to the next page here] off begin
				// % protected region % [Add any additional logic before moving to the next page here] end

				this.routerStore.dispatch(new routerAction.NavigateRoutingAction([redirectUrl]));
			},
			(error) => {
				this.sendingRequest = false;

				// % protected region % [Add additional logic for error handler here] off begin
				// % protected region % [Add additional logic for error handler here] end
			}
		)

		// % protected region % [Add additional logic in onResetPasswordClicked here] off begin
		// % protected region % [Add additional logic in onResetPasswordClicked here] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}