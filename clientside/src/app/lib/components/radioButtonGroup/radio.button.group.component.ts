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
import {RadioButtonComponent, RadioChange} from '../radioButton/radio.button.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * ControlValueAccessor for the RadioButtonGroup Component
 * Use the ControlValueAccessor to make the component behave like native input element
 */
const CB_RADIO_BUTTON_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => RadioButtonGroupComponent),
	multi: true
};

/**
 * The group of the radio button element
 */
@Component({
	selector: 'cb-radio-button-group',
	templateUrl: './radio.button.group.component.html',
	styleUrls: [
		'./radio.button.group.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// use the existing 'formGroup' group in the page
	providers: [CB_RADIO_BUTTON_VALUE_ACCESSOR],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class RadioButtonGroupComponent extends AbstractInputComponent implements AfterViewInit, OnChanges, OnInit, ControlValueAccessor {
	/**
	 * Radio button group should be a input group
	 */
	protected classPrefix = InputClassPrefix.INPUT_GROUP;

	/**
	 * The type of the component, which would be used in the css class of the dom
	 */
	protected componentType = 'radio';

	/**
	 * The options of the radio button
	 */
	@Input()
	options: any[];

	/**
	 * The field in the option, which would be used as the label of the radio button
	 */
	@Input()
	labelField: string;

	/**
	 * The field in the option which is used as the value of the input
	 */
	@Input()
	valueField: string;

	/**
	 * The currently selected radio button. Should match value.
	 */
	private selectedRadio: RadioButtonComponent;

	/**
	 * The currently selected radio button. If set to a new radio button, the radio group value
	 * will be updated to match the new selected button.
	 */
	@Input()
	get selected() {
		return this.selectedRadio;
	}

	set selected(selected: RadioButtonComponent) {
		this.selectedRadio = selected;
		this.value = selected ? selected.value : null;
		this.checkSelectedRadioButton();
	}

	/**
	 * Value being selected
	 */
	private selectedValue: any;

	/**
	 * Override the value as need to do some custom change
	 */
	@Input()
	get value(): any {
		return this.selectedValue;
	}

	set value(newValue: any) {
		if (this.selectedValue !== newValue) {
			// Set this before proceeding to ensure no circular loop occurs with selection.
			this.selectedValue = newValue;

			this.updateSelectedRadioFromValue();
			this.checkSelectedRadioButton();
		}
	}

	/**
	 * Private required field
	 */
	private required = false;

	/**
	 * Override the isRequired, as needs to apply is required to all children
	 */
	@Input()
	get isRequired() {
		return this.required;
	}

	set isRequired(isRequired: boolean) {
		this.required = isRequired;
		if (this.radios) {
			this.radios.forEach(radio => radio.isRequired = isRequired);
		}
	}

	/**
	 * Priave field to store whether the radio buttons is disabled
	 */
	private disabled = false;

	/**
	 * Override the isDisabled, as needs to apply is required to all children
	 */
	@Input()
	get isDisabled(): boolean {
		return this.disabled;
	}

	set isDisabled(isDisabled: boolean) {
		this.disabled = isDisabled;
		if (this.radios) {
			this.radios.forEach(radio => radio.isDisabled = isDisabled);
		}
	}

	/**
	 * Event emitted when the group value changes.
	 * Change events are only emitted when the value changes due to user interaction with
	 * a radio button (the same behavior as `<input type-"radio">`).
	 */
	@Output() readonly change: EventEmitter<RadioChange> = new EventEmitter<RadioChange>();

	/**
	 * Radios in the component
	 */
	@ViewChildren(forwardRef(() => RadioButtonComponent))
	private radios: QueryList<RadioButtonComponent>;

	/**
	 * Wether the component has finished initialized
	 */
	private isInitialized = false;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(private changeDetector: ChangeDetectorRef, injector: Injector) {
		// % protected region % [Add any additional ngOnChange logic before constructor here] off begin
		// % protected region % [Add any additional ngOnChange logic before constructor here] end

		super(injector);

		// % protected region % [Add any additional ngOnChange logic after constructor here] off begin
		// % protected region % [Add any additional ngOnChange logic after constructor here] end
	}

	ngOnChanges(changes: SimpleChanges) {
		// % protected region % [Add any additional ngOnChange logic before main body here] off begin
		// % protected region % [Add any additional ngOnChange logic before main body here] end

		super.ngOnChanges(changes);

		// % protected region % [Add any additional ngOnChange logic after main body here] off begin
		// % protected region % [Add any additional ngOnChange logic after main body here] end
	}

	ngOnInit() {
		// % protected region % [Add any additional ngOnInit logic before main body here] off begin
		// % protected region % [Add any additional ngOnInit logic before main body here] end

		// need to reload class again in case no input change
		super.ngOnInit();

		// % protected region % [Add any additional ngOnInit logic after main body here] off begin
		// % protected region % [Add any additional ngOnInit logic after main body here] end
	}

	/**
	 * Initialize properties once content children are available.
	 * This allows us to propagate relevant attributes to associated buttons.
	 */
	ngAfterViewInit() {
		// % protected region % [Add any additional ngOnChange logic before view init here] off begin
		// % protected region % [Add any additional ngOnChange logic before view init here] end

		// Mark this component as initialized in AfterContentInit because the initial value can
		// possibly be set by NgModel on Radiobutton, and it is possible that the OnInit of the
		// NgModel occurs *after* the OnInit of the Radiobutton
		this.updateSelectedRadioFromValue();
		this.isInitialized = true;

		// % protected region % [Add any additional ngOnChange logic after view init here] off begin
		// % protected region % [Add any additional ngOnChange logic after view init here] end

	}

	/** Dispatch change event with current selection and group value. */
	private emitChangeEvent(): void {
		// % protected region % [Add any additional ngOnChange logic before emit change event] off begin
		// % protected region % [Add any additional ngOnChange logic before emit change event] end

		this.change.emit(new RadioChange(this.selected, this.value));

		// % protected region % [Add any additional ngOnChange logic after emit change event] off begin
		// % protected region % [Add any additional ngOnChange logic after emit change event] end
	}

	/**
	 * Event when the radio button is selected
	 * @param radioChange Listen to the change when radio button pass change event
	 */
	radioButtonSelected(radioChange: RadioChange): void {
		// % protected region % [Add any additional ngOnChange logic before radio button selected] off begin
		// % protected region % [Add any additional ngOnChange logic before radio button selected] end

		if (this.isInitialized) {
			const groupValueChanged = radioChange.source.value !== this.value;
			// set the current one as checked

			if (groupValueChanged) {
				this.selected = radioChange.source;
				this.controlValueAccessorChangeFn(this.value);
				this.emitChangeEvent();
			}
		}

		// % protected region % [Add any additional ngOnChange logic after radio button selected] off begin
		// % protected region % [Add any additional ngOnChange logic after radio button selected] end
	}

	/**
	 * Check the selected radio button and uncheck other button
	 */
	private checkSelectedRadioButton() {
		// % protected region % [Add any additional ngOnChange logic before check selected radio button] off begin
		// % protected region % [Add any additional ngOnChange logic before check selected radio button] end

		if (this.selectedRadio && !this.selectedRadio.checked) {
			this.selectedRadio.checked = true;
		}
		if (this.radios) {
			this.radios.filter(radio => radio !== this.selected)
				.forEach(radio => radio.checked = false);
		}

		// % protected region % [Add any additional ngOnChange logic after check selected radio button] off begin
		// % protected region % [Add any additional ngOnChange logic after check selected radio button] end
	}

	/**
	 * Update the checked status according to the value
	 */
	private updateSelectedRadioFromValue(): void {
		// % protected region % [Add any additional ngOnChange logic before update selected from value] off begin
		// % protected region % [Add any additional ngOnChange logic before update selected from value] end

		// If the value already matches the selected radio, do nothing.
		const isAlreadySelected = this.selectedRadio && this.selectedRadio.value === this.value;

		if (this.radios && !isAlreadySelected) {
			const value = this.value;
			const selected = this.radios.find((radio) => radio.value === value);
			if (selected) {
				this.selected = selected;
			}
		}

		// % protected region % [Add any additional ngOnChange logic after update selected from value] off begin
		// % protected region % [Add any additional ngOnChange logic after update selected from value] end
	}

	/**
	 * Sets the model value. Implemented as part of ControlValueAccessor.
	 * This would be called when the value of the ngModel / formControl
	 */
	writeValue(value: any) {
		// % protected region % [Add any additional ngOnChange logic before write value] off begin
		// % protected region % [Add any additional ngOnChange logic before write value] end

		this.value = value;
		this.changeDetector.markForCheck();

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

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
}
