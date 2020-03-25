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

import {async, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {InputComponentDisplayType} from '../abstract.input.component';
import {CommonComponentModule} from '../common.component.module';
import {TextareaComponent} from './textarea.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Define the tests for the textarea component
 */
describe('Textarea component against tests', () => {

	let fixture;
	let textareaComponent;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
			],
			imports: [
				CommonComponentModule
			]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(TextareaComponent);
			textareaComponent = fixture.debugElement.componentInstance;
		});
	}));

	afterEach(() => {
		// Need to do this since for some reason the last component queried from the fixture will be rendered on the
		// browser
		if (fixture.nativeElement instanceof HTMLElement) {
			(fixture.nativeElement as HTMLElement).remove();
		}
	});

	it('should create the textarea component', () => {
		expect(textareaComponent).toBeTruthy();
	});

	/**
	 * Test whether the component match the standard
	 */
	it('should have label or aria-label to match the standard', () => {
		const labelValue = 'Test the label';
		const id = 'input-text-id';
		const fieldId = id + '-field';
		textareaComponent.label = labelValue;
		textareaComponent.id = id;
		textareaComponent.ngOnChanges();
		fixture.detectChanges();
		const labelElement = fixture.debugElement.query(By.css('label'));
		const inputElement = fixture.debugElement.query(By.css('textarea'));
		// check whether the for attribute is matched
		expect(labelElement.nativeElement.getAttribute('for')).toBe(fieldId);
		expect(labelElement.nativeElement.innerText || labelElement.nativeElement.textContent).toBe(labelValue);
		expect(inputElement.nativeElement.id).toBe(fieldId);
		expect(inputElement.nativeElement.hasAttribute('aria-label')).toBeFalsy();

		// just has aria label when labelVislbe is false
		textareaComponent.isLabelVisible = false;
		textareaComponent.ngOnChanges();
		fixture.detectChanges();
		expect(inputElement.nativeElement.getAttribute('aria-label')).toBe(labelValue);
		expect(fixture.debugElement.query(By.css('label'))).toBeNull();

	});

	it('should have the dom structure as defined in the standard', () => {
		const standardInputClass = 'input-group';
		const standardInputClassBlock = 'input-group-block';
		const standardInputClassInline = 'input-group-inline';
		const customClass = 'custom-class';
		const labelValue = 'Test the label';
		const id = 'input-text-id';
		const fieldId = id + '-field';
		const testTooltip = 'test';
		const tooltipId = id + '-tooltip';

		textareaComponent.label = labelValue;
		textareaComponent.id = id;
		textareaComponent.className = customClass;
		textareaComponent.tooltip = testTooltip;
		textareaComponent.ngOnChanges();
		fixture.detectChanges();

		const textareaComponentElement = fixture.debugElement.nativeElement;
		const labelElement = fixture.debugElement.query(By.css('label')).nativeElement;
		const inputElement = fixture.debugElement.query(By.css('textarea')).nativeElement;
		const tooltipElement = fixture.debugElement.query(By.css('div.tooltip')).nativeElement;
		const tooltipText = fixture.debugElement.query(By.css('div.tooltip'))
																						.query(By.css('span')).nativeElement;

		expect(textareaComponentElement.classList).toContain(standardInputClass);
		expect(textareaComponentElement.classList).toContain(standardInputClassBlock);
		expect(textareaComponentElement.classList).toContain(customClass);
		expect(textareaComponentElement.classList).not.toContain(standardInputClassInline);
		// check the field id, tooltip id and check accessibility stdnard
		expect(inputElement.id).toBe(fieldId);
		expect(tooltipElement.id).toBe(tooltipId);
		expect(tooltipText.textContent).toBe(testTooltip);
		expect(labelElement.getAttribute('aria-describedby')).toBe(tooltipId);

		textareaComponent.displayType = InputComponentDisplayType.INLINE;
		textareaComponent.ngOnChanges();
		fixture.detectChanges();
		expect(textareaComponentElement.classList).not.toContain(standardInputClassBlock);
		expect(textareaComponentElement.classList).toContain(standardInputClassInline);
	});

	it('should have the dom structure defined in the standard when the required is set to false', () => {
		const standardInputClassRequired = 'input-group--is-required';

		// when the isRequired is set to false
		fixture.detectChanges();
		const textareaComponentElement = fixture.debugElement.nativeElement;
		const inputElement = fixture.debugElement.query(By.css('textarea')).nativeElement;
		expect(textareaComponentElement.classList).not.toContain(standardInputClassRequired);
		expect(inputElement.hasAttribute('required')).toBeFalsy();

		// when the isRequired is set to true
		textareaComponent.isRequired = true;
		textareaComponent.ngOnChanges();
		fixture.detectChanges();
		expect(inputElement.hasAttribute('required')).toBeTruthy();
		expect(textareaComponentElement.classList).toContain(standardInputClassRequired);
	});

	it('should have the readOnly attribute when isReadonly is set to true', () => {
		fixture.detectChanges();
		const inputElement = fixture.debugElement.query(By.css('textarea')).nativeElement;
		expect(inputElement.hasAttribute('readOnly')).toBeFalsy();

		textareaComponent.isReadOnly = true;
		textareaComponent.ngOnChanges();
		fixture.detectChanges();
		expect(inputElement.hasAttribute('readOnly')).toBeTruthy();
	});

	// % protected region % [Add any additional tests here] off begin
	// % protected region % [Add any additional tests here] end
});
