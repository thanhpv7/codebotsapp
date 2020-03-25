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

import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AbstractComponent} from '../abstract.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

export interface SelectOption {
	name: string;
	displayName: string;
}

@Component({
	selector: 'cb-combobox',
	templateUrl: './combobox.component.html',
	styleUrls: [
		'./combobox.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class ComboboxComponent extends AbstractComponent implements OnInit {
	@HostBinding('class.input-label-group')
	inputLabelGroupComponentClass = true;

	@HostBinding('class.input-label-group__select-input')
	inputLabelGroupSelectInputComponentClass = true;

	/**
	 * The id of this select box.
	 */
	@Input()
	id: string;

	/**
	 * The string to be displayed on the combobox.
	 */
	@Input()
	label: string;

	labelClasses: string[] = [
		// % protected region % [Add any additional CSS classes for the label here] off begin
		// % protected region % [Add any additional CSS classes for the label here] end
	];

	/**
	 * SCSS classes used to customise the label element.
	 */
	@Input('labelClasses')
	additionalLabelClasses: string | string[] = '';

	selectClasses: string[] = [
		// % protected region % [Add any additional CSS classes for the select here] off begin
		// % protected region % [Add any additional CSS classes for the select here] end
	];

	/**
	 * SCSS classes used to customise the input element.
	 */
	@Input('selectClasses')
	additionalSelectClasses: string | string[] = '';

	/**
	 * Whether the label is visible when the combobox is first displayed.
	 */
	@Input()
	labelVisible: boolean = true;

	/**
	 * All of the options to be displayed for this select box. Note that there always must be at least one option for the
	 * select box since the first option will be emitted upon initialisation.
	 */
	@Input()
	selectOptions: SelectOption[];

	/**
	 * Form group that contains this select box.
	 */
	@Input()
	parentForm: FormGroup;

	/**
	 * Form control for this select box. This value is only used when `parentForm` exists.
	 */
	@Input()
	childFormControlName: string;

	/**
	 * Event emitter triggered whenever this combobox is checked or unchecked.
	 */
	@Output('select')
	selectEventEmitter: EventEmitter<SelectOption> = new EventEmitter();

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	// % protected region % [Add any additional class constructors here] off begin
	// % protected region % [Add any additional class constructors here] end

	ngOnInit() {
		this.onSelect(this.selectOptions[0]);

		if (this.additionalLabelClasses) {
			if (typeof this.additionalLabelClasses === 'string') {
				this.labelClasses.push(...this.additionalLabelClasses.split(' '));
			} else {
				this.labelClasses.push(...this.additionalLabelClasses);
			}
		}

		if (this.additionalSelectClasses) {
			if (typeof this.additionalSelectClasses === 'string') {
				this.selectClasses.push(...this.additionalSelectClasses.split(' '));
			} else {
				this.selectClasses.push(...this.additionalSelectClasses);
			}
		}

		// % protected region % [Add any additional ngOnInit logic here] off begin
		// % protected region % [Add any additional ngOnInit logic here] end
	}

	/**
	 * Triggered whenever this combobox is checked or unchecked.
	 */
	onSelect(newValue: any) {
		// % protected region % [Add any additional onChange logic before emitting events here] off begin
		// % protected region % [Add any additional onChange logic before emitting events here] end

		this.selectEventEmitter.emit(newValue);

		// % protected region % [Add any additional onChange logic after emitted events here] off begin
		// % protected region % [Add any additional onChange logic after emitted events here] end
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
}
