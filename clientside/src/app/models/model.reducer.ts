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

import {Action, ActionReducerMap} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import {modelReducer as adminReducer} from './admin/admin.model.reducer';
import {isAdminModelAction} from './admin/admin.model.action';
import {modelReducer as fishnaticReducer} from './fishnatic/fishnatic.model.reducer';
import {isFishnaticModelAction} from './fishnatic/fishnatic.model.action';
import {modelReducer as tankReducer} from './tank/tank.model.reducer';
import {isTankModelAction} from './tank/tank.model.action';
import {modelReducer as speciesReducer} from './species/species.model.reducer';
import {isSpeciesModelAction} from './species/species.model.action';
import {modelReducer as fishReducer} from './fish/fish.model.reducer';
import {isFishModelAction} from './fish/fish.model.action';
import {modelReducer as roleReducer} from './role/role.model.reducer';
import {isRoleModelAction} from './role/role.model.action';
import {modelReducer as privilegeReducer} from './privilege/privilege.model.reducer';
import {isPrivilegeModelAction} from './privilege/privilege.model.action';
import {AppState, initialModelState, initialRouterState, ModelState} from './model.state';
import {ActionTypes} from './model.action';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Main reducer for the model state.
 */
export function modelReducer(modelState: ModelState, action: Action): ModelState {
	if (isAdminModelAction(action.type)) {
		return adminReducer(modelState, action);
	}
	if (isFishnaticModelAction(action.type)) {
		return fishnaticReducer(modelState, action);
	}
	if (isTankModelAction(action.type)) {
		return tankReducer(modelState, action);
	}
	if (isSpeciesModelAction(action.type)) {
		return speciesReducer(modelState, action);
	}
	if (isFishModelAction(action.type)) {
		return fishReducer(modelState, action);
	}
	if (isRoleModelAction(action.type)) {
		return roleReducer(modelState, action);
	}
	if (isPrivilegeModelAction(action.type)) {
		return privilegeReducer(modelState, action);
	}

	return modelState;
}

/**
 * All the reducers available in the application.
 */
export const reducers: ActionReducerMap<AppState> = {
	router: routerReducer,
	models: modelReducer,
	// % protected region % [Add any additional reducers here] off begin
	// % protected region % [Add any additional reducers here] end
};

/**
 * Meta-reducer used to clear out store when log out.
 */
export function clearState(reducer: (AppState, Action) => AppState): (AppState, Action) => AppState {
	return (state: AppState, action: Action) => {
		// % protected region % [Add any additional logic for clearState before the main body here] off begin
		// % protected region % [Add any additional logic for clearState before the main body here] end

		if (action.type === ActionTypes.LOGOUT) {
			state.router = initialRouterState;
			state.models = initialModelState;
		}

		// % protected region % [Add any additional logic for clearState after the main body here] off begin
		// % protected region % [Add any additional logic for clearState after the main body here] end

		return reducer(state, action);
	};
}

// % protected region % [Add any additional stuffs here] off begin
// % protected region % [Add any additional stuffs here] end
