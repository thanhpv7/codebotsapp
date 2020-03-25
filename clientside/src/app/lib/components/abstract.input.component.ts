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

import {HostBinding, Input, OnInit, OnChanges, AfterViewInit, SimpleChanges, Component, Injector, Optional} from '@angular/core';
import {AbstractComponent} from './abstract.component';
import {FormControl, FormGroup, NgControl, ValidationErrors} from '@angular/forms';
import {ValidationService} from '../services/validation/validation.service';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * The Type of the input element to display.
 */
export enum ElementType {
	INPUT = 'input',
	TEXTAREA = 'textarea',
	CHECKBOX = 'checkbox',
	DROPDOWN = 'dropdown',
	ENUM = 'enum',
	DATE = 'date',
	DATETIME = 'datetime',
	TIME = 'time',
	NUMBER = 'number',
	FILE = 'file',
	RADIO_GROUP = 'radio-group',
	PASSWORD = 'password',
	// % protected region % [Add any additional enum literals for the element type here] off begin
	// % protected region % [Add any additional enum literals for the element type here] end
}

/**
 * The type of the input component. Could be set as inline or block.
 */
export enum InputComponentDisplayType {
	INLINE = 'inline',
	BLOCK = 'block'
}

/**
 * The type of the input component. Could be set as input group or input
 * This would determine the prefix class and dom structure of the element
 */
export enum InputClassPrefix {
	INPUT_GROUP = 'input-group-wrapper',
	INPUT = 'input-group',
}

/**
 * Configuration object of the input component.
 * Can be used to config the @input of the commponent rather than pass single field
 */
export interface AbstractInputConfig {
	id?: string,
	label?: string
}

/**
 * Component to display the error messages in the angular
 */
@Component({
	selector: 'p[cb-input-errorMessage]',
	template: `{{ errorMessage }}`,
})
export class InputErrorMessageComponent extends AbstractComponent implements OnChanges{

	/**
	 * SCSS class of the error message group
	 */
	@HostBinding('class')
	get errorMessageClass() {
		let classString = this.className + ' input-group__error-text';

		// % protected region % [Add any default classes here] off begin
		// % protected region % [Add any default classes here] end

		return classString;
	}

	/**
	 * Text of the error message to be displayed
	 */
	@Input()
	errorMessage: string;

	/**
	 * Types of the error, which is the key in ValidationErrors in angular
	 */
	@Input()
	errorType: string;

	/**
	 * Value of the ValidationErrors in angular
	 */
	@Input()
	errorValue: any;

	/**
	 * Name of the input field link to the error message
	 */
	@Input()
	name: string;

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	/**
	 * Default constructor for the input error
	 */
	constructor() {
		// % protected region % [Add any additional constructor logic before default process here] off begin
		// % protected region % [Add any additional constructor logic before default process here] end

		super();

		// % protected region % [Add any additional constructor logic before default process here] off begin
		// % protected region % [Add any additional constructor logic before default process here] end
	}

	// % protected region % [Add any additional constructor here] off begin
	// % protected region % [Add any additional constructor here] end

	/**
	 * Onchange function ,call when Input is changed
	 */
	ngOnChanges(changes: SimpleChanges): void {
		// % protected region % [Add any additional logic before onChange] off begin
		// % protected region % [Add any additional logic before onChange] end

		this.errorMessage = ValidationService.matchErrorMessage(this.errorType, this.errorValue, this.name);

		// % protected region % [Add any additional logic before onChange] off begin
		// % protected region % [Add any additional logic before onChange] end
	}

	// % protected region % [Add any additional methods here] off begin
	// % protected region % [Add any additional methods here] end
}

/**
 * Abstract class used as the base for every input component in the application.
 */
export abstract class AbstractInputComponent extends AbstractComponent implements OnInit, OnChanges, AfterViewInit {
	/**
	 * The class string of the component
	 */
	@HostBinding('class')
	get componentClass() {
		return this.classes.join(' ');
	}

	/**
	 * Classes for the component
	 */
	private classes: string[] = [];


	/**
	 * Prefix of the classes, overwrite this in the sub classes
	 */
	protected abstract classPrefix: InputClassPrefix;

	/**
	 * The type of the input component
	 */
	protected abstract componentType: string;

	/**
	 * The id of this input element.
	 */
	@HostBinding('id')
	@Input()
	id: string;

	/**
	 * The aria live attribute for accessibility
	 */
	@HostBinding('attr.aria-live')
	ariaLive = 'assertive';

	/**
	 * Wehter the input field is required to fill
	 */
	@Input()
	isRequired: boolean = false;

	/**
	 * Whether the input field is readonly
	 */
	@Input()
	isReadOnly: boolean = false;

	/**
	 * Label string to be displayed.
	 */
	@Input()
	label: string;

	/**
	 * Whether label is visible. Default to be true
	 * If set to false, label tag would be remove. and aria-label would be set to the input field
	 */
	@Input('labelVisible')
	isLabelVisible: boolean = true;

	/**
	 * Tooltip of the input element
	 */
	@Input()
	tooltip: string;

	/**
	 * Custom Name field of the input
	 */
	@Input()
	name: string;

	/**
	 * Value to use in the component
	 * This is used in template driven form
	 * And this used when the formControl and formControlName is not set
	 */
	@Input()
	value: any;

	/**
	 * Form Control of the input
	 */
	ngControl: NgControl;

	/**
	 * Whether the page has been changed
	 */
	dirty: boolean;

	/**
	 * The validation errors
	 */
	@Input()
	validationErrors: ValidationErrors;

	/**
	 * Whether the input is display in block or inline
	 */
	@Input()
	displayType: InputComponentDisplayType = InputComponentDisplayType.BLOCK;

	/**
	 * The id of this input field in the component
	 * The value is [id]-fields
	 */
	get fieldId() {
		return `${this.id}-field`;
	}

	/**
	 * Tooltip of the input element
	 * The value is [id]-tooltip
	 */
	get tooltipId() {
		return `${this.id}-tooltip`;
	}

	/**
	 * The scss class indicates display as block or other type
	 */
	get displayTypeClass() {
		return `${this.classPrefix}-${this.displayType}`;
	}

	/**
	 * The scss class indicates the type of the input component
	 * textfield, checobox etc
	 */
	get componentTypeClass() {
		return `${this.classPrefix}__${this.componentType}`;
	}

	/**
	 * The scss class for the required input element
	 */
	get requiredClass() {
		return `${this.classPrefix}--is-required`;
	}

	/**
	 * The scss class for the invalid input element
	 */
	get invalidClass() {
		return `${this.classPrefix}--error`;
	}

	/**
	 * The scss class for the readonly or disabled input element
	 */
	get staticClass() {
		return `${this.classPrefix}--static`;
	}

	/**
	 * The scss class for the readonly or empty input element
	 */
	get emptyClass() {
		return `${this.classPrefix}--empty`;
	}

	/**
	 * The scss class for the header fo the input group
	 */
	get headerClass() {
		return `${this.componentTypeClass}-header`;
	}

	/**
	 * The method to be called in order to update ngModel
	 */
	controlValueAccessorChangeFn: (value: any) => void = () => {};

	/**
	 * onTouch function registered via registerOnTouch (ControlValueAccessor).
	 * @docs-private
	 */
	onTouched: () => any = () => {};

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		@Optional() protected injector?: Injector
	) {
		super();
	}

	/**
	 * Initialize the states of the input components
	 */
	public ngOnInit(): void {
		// % protected region % [Add any onInit logic here here] off begin
		// % protected region % [Add any onInit logic here here] end
	}

	/**
	 * Call when the @Input fields change
	 */
	public ngOnChanges(changes: SimpleChanges): void {
		// % protected region % [Add any additional ngOnChange logic before default process here] off begin
		// % protected region % [Add any additional ngOnChange logic before default process here] end

		this.prepareFields();

		// % protected region % [Add any additional ngOnChange logic after default process here] off begin
		// % protected region % [Add any additional ngOnChange logic after default process here] end
	}

	/**
	 * Call when the view finished the initliliztion
	 */
	ngAfterViewInit() {
		// % protected region % [Add any additional ngAfterViewInit logic before default process here] off begin
		// % protected region % [Add any additional ngAfterViewInit logic before default process here] end

		this.subscribeForValidationError();

		// % protected region % [Add any additional ngAfterViewInit logic after default process here] off begin
		// % protected region % [Add any additional ngAfterViewInit logic after default process here] end
	}

	/**
	 * Initialize the fields and classes
	 */
	protected prepareFields(): void {
		// % protected region % [Add any additional ngOnChange logic before prepare fields here] off begin
		// % protected region % [Add any additional ngOnChange logic before prepare fields here] end

		// check required fields
		if (this.label == null) {
			console.error('Label is required in your input component');
		}

		if (this.id == null) {
			console.error('id is required in your input component', new Error().stack);
		}

		// initialize the classes
		this.classes = [
			this.classPrefix,
			this.displayTypeClass,
			this.componentTypeClass,
			// % protected region % [Add any additional scss class] off begin
			// % protected region % [Add any additional scss class] end
		];

		if (this.className != null) {
			this.classes.push(this.className);
		}

		if (this.isRequired) {
			this.classes.push(this.requiredClass);
		}

		if (this.validationErrors) {
			this.classes.push(this.invalidClass);
		}

		if (this.isReadOnly || this.isDisabled) {
			this.classes.push(this.staticClass);
		}

		if (!this.value || (Array.isArray(this.value) && this.value.length === 0)) {
			this.classes.push(this.emptyClass);
		}

		// % protected region % [Add any additional ngOnChange logic after prepare fields here] off begin
		// % protected region % [Add any additional ngOnChange logic after prepare fields here] end
	}

	/**
	 * Try to subscribe the change for the validation error
	 * This would be useful to lively show the error
	 */
	protected subscribeForValidationError() {
		// inject the ngControl to access the validation errors
		if (this.injector) {
			this.ngControl = this.injector.get(NgControl, null);
			if (this.ngControl && this.ngControl.control) {
				// Bind to the value changes
				// Need to listen to value changes to handle with multiple validators
				this.ngControl.control.valueChanges.subscribe(() => {
					// When value change, this should always be true
					this.dirty = true;
					this.validationErrors = this.ngControl.control.errors;
					this.prepareFields();
				});
			}
		}
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
