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

import {Component, OnChanges, OnInit, SimpleChanges, ViewChild, forwardRef, Input, AfterViewInit, HostBinding, ChangeDetectorRef, Injector} from '@angular/core';
import {AbstractInputComponent, AbstractInputConfig, InputClassPrefix} from '../abstract.input.component';
import {NgSelectComponent} from '@ng-select/ng-select';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable, Subject} from 'rxjs';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * ControlValueAccessor for the Dropdown Component
 * Use the ControlValueAccessor to make the component behave like native input element
 */
const CB_DROPDOWN_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DropdownComponent),
	multi: true
};

/**
 * Configuration for the dropdown element
 */
export interface DropdownConfig extends AbstractInputConfig {
	options?: any[],
	labelField?: string,
	valueField?: string,
	searchable?: boolean,
	clearable?: boolean,
}

/**
 * Dropdown component
 */
@Component({
	selector: 'cb-dropdown,*[cb-dropdown]',
	templateUrl: './dropdown.component.html',
	providers: [CB_DROPDOWN_VALUE_ACCESSOR],
	styleUrls: [
		'./dropdown.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class DropdownComponent extends AbstractInputComponent implements OnChanges, OnInit, AfterViewInit, ControlValueAccessor {

	/**
	 * Dropdown should be a input
	 */
	protected classPrefix = InputClassPrefix.INPUT;

	/**
	 * The type of the component, which would be used in the css class of the dom
	 */
	protected componentType = 'dropdown';

	/**
	 * The aria live attribute for accessibility
	 * Based on standard, need to overwrite this option from the parent class
	 */
	@HostBinding('attr.aria-live')
	ariaLive = 'polite';

	/**
	 * The ng-select component in the page
	 */
	@ViewChild(NgSelectComponent, { static: false })
	private ngSelectComponent: NgSelectComponent;

	/**
	 * The placeholder of the dropdown
	 */
	@Input()
	placeholder: string;

	/**
	 * The options to be displayed in the dropdown
	 */
	@Input()
	options: any[];

	/**
	 * Observable items. Which is used when the items are observable
	 * Async pipe would be used.
	 */
	@Input()
	options$: Observable<any[]>;

	/**
	 * The field name of object to displaye
	 */
	@Input()
	labelField: string;

	/**
	 * The field name of object to be used as value
	 */
	@Input()
	valueField: string;

	/**
	 * Whether the input is searchable
	 */
	@Input()
	searchable: boolean = false;

	/**
	 * Whether allowed to clear the dropdown
	 */
	@Input()
	clearable: boolean = true;

	/**
	 * Whether the dropdown is multiple
	 */
	@Input()
	multiple: boolean = false;

	/**
	 * Type Ahead in put in the ngSelect
	 * This would pass in the string when user type in
	 * Can be used for the server side searching
	 */
	@Input()
	typeAhead: Subject<string>;

	/**
	 * The disabled state
	 */
	private disabled = false;

	/**
	 * Whether the component is disabled
	 */
	@Input()
	set isDisabled(isDisabled: boolean) {
		this.disabled = isDisabled;
		if (this.ngSelectComponent) {
			this.ngSelectComponent.setDisabledState(isDisabled);
		}
	}

	get isDisabled(): boolean {
		return this.disabled;
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		private changeRef: ChangeDetectorRef,
		protected  injector: Injector,
		// % protected region % [Add any additional dependency injection] off begin
		// % protected region % [Add any additional dependency injection] end
	) {
		// % protected region % [Add any additional logic before constructor] off begin
		// % protected region % [Add any additional logic before constructor] end

		super(injector);

		// % protected region % [Add any additional logic after constructor] off begin
		// % protected region % [Add any additional logic after constructor] end
	}

	/**
	 * On Change event, run when the @Input change
	 * @param changes changes of the @Input fields
	 */
	ngOnChanges(changes: SimpleChanges) {
		// % protected region % [Add any additional ngOnChange logic before main body here] off begin
		// % protected region % [Add any additional ngOnChange logic before main body here] end

		super.ngOnChanges(changes);

		// % protected region % [Add any additional ngOnChange logic after main body here] off begin
		// % protected region % [Add any additional ngOnChange logic after main body here] end
	}

	/**
	 * On Init event, run when the component initialize
	 */
	ngOnInit() {
		// % protected region % [Add any additional ngOnInit logic before main body here] off begin
		// % protected region % [Add any additional ngOnInit logic before main body here] end

		super.ngOnInit();

		// % protected region % [Add any additional ngOnInit logic after main body here] off begin
		// % protected region % [Add any additional ngOnInit logic after main body here] end
	}

	/**
	 * Angular lifecycle. Run after the view is initialized
	 */
	ngAfterViewInit() {
		// % protected region % [Add any additional after view init logic before default process] off begin
		// % protected region % [Add any additional after view init logic before default process] end

		// Invoke the functions to make sure all functions are setup
		super.ngAfterViewInit();
		this.setDisabledState(this.disabled);
		this.registerOnChange(this.controlValueAccessorChangeFn);
		this.registerOnTouched(this.onTouched);
		this.writeValue(this.value);
		this.changeRef.detectChanges();

		// % protected region % [Add any additional after view init logic after default process] off begin
		// % protected region % [Add any additional after view init logic after default process] end
	}

	/**
	 * Sets the model value. Implemented as part of ControlValueAccessor.
	 * This would be called when the value of the ngModel / formControl
	 */
	writeValue(value: any) {
		// % protected region % [Add any additional ngOnChange logic before write value] off begin
		// % protected region % [Add any additional ngOnChange logic before write value] end

		this.value = value;
		if (this.ngSelectComponent) {
			this.ngSelectComponent.writeValue(value);
		}
		this.prepareFields();
		this.changeRef.detectChanges();

		// % protected region % [Add any additional ngOnChange logic after write value] off begin
		// % protected region % [Add any additional ngOnChange logic after write value] end
	}

	// Use the NgSelectComponent to handle the form control and ngModel rather handle in the component
	/**
	 * Registers a callback to be triggered when the model value changes.
	 * Implemented as part of ControlValueAccessor.
	 * @param fn Callback to be registered.
	 */
	registerOnChange(fn: any) {
		// % protected region % [Add any additional logic before register on change] off begin
		// % protected region % [Add any additional logic before register on change] end

		this.controlValueAccessorChangeFn = fn;
		if (this.ngSelectComponent) {
			this.ngSelectComponent.registerOnChange(fn);
		}

		// % protected region % [Add any additional logic after register on change] off begin
		// % protected region % [Add any additional logic after register on change] end
	}

	/**
	 * Registers a callback to be triggered when the control is touched.
	 * Implemented as part of ControlValueAccessor.
	 * @param fn Callback to be registered.
	 */
	registerOnTouched(fn: any) {
		// % protected region % [Add any additional logic before register on touch] off begin
		// % protected region % [Add any additional logic before register on touch] end

		this.onTouched = fn;
		if (this.ngSelectComponent) {
			this.ngSelectComponent.registerOnTouched(fn);
		}

		// % protected region % [Add any additional logic before register on touch] off begin
		// % protected region % [Add any additional logic before register on touch] end
	}

	/**
	 * Sets the "disabled" property on the input element.
	 * This would be set with the form control
	 * @param isDisabled The disabled value
	 */
	setDisabledState(isDisabled: boolean): void {
		// % protected region % [Add any additional logic before set the disabled state] off begin
		// % protected region % [Add any additional logic before set the disabled state] end

		this.disabled = isDisabled;
		this.prepareFields();
		if (this.ngSelectComponent) {
			this.ngSelectComponent.setDisabledState(isDisabled);
		}
		this.changeRef.detectChanges();

		// % protected region % [Add any additional logic after set the disabled state] off begin
		// % protected region % [Add any additional logic after set the disabled state] end
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
}
