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

import {Component, Directive, ElementRef, EventEmitter, Input, Output, HostBinding, HostListener, ViewChildren} from '@angular/core';
import {AbstractComponent} from '../abstract.component';
import {IconPosition} from '../button/button.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Used in conjunction with the main accordion component.
 */
@Directive({
	selector: '*[cb-accordion-info]',
	exportAs: 'cb-accordion-info',
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class AccordionInfoDirective extends AbstractComponent {
	isExpanded = false;

	@HostBinding('class')
	get accordionInfoCSSClass() {
		return [
			'accordion__info',
			this.isExpanded ? 'accordion__info--expanded' : 'accordion__info--collapsed'
		].join(' ');
	}

	/**
	 * Simple toggling between collapse and expand mode.
	 */
	toggleExpansion() {
		this.isExpanded = !this.isExpanded;
	}
}

@Component({
	selector: '*[cb-accordion]',
	templateUrl: './accordion.component.html',
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class AccordionComponent extends AbstractComponent {
	readonly IconPosition = IconPosition;

	@HostBinding('class')
	get accordionCSSClass() {
		return [
			'accordion',
			// % protected region % [Add any additional CSS class here] off begin
			// % protected region % [Add any additional CSS class here] end
		].concat(this.hostClasses).join(' ');
	}

	@Input()
	hostClasses: string[] = [];

	/**
	 * The heading for this accordion.
	 */
	@Input()
	heading: string;

	// % protected region % [Add any additional class properties here] off begin
	// % protected region % [Add any additional class properties here] end

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
