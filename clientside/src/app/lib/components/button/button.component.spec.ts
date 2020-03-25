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
import {By} from '@angular/platform-browser';
import {ButtonComponent, ButtonAccentColour, ButtonSize, ButtonStyle, IconPosition} from './button.component';
import {Component, DebugElement} from '@angular/core';
import {CommonComponentModule} from '../common.component.module';

// the text to put into the button
const labelText = 'Search';

describe('Button component', () => {

	let fixture;
	let buttonComponent: ButtonComponent;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				TestAppComponent
			],
			imports: [
				CommonModule,
				CommonComponentModule
			]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(TestAppComponent);
			const buttonElement: DebugElement = fixture.debugElement.query(By.css('button[cb-button]'));
			buttonComponent = buttonElement.injector.get<ButtonComponent>(ButtonComponent);
		});
	}));

	afterEach(() => {
		(fixture.nativeElement as HTMLButtonElement).remove();
	});

	it('should create the button component', () => {
		expect(buttonComponent).toBeTruthy();
	});

	it('should display the given label correctly', () => {
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		const buttonLabelEl: HTMLButtonElement = fixture
			.debugElement
			.query(By.css('button'))
			.nativeElement;

		expect(buttonLabelEl.innerText).toBe(labelText);
	});

	it('should have correct default classes and properties', () => {
		const expectedClasses = [
			'btn',
			'btn--icon',
			'btn--md',
			'icon-left',
			'btn--solid',
			// % protected region % [Add any additional custom classes here] off begin
			// % protected region % [Add any additional custom classes here] end
		];

		const buttonLabelEl: HTMLButtonElement = fixture
			.debugElement
			.query(By.css('button'))
			.nativeElement;

		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.value.split(' ').sort()).toEqual(expectedClasses.sort());
		expect(buttonLabelEl.hasAttribute('aria-label')).toBeFalsy();
	});

	it('should have correct icon name', () => {
		const buttonLabelEl: HTMLButtonElement = fixture
			.debugElement
			.query(By.css('button'))
			.nativeElement;

		buttonComponent.iconName = 'search';
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('icon-search')).toBeTruthy();

		buttonComponent.iconName = 'arrow';
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('icon-arrow')).toBeTruthy();
	});

	it('should have correct icon position', () => {
		const buttonLabelEl: HTMLButtonElement = fixture
			.debugElement
			.query(By.css('button'))
			.nativeElement;

		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('icon-left')).toBeTruthy('Icon is not at LEFT position');

		buttonComponent.iconPos = IconPosition.TOP;
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('icon-top')).toBeTruthy('Icon is not at TOP position');

		buttonComponent.iconPos = IconPosition.BOTTOM;
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('icon-bottom')).toBeTruthy('Icon is not at BOTTOM position');

		buttonComponent.iconPos = IconPosition.RIGHT;
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('icon-right')).toBeTruthy('Icon is not at RIGHT position');
	});

	it('should have correct button size', () => {
		const buttonLabelEl: HTMLButtonElement = fixture
			.debugElement
			.query(By.css('button'))
			.nativeElement;

		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('btn--md')).toBeTruthy('Button is not MEDIUM');

		buttonComponent.buttonSize = ButtonSize.SMALL;
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('btn--sm')).toBeTruthy('Button is not SMALL');

		buttonComponent.buttonSize = ButtonSize.EXTRA_SMALL;
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('btn--xsm')).toBeTruthy('Button is not EXTRA SMALL');

		buttonComponent.buttonSize = ButtonSize.LARGE;
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('btn--lg')).toBeTruthy('Button is not LARGE');

		buttonComponent.buttonSize = ButtonSize.EXTRA_LARGE;
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('btn--xlg')).toBeTruthy('Button is not EXTRA LARGE');
	});

	it('should have correct button accent colour', () => {
		const buttonLabelEl: HTMLButtonElement = fixture
			.debugElement
			.query(By.css('button'))
			.nativeElement;

		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('btn--warning')).toBeFalsy();
		expect(buttonLabelEl.classList.contains('btn--error')).toBeFalsy();
		expect(buttonLabelEl.classList.contains('btn--success')).toBeFalsy();

		buttonComponent.buttonAccentColour = ButtonAccentColour.WARNING;
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('btn--warning')).toBeTruthy('Button does not have btn--warning');

		buttonComponent.buttonAccentColour = ButtonAccentColour.ERROR;
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('btn--error')).toBeTruthy('Button does not have btn--error');

		buttonComponent.buttonAccentColour = ButtonAccentColour.SUCCESS;
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('btn--success')).toBeTruthy('Button does not have btn--success');
	});

	it('should have correct button styles', () => {
		const buttonLabelEl: HTMLButtonElement = fixture
			.debugElement
			.query(By.css('button'))
			.nativeElement;

		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('btn--solid')).toBeTruthy('Button does not have btn-solid');

		buttonComponent.buttonStyle = ButtonStyle.OUTLINE;
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('btn--outline')).toBeTruthy('Button does not have btn--outline');

		buttonComponent.buttonStyle = ButtonStyle.TEXT;
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.contains('btn--text')).toBeTruthy('Button does not have btn--text');
	});

	it('should have correct button label and icon when enabled or disabled', () => {
		const buttonLabelEl: HTMLButtonElement = fixture
			.debugElement
			.query(By.css('button'))
			.nativeElement;
		const iconName = 'search';
		buttonComponent.iconName = 'search';
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.hasAttribute('aria-label')).toBeFalsy('Button does have aria-label');
		expect(buttonLabelEl.classList.contains('icon-search')).toBeTruthy('Button does not have icon-search');
		expect(buttonLabelEl.innerText).toBe('Search', 'Button does not have label Search');

		buttonComponent.labelVisible = false;
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.hasAttribute('aria-label')).toBeTruthy('Button does not have aria-label');
		expect(buttonLabelEl.getAttribute('aria-label')).toBe(iconName);
		expect(buttonLabelEl.classList.contains('icon-search')).toBeTruthy('Button does not have icon-search');
		expect(buttonLabelEl.innerText).toBe('', 'Button does have label');
	});

	it('should have correct classes when add more classes', () => {
		const additionalClasses = [
			'added-class',
			'another-class'
		];

		const expectedClasses = [
			'btn',
			'btn--icon',
			'btn--md',
			'icon-left',
			'btn--solid',
			...additionalClasses,
			// % protected region % [Add any additional custom classes here] off begin
			// % protected region % [Add any additional custom classes here] end
		];

		const buttonLabelEl: HTMLButtonElement = fixture
			.debugElement
			.query(By.css('button'))
			.nativeElement;

		buttonComponent.additionalClasses = additionalClasses;
		buttonComponent.ngOnChanges({});
		fixture.detectChanges();

		expect(buttonLabelEl.classList.value.split(' ').sort()).toEqual(expectedClasses.sort());
	});

	it('should call the click function when click event trigger', () => {
		spyOn(buttonComponent, 'onButtonClick');
		const buttonLabelEl: HTMLButtonElement = fixture
			.debugElement
			.query(By.css('button'))
			.nativeElement;
		buttonLabelEl.click();
		fixture.whenStable().then(() => {
			expect(buttonComponent.onButtonClick).toHaveBeenCalled();
		});
	});

	// % protected region % [Add any additional custom test cases here] off begin
	// % protected region % [Add any additional custom test cases here] end
});

/** Test component that contains an MatButton. */
@Component({
	selector: 'test-app',
	template: `
    <button cb-button>${labelText}</button>
	`
})
class TestAppComponent {
}

