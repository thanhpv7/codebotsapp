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
import {Link, LinkList, NavigationPosition} from '../lib/enums/navigation';
import {AuthenticationService} from '../lib/services/authentication/authentication.service';
import {RouterState} from '../models/model.state';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end
@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: [
		'./admin.component.scss',
		// % protected region % [Add any additional component classes here] off begin
		// % protected region % [Add any additional component classes here] end
	],
	// % protected region % [Add any additional component options here] off begin
	// % protected region % [Add any additional component options here] end
})
export class AdminComponent implements OnInit {

	@ViewChild(ToastContainerDirective, { static: true })
	toastContainer: ToastContainerDirective;

	// % protected region % [Customise or remove the default navigation bar variables] off begin
	navBarLinks: LinkList[] = [];

	navPos: NavigationPosition = NavigationPosition.VERTICAL;
	// % protected region % [Customise or remove the default navigation bar variables] end

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		private readonly authenticationService: AuthenticationService,
		private readonly store: Store<{ model: RouterState }>,
		private readonly toastrService: ToastrService,
		// % protected region % [Add any additional params here] off begin
		// % protected region % [Add any additional params here] end
	) {
		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	ngOnInit() {
		this.toastrService.overlayContainer = this.toastContainer;

		// % protected region % [Add any initial logic here] off begin
		// % protected region % [Add any initial logic here] end

		// % protected region % [Customise or remove the default navigation bar links for entities] off begin
		let entitySubLinks = [
				new Link('Fish', [], 'icon-book', 'admin/entities/fish'),
				new Link('Tank', [], 'icon-book', 'admin/entities/tank'),
				new Link('Species', [], 'icon-book', 'admin/entities/species'),
		];
		// % protected region % [Customise or remove the default navigation bar links for entities] end

		// % protected region % [Customise or remove the default navigation bar links for users] off begin
		let userSubLinks = [
			new Link('Fishnatic', [], 'icon-book', 'admin/users/fishnatic'),
			new Link('Admin', [], 'icon-book', 'admin/users/admin'),
		];
		// % protected region % [Customise or remove the default navigation bar links for users] end

		// % protected region % [Customise or remove the default navigation bar links] off begin
		this.navBarLinks.push(
			new LinkList([
				new Link('Admin Dashboard', [], 'icon-home', 'admin')
			]),
			new LinkList([
				new Link('Entities', entitySubLinks, 'icon-book'),
				new Link('Users', userSubLinks, 'icon-person')
			]),
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
