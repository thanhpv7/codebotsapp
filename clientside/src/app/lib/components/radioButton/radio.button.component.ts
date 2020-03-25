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

import {ChangeDetectorRef, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AbstractInputComponent, InputClassPrefix} from '../abstract.input.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Change event object emitted by Radio Button and Radio Button Group.
 */
export class RadioChange {
	constructor(
		/**
		 * The Radio Button that emits the change event.
		 */
		public source: RadioButtonComponent,
		/** The value of the RadioButton. */
		public value: any) {}
}

/**
 * The Radio Button Component
 * The radio button should not be used itself. This is used in the radio button group
 */
@Component({
	selector: 'cb-radio-button',
	templateUrl: './radio.button.component.html',
	styleUrls: [
		'./radio.button.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class RadioButtonComponent extends AbstractInputComponent implements OnInit, OnChanges {

	/**
	 * Radio button should be a input
	 */
	protected classPrefix = InputClassPrefix.INPUT;

	/**
	 * The type of the component, which would be used in the css class of the dom
	 */
	protected componentType = 'radio';

	/**
	 * Whether this radio button is checked.
	 */
	checked = false;

	/**
	 * Event emitted when the checked state of this radio button changes.
	 * Change events are only emitted when the value changes due to user interaction with
	 * the radio button (the same behavior as `<input type-"radio">`).
	 */
	@Output()
	readonly change: EventEmitter<RadioChange> = new EventEmitter<RadioChange>();

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	// % protected region % [Add any additional class constructors here] off begin
	// % protected region % [Add any additional class constructors here] end

	constructor(private changeDetector: ChangeDetectorRef) {
		// % protected region % [Add any additional logic in constructor before default process] off begin
		// % protected region % [Add any additional logic in constructor before default process] end

		super();

		// % protected region % [Add any additional logic in constructor before default process] off begin
		// % protected region % [Add any additional logic in constructor before default process] end
	}

	/**
	 * @inheritDoc
	 */
	ngOnInit(): void {
		// % protected region % [Add any additional ngOnInit logic here] off begin
		// % protected region % [Add any additional ngOnInit logic here] end
	}

	/**
	 * On Change event, run when the input change
	 * @param changes changes of the input
	 */
	ngOnChanges(changes: SimpleChanges): void {
		// % protected region % [Add any additional onChange logic before ngOnChange here] off begin
		// % protected region % [Add any additional onChange logic before ngOnChange here] end

		super.ngOnChanges(changes);

		// % protected region % [Add any additional onChange logic after ngOnChange here] off begin
		// % protected region % [Add any additional onChange logic after ngOnChange here] end
	}
	
	/**
	 * Dispatch change event with current value.
	 */
	private emitChangeEvent(): void {
		// % protected region % [Add any additional logic here before emit change event] off begin
		// % protected region % [Add any additional logic here before emit change event] end

		this.change.emit(new RadioChange(this, this.value));

		// % protected region % [Add any additional logic here after emit change event] off begin
		// % protected region % [Add any additional logic here after emit change event] end
	}

	/**
	 * Click event when the radio button is clicked
	 * @param event Click event
	 */
	onInputClick(event: Event) {
		// % protected region % [Add any additional logic here before click event] off begin
		// % protected region % [Add any additional logic here before click event] end

		event.stopPropagation();

		// % protected region % [Add any additional logic here after click event] off begin
		// % protected region % [Add any additional logic here after click event] end
	}

	/**
	 * Marks the radio button as needing checking for change detection.
	 * This method is exposed because the parent radio group will directly
	 * update bound properties of the radio button.
	 */
	markForCheck() {
		// % protected region % [Add any additional logic here before mark for check] off begin
		// % protected region % [Add any additional logic here before mark for check] end

		// When group value changes, the button will not be notified. Use `markForCheck` to explicit
		// update radio button's status
		this.changeDetector.markForCheck();

		// % protected region % [Add any additional logic here after mark for check] off begin
		// % protected region % [Add any additional logic here after mark for check] end
	}

	/**
	 * Triggered when the radio button received a click or the input recognized any change.
	 * Clicking on a label element, will trigger a change event on the associated input.
	 */
	onInputChange(event: Event) {
		// % protected region % [Add any additional logic here before input change] off begin
		// % protected region % [Add any additional logic here before input change] end

		// We always have to stop propagation on the change event.
		// Otherwise the change event, from the input element, will bubble up and
		// emit its event object to the `change` output.
		event.stopPropagation();

		const groupValueChanged = !this.checked;

		if (groupValueChanged) {
			// set the current one as checked
			this.checked = true;

			// pass the change event to the parent radio button group
			this.emitChangeEvent();
		}
		
		// % protected region % [Add any additional logic here after input change] off begin
		// % protected region % [Add any additional logic here after input change] end
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
}
