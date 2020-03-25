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

/**
 * TODO: convert classes to interfaces. Make use of typescript constructor declarations.
 */
export enum NavigationPosition {
	VERTICAL = 'nav--vertical',
	HORIZONTAL = 'nav--horizontal'
}

/**
 * The state of a vertical nav-bar.
 * Collapsed will only show the Link Icons. Expanded will show the icons and the label.
 */
export enum NavigationDisplay {
	EXPANDED = 'nav--expanded',
	COLLAPSED = 'nav--collapsed'
}

export enum IconPosition {
	TOP = 'icon-top',
	BOTTOM = 'icon-bottom',
	LEFT = 'icon-left',
	RIGHT = 'icon-right'
}

/**
 * Class to group Links in to sections in the nav bar.
 */
export class LinkList {
	href: string;
	label: string;
	icon: string;
	active: boolean;
	links: Link[];

	constructor(links: Link[]) {
		this.links = links;
	}
}

/**
 * Class for a navigation bar link item.
 * A Link can has a label to display, and optional icon, a href to go to a page, and optionally a list of sublinks.
 * If a Link has sublinks, it will not go to its href. It will only display the sublinks.
 * A sublink cannot have its own sublinks.
 */
export class Link {
	constructor(
		public label: string,
		public subLinks: Link[] = [],
		public icon: string = 'icon-book',
		public href?: string,
		public active: boolean = false,
		public fullPath: boolean = false,
	) {
		this.href = href || '';
	}
}
