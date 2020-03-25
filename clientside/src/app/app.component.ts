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

import {Component, HostBinding, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RouterState} from './models/model.state';
import {AuthenticationService} from './lib/services/authentication/authentication.service';
import {getRouterState} from './models/model.selector';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Component({
	selector: 'body[app-root]',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	/**
	 * Whether the current application is on the admin view or not.
	 */
	adminView: boolean;

	@HostBinding('class.admin')
	get isAdmin() {
		return this.adminView;
	}

	@HostBinding('class.frontend')
	get isFrontend() {
		return !this.adminView;
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		public readonly authenticationService: AuthenticationService,
		private readonly routerStore: Store<{ router: RouterState }>,
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional constructor logic here.] off begin
		// % protected region % [Add any additional constructor logic here.] end
	}

	/**
	 * @inheritDoc
	 */
	ngOnInit() {
		// % protected region % [Add any initial constructor logic here] off begin
		// % protected region % [Add any initial constructor logic here] end

		// Checks if admin is in the current route
		this.routerStore.select(getRouterState).subscribe(routerState => {
			this.adminView = routerState.urls[0] === 'admin';
		});

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}

