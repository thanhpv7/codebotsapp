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

import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {Router, ActivationEnd} from '@angular/router';
import {Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {tap, filter} from 'rxjs/operators';
import * as routingAction from './routing.action';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Effect class used for side effects related to routing. Note that this is not related to NgRx Router. This effect is
 * used to centralise navigation around the application without the need to use raw router.
 */
@Injectable()
export class RoutingEffect {

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		private readonly action$: Actions,
		private readonly router: Router,
		private readonly location: Location,
		private readonly store: Store<any>,
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional constructor logic before the main body here] off begin
		// % protected region % [Add any additional constructor logic before the main body here] end

		this.listenToRouter();

		// % protected region % [Add any additional constructor logic after the main body here] off begin
		// % protected region % [Add any additional constructor logic after the main body here] end
	}

	@Effect({dispatch: false})
	navigate = this.action$.pipe(
		// % protected region % [Add any additional operations before processing the actions for navigate here] off begin
		// % protected region % [Add any additional operations before processing the actions for navigate here] end

		ofType<routingAction.NavigateRoutingAction>(routingAction.RoutingActionTypes.NAVIGATE),

		// % protected region % [Add any additional operations before using the service for navigate here] off begin
		// % protected region % [Add any additional operations before using the service for navigate here] end

		tap((action) => {
			let commands = (action as routingAction.NavigateRoutingAction).commands;
			let extras = (action as routingAction.NavigateRoutingAction).extras;

			// % protected region % [Add any additional logic before navigating here] off begin
			// % protected region % [Add any additional logic before navigating here] end

			this.router.navigate(commands, extras);
		})
	);

	@Effect({dispatch: false})
	forward = this.action$.pipe(
		// % protected region % [Add any additional operations before processing the actions for navigate forward here] off begin
		// % protected region % [Add any additional operations before processing the actions for navigate forward here] end

		ofType<routingAction.ForwardRoutingAction>(routingAction.RoutingActionTypes.FORWARD),

		// % protected region % [Add any additional operations before using the service for navigate forward here] off begin
		// % protected region % [Add any additional operations before using the service for navigate forward here] end

		tap((action) => {
			// % protected region % [Add any additional logic before navigate forward here] off begin
			// % protected region % [Add any additional logic before navigate forward here] end

			this.location.forward();
		})
	);

	@Effect({dispatch: false})
	back = this.action$.pipe(
		// % protected region % [Add any additional operations before processing the actions for navigate back here] off begin
		// % protected region % [Add any additional operations before processing the actions for navigate back here] end

		ofType<routingAction.BackRoutingAction>(routingAction.RoutingActionTypes.BACK),

		// % protected region % [Add any additional operations before using the service for navigate back here] off begin
		// % protected region % [Add any additional operations before using the service for navigate back here] end

		tap((action) => {
			// % protected region % [Add any additional logic before navigate back here] off begin
			// % protected region % [Add any additional logic before navigate back here] end

			this.location.back();
		})
	);

	private listenToRouter() {
		this.router.events.pipe(
			filter(event => event instanceof ActivationEnd)
		).subscribe((event: ActivationEnd) =>
			this.store.dispatch(new routingAction.ChangeRoutingAction({
				params: { ...event.snapshot.params },
				path: event.snapshot.routeConfig.path
			}))
		);
	}
}

// % protected region % [Add any additional stuffs here] off begin
// % protected region % [Add any additional stuffs here] end
