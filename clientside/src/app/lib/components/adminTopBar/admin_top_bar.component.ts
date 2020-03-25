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
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AbstractComponent} from '../abstract.component';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {RouterState} from '../../../models/model.state';
import {getRouterState} from '../../../models/model.selector';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Component({
	selector: 'cb-admin-top-bar',
	templateUrl: './admin_top_bar.component.html',
	styleUrls: [
		'./admin_top_bar.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class AdminTopBarComponent extends AbstractComponent implements OnInit {
	/**
	 * All of the CSS classes to be applied to the button.
	 */
	adminTopBarClasses: string[];

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	/**
	 * String of the class bind to the class in root element
	 */
	@HostBinding('class')
	get adminTopBarClassesString() {
		return this.adminTopBarClasses.join(' ');
	}

	adminView$: Observable<boolean>;

	constructor(
		private authenticationService: AuthenticationService,
		private readonly store: Store<{ router: RouterState }>,
		// % protected region % [Add any additional component configurations here] off begin
		// % protected region % [Add any additional component configurations here] end
	) {
		super();

		// % protected region % [Add any initial constructor logic here] off begin
		// % protected region % [Add any initial constructor logic here] end

		this.adminView$ = this.store.select(getRouterState).pipe(
			map(routerState => routerState.urls.includes('admin'))
		);

		this.adminTopBarClasses = [
			'admin__top-bar',
			// % protected region % [Add any additional classes here] off begin
			// % protected region % [Add any additional classes here] end
		];

		// % protected region % [Add any constructor logic here] off begin
		// % protected region % [Add any constructor logic here] end

	}

	isAdmin(): boolean {
		// % protected region % [Add any additional isAdmin logic here] off begin
		// % protected region % [Add any additional isAdmin logic here] end

		return this.authenticationService.isAdmin();
	}

	ngOnInit() {
		// % protected region % [Add any additional ngOnInit logic before main body here] off begin
		// % protected region % [Add any additional ngOnInit logic before main body here] end

		// % protected region % [Add any additional ngOnInit logic after main body here] off begin
		// % protected region % [Add any additional ngOnInit logic after main body here] end
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
}
