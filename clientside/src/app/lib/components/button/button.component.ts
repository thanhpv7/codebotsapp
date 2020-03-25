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

export enum IconPosition {
	NONE = '',
	TOP = 'icon-top',
	BOTTOM = 'icon-bottom',
	LEFT = 'icon-left',
	RIGHT = 'icon-right'
}

/**
 * Enumeration depicting the various size of the button component.
 */
export enum ButtonSize {
	NONE = '',
	EXTRA_SMALL = 'btn--xsm',
	SMALL = 'btn--sm',
	MEDIUM = 'btn--md',
	LARGE = 'btn--lg',
	EXTRA_LARGE = 'btn--xlg'
}

/**
 * Enumeration depicting the various predefined accent colour for the button component.
 */
export enum ButtonAccentColour {
	NONE = '',
	WARNING = 'btn--warning',
	ERROR = 'btn--error',
	SUCCESS = 'btn--success',
	PRIMARY = 'btn--primary',
	SECONDARY = 'btn--secondary'
}

/**
 * Enumeration depicting the various predefined styles for the button component.
 */
export enum ButtonStyle {
	NONE = '',
	SOLID = 'btn--solid',
	OUTLINE = 'btn--outline',
	TEXT = 'btn--text'
}

/**
 * Default CSS classes to be applied to the button component.
 */
const defaultButtonClasses = [
	'btn',
	// % protected region % [Add any additional CSS classes here] off begin
	// % protected region % [Add any additional CSS classes here] end
];

@Component({
	selector: 'a[cb-button],button[cb-button]',
	templateUrl: './button.component.html',
	styleUrls: [
		'./button.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	exportAs: 'cb-button',
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class ButtonComponent extends AbstractComponent implements OnChanges, OnInit {
	/**
	 * All of the CSS classes to be applied to the button.
	 */
	buttonClasses: string[];

	/**
	 * String of the class bind to the class in root element
	 */
	@HostBinding('class')
	get buttonClassesString() {
		return this.buttonClasses.join(' ');
	}

	/**
	 * Aria label attribute in root element
	 */
	@HostBinding('attr.aria-label')
	get ariaLabel() {
		return this.labelVisible ? null : this.iconName;
	}

	/**
	 * Aria label attribute in root element
	 */
	@HostBinding('attr.role')
	buttonRole = 'button';

	/**
	 * Additional SCSS classes used to customise the button.
	 */
	@Input('classes')
	additionalClasses: string | string[] = [];

	/**
	 * Icon position relative to the text.
	 */
	@Input()
	iconPos: IconPosition = IconPosition.LEFT;

	/**
	 * Icon name used to indicate what icon to be displayed.
	 */
	@Input()
	iconName: string;

	/**
	 * Class names to be added to the button prefixed with 'icon-'. This is used to add classes to the button itself.
	 */
	@Input()
	iconClasses: string | string[] = [];

	/**
	 * Depicting the size of the button.
	 */
	@Input()
	buttonSize: ButtonSize = ButtonSize.MEDIUM;

	/**
	 * Depicting whether the button has an accent colour.
	 */
	@Input()
	buttonAccentColour: ButtonAccentColour;

	/**
	 * Predefined styles applied to the button.
	 */
	@Input()
	buttonStyle: ButtonStyle = ButtonStyle.SOLID;

	/**
	 * Whether to hide the label. Note that setting this property without providing an icon name will cause an empty
	 * `aria-label` to be inserted into the button itself.
	 */
	@Input()
	labelVisible: boolean = true;

	/**
	 * Type of the button.
	 */
	@Input()
	type: string;

	/**
	 * Bind the disabled attribute
	 * Need to return null to not show the disabled attribute in the dom
	 */
	@HostBinding('attr.disabled')
	get disable() {
		return this.isDisabled ? this.isDisabled : null;
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	ngOnChanges(changes: SimpleChanges) {
		// % protected region % [Add any additional ngOnChange logic before main body here] off begin
		// % protected region % [Add any additional ngOnChange logic before main body here] end

		this.reloadButtonClasses();

		// % protected region % [Add any additional ngOnChange logic after main body here] off begin
		// % protected region % [Add any additional ngOnChange logic after main body here] end
	}

	ngOnInit() {
		// % protected region % [Add any additional ngOnInit logic before main body here] off begin
		// % protected region % [Add any additional ngOnInit logic before main body here] end

		// need to reload class again in case no input change
		this.reloadButtonClasses();

		// % protected region % [Add any additional ngOnInit logic after main body here] off begin
		// % protected region % [Add any additional ngOnInit logic after main body here] end
	}

	/**
	 * Method called when the button is clicked.
	 */
	@HostListener('click', ['$event'])
	onButtonClick($event: any): void {
		$event.stopPropagation();

		// % protected region % [Add any additional onClick logic here] off begin
		// % protected region % [Add any additional onClick logic here] end
	}

	/**
	 * Simple method used to read in properties and modify the button classes accordingly.
	 */
	private reloadButtonClasses() {
		if (!this.labelVisible && this.iconName == null) {
			console.error('Icon-only mode detected for button but icon name was not provided.');
		}

		this.buttonClasses = [
			...defaultButtonClasses,
			this.buttonSize,
			this.buttonStyle
		];

		if (this.additionalClasses) {
			if (typeof this.additionalClasses === 'string') {
				this.buttonClasses.push(...this.additionalClasses.split(' '));
			} else {
				this.buttonClasses.push(...this.additionalClasses);
			}
		}

		if (this.iconPos) {
			this.buttonClasses.push('btn--icon');
			this.buttonClasses.push(this.iconPos);
		}

		if (this.iconName) {
			this.buttonClasses.push('icon-' + this.iconName);
		}

		if (this.iconClasses) {
			if (typeof this.iconClasses === 'string') {
				this.buttonClasses.push(...this.iconClasses.split(' ').map(clz => 'icon-' + clz));
			} else {
				this.buttonClasses.push(...this.iconClasses.map(icon => 'icon-' + icon));
			}
		}

		if (this.buttonAccentColour) {
			this.buttonClasses.push(this.buttonAccentColour);
		}
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
}
