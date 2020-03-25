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

import {Component, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {ToastContainerDirective, ToastrService} from 'ngx-toastr';
import {RouterState} from '../models/model.state';
import {Link, LinkList, NavigationPosition} from '../lib/enums/navigation';
import {AuthenticationService} from '../lib/services/authentication/authentication.service';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Component({
	selector: 'app-frontend',
	templateUrl: './frontend.component.html',
	styleUrls: [
		'./frontend.component.scss',
		// % protected region % [Add any additional SCSS here] off begin
		// % protected region % [Add any additional SCSS here] end
	],
	// % protected region % [Add any additional component options here] off begin
	// % protected region % [Add any additional component options here] end
})
export class FrontendComponent implements OnInit {

	@ViewChild(ToastContainerDirective, { static: true })
	toastContainer: ToastContainerDirective;

	// % protected region % [Customise or remove the default navigation bar variables] off begin
	/**
	 * Contains list of links or link groups to be in the nav bar
	 */
	navBarLinks: LinkList[] = [];

	/**
	 * Choose between a vertical or horizontal navigation bar
	 */
	navPos: NavigationPosition = NavigationPosition.VERTICAL;
	// % protected region % [Customise or remove the default navigation bar variables] end

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		private readonly authenticationService: AuthenticationService,
		private readonly store: Store<{ model: RouterState }>,
		private readonly toastrService: ToastrService,
		// % protected region % [Add any additional constructor parameters] off begin
		// % protected region % [Add any additional constructor parameters] end
	) {
		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	ngOnInit() {
		this.toastrService.overlayContainer = this.toastContainer;

		// % protected region % [Add any initial logic here] off begin
		// % protected region % [Add any initial logic here] end

		// % protected region % [Customise or remove the default navigation bar links for entities] off begin
		let entityLinks = [
				new Link('Tank', [], 'icon-book', 'tank'),
				new Link('Species', [], 'icon-book', 'species'),
		];
		// % protected region % [Customise or remove the default navigation bar links for entities] end
		// % protected region % [Customise or remove the default navigation bar links] off begin
		this.navBarLinks.push(
			new LinkList([
				new Link('Fish', [], 'icon-home', ''),
			]),
			new LinkList(entityLinks),
			new LinkList([
				new Link('Help', [], 'icon-help', 'docs'),
				new Link('Logout', [], 'icon-logout', 'logout')
			])
		);
		// % protected region % [Customise or remove the default navigation bar links] end

		// % protected region % [Add any additional initialize logic here] off begin
		// % protected region % [Add any additional initialize logic here] end
	}

	isLoggedIn(): boolean {
		return this.authenticationService.isLoggedIn;
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end

}
