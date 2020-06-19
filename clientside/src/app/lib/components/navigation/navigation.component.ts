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
import {Component, Input, OnInit, HostBinding} from '@angular/core';
import {AbstractComponent} from '../abstract.component';
import {IconPosition, Link, LinkList, NavigationDisplay, NavigationPosition} from '../../enums/navigation';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Component({
	selector: 'nav[cb-navigation]',
	templateUrl: './navigation.component.html',
	styleUrls: [
		'./navigation.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})

export class NavigationComponent extends AbstractComponent implements OnInit {

	// % protected region % [Add any additional class properties here] off begin
	// % protected region % [Add any additional class properties here] end

	/**
	 * Array of strings that is used to add scss classes to the root element
	 */
	navigationClasses: string[];

	@HostBinding('class')
	get navigationClassName(): string {
		return this.navigationClasses.join(' ');
	}

	/**
	 * Boolean that is used to specify whether the navigation is capable of showing icons.
	 */
	@Input()
	displayIcons: boolean;

	/**
	 * Integer that is usede to determine theactive link.
	 */
	@Input()
	activeIndex: number;

	/**
	 * Boolean that is used to specify whether the navigation is capable of expanding. This should only be true for vertical
	 * navigation components.
	 */
	@Input()
	expandable: boolean;

	/**
	 * Boolean that is used to specify whether the navigation is initially shown to expand. This should only be true for vertical
	 * navigation components.
	 */
	@Input()
	onInitExpand: boolean;

	/**
	 * Enum ref that is used to secpify whether the navigation component is horizontal or vertical.
	 */
	@Input()
	align: NavigationPosition = NavigationPosition.VERTICAL;

	/**
	 * Boolean that is used to specify whether the navigation component is currently expanded.
	 */
	@Input()
	expand: boolean = false;

	/**
	 * Array of LinkList which is used to show grouped links on the navigation component.
	 * Either LinkList or Link should be populated, NOT both.
	 */
	@Input()
	collectionLinks: LinkList[];

	/**
	 * Array of Link which is used to show individual links on the navigation component.
	 * Either LinkList or Link should be populated, NOT both.
	 */
	@Input()
	links: Link[] = [];

	/**
	 * Enum ref that is used to specify to which side of the text the boolean is displayed.
	 */
	@Input()
	iconPosition: IconPosition = IconPosition.LEFT;

	/**
	 * Enum ref that is used to secpify whether the navigation component is horizontal or vertical.
	 */
	@Input()
	navigationPosition: NavigationPosition = NavigationPosition.VERTICAL;

	/**
	 * Enum ref that is used to specify the state of the navigation component. That is, whether it is expanded or collapsed.
	 */
	@Input()
	navigationDisplay: NavigationDisplay = NavigationDisplay.EXPANDED;

	ngOnInit() {
		// % protected region % [Add any additional ngOnInit logic before main body here] off begin
		// % protected region % [Add any additional ngOnInit logic before main body here] end

		if (this.navigationPosition === NavigationPosition.HORIZONTAL && this.expandable) {
			this.expandable = false;
			this.navigationDisplay = NavigationDisplay.EXPANDED;
			console.error('Cannot set expandable true for horizontal navigation bars. Expandable has been set to false');
		} else if (this.expandable) {
			if (!this.displayIcons) {
				this.displayIcons = true;
				console.error('Icons must be displayed if navbar is set to be expandable. Display Icons has been set to true');
			}
			this.navigationDisplay = this.expand ? NavigationDisplay.EXPANDED : NavigationDisplay.COLLAPSED
		}
		this.reloadNavigationClasses();

		// % protected region % [Add any additional ngOnInit logic after main body here] off begin
		// % protected region % [Add any additional ngOnInit logic after main body here] end
	}

	/**
	 * Set the classes of the navigation bar based on input
	 */
	reloadNavigationClasses() {
		// Restore to default state
		this.navigationClasses = [
			'nav',
			this.navigationPosition,
			// % protected region % [Add custom nav classes here] off begin
			// % protected region % [Add custom nav classes here] end
		];

		if (this.navigationPosition === NavigationPosition.VERTICAL) {
			this.navigationClasses.push(this.navigationDisplay);
		}

		// Set icon class
		this.iconPosition = this.iconPosition
			? this.iconPosition
			: IconPosition.LEFT;
	}

	/**
	 * Given a navigation item has been clicked and has child navigation items, close all other navigation items and
	 * display the child navigation items of the selected navigation item.
	 *
	 * .active attribute determines if the sublinks are rendered or not
	 * @param event
	 */
	onExpandAccordionLinkClick(event, linkIndex: number, groupIndex?: number) {
		event.stopPropagation();
		if (groupIndex) {
			// Get accordion list item new state
			const newState = !this.collectionLinks[groupIndex].links[linkIndex].active;
			// Reset all states
			this.clearListLinkActive();
			// Set new state
			this.collectionLinks[groupIndex].links[linkIndex].active = newState;
			// % protected region % [custom grouped expand logic here] off begin
			// % protected region % [custom grouped expand logic here] end
		} else {
			// Get accordion list item new state
			const newState = !this.links[linkIndex].active;
			// Reset all states
			this.clearListLinkActive();
			// Set new state
			this.links[linkIndex].active = newState;
			// % protected region % [custom expand logic here] off begin
			// % protected region % [custom expand logic here] end
		}
		// % protected region % [End custom expand logic here] off begin
		// % protected region % [End custom expand logic here] end
	}

	/**
	 * Expand or collapse the navigation bar
	 * @param event
	 */
	onExpandNavigationClick(event: Event) {
		event.stopPropagation();

		// Toggle expanded class
		this.navigationDisplay = this.expand
			? NavigationDisplay.COLLAPSED
			: NavigationDisplay.EXPANDED;

		// Toggle expanded flag
		this.expand = !this.expand;

		// Close accordion links and reload navigation classes
		this.clearListLinkActive();
		this.reloadNavigationClasses();
	}

	/**
	 * For all Link items that have sublinks, set their active state to false;
	 */
	clearListLinkActive() {
		if (this.links) {
			this.links.forEach(link => {
				this.clearAccordion(link);
			})
		}

		if (this.collectionLinks) {
			this.collectionLinks.forEach(linklist => {
				// Loop through list items
				linklist.links.forEach(link => {
					link.active = false;
					// Clear active state of link
					this.clearAccordion(link);
				});
			});
		}
	}

	/**
	 * Method for clearing all the active classes on links
	 * @param link
	 */
	clearAccordion(link: Link) {
		if (this.links) {
			link.subLinks.forEach(subLink => {
				subLink.active = false;
			});
		}
	}

	/**
	 * Method for checking if LinkList or Link as this determines the dom structure
	 */
	checkSingleLink(): boolean {
		return this.collectionLinks
			&& this.collectionLinks.length > 0
			&& this.collectionLinks[0] instanceof LinkList;
	}

	/**
	 * Method to collapse the accordion.
	 */
	onClickOutsideAccordion(): void {
		this.clearListLinkActive();
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

}