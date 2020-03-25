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

import {Component, ViewContainerRef} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {SimpleModalComponent, ModalDialogService} from 'ngx-modal-dialog';
import {ButtonAccentColour} from '../../../components/button/button.component';
import {NavigateRoutingAction} from '../../../routing/routing.action';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Component({
	selector: 'div[cb-register-select]',
	templateUrl: './register-select.component.html',
	styleUrls: [
		'./register-select.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional configurations here] off begin
	// % protected region % [Add any additional configurations here] end
})
export class RegisterSelectComponent {
	readonly buttonAccentColour = ButtonAccentColour;

	/**
	 * All the user types that can be registered by an anonymous user.
	 */
	readonly userTypes = [
		// % protected region % [Add any additional user types here] off begin
		// % protected region % [Add any additional user types here] end
	];

	/**
	 * Form group used to make sure that the user type is selected before moving on.
	 */
	readonly formGroup = new FormGroup({
		userType: new FormControl('', [Validators.required]),
	});

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		private readonly store: Store<any>,
		private readonly modalService: ModalDialogService,
		private readonly viewRef: ViewContainerRef,
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	/**
	 * Triggered when the user clicks on the Confirm button.
	 */
	onConfirm() {
		// % protected region % [Add any additional logic for onConfirm before the main body here] off begin
		// % protected region % [Add any additional logic for onConfirm before the main body here] end

		this.store.dispatch(new NavigateRoutingAction([`/register/${this.formGroup.get('userType').value}`]));

		// % protected region % [Add any additional logic for onConfirm after the main body here] off begin
		// % protected region % [Add any additional logic for onConfirm after the main body here] end
	}

	/**
	 * Triggered when the user clicks on the Cancel button.
	 */
	onCancel() {
		// % protected region % [Add any additional logic for onCancel before the main body here] off begin
		// % protected region % [Add any additional logic for onCancel before the main body here] end

		this.modalService.openDialog(this.viewRef, {
			data: {
				text: 'Do you want to cancel?'
			},
			settings: {
				closeButtonClass: 'close theme-icon-close',
				modalDialogClass: 'modal-container',
				bodyClass: 'modal__message',
				footerClass: 'modal__actions'
			},
			childComponent: SimpleModalComponent,
			placeOnTop: false,
			title: 'Confirm',
			actionButtons: [
				{
					text: 'Yes',
					onAction: () => {
						// % protected region % [Configure cancel confirmation action here] off begin
						this.store.dispatch(new NavigateRoutingAction(['/']));
						// % protected region % [Configure cancel confirmation action here] end
					},
					buttonClass: 'btn btn--outline'
				},
				{
					text: 'No',
					onAction: () => {
						// % protected region % [Configure cancel rejection action here] off begin
						return true;
						// % protected region % [Configure cancel rejection action here] end
					},
					buttonClass: 'btn btn--outline'
				}
			]
		});

		// % protected region % [Add any additional logic for onCancel after the main body here] off begin
		// % protected region % [Add any additional logic for onCancel after the main body here] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
