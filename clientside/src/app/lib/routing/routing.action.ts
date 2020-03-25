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

import {NavigationExtras} from '@angular/router';
import {Action} from '@ngrx/store';

export enum RoutingActionTypes {
	NAVIGATE = '[Routing] Navigate',
	FORWARD = '[Routing] Forward',
	BACK = '[Routing] Back',
	CHANGE = '[Routing] Change'
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  _   _     __      _______ _____       _______ ______
// | \ | |   /\ \    / /_   _/ ____|   /\|__   __|  ____|
// |  \| |  /  \ \  / /  | || |  __   /  \  | |  | |__
// | . ` | / /\ \ \/ /   | || | |_ | / /\ \ | |  |  __|
// | |\  |/ ____ \  /   _| || |__| |/ ____ \| |  | |____
// |_| \_/_/    \_\/   |_____\_____/_/    \_\_|  |______|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class NavigateRoutingAction implements Action {

	readonly type: string = RoutingActionTypes.NAVIGATE;

	// % protected region % [Add any additional class fields for ForwardRoutingAction here] off begin
	// % protected region % [Add any additional class fields for ForwardRoutingAction here] end

	public constructor(
		public readonly commands: any[],
		public readonly extras: NavigationExtras = { skipLocationChange: false },
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  ______ ____  _______          __     _____  _____
// |  ____/ __ \|  __ \ \        / /\   |  __ \|  __ \
// | |__ | |  | | |__) \ \  /\  / /  \  | |__) | |  | |
// |  __|| |  | |  _  / \ \/  \/ / /\ \ |  _  /| |  | |
// | |   | |__| | | \ \  \  /\  / ____ \| | \ \| |__| |
// |_|    \____/|_|  \_\  \/  \/_/    \_\_|  \_\_____/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class ForwardRoutingAction implements Action {

	readonly type: string = RoutingActionTypes.FORWARD;

	// % protected region % [Add any additional class fields for ForwardRoutingAction here] off begin
	// % protected region % [Add any additional class fields for ForwardRoutingAction here] end

	public constructor(
		// % protected region % [Add any additional constructor parameters for ForwardRoutingAction here] off begin
		// % protected region % [Add any additional constructor parameters for ForwardRoutingAction here] end
	) {
		// % protected region % [Add any additional constructor logic for ForwardRoutingAction here] off begin
		// % protected region % [Add any additional constructor logic for ForwardRoutingAction here] end
	}

	// % protected region % [Add any additional class methods for ForwardRoutingAction here] off begin
	// % protected region % [Add any additional class methods for ForwardRoutingAction here] end
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  ____          _____ _  __
// |  _ \   /\   / ____| |/ /
// | |_) | /  \ | |    | ' /
// |  _ < / /\ \| |    |  <
// | |_) / ____ \ |____| . \
// |____/_/    \_\_____|_|\_\
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class BackRoutingAction implements Action {

	readonly type: string = RoutingActionTypes.BACK;

	// % protected region % [Add any additional class fields for BackRoutingAction here] off begin
	// % protected region % [Add any additional class fields for BackRoutingAction here] end

	public constructor(
		// % protected region % [Add any additional constructor parameters for BackRoutingAction here] off begin
		// % protected region % [Add any additional constructor parameters for BackRoutingAction here] end
	) {
		// % protected region % [Add any additional constructor logic for BackRoutingAction here] off begin
		// % protected region % [Add any additional constructor logic for BackRoutingAction here] end
	}

	// % protected region % [Add any additional class methods for BackRoutingAction here] off begin
	// % protected region % [Add any additional class methods for BackRoutingAction here] end
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   _____ _    _          _   _  _____ ______
//  / ____| |  | |   /\   | \ | |/ ____|  ____|
// | |    | |__| |  /  \  |  \| | |  __| |__
// | |    |  __  | / /\ \ | . ` | | |_ |  __|
// | |____| |  | |/ ____ \| |\  | |__| | |____
//  \_____|_|  |_/_/    \_\_| \_|\_____|______|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class ChangeRoutingAction implements Action {

	readonly type: string = RoutingActionTypes.CHANGE;

	// % protected region % [Add any additional class fields for ChangeRoutingAction here] off begin
	// % protected region % [Add any additional class fields for ChangeRoutingAction here] end

	public constructor(
		public payload: { params: any, path: string },
		// % protected region % [Add any additional constructor parameters for ChangeRoutingAction here] off begin
		// % protected region % [Add any additional constructor parameters for ChangeRoutingAction here] end
	) {
		// % protected region % [Add any additional constructor logic for ChangeRoutingAction here] off begin
		// % protected region % [Add any additional constructor logic for ChangeRoutingAction here] end
	}

	// % protected region % [Add any additional class methods for ChangeRoutingAction here] off begin
	// % protected region % [Add any additional class methods for ChangeRoutingAction here] end
}
