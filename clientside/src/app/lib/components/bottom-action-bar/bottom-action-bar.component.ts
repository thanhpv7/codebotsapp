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

import {Component, HostBinding, Input} from '@angular/core';
import {AbstractComponent} from '../abstract.component';
import {ButtonStyle, ButtonAccentColour, ButtonSize, IconPosition} from '../button/button.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Enumeration used to specify types of children element contained within each button group.
 */
export enum BottomActionBarElementType {
	TEXT,
	BUTTON
}

/**
 * An object used to configure how the bottom action bar will be displayed. A bar contains multiple groups, and each
 * group contains multiple elements, each of which can be of type {@link BottomActionBarElementType}.
 */
export interface BottomActionBarGroup {
	elements: BottomActionBarElement[]
}

/**
 * An object used to configure an element within a group.
 */
export interface BottomActionBarElement {
	type: BottomActionBarElementType;
	className?: string;
	label?: string;
	iconClasses?: string;
	iconPos?: IconPosition;
	buttonStyle?: ButtonStyle;
	buttonAccentColour?: ButtonAccentColour;
	buttonSize?: ButtonSize;
	callback?: ($event: any) => void;
	doHide?: boolean | (() => boolean);
	[s: string]: any;
}

@Component({
	selector: '*[cb-action-bar]',
	templateUrl: './bottom-action-bar.component.html',
	styleUrls: [
		'./bottom-action-bar.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class BottomActionBarComponent extends AbstractComponent {
	elementType = BottomActionBarElementType;

	@HostBinding('class.crud__action-bar')
	hostClassActionBar = true;

	@HostBinding('attr.aria-label')
	hostAriaLabel = 'action-bar';

	/**
	 * All the groups to be contained within this action bar.
	 */
	@Input()
	groups: BottomActionBarGroup[] = [];

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
}
