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

import {Component, Input, OnChanges, OnInit, SimpleChanges, forwardRef, Injector} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {AbstractInputComponent, AbstractInputConfig, InputClassPrefix} from '../abstract.input.component';
import {PickerType, SelectMode} from 'ng-pick-datetime/date-time/date-time.class';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * ControlValueAccessor for the Datepicker Component
 * Use the ControlValueAccessor to make the component behave like native input element
 */
const CB_DATEPICKER_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DatepickerComponent),
	multi: true
};

/**
 * The configuration for the datepicker
 */
export interface DatepickerConfig extends AbstractInputConfig {
	type: PickerType,
	selectMode?: SelectMode
}

/**
 * Datepicker component. The dom structure is defined in the standard
 */
@Component({
	selector: 'cb-datepicker,*[cb-datepicker]',
	templateUrl: './datepicker.component.html',
	// use the existing 'formGroup' group in the page
	providers: [CB_DATEPICKER_VALUE_ACCESSOR],
	styleUrls: [
		'./datepicker.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class DatepickerComponent extends AbstractInputComponent implements OnInit, OnChanges, ControlValueAccessor {

	/**
	 * Class prefix of the input
	 */
	protected classPrefix = InputClassPrefix.INPUT;

	/**
	 * The type of the component, which would be used in the css class of the dom
	 */
	protected componentType = 'datepicker';

	/**
	 * The Date picker type
	 * Available options inlcludes both | calender | timer
	 * @external https://github.com/DanielYKPan/date-time-picker
	 * @type {PickerType}
	 */
	@Input()
	type: PickerType = 'calendar';

	/**
	 * The select mode to select the date
	 * Available options includes single | range | rangeFrom | rangeTo
	 * @external https://github.com/DanielYKPan/date-time-picker
	 * @type {'single'}
	 */
	@Input()
	selectMode: SelectMode = 'single';

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
		// % protected region % [Add any additional ngOnInit logic here] off begin
		// % protected region % [Add any additional ngOnInit logic here] end
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
	 * Sets the "disabled" property on the input element.
	 * This would be set with the form control
	 * @param isDisabled The disabled value
	 */
	setDisabledState(isDisabled: boolean): void {
		// % protected region % [Add any additional logic before set the disabled state] off begin
		// % protected region % [Add any additional logic before set the disabled state] end

		this.isDisabled = isDisabled;
		this.prepareFields();

		// % protected region % [Add any additional logic after set the disabled state] off begin
		// % protected region % [Add any additional logic after set the disabled state] end
	}

	/**
	 * Listen to the event when the datepicker input changed
	 * @param $event
	 */
	datepickerInputChange($event) {
		// % protected region % [Add any additional logic before set the datepickerInputChange state] off begin
		// % protected region % [Add any additional logic before set the datepickerInputChange state] end

		this.value = $event.value;
		this.controlValueAccessorChangeFn(this.value);

		// % protected region % [Add any additional logic after set the datepickerInputChange state] off begin
		// % protected region % [Add any additional logic after set the datepickerInputChange state] end
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
}
