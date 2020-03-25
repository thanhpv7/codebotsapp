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

import {Component, HostBinding} from '@angular/core';
import {Toast, ToastrService, ToastPackage} from 'ngx-toastr';
import {ButtonStyle, IconPosition} from '../button/button.component';
import {trigger} from '@angular/animations';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Component({
	selector: 'div[cb-alert]',
	templateUrl: './alert.component.html',
	styleUrls: [
		'./alert.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	animations: [
		// to erase the error message
		// You can also define the custom fly out animation here
		trigger('flyInOut', [
			// % protected region % [Add any logic for flyInOut animation here] off begin
			// % protected region % [Add any logic for flyInOut animation here] end
		]),
		// % protected region % [Add any additional animations here] off begin
		// % protected region % [Add any additional animations here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class AlertComponent extends Toast {
	iconPos = IconPosition;
	buttonStyle = ButtonStyle;

	@HostBinding('attr.aria-live')
	readonly ariaLive: string = 'assertive';

	@HostBinding('attr.role')
	readonly role: string = 'alert';

	@HostBinding('class.alert')
	readonly alertClass: boolean = true;


	/**
	 * Get whether the toaster is disabled
	 */
	get disabledTimeOut(): boolean {
		return this.toastrPackage.config.disableTimeOut;
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		protected readonly toastrService: ToastrService,
		protected readonly toastrPackage: ToastPackage,
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional constructor logic before the main body here] off begin
		// % protected region % [Add any additional constructor logic before the main body here] end

		super(toastrService, toastrPackage);

		// % protected region % [Add any additional constructor logic after the main body here] off begin
		// % protected region % [Add any additional constructor logic after the main body here] end
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
}
