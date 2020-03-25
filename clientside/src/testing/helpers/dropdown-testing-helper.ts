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
import {DebugElement} from '@angular/core';
import {ComponentFixture, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

// % protected region % [Add any inital imports here] off begin
// % protected region % [Add any inital imports here] end

/**
 * Helper Class for using dropdown component in test
 */
export class DropdownTestingHelper {

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	/**
	 * Select option from dropdown component by displayed text
	 * @param {DebugElement} dropdownElement Dropdown element to select from
	 * @param {string} textToSelect Text to select
	 * @param {ComponentFixture<T>} fixture Fixture of testing
	 */
	static selectByText<T>(dropdownElement: DebugElement, textToSelect: string, fixture: ComponentFixture<T>) {

		this.triggerDropdown(dropdownElement, fixture);

		const options = dropdownElement.queryAll(By.css('span.ng-option-label'));
		const optionToSelect = options.find(option => option.nativeElement.textContent.trim() === textToSelect);
		// Select if not selected

		if(!optionToSelect.parent.nativeElement.classList.contains('ng-option-selected')) {
			optionToSelect.nativeElement.click();
		}
		tick();
		fixture.detectChanges();

		this.closeDropdown(dropdownElement, fixture);

		// % protected region % [Add any additional logic for selectByText here] off begin
		// % protected region % [Add any additional logic for selectByText here] end
	}

	/**
	 * Unselect option from dropdown component by displayed text
	 * @param {DebugElement} dropdownElement Dropdown element to select from
	 * @param {string} textToSelect Text to select
	 * @param {ComponentFixture<T>} fixture Fixture of testing
	 */
	static unselectByText<T>(dropdownElement: DebugElement, textToSelect: string, fixture: ComponentFixture<T>) {

		this.triggerDropdown(dropdownElement, fixture);

		const options = dropdownElement.queryAll(By.css('span.ng-option-label'));
		const optionToSelect = options.find(option => option.nativeElement.textContent.trim() === textToSelect);
		// Select if not selected

		if(optionToSelect.parent.nativeElement.classList.contains('ng-option-selected')) {
			optionToSelect.nativeElement.click();
		}
		tick();
		fixture.detectChanges();

		// Esc to hide element
		dropdownElement.triggerEventHandler('keydown', {
			which: 27,
			preventDefault: () => {}
		});

		tick();
		fixture.detectChanges();

		this.closeDropdown(dropdownElement, fixture);

		// % protected region % [Add any additional logic for unselectByText here] off begin
		// % protected region % [Add any additional logic for unselectByText here] end
	}

	/**
	 * Trigger to open select panel of dropdown component
	 * @param {DebugElement} dropdownElement
	 * @param {ComponentFixture<T>} fixture
	 */
	static triggerDropdown<T>(dropdownElement: DebugElement, fixture: ComponentFixture<T>) {
		// Show dropdown panel
		dropdownElement.triggerEventHandler('keydown', {
			which: 32,
			preventDefault: () => {}
		});

		tick();
		fixture.detectChanges();

		// % protected region % [Add any additional logic for triggerDropdown here] off begin
		// % protected region % [Add any additional logic for triggerDropdown here] end
	}

	/**
	 * Press esc to close dropdown component
	 * @param {DebugElement} dropdownElement
	 * @param {ComponentFixture<T>} fixture
	 */
	static closeDropdown<T>(dropdownElement: DebugElement, fixture: ComponentFixture<T>) {
		// Esc to hide element
		dropdownElement.triggerEventHandler('keydown', {
			which: 27,
			preventDefault: () => {}
		});

		tick();
		fixture.detectChanges();

		// % protected region % [Add any additional logic for closeDropdown here] off begin
		// % protected region % [Add any additional logic for closeDropdown here] end
	}

	// % protected region % [Add any additional methods here] off begin
	// % protected region % [Add any additional methods here] end
}
