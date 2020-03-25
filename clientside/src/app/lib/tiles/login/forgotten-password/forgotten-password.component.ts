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
import {ToastrService} from 'ngx-toastr';
import {AuthenticationService} from '../../../services/authentication/authentication.service';
import {Store} from '@ngrx/store';
import {RouterState} from '../../../../models/model.state';
import {ButtonAccentColour} from '../../../components/button/button.component';


// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Component({
	selector: 'cb-forgotten-password',
	templateUrl: './forgotten-password.component.html',
	styleUrls: ['./forgotten-password.component.scss']
})
export class ForgottenPasswordComponent {

	ButtonAccentColour = ButtonAccentColour;

	/**
	 * Whether email is sent and waiting for response
	 * @type {boolean}
	 */
	sendingEmail: boolean = false;

	/**
	 * Whether receive successful response
	 * @type {boolean}
	 */
	emailSent: boolean = false;

	/**
	 * Form for email
	 * @type {FormGroup}
	 */
	sendEmailForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
	});

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		// % protected region % [Add any additional constructor args here] off begin
		// % protected region % [Add any additional constructor args here] end
		private readonly authenticationService: AuthenticationService,
		private readonly routerStore: Store<{ router: RouterState }>) {

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	/**
	 * Method be called after send reset password email button being clicked
	 */
	onSendResetPasswordEmailClicked() {
		// % protected region % [Add any custom logic here before onSendResetPasswordEmailClicked] off begin
		// % protected region % [Add any custom logic here before onSendResetPasswordEmailClicked] end

		this.sendingEmail = true;
		let username = this.sendEmailForm.getRawValue().email;

		this.authenticationService.requestResetPassword(username).subscribe(
			(response) => {
				this.sendingEmail = false;
				this.emailSent = true;
				// % protected region % [Add any custom logic here after receiving successful response] off begin
				// % protected region % [Add any custom logic here after receiving successful response] end
			},
			(error) => {
				this.sendingEmail = false;
				// % protected region % [Add any custom logic here after receiving failed response] off begin
				// % protected region % [Add any custom logic here after receiving failed response] end
			}
		);

		// % protected region % [Add any custom logic here after onSendResetPasswordEmailClicked] off begin
		// % protected region % [Add any custom logic here after onSendResetPasswordEmailClicked] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}