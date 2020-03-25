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

import {Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges, HostListener} from '@angular/core';
import {AbstractComponent} from '../abstract.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Enumeration depicting the various predefined group alignment options for the button component.
 */
export enum ButtonGroupAlignment {
	HORIZONTAL = 'btn-group--horizontal',
	VERTICAL = 'btn-group--vertical',
}

/**
 * Enumeration depicting the various predefined sizing options for the button group component.
 */
export enum ButtonGroupSizing {
	STATIC_ELEMENTS = 'btn-group--static-elements',
	GROW_ELEMENTS = 'btn-group--grow-elements',
}

/**
 * Default CSS classes to be applied to the button group component.
 */
const defaultButtonGroupClasses = [
	'btn-group',
	// % protected region % [Add any additional CSS classes here for button group] off begin
	// % protected region % [Add any additional CSS classes here for button group] end
];

/**
 * Button group element
 */
@Component({
	selector: 'cb-button-group,*[cb-button-group]',
	templateUrl: './button.group.component.html',
	styleUrls: [
		'./button.group.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class ButtonGroupComponent extends AbstractComponent implements OnChanges, OnInit {
	/**
	 * All of the CSS classes to be applied to the button.
	 */
	buttonGroupClasses: string[];

	/**
	 * String of the class bind to the class in root element
	 */
	@HostBinding('class')
	get buttonGroupClassesString() {
		return this.buttonGroupClasses.join(' ');
	}

	/**
	 * Alignment of the button group
	 * In the ButtonGroupAlignment
	 * Default to be horizontal
	 */
	@Input()
	buttonGroupAlignment = ButtonGroupAlignment.HORIZONTAL;

	/**
	 * Sizing of the button group
	 * In the ButtonGroupSizing
	 * Default to be static elements
	 */
	@Input()
	buttonGroupSizing = ButtonGroupSizing.STATIC_ELEMENTS;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	ngOnChanges(changes: SimpleChanges) {
		// % protected region % [Add any additional ngOnChange logic before main body here] off begin
		// % protected region % [Add any additional ngOnChange logic before main body here] end

		this.reloadButtonGroupClasses();

		// % protected region % [Add any additional ngOnChange logic after main body here] off begin
		// % protected region % [Add any additional ngOnChange logic after main body here] end
	}
	
	ngOnInit() {
		// % protected region % [Add any additional ngOnInit logic before main body here] off begin
		// % protected region % [Add any additional ngOnInit logic before main body here] end

		// need to reload class again in case no input change
		this.reloadButtonGroupClasses();

		// % protected region % [Add any additional ngOnInit logic after main body here] off begin
		// % protected region % [Add any additional ngOnInit logic after main body here] end
	}

	/**
	 * Simple method used to read in properties and modify the button group classes accordingly.
	 */
	private reloadButtonGroupClasses() {

		this.buttonGroupClasses = [
			...defaultButtonGroupClasses,
			this.buttonGroupAlignment,
			this.buttonGroupSizing
		];

		if (this.className) {
			this.buttonGroupClasses.push(this.className);
		}
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
}
