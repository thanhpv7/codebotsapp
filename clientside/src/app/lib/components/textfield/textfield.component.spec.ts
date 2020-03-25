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

import {CommonModule} from '@angular/common';
import {async, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TextfieldComponent} from './textfield.component';
import {CommonPipeModule} from '../../pipes/common.pipe.module';
import {InputComponentDisplayType} from '../abstract.input.component';
import {CommonComponentModule} from '../common.component.module';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Define the tests for the textfield component
 */
describe('Textfield component against tests', () => {

	let fixture;
	let textFieldComponent;

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
			],
			imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule,
				CommonComponentModule
			]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(TextfieldComponent);
			textFieldComponent = fixture.debugElement.componentInstance;
		});
	}));

	afterEach(() => {
		// Need to do this since for some reason the last component queried from the fixture will be rendered on the
		// browser
		if (fixture.nativeElement instanceof HTMLElement) {
			(fixture.nativeElement as HTMLElement).remove();
		}
	});

	it('should create the textfield component', () => {
		expect(textFieldComponent).toBeTruthy();
	});

	/**
	 * Test whether the component match the standard
	 */
	it('should have label or aria-label to match the standard', () => {
		const labelValue = 'Test the label';
		const id = 'input-text-id';
		const fieldId = id + '-field';
		textFieldComponent.label = labelValue;
		textFieldComponent.id = id;
		textFieldComponent.ngOnChanges();
		fixture.detectChanges();
		const labelElement = fixture.debugElement.query(By.css('label'));
		const inputElement = fixture.debugElement.query(By.css('input'));
		// check whether the for attribute is matched
		expect(labelElement.nativeElement.getAttribute('for')).toBe(fieldId);
		expect(labelElement.nativeElement.innerText || labelElement.nativeElement.textContent).toBe(labelValue);
		expect(inputElement.nativeElement.id).toBe(fieldId);
		expect(inputElement.nativeElement.hasAttribute('aria-label')).toBeFalsy();

		// just has aria label when labelVislbe is false
		textFieldComponent.isLabelVisible = false;
		textFieldComponent.ngOnChanges();
		fixture.detectChanges();
		expect(inputElement.nativeElement.getAttribute('aria-label')).toBe(labelValue);
		expect(fixture.debugElement.query(By.css('label'))).toBeNull();

	});

	it('should have the dom structure as defined in the standard', () => {
		const standardInputClass = 'input-group';
		const standardInputClassBlock = 'input-group-block';
		const standardInputClassInline = 'input-group-inline';
		const standardInputType = 'input-group__textfield';
		const customClass = 'custom-class';
		const labelValue = 'Test the label';
		const id = 'input-text-id';
		const fieldId = id + '-field';
		const testTooltip = 'test';
		const tooltipId = id + '-tooltip';

		textFieldComponent.label = labelValue;
		textFieldComponent.id = id;
		textFieldComponent.className = customClass;
		textFieldComponent.tooltip = testTooltip;
		textFieldComponent.ngOnChanges();
		fixture.detectChanges();

		const textFieldComponentElement = fixture.debugElement.nativeElement;
		const labelElement = fixture.debugElement.query(By.css('label')).nativeElement;
		const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
		const tooltipElement = fixture.debugElement.query(By.css('div.tooltip')).nativeElement;
		const tooltipText = fixture.debugElement.query(By.css('div.tooltip'))
																						.query(By.css('span')).nativeElement;
		expect(textFieldComponentElement.classList).toContain(standardInputClass);
		expect(textFieldComponentElement.classList).toContain(standardInputClassBlock);
		expect(textFieldComponentElement.classList).toContain(customClass);
		expect(textFieldComponentElement.classList).toContain(standardInputType);
		expect(textFieldComponentElement.classList).not.toContain(standardInputClassInline);
		// check the field id, tooltip id and check accessibility stdnard
		expect(inputElement.id).toBe(fieldId);
		expect(tooltipElement.id).toBe(tooltipId);
		expect(tooltipText.textContent).toBe(testTooltip);
		expect(labelElement.getAttribute('aria-describedby')).toBe(tooltipId);

		textFieldComponent.displayType = InputComponentDisplayType.INLINE;
		textFieldComponent.ngOnChanges();
		fixture.detectChanges();
		expect(textFieldComponentElement.classList).not.toContain(standardInputClassBlock);
		expect(textFieldComponentElement.classList).toContain(standardInputClassInline);
	});

	it('should have the dom structure defined in the standard when the required is set to false', () => {
		const standardInputClassRequired = 'input-group--is-required';

		// when the isRequired is set to false
		fixture.detectChanges();
		const textFieldComponentElement = fixture.debugElement.nativeElement;
		const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
		expect(textFieldComponentElement.classList).not.toContain(standardInputClassRequired);
		expect(inputElement.hasAttribute('required')).toBeFalsy();

		// when the isRequired is set to true
		textFieldComponent.isRequired = true;
		textFieldComponent.ngOnChanges();
		fixture.detectChanges();
		expect(inputElement.hasAttribute('required')).toBeTruthy();
		expect(textFieldComponentElement.classList).toContain(standardInputClassRequired);
	});

	it('should have the readOnly attribute when isReadonly is set to true', () => {
		fixture.detectChanges();
		const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
		expect(inputElement.hasAttribute('readOnly')).toBeFalsy();

		textFieldComponent.isReadOnly = true;
		textFieldComponent.ngOnChanges();
		fixture.detectChanges();
		expect(inputElement.hasAttribute('readOnly')).toBeTruthy();
	});

	// % protected region % [Add any additional tests here] off begin
	// % protected region % [Add any additional tests here] end
});
