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

import {Component, Input, OnChanges, OnInit, SimpleChanges, forwardRef,
ChangeDetectorRef, Output, QueryList, EventEmitter, AfterViewInit, ViewChildren, Injector} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {AbstractInputComponent, InputClassPrefix} from '../abstract.input.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * ControlValueAccessor for the Checkbox Component
 * Use the ControlValueAccessor to make the component behave like native input element
 */
const CB_CHECKBOX_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => CheckboxComponent),
	multi: true
};

/**
 * Enum define the position of the label
 */
export enum CheckboxLabelPos {
	LEFT = 'left',
	RIGHT = 'right',
}

/**
 * Checkbox component. The dom structure is defined in the standard
 */
@Component({
	selector: 'cb-checkbox,*[cb-checkbox]',
	templateUrl: './checkbox.component.html',
	// use the existing 'formGroup' group in the page
	providers: [CB_CHECKBOX_VALUE_ACCESSOR],
	styleUrls: [
		'./checkbox.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class CheckboxComponent extends AbstractInputComponent implements OnInit, OnChanges, ControlValueAccessor {

	/**
	 * Class prefix of the input
	 */
	protected classPrefix = InputClassPrefix.INPUT;

	/**
	 * The type of the component, which would be used in the css class of the dom
	 */
	protected componentType = 'checkbox';

	/**
	 * Enum to check the position of the label
	 */
	CheckboxLabelPos = CheckboxLabelPos;

	/**
	 * Label position relative to the checkbox.
	 */
	@Input()
	labelPos = CheckboxLabelPos.RIGHT;

	/**
	 * Overwride the value to boolean
	 */
	@Input()
	value: boolean = false;

	/**
	 * Event emitter triggered whenever this checkbox is checked or unchecked.
	 */
	@Output('check')
	isCheckedEmitter: EventEmitter<boolean> = new EventEmitter();

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	/**
	 * Default constructor for the textfield
	 */
	constructor(
		protected  injector: Injector,
		// % protected region % [Add any additional DI here] off begin
		// % protected region % [Add any additional DI here] end
	) {
		// % protected region % [Add any additional constructor logic before default process here] off begin
		// % protected region % [Add any additional constructor logic before default process here] end

		super(injector);

		// % protected region % [Add any additional constructor logic before default process here] off begin
		// % protected region % [Add any additional constructor logic before default process here] end
	}

	// % protected region % [Add any additional class constructors here] off begin
	// % protected region % [Add any additional class constructors here] end

	/**
	 * On Init event, run when the component initialize
	 */
	ngOnInit(): void {
		// % protected region % [Add any additional ngOnInit logic before the main body here] off begin
		// % protected region % [Add any additional ngOnInit logic before the main body here] end

		if (this.value) {
			this.value = false;
		}

		// % protected region % [Add any additional ngOnInit logic after the main body here] off begin
		// % protected region % [Add any additional ngOnInit logic after the main body here] end
	}

	/**
	 * On Change event, run when the @Input change
	 * @param changes changes of the @Input fields
	 */
	ngOnChanges(changes: SimpleChanges): void {
		// % protected region % [Add any additional onChange logic before ngOnChange here] off begin
		// % protected region % [Add any additional onChange logic before ngOnChange here] end

		super.ngOnChanges(changes);

		// % protected region % [Add any additional onChange logic after ngOnChange here] off begin
		// % protected region % [Add any additional onChange logic after ngOnChange here] end
	}

	/**
	 * Sets the model value. Implemented as part of ControlValueAccessor.
	 * This would be called when the value of the ngModel / formControl
	 */
	writeValue(value: any) {
		// % protected region % [Add any additional ngOnChange logic before write value] off begin
		// % protected region % [Add any additional ngOnChange logic before write value] end

		this.value = value;

		// % protected region % [Add any additional ngOnChange logic after write value] off begin
		// % protected region % [Add any additional ngOnChange logic after write value] end
	}

	/**
	 * Registers a callback to be triggered when the model value changes.
	 * Implemented as part of ControlValueAccessor.
	 * @param fn Callback to be registered.
	 */
	registerOnChange(fn: (value: any) => void) {
		// % protected region % [Add any additional logic beforeregister on change] off begin
		// % protected region % [Add any additional logic beforeregister on change] end

		this.controlValueAccessorChangeFn = fn;

		// % protected region % [Add any additional logic after register on change] off begin
		// % protected region % [Add any additional logic after register on change] end
	}

	/**
	 * Registers a callback to be triggered when the control is touched.
	 * Implemented as part of ControlValueAccessor.
	 * @param fn Callback to be registered.
	 */
	registerOnTouched(fn: any) {
		// % protected region % [Add any additional logic beforeregister on touch] off begin
		// % protected region % [Add any additional logic beforeregister on touch] end

		this.onTouched = fn;

		// % protected region % [Add any additional logic after register on touch] off begin
		// % protected region % [Add any additional logic after register on touch] end
	}

	/**
	 * Sets the 'disabled' property on the input element.
	 * This would be set with the form control
	 * @param isDisabled The disabled value
	 */
	 // TODO put this into the parent
	setDisabledState(isDisabled: boolean): void {
		// % protected region % [Add any additional logic before set the disabled state] off begin
		// % protected region % [Add any additional logic before set the disabled state] end

		this.isDisabled = isDisabled;
		this.prepareFields();

		// % protected region % [Add any additional logic after set the disabled state] off begin
		// % protected region % [Add any additional logic after set the disabled state] end
	}

	/**
	 * Event when the checkbox value is changed
	 * @param $event Checkbox change event
	 */
	checkboxInputChange($event) {
		// % protected region % [Add any additional logic before checkbox value change] off begin
		// % protected region % [Add any additional logic before checkbox value change] end

		// assign the value to make sure the value is synced
		this.value = $event.target.checked;
		this.isCheckedEmitter.emit(this.value);
		this.controlValueAccessorChangeFn(this.value);

		// % protected region % [Add any additional logic after checkbox value change] off begin
		// % protected region % [Add any additional logic after checkbox value change] end]
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
}
