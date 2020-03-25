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
	ContentChildren, QueryList, AfterViewInit, ViewContainerRef, ChangeDetectorRef, Output, EventEmitter
} from '@angular/core';
import {AbstractInputComponent, InputClassPrefix, InputComponentDisplayType} from '../abstract.input.component';
import {AbstractComponent} from '../abstract.component';
import {TabComponent} from './tab.component';
import {Portal, TemplatePortal} from '@angular/cdk/portal';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Tab Group Element
 */
@Component({
	selector: 'cb-tab-group',
	templateUrl: './tab-group.component.html',
	styleUrls: [
		'./tab-group.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class TabGroupComponent extends AbstractComponent implements OnChanges, OnInit, AfterViewInit {

	/**
	 * Get teh Tab components inside the cb-tab-group
	 */
	@ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

	/**
	 * Index of the selected tab
	 */
	@Input()
	selectedIndex = 0;

	/**
	 * Selected portal to display
	 */
	selectedPortal: Portal<any>;

	selectedTab: TabComponent;

	@Output()
	tabClickedEvent: EventEmitter<{index: number, tab: TabComponent}> = new EventEmitter();

	constructor(
		private viewContainerRef: ViewContainerRef,
		private changeDetectorRef: ChangeDetectorRef
	) {
		super();
	}

	/**
	 * @inheritDoc
	 */
	ngOnChanges(changes: SimpleChanges): void {
	}

	/**
	 * @inheritDoc
	 */
	ngOnInit(): void {
	}

	/**
	 * AfterViewInit function
	 * Load and display the initial component
	 */
	ngAfterViewInit(): void {
		this.changeContent();
	}

	/**
	 * Event Listener trigger when the the tab is clicked
	 */
	onTabClicked(tabIndex: number, tabClicked: TabComponent) {
		// Not change content to show if the tab is disabled.
		if (tabClicked.isDisabled) {
			this.tabClickedEvent.emit({index: tabIndex, tab: tabClicked});
			return;
		}
		this.selectedIndex = tabIndex;
		this.changeContent();
		this.tabClickedEvent.emit({index: this.selectedIndex, tab: this.selectedTab});
	}

	/**
	 * Change the content to displayed in the tab by the selectedIndex
	 */
	changeContent() {
		if (this.selectedIndex >= 0 && this.selectedIndex < this.tabs.length) {
			this.selectedTab = this.tabs.find((item, index) => index === this.selectedIndex);
			this.selectedPortal = this.selectedTab.content;
			this.changeDetectorRef.detectChanges();
		} else {
			console.error('Index exceed the bound of tabs');
		}
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
}
