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

import {
	Component,
	HostBinding,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
	HostListener,
	ContentChild, TemplateRef, ViewContainerRef, ViewChild
} from '@angular/core';
import {TemplatePortal} from '@angular/cdk/portal';
import {AbstractInputComponent, InputClassPrefix, InputComponentDisplayType} from '../abstract.input.component';
import {AbstractComponent} from '../abstract.component';


// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Checkbox group element
 */
@Component({
	selector: 'cb-tab',
	templateUrl: './tab.component.html',
	styleUrls: [
		'./tab.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class TabComponent extends AbstractComponent implements OnInit {

	/**
	 * Name to display in the tab
	 */
	@Input()
	name;

	@Input()
	isDisabled: boolean = false;

	/**
	 * Template provided in the tab content that will be used if present, used to enable lazy-loading
	 */
	@ViewChild(TemplateRef, { static: true, read: TemplateRef })
	templateRef: TemplateRef<any>;

	content: TemplatePortal | null = null;

	constructor(private viewContainerRef: ViewContainerRef) {
		super();
	}

	ngOnInit(): void {
		this.content = new TemplatePortal(this.templateRef, this.viewContainerRef);
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
}
