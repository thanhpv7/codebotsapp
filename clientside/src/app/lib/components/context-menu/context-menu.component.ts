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

import {Component, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AbstractComponent} from '../abstract.component';
import {IconPosition} from '../../enums/common-component-enums';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

export enum MenuPos {
	LEFT = 'menu-left',
	RIGHT = 'menu-right',
	TOP = 'menu-top',
	BOTTOM = 'menu-bottom'
}

const contextMenuDefaultClasses = [
	'context-menu',
	'btn',
	// % protected region % [Add any additional default class for contextMenuDefaultClasses here] off begin
	// % protected region % [Add any additional default class for contextMenuDefaultClasses here] end
];

@Component({
	selector: 'cb-context-menu, *[cb-context-menu]',
	templateUrl: './context-menu.component.html',
	styleUrls: [
		'./context-menu.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class ContextMenuComponent extends AbstractComponent implements OnChanges, OnInit {

	showContextMenu: boolean = false;

	contextMenuClasses: string[] = [];

	@HostBinding('class')
	get contextMenuClassesString() {
		return this.contextMenuClasses.join(' ');
	}

	@HostListener('click')
	onContextMenuClicked() {
		this.showContextMenu = !this.showContextMenu;
		this.reloadContextMenuClasses();
	}

	@HostListener('document:click', ['$event'])
	clickOutside(event) {
		if(!this.eRef.nativeElement.contains(event.target) && this.showContextMenu) {
			this.showContextMenu = false;
			this.reloadContextMenuClasses();
		}
	}

	/**
	 * Additional SCSS classes used to customise the button.
	 */
	@Input('classes')
	additionalClasses: string | string[] = [];


	/**
	 * Bind the disabled attribute
	 * Need to return null to not show the disabled attribute in the dom
	 */
	@HostBinding('attr.disabled')
	get disable() {
		return this.isDisabled ? this.isDisabled : null;
	}

	@HostBinding('attr.label')
	@Input()
	label;

	/**
	 * Additional SCSS classes used to customise the button.
	 */
	@Input('classes')
	classes: string | string[] = [];

	@Input()
	iconName = 'more-horizontal';

	@Input()
	iconPos: IconPosition = IconPosition.LEFT;

	@Input()
	menuPos: MenuPos = MenuPos.BOTTOM;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		private eRef: ElementRef
	) {
		super();
	}

	ngOnChanges(changes: SimpleChanges) {
		// % protected region % [Add any additional ngOnChange logic before main body here] off begin
		// % protected region % [Add any additional ngOnChange logic before main body here] end

		this.reloadContextMenuClasses();

		// % protected region % [Add any additional ngOnChange logic after main body here] off begin
		// % protected region % [Add any additional ngOnChange logic after main body here] end
	}

	ngOnInit() {
		// % protected region % [Add any additional ngOnInit logic before main body here] off begin
		// % protected region % [Add any additional ngOnInit logic before main body here] end

		// need to reload class again in case no input change
		this.reloadContextMenuClasses();

		// % protected region % [Add any additional ngOnInit logic after main body here] off begin
		// % protected region % [Add any additional ngOnInit logic after main body here] end
	}

	/**
	 * Simple method used to read in properties and modify the context menu classes accordingly.
	 */
	private reloadContextMenuClasses() {

		this.contextMenuClasses = [
			...contextMenuDefaultClasses
		];

		if (this.additionalClasses) {
			if (typeof this.additionalClasses === 'string') {
				this.contextMenuClasses.push(...this.additionalClasses.split(' '));
			} else {
				this.contextMenuClasses.push(...this.additionalClasses);
			}
		}

		if (this.iconPos) {
			this.contextMenuClasses.push('btn--icon');
			this.contextMenuClasses.push(this.iconPos);
		}

		if (this.iconName) {
			this.contextMenuClasses.push(`icon-${this.iconName}`);
		}

		if(this.showContextMenu) {
			this.contextMenuClasses.push('active');
		}
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
}
