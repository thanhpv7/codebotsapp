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

import {Component, EventEmitter, forwardRef, HostBinding, SimpleChanges, Input, OnInit, OnChanges, Output, Injector} from '@angular/core';
import {AbstractInputComponent, InputClassPrefix} from '../abstract.input.component';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * ControlValueAccessor for the TextArea Component
 * Use the ControlValueAccessor to make the component behave like native input element
 */
const CB_TEXTAREA_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => TextareaComponent),
	multi: true
};

/**
 * Textarea Component
 */
@Component({
	selector: 'cb-textarea',
	templateUrl: './textarea.component.html',
	providers: [CB_TEXTAREA_VALUE_ACCESSOR],
	styleUrls: [
		'./textarea.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class TextareaComponent extends AbstractInputComponent implements OnInit, OnChanges, ControlValueAccessor {

	/**
	 * Whether the component is an input or an input group
	 */
	protected classPrefix = InputClassPrefix.INPUT;

	/**
	 * The type of the component, which would be used in the css class of the dom
	 */
	protected componentType = 'textarea';

	/**
	 * The placeholder of the textarea
	 */
	@Input()
	placeholder: any = '';

	/**
	 * Emitter to broadcast keyup event
	 */
	@Output()
	keyUp: EventEmitter<any> = new EventEmitter();

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
	 * @inheritDoc
	 */
	ngOnInit(): void {
		// % protected region % [Add any additional ngOnChange logic before main body here] off begin
		// % protected region % [Add any additional ngOnChange logic before main body here] end

		super.ngOnInit();

		// % protected region % [Add any additional ngOnChange logic after main body here] off begin
		// % protected region % [Add any additional ngOnChange logic after main body here] end
	}

	/**
	 * Trigger when @Input change
	 */
	ngOnChanges(changes: SimpleChanges) {
		// % protected region % [Add any additional ngOnChange logic before main body here] off begin
		// % protected region % [Add any additional ngOnChange logic before main body here] end

		super.ngOnChanges(changes);

		// % protected region % [Add any additional ngOnChange logic after main body here] off begin
		// % protected region % [Add any additional ngOnChange logic after main body here] end
	}

	/**
	 * Triggered whenever the user releases a key.
	 */
	onKeyUp() {
		// % protected region % [Add any additional onKeyUp logic before broadcasting the event here] off begin
		// % protected region % [Add any additional onKeyUp logic before broadcasting the event here] end

		this.keyUp.emit(this.value);

		// % protected region % [Add any additional onKeyUp logic after broadcasted the event here] off begin
		// % protected region % [Add any additional onKeyUp logic after broadcasted the event here] end
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
		this.controlValueAccessorChangeFn = fn;
	}

	/**
	 * Registers a callback to be triggered when the control is touched.
	 * Implemented as part of ControlValueAccessor.
	 * @param fn Callback to be registered.
	 */
	registerOnTouched(fn: any) {
		this.onTouched = fn;
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
	 * Listen to the event when user type into the input
	 */
	textAreaInput(value) {
		// % protected region % [Add any additional logic before textarea input event] off begin
		// % protected region % [Add any additional logic before textarea input event] end

		this.value = value;
		this.controlValueAccessorChangeFn(this.value);

		// % protected region % [Add any additional logic before textarea input event] off begin
		// % protected region % [Add any additional logic before textarea input event] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
