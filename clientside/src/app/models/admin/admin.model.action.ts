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

import {Action} from '@ngrx/store';
import {AdminModel} from './admin.model';
import {AdminModelAudit} from './admin.model.state';
import {PassableStateConfig} from '../../lib/services/http/interfaces';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * List of Admin model actions to be dispatched by NgRx.
 */
export enum AdminModelActionTypes {
	CREATE_ADMIN = '[ENTITY] Create AdminModel',
	CREATE_ADMIN_OK = '[ENTITY] Create AdminModel successfully',
	CREATE_ADMIN_FAIL = '[ENTITY] Create AdminModel failed',

	CREATE_ALL_ADMIN = '[ENTITY] Create All AdminModel',
	CREATE_ALL_ADMIN_OK = '[ENTITY] Create All AdminModel successfully',
	CREATE_ALL_ADMIN_FAIL = '[ENTITY] Create All AdminModel failed',

	DELETE_ADMIN = '[ENTITY] Delete AdminModel',
	DELETE_ADMIN_OK = '[ENTITY] Delete AdminModel successfully',
	DELETE_ADMIN_FAIL = '[ENTITY] Delete AdminModel failed',

	DELETE_ALL_ADMIN = '[ENTITY] Delete all AdminModels',
	DELETE_ALL_ADMIN_OK = '[ENTITY] Delete all AdminModels successfully',
	DELETE_ALL_ADMIN_FAIL = '[ENTITY] Delete all AdminModels failed',

	UPDATE_ADMIN = '[ENTITY] Update AdminModel',
	UPDATE_ADMIN_OK = '[ENTITY] Update AdminModel successfully',
	UPDATE_ADMIN_FAIL = '[ENTITY] Update AdminModel failed',

	UPDATE_ALL_ADMIN = '[ENTITY] Update all AdminModel',
	UPDATE_ALL_ADMIN_OK = '[ENTITY] Update all AdminModel successfully',
	UPDATE_ALL_ADMIN_FAIL = '[ENTITY] Update all AdminModel failed',

	FETCH_ADMIN= '[ENTITY] Fetch AdminModel',
	FETCH_ADMIN_OK = '[ENTITY] Fetch AdminModel successfully',
	FETCH_ADMIN_FAIL = '[ENTITY] Fetch AdminModel failed',

	FETCH_ADMIN_AUDIT= '[ENTITY] Fetch AdminModel audit',
	FETCH_ADMIN_AUDIT_OK = '[ENTITY] Fetch AdminModel audit successfully',
	FETCH_ADMIN_AUDIT_FAIL = '[ENTITY] Fetch AdminModel audit failed',

	FETCH_ADMIN_AUDITS_BY_ENTITY_ID= '[ENTITY] Fetch AdminModel audits by entity id',
	FETCH_ADMIN_AUDITS_BY_ENTITY_ID_OK = '[ENTITY] Fetch AdminModel audits by entity id successfully',
	FETCH_ADMIN_AUDITS_BY_ENTITY_ID_FAIL = '[ENTITY] Fetch AdminModel audits by entity id failed',

	FETCH_ALL_ADMIN = '[ENTITY] Fetch all AdminModel',
	FETCH_ALL_ADMIN_OK = '[ENTITY] Fetch all AdminModel successfully',
	FETCH_ALL_ADMIN_FAIL = '[ENTITY] Fetch all AdminModel failed',

	FETCH_ADMIN_WITH_QUERY = '[ENTITY] Fetch AdminModel with query',
	FETCH_ADMIN_WITH_QUERY_OK = '[ENTITY] Fetch AdminModel with query successfully',
	FETCH_ADMIN_WITH_QUERY_FAIL = '[ENTITY] Fetch AdminModel with query failed',

	FETCH_LAST_ADMIN_WITH_QUERY = '[ENTITY] Fetch last AdminModel with query',
	FETCH_LAST_ADMIN_WITH_QUERY_OK = '[ENTITY] Fetch last AdminModel with query successfully',
	FETCH_LAST_ADMIN_WITH_QUERY_FAIL = '[ENTITY] Fetch last AdminModel with query failed',

	COUNT_ADMINS = '[ENTITY] Fetch number of AdminModel records',
	COUNT_ADMINS_OK = '[ENTITY] Fetch number of AdminModel records successfully ',
	COUNT_ADMINS_FAIL = '[ENTITY] Fetch number of AdminModel records failed',

	INITIALISE_ADMIN_COLLECTION_STATE = '[ENTITY] Initialize the CollectionState of AdminModel',
	// % protected region % [Add any additional model actions here] off begin
	// % protected region % [Add any additional model actions here] end
}

export abstract class BaseAdminAction implements Action {
	readonly className: string = 'AdminModel';

	abstract readonly type: string;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	protected constructor(
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
		public readonly afterwardActions: Action[] = []
	) {
		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   _____   _____    ______              _______   ______
//  / ____| |  __ \  |  ____|     /\     |__   __| |  ____|
// | |      | |__) | | |__       /  \       | |    | |__
// | |      |  _  /  |  __|     / /\ \      | |    |  __|
// | |____  | | \ \  | |____   / ____ \     | |    | |____
//  \_____| |_|  \_\ |______| /_/    \_\    |_|    |______|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class CreateAdminModel extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.CREATE_ADMIN;

	// % protected region % [Add any additional class fields for CreateModel here] off begin
	// % protected region % [Add any additional class fields for CreateModel here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for CreateModel here] off begin
		// % protected region % [Add any additional constructor parameters for CreateModel here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for CreateModel here] off begin
			// % protected region % [Add any additional constructor arguments for CreateModel here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for CreateModel here] off begin
		// % protected region % [Add any additional constructor logic for CreateModel here] end
	}

	// % protected region % [Add any additional class methods for CreateModel here] off begin
	// % protected region % [Add any additional class methods for CreateModel here] end
}

export class CreateAdminModelOK extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.CREATE_ADMIN_OK;

	// % protected region % [Add any additional class fields for CreateModelOK here] off begin
	// % protected region % [Add any additional class fields for CreateModelOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for CreateModelOK here] off begin
		// % protected region % [Add any additional constructor parameters for CreateModelOK here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for CreateModelOK here] off begin
			// % protected region % [Add any additional constructor arguments for CreateModelOK here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for CreateModelOK here] off begin
		// % protected region % [Add any additional constructor logic for CreateModelOK here] end
	}

	// % protected region % [Add any additional class methods for CreateModelOK here] off begin
	// % protected region % [Add any additional class methods for CreateModelOK here] end
}

export class CreateAdminModelFail extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.CREATE_ADMIN_FAIL;

	// % protected region % [Add any additional class fields for CreateModelFail here] off begin
	// % protected region % [Add any additional class fields for CreateModelFail here] end

	public constructor(
		public readonly failedModel: AdminModel,
		public readonly error?: any,
		// % protected region % [Add any additional constructor parameters for CreateModelFail here] off begin
		// % protected region % [Add any additional constructor parameters for CreateModelFail here] end
		afterwardActions: Action[] = [],
	) {
		super(
			// % protected region % [Add any additional constructor arguments for CreateModelFail here] off begin
			// % protected region % [Add any additional constructor arguments for CreateModelFail here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for CreateModelFail here] off begin
		// % protected region % [Add any additional constructor logic for CreateModelFail here] end
	}

	// % protected region % [Add any additional class methods for CreateModelFail here] off begin
	// % protected region % [Add any additional class methods for CreateModelFail here] end
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   _____ _____  ______       _______ ______            _      _      
//  / ____|  __ \|  ____|   /\|__   __|  ____|     /\   | |    | |     
// | |    | |__) | |__     /  \  | |  | |__       /  \  | |    | |     
// | |    |  _  /|  __|   / /\ \ | |  |  __|     / /\ \ | |    | |     
// | |____| | \ \| |____ / ____ \| |  | |____   / ____ \| |____| |____ 
//  \_____|_|  \_\______/_/    \_\_|  |______| /_/    \_\______|______|
//                                                                     
//                                                                     
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class CreateAllAdminModel extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.CREATE_ALL_ADMIN;

	// % protected region % [Add any additional class fields for CreateAllModel here] off begin
	// % protected region % [Add any additional class fields for CreateAllModel here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for CreateAllModel here] off begin
		// % protected region % [Add any additional constructor parameters for CreateAllModel here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for CreateAllModel here] off begin
			// % protected region % [Add any additional constructor arguments for CreateAllModel here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for CreateAllModel here] off begin
		// % protected region % [Add any additional constructor logic for CreateAllModel here] end
	}

	// % protected region % [Add any additional class methods for CreateAllModel here] off begin
	// % protected region % [Add any additional class methods for CreateAllModel here] end
}

export class CreateAllAdminModelOK extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.CREATE_ALL_ADMIN_OK;

	// % protected region % [Add any additional class fields for CreateAllModelOK here] off begin
	// % protected region % [Add any additional class fields for CreateAllModelOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for CreateAllModelOK here] off begin
		// % protected region % [Add any additional constructor parameters for CreateAllModelOK here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for CreateAllModelOK here] off begin
			// % protected region % [Add any additional constructor arguments for CreateAllModelOK here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for CreateAllModelOK here] off begin
		// % protected region % [Add any additional constructor logic for CreateAllModelOK here] end
	}

	// % protected region % [Add any additional class methods for CreateAllModelOK here] off begin
	// % protected region % [Add any additional class methods for CreateAllModelOK here] end
}

export class CreateAllAdminModelFail extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.CREATE_ALL_ADMIN_FAIL;

	// % protected region % [Add any additional class fields for CreateAllModelFail here] off begin
	// % protected region % [Add any additional class fields for CreateAllModelFail here] end

	public constructor(
		public readonly failedModels: AdminModel[],
		public readonly error?: any,
		// % protected region % [Add any additional constructor parameters for CreateAllModelFail here] off begin
		// % protected region % [Add any additional constructor parameters for CreateAllModelFail here] end
		afterwardActions: Action[] = [],
	) {
		super(
			// % protected region % [Add any additional constructor arguments for CreateModelFail here] off begin
			// % protected region % [Add any additional constructor arguments for CreateModelFail here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for CreateAllModelFail here] off begin
		// % protected region % [Add any additional constructor logic for CreateAllModelFail here] end
	}

	// % protected region % [Add any additional class methods for CreateAllModelFail here] off begin
	// % protected region % [Add any additional class methods for CreateAllModelFail here] end
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  _____    ______   _        ______   _______   ______
// |  __ \  |  ____| | |      |  ____| |__   __| |  ____|
// | |  | | | |__    | |      | |__       | |    | |__
// | |  | | |  __|   | |      |  __|      | |    |  __|
// | |__| | | |____  | |____  | |____     | |    | |____
// |_____/  |______| |______| |______|    |_|    |______|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class DeleteAdminModel extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.DELETE_ADMIN;

	// % protected region % [Add any additional class fields for DeleteModel here] off begin
	// % protected region % [Add any additional class fields for DeleteModel here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for DeleteModel here] off begin
		// % protected region % [Add any additional constructor parameters for DeleteModel here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for DeleteModel here] off begin
			// % protected region % [Add any additional constructor arguments for DeleteModel here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for DeleteModel here] off begin
		// % protected region % [Add any additional constructor logic for DeleteModel here] end
	}

	// % protected region % [Add any additional class methods for DeleteModel here] off begin
	// % protected region % [Add any additional class methods for DeleteModel here] end
}

export class DeleteAdminModelOK extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.DELETE_ADMIN_OK;

	// % protected region % [Add any additional class fields for DeleteModelOK here] off begin
	// % protected region % [Add any additional class fields for DeleteModelOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for DeleteModelOK here] off begin
		// % protected region % [Add any additional constructor parameters for DeleteModelOK here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for DeleteModelOK here] off begin
			// % protected region % [Add any additional constructor arguments for DeleteModelOK here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for DeleteModelOK here] off begin
		// % protected region % [Add any additional constructor logic for DeleteModelOK here] end
	}

	// % protected region % [Add any additional class methods for DeleteModelOK here] off begin
	// % protected region % [Add any additional class methods for DeleteModelOK here] end
}

export class DeleteAdminModelFail extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.DELETE_ADMIN_FAIL;

	// % protected region % [Add any additional class fields for DeleteModelFail here] off begin
	// % protected region % [Add any additional class fields for DeleteModelFail here] end

	public constructor(
		public readonly failedModelId: string,
		public readonly error?: any,
		// % protected region % [Add any additional constructor parameters for DeleteModelFail here] off begin
		// % protected region % [Add any additional constructor parameters for DeleteModelFail here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for DeleteModelFail here] off begin
			// % protected region % [Add any additional constructor arguments for DeleteModelFail here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for DeleteModelFail here] off begin
		// % protected region % [Add any additional constructor logic for DeleteModelFail here] end
	}

	// % protected region % [Add any additional class methods for DeleteModelFail here] off begin
	// % protected region % [Add any additional class methods for DeleteModelFail here] end
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  _____    ______   _        ______   _______   ______                _        _
// |  __ \  |  ____| | |      |  ____| |__   __| |  ____|       /\     | |      | |
// | |  | | | |__    | |      | |__       | |    | |__         /  \    | |      | |
// | |  | | |  __|   | |      |  __|      | |    |  __|       / /\ \   | |      | |
// | |__| | | |____  | |____  | |____     | |    | |____     / ____ \  | |____  | |____
// |_____/  |______| |______| |______|    |_|    |______|   /_/    \_\ |______| |______|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class DeleteAdminModels extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.DELETE_ALL_ADMIN;

	// % protected region % [Add any additional class fields for DeleteModels here] off begin
	// % protected region % [Add any additional class fields for DeleteModels here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for DeleteModels here] off begin
		// % protected region % [Add any additional constructor parameters for DeleteModels here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for DeleteModels here] off begin
			// % protected region % [Add any additional constructor arguments for DeleteModels here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for DeleteModels here] off begin
		// % protected region % [Add any additional constructor logic for DeleteModels here] end
	}

	// % protected region % [Add any additional class methods for DeleteModels here] off begin
	// % protected region % [Add any additional class methods for DeleteModels here] end
}

export class DeleteAdminModelsOK extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.DELETE_ALL_ADMIN_OK;

	// % protected region % [Add any additional class fields for DeleteModelsOK here] off begin
	// % protected region % [Add any additional class fields for DeleteModelsOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for DeleteModelsOK here] off begin
		// % protected region % [Add any additional constructor parameters for DeleteModelsOK here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for DeleteModelsOK here] off begin
			// % protected region % [Add any additional constructor arguments for DeleteModelsOK here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for DeleteModelsOK here] off begin
		// % protected region % [Add any additional constructor logic for DeleteModelsOK here] end
	}

	// % protected region % [Add any additional class methods for DeleteModelsOK here] off begin
	// % protected region % [Add any additional class methods for DeleteModelsOK here] end
}

export class DeleteAdminModelsFail extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.DELETE_ALL_ADMIN_FAIL;

	// % protected region % [Add any additional class fields for DeleteModelsFail here] off begin
	// % protected region % [Add any additional class fields for DeleteModelsFail here] end

	public constructor(
		public readonly failedModelIds: string[],
		public readonly error?: any,
		// % protected region % [Add any additional constructor parameters for DeleteModelsFail here] off begin
		// % protected region % [Add any additional constructor parameters for DeleteModelsFail here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for DeleteModelsFail here] off begin
			// % protected region % [Add any additional constructor arguments for DeleteModelsFail here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for DeleteModelsFail here] off begin
		// % protected region % [Add any additional constructor logic for DeleteModelsFail here] end
	}

	// % protected region % [Add any additional class methods for DeleteModelsFail here] off begin
	// % protected region % [Add any additional class methods for DeleteModelsFail here] end
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  _    _   _____    _____               _______   ______
// | |  | | |  __ \  |  __ \      /\     |__   __| |  ____|
// | |  | | | |__) | | |  | |    /  \       | |    | |__
// | |  | | |  ___/  | |  | |   / /\ \      | |    |  __|
// | |__| | | |      | |__| |  / ____ \     | |    | |____
//  \____/  |_|      |_____/  /_/    \_\    |_|    |______|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class UpdateAdminModel extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.UPDATE_ADMIN;

	// % protected region % [Add any additional class fields for UpdateModel here] off begin
	// % protected region % [Add any additional class fields for UpdateModel here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for UpdateModel here] off begin
		// % protected region % [Add any additional constructor parameters for UpdateModel here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for UpdateModel here] off begin
			// % protected region % [Add any additional constructor arguments for UpdateModel here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for UpdateModel here] off begin
		// % protected region % [Add any additional constructor logic for UpdateModel here] end
	}

	// % protected region % [Add any additional class methods for UpdateModel here] off begin
	// % protected region % [Add any additional class methods for UpdateModel here] end
}

export class UpdateAdminModelOK extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.UPDATE_ADMIN_OK;

	// % protected region % [Add any additional class fields for UpdateModelOK here] off begin
	// % protected region % [Add any additional class fields for UpdateModelOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for UpdateModelOK here] off begin
		// % protected region % [Add any additional constructor parameters for UpdateModelOK here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for UpdateModelOK here] off begin
			// % protected region % [Add any additional constructor arguments for UpdateModelOK here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for UpdateModelOK here] off begin
		// % protected region % [Add any additional constructor logic for UpdateModelOK here] end
	}

	// % protected region % [Add any additional class methods for UpdateModelOK here] off begin
	// % protected region % [Add any additional class methods for UpdateModelOK here] end
}

export class UpdateAdminModelFail extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.UPDATE_ADMIN_FAIL;

	// % protected region % [Add any additional class fields for UpdateModelFail here] off begin
	// % protected region % [Add any additional class fields for UpdateModelFail here] end

	public constructor(
		public readonly failedModel: AdminModel,
		public readonly error?: any,
		// % protected region % [Add any additional constructor parameters for UpdateModelFail here] off begin
		// % protected region % [Add any additional constructor parameters for UpdateModelFail here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for UpdateModelFail here] off begin
			// % protected region % [Add any additional constructor arguments for UpdateModelFail here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for UpdateModelFail here] off begin
		// % protected region % [Add any additional constructor logic for UpdateModelFail here] end
	}

	// % protected region % [Add any additional class methods for UpdateModelFail here] off begin
	// % protected region % [Add any additional class methods for UpdateModelFail here] end
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  _    _ _____  _____       _______ ______            _      _      
// | |  | |  __ \|  __ \   /\|__   __|  ____|     /\   | |    | |     
// | |  | | |__) | |  | | /  \  | |  | |__       /  \  | |    | |     
// | |  | |  ___/| |  | |/ /\ \ | |  |  __|     / /\ \ | |    | |     
// | |__| | |    | |__| / ____ \| |  | |____   / ____ \| |____| |____ 
//  \____/|_|    |_____/_/    \_\_|  |______| /_/    \_\______|______|
//                                                                    
//                                                                                                                                                                                         
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class UpdateAllAdminModel extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.UPDATE_ALL_ADMIN;

	// % protected region % [Add any additional class fields for UpdateAllModel here] off begin
	// % protected region % [Add any additional class fields for UpdateAllModel here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for UpdateAllModel here] off begin
		// % protected region % [Add any additional constructor parameters for UpdateAllModel here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for UpdateAllModel here] off begin
			// % protected region % [Add any additional constructor arguments for UpdateAllModel here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for UpdateAllModel here] off begin
		// % protected region % [Add any additional constructor logic for UpdateAllModel here] end
	}

	// % protected region % [Add any additional class methods for UpdateAllModel here] off begin
	// % protected region % [Add any additional class methods for UpdateAllModel here] end
}

export class UpdateAllAdminModelOK extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.UPDATE_ALL_ADMIN_OK;

	// % protected region % [Add any additional class fields for UpdateAllModelOK here] off begin
	// % protected region % [Add any additional class fields for UpdateAllModelOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for UpdateAllModelOK here] off begin
		// % protected region % [Add any additional constructor parameters for UpdateAllModelOK here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for UpdateAllModelOK here] off begin
			// % protected region % [Add any additional constructor arguments for UpdateAllModelOK here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for UpdateAllModelOK here] off begin
		// % protected region % [Add any additional constructor logic for UpdateAllModelOK here] end
	}

	// % protected region % [Add any additional class methods for UpdateAllModelOK here] off begin
	// % protected region % [Add any additional class methods for UpdateAllModelOK here] end
}

export class UpdateAllAdminModelFail extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.UPDATE_ALL_ADMIN_FAIL;

	// % protected region % [Add any additional class fields for UpdateAllModelFail here] off begin
	// % protected region % [Add any additional class fields for UpdateAllModelFail here] end

	public constructor(
		public readonly failedModel: AdminModel[],
		public readonly error?: any,
		// % protected region % [Add any additional constructor parameters for UpdateAllModelFail here] off begin
		// % protected region % [Add any additional constructor parameters for UpdateAllModelFail here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for UpdateAllModelFail here] off begin
			// % protected region % [Add any additional constructor arguments for UpdateAllModelFail here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for UpdateAllModelFail here] off begin
		// % protected region % [Add any additional constructor logic for UpdateAllModelFail here] end
	}

	// % protected region % [Add any additional class methods for UpdateAllModelFail here] off begin
	// % protected region % [Add any additional class methods for UpdateAllModelFail here] end
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  ______   ______   _______    _____   _    _
// |  ____| |  ____| |__   __|  / ____| | |  | |
// | |__    | |__       | |    | |      | |__| |
// |  __|   |  __|      | |    | |      |  __  |
// | |      | |____     | |    | |____  | |  | |
// |_|      |______|    |_|     \_____| |_|  |_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class FetchAdminModel extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_ADMIN;

	// % protected region % [Add any additional class fields for FetchModel here] off begin
	// % protected region % [Add any additional class fields for FetchModel here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for FetchModel here] off begin
		// % protected region % [Add any additional constructor parameters for FetchModel here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchModel here] off begin
			// % protected region % [Add any additional constructor arguments for FetchModel here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchModel here] off begin
		// % protected region % [Add any additional constructor logic for FetchModel here] end
	}

	// % protected region % [Add any additional class methods for FetchModel here] off begin
	// % protected region % [Add any additional class methods for FetchModel here] end
}

export class FetchAdminModelOK extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_ADMIN_OK;

	// % protected region % [Add any additional class fields for FetchModelOK here] off begin
	// % protected region % [Add any additional class fields for FetchModelOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for FetchModelOK here] off begin
		// % protected region % [Add any additional constructor parameters for FetchModelOK here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchModelOK here] off begin
			// % protected region % [Add any additional constructor arguments for FetchModelOK here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchModelOK here] off begin
		// % protected region % [Add any additional constructor logic for FetchModelOK here] end
	}

	// % protected region % [Add any additional class methods for FetchModelOK here] off begin
	// % protected region % [Add any additional class methods for FetchModelOK here] end
}

export class FetchAdminModelFail extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_ADMIN_FAIL;

	// % protected region % [Add any additional class fields for FetchModelFail here] off begin
	// % protected region % [Add any additional class fields for FetchModelFail here] end

	public constructor(
		public readonly failedModelId: string,
		public readonly error?: any,
		// % protected region % [Add any additional constructor parameters for FetchModelFail here] off begin
		// % protected region % [Add any additional constructor parameters for FetchModelFail here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchModelFail here] off begin
			// % protected region % [Add any additional constructor arguments for FetchModelFail here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchModelFail here] off begin
		// % protected region % [Add any additional constructor logic for FetchModelFail here] end
	}

	// % protected region % [Add any additional class methods for FetchModelFail here] off begin
	// % protected region % [Add any additional class methods for FetchModelFail here] end
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  ______   ______   _______    _____   _    _                _    _   _____    _____   _______
// |  ____| |  ____| |__   __|  / ____| | |  | |       /\     | |  | | |  __ \  |_   _| |__   __|
// | |__    | |__       | |    | |      | |__| |      /  \    | |  | | | |  | |   | |      | |
// |  __|   |  __|      | |    | |      |  __  |     / /\ \   | |  | | | |  | |   | |      | |
// | |      | |____     | |    | |____  | |  | |    / ____ \  | |__| | | |__| |  _| |_     | |
// |_|      |______|    |_|     \_____| |_|  |_|   /_/    \_\  \____/  |_____/  |_____|    |_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class FetchAdminModelAudit extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_ADMIN_AUDIT;

	// % protected region % [Add any additional class fields for FetchAudit here] off begin
	// % protected region % [Add any additional class fields for FetchAudit here] end

	public constructor(
		// % protected region % [Add any additional constructor parameters for FetchAudit here] off begin
		// % protected region % [Add any additional constructor parameters for FetchAudit here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchAudit here] off begin
			// % protected region % [Add any additional constructor arguments for FetchAudit here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchAudit here] off begin
		// % protected region % [Add any additional constructor logic for FetchAudit here] end
	}

	// % protected region % [Add any additional class methods for FetchAudit here] off begin
	// % protected region % [Add any additional class methods for FetchAudit here] end
}

export class FetchAdminModelAuditOK extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_ADMIN_AUDIT_OK;

	// % protected region % [Add any additional class fields for FetchAuditOK here] off begin
	// % protected region % [Add any additional class fields for FetchAuditOK here] end

	public constructor(
		public readonly audits: AdminModelAudit[],
		// % protected region % [Add any additional constructor parameters for FetchAuditOK here] off begin
		// % protected region % [Add any additional constructor parameters for FetchAuditOK here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchAuditOK here] off begin
			// % protected region % [Add any additional constructor arguments for FetchAuditOK here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchAuditOK here] off begin
		// % protected region % [Add any additional constructor logic for FetchAuditOK here] end
	}

	// % protected region % [Add any additional class methods for FetchAuditOK here] off begin
	// % protected region % [Add any additional class methods for FetchAuditOK here] end
}

export class FetchAdminModelAuditFail extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_ADMIN_AUDIT_FAIL;

	// % protected region % [Add any additional class fields for FetchAuditFail here] off begin
	// % protected region % [Add any additional class fields for FetchAuditFail here] end

	public constructor(
		public readonly error?: any,
		// % protected region % [Add any additional constructor parameters for FetchAuditFail here] off begin
		// % protected region % [Add any additional constructor parameters for FetchAuditFail here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchAuditFail here] off begin
			// % protected region % [Add any additional constructor arguments for FetchAuditFail here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchAuditFail here] off begin
		// % protected region % [Add any additional constructor logic for FetchAuditFail here] end
	}

	// % protected region % [Add any additional class methods for FetchAuditFail here] off begin
	// % protected region % [Add any additional class methods for FetchAuditFail here] end
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  ______ ______ _______ _____ _    _           _    _ _____ _____ _______ _____   ______     __  ______ _   _ _______ _____ _________     __  _____ _____  
// |  ____|  ____|__   __/ ____| |  | |     /\  | |  | |  __ \_   _|__   __/ ____| |  _ \ \   / / |  ____| \ | |__   __|_   _|__   __\ \   / / |_   _|  __ \ 
// | |__  | |__     | | | |    | |__| |    /  \ | |  | | |  | || |    | | | (___   | |_) \ \_/ /  | |__  |  \| |  | |    | |    | |   \ \_/ /    | | | |  | |
// |  __| |  __|    | | | |    |  __  |   / /\ \| |  | | |  | || |    | |  \___ \  |  _ < \   /   |  __| | . ` |  | |    | |    | |    \   /     | | | |  | |
// | |    | |____   | | | |____| |  | |  / ____ \ |__| | |__| || |_   | |  ____) | | |_) | | |    | |____| |\  |  | |   _| |_   | |     | |     _| |_| |__| |
// |_|    |______|  |_|  \_____|_|  |_| /_/    \_\____/|_____/_____|  |_| |_____/  |____/  |_|    |______|_| \_|  |_|  |_____|  |_|     |_|    |_____|_____/ 
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class FetchAdminModelAuditsByEntityId extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_ADMIN_AUDITS_BY_ENTITY_ID;

	// % protected region % [Add any additional class fields for FetchAuditsByEntityId here] off begin
	// % protected region % [Add any additional class fields for FetchAuditsByEntityId here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for FetchAuditsByEntityId here] off begin
		// % protected region % [Add any additional constructor parameters for FetchAuditsByEntityId here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchFetchAuditsByEntityIdAudit here] off begin
			// % protected region % [Add any additional constructor arguments for FetchFetchAuditsByEntityIdAudit here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchAuditsByEntityId here] off begin
		// % protected region % [Add any additional constructor logic for FetchAuditsByEntityId here] end
	}

	// % protected region % [Add any additional class methods for FetchAuditsByEntityId here] off begin
	// % protected region % [Add any additional class methods for FetchAuditsByEntityId here] end
}

export class FetchAdminModelAuditsByEntityIdOK extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_ADMIN_AUDITS_BY_ENTITY_ID_OK;

	// % protected region % [Add any additional class fields for FetchAuditsByEntityIdOK here] off begin
	// % protected region % [Add any additional class fields for FetchAuditsByEntityIdOK here] end

	public constructor(
		public readonly audits: AdminModelAudit[],
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for FetchAuditsByEntityIdOK here] off begin
		// % protected region % [Add any additional constructor parameters for FetchAuditsByEntityIdOK here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchAuditsByEntityIdOK here] off begin
			// % protected region % [Add any additional constructor arguments for FetchAuditsByEntityIdOK here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchAuditsByEntityIdOK here] off begin
		// % protected region % [Add any additional constructor logic for FetchAuditsByEntityIdOK here] end
	}

	// % protected region % [Add any additional class methods for FetchAuditsByEntityIdOK here] off begin
	// % protected region % [Add any additional class methods for FetchAuditsByEntityIdOK here] end
}

export class FetchAdminModelAuditsByEntityIdFail extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_ADMIN_AUDITS_BY_ENTITY_ID_FAIL;

	// % protected region % [Add any additional class fields for FetchAuditsByEntityIdFail here] off begin
	// % protected region % [Add any additional class fields for FetchAuditsByEntityIdFail here] end

	public constructor(
		public readonly error?: any,
		// % protected region % [Add any additional constructor parameters for FetchAuditsByEntityIdFail here] off begin
		// % protected region % [Add any additional constructor parameters for FetchAuditsByEntityIdFail here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchAuditsByEntityIdFail here] off begin
			// % protected region % [Add any additional constructor arguments for FetchAuditsByEntityIdFail here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchAuditsByEntityIdFail here] off begin
		// % protected region % [Add any additional constructor logic for FetchAuditsByEntityIdFail here] end
	}

	// % protected region % [Add any additional class methods for FetchAuditsByEntityIdFail here] off begin
	// % protected region % [Add any additional class methods for FetchAuditsByEntityIdFail here] end
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  ______   ______   _______    _____   _    _                _        _
// |  ____| |  ____| |__   __|  / ____| | |  | |       /\     | |      | |
// | |__    | |__       | |    | |      | |__| |      /  \    | |      | |
// |  __|   |  __|      | |    | |      |  __  |     / /\ \   | |      | |
// | |      | |____     | |    | |____  | |  | |    / ____ \  | |____  | |____
// |_|      |______|    |_|     \_____| |_|  |_|   /_/    \_\ |______| |______|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class FetchAllAdminModels extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_ALL_ADMIN;

	// % protected region % [Add any additional class fields for FetchAll here] off begin
	// % protected region % [Add any additional class fields for FetchAll here] end

	public constructor(
		public readonly stateConfig?: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for FetchAll here] off begin
		// % protected region % [Add any additional constructor parameters for FetchAll here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchAll here] off begin
			// % protected region % [Add any additional constructor arguments for FetchAll here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchAll here] off begin
		// % protected region % [Add any additional constructor logic for FetchAll here] end
	}

	// % protected region % [Add any additional class methods for FetchAll here] off begin
	// % protected region % [Add any additional class methods for FetchAll here] end
}

export class FetchAllAdminModelsOK extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_ALL_ADMIN_OK;

	// % protected region % [Add any additional class fields for FetchAllOK here] off begin
	// % protected region % [Add any additional class fields for FetchAllOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for FetchAllOK here] off begin
		// % protected region % [Add any additional constructor parameters for FetchAllOK here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchAllOK here] off begin
			// % protected region % [Add any additional constructor arguments for FetchAllOK here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchAllOK here] off begin
		// % protected region % [Add any additional constructor logic for FetchAllOK here] end
	}

	// % protected region % [Add any additional class methods for FetchAllOK here] off begin
	// % protected region % [Add any additional class methods for FetchAllOK here] end
}

export class FetchAllAdminModelsFail extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_ALL_ADMIN_FAIL;

	// % protected region % [Add any additional class fields for FetchAllFail here] off begin
	// % protected region % [Add any additional class fields for FetchAllFail here] end

	public constructor(
		public readonly error?: any,
		// % protected region % [Add any additional constructor parameters for FetchAllFail here] off begin
		// % protected region % [Add any additional constructor parameters for FetchAllFail here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchAllFail here] off begin
			// % protected region % [Add any additional constructor arguments for FetchAllFail here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchAllFail here] off begin
		// % protected region % [Add any additional constructor logic for FetchAllFail here] end
	}

	// % protected region % [Add any additional class methods for FetchAllFail here] off begin
	// % protected region % [Add any additional class methods for FetchAllFail here] end
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  ______   ______   _______    _____   _    _      ____    _    _   ______   _____   __     __
// |  ____| |  ____| |__   __|  / ____| | |  | |    / __ \  | |  | | |  ____| |  __ \  \ \   / /
// | |__    | |__       | |    | |      | |__| |   | |  | | | |  | | | |__    | |__) |  \ \_/ /
// |  __|   |  __|      | |    | |      |  __  |   | |  | | | |  | | |  __|   |  _  /    \   /
// | |      | |____     | |    | |____  | |  | |   | |__| | | |__| | | |____  | | \ \     | |
// |_|      |______|    |_|     \_____| |_|  |_|    \___\_\  \____/  |______| |_|  \_\    |_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class FetchAdminModelsWithQuery extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_ADMIN_WITH_QUERY;

	// % protected region % [Add any additional class fields for FetchWithQuery here] off begin
	// % protected region % [Add any additional class fields for FetchWithQuery here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for FetchWithQuery here] off begin
		// % protected region % [Add any additional constructor parameters for FetchWithQuery here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchWithQuery here] off begin
			// % protected region % [Add any additional constructor arguments for FetchWithQuery here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchWithQuery here] off begin
		// % protected region % [Add any additional constructor logic for FetchWithQuery here] end
	}

	// % protected region % [Add any additional class methods for FetchWithQuery here] off begin
	// % protected region % [Add any additional class methods for FetchWithQuery here] end
}

export class FetchAdminModelsWithQueryOK extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_ADMIN_WITH_QUERY_OK;

	// % protected region % [Add any additional class fields for FetchWithQueryOK here] off begin
	// % protected region % [Add any additional class fields for FetchWithQueryOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for FetchWithQueryOK here] off begin
		// % protected region % [Add any additional constructor parameters for FetchWithQueryOK here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchWithQueryOK here] off begin
			// % protected region % [Add any additional constructor arguments for FetchWithQueryOK here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchWithQueryOK here] off begin
		// % protected region % [Add any additional constructor logic for FetchWithQueryOK here] end
	}

	// % protected region % [Add any additional class methods for FetchWithQueryOK here] off begin
	// % protected region % [Add any additional class methods for FetchWithQueryOK here] end
}

export class FetchAdminModelsWithQueryFail extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_ADMIN_WITH_QUERY_FAIL;

	// % protected region % [Add any additional class fields for FetchWithQueryFail here] off begin
	// % protected region % [Add any additional class fields for FetchWithQueryFail here] end

	public constructor(
		public readonly error?: any,
		// % protected region % [Add any additional constructor parameters for FetchWithQueryFail here] off begin
		// % protected region % [Add any additional constructor parameters for FetchWithQueryFail here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchWithQueryFail here] off begin
			// % protected region % [Add any additional constructor arguments for FetchWithQueryFail here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchWithQueryFail here] off begin
		// % protected region % [Add any additional constructor logic for FetchWithQueryFail here] end
	}

	// % protected region % [Add any additional class methods for FetchWithQueryFail here] off begin
	// % protected region % [Add any additional class methods for FetchWithQueryFail here] end
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  ______   ______   _______    _____   _    _     _                    _____   _______
// |  ____| |  ____| |__   __|  / ____| | |  | |   | |          /\      / ____| |__   __|
// | |__    | |__       | |    | |      | |__| |   | |         /  \    | (___      | |
// |  __|   |  __|      | |    | |      |  __  |   | |        / /\ \    \___ \     | |
// | |      | |____     | |    | |____  | |  | |   | |____   / ____ \   ____) |    | |
// |_|      |______|    |_|     \_____| |_|  |_|   |______| /_/    \_\ |_____/     |_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class FetchLastAdminModelsWithQuery extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_LAST_ADMIN_WITH_QUERY;

	// % protected region % [Add any additional class fields for FetchLastWithQuery here] off begin
	// % protected region % [Add any additional class fields for FetchLastWithQuery here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for FetchLastWithQuery here] off begin
		// % protected region % [Add any additional constructor parameters for FetchLastWithQuery here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchLastWithQuery here] off begin
			// % protected region % [Add any additional constructor arguments for FetchLastWithQuery here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchLastWithQuery here] off begin
		// % protected region % [Add any additional constructor logic for FetchLastWithQuery here] end
	}

	// % protected region % [Add any additional class methods for FetchLastWithQuery here] off begin
	// % protected region % [Add any additional class methods for FetchLastWithQuery here] end
}

export class FetchLastAdminModelsWithQueryOK extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_LAST_ADMIN_WITH_QUERY_OK;

	// % protected region % [Add any additional class fields for FetchLastWithQueryOK here] off begin
	// % protected region % [Add any additional class fields for FetchLastWithQueryOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for FetchLastWithQueryOK here] off begin
		// % protected region % [Add any additional constructor parameters for FetchLastWithQueryOK here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchLastWithQueryOK here] off begin
			// % protected region % [Add any additional constructor arguments for FetchLastWithQueryOK here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchLastWithQueryOK here] off begin
		// % protected region % [Add any additional constructor logic for FetchLastWithQueryOK here] end
	}

	// % protected region % [Add any additional class methods for FetchLastWithQueryOK here] off begin
	// % protected region % [Add any additional class methods for FetchLastWithQueryOK here] end
}

export class FetchLastAdminModelsWithQueryFail extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.FETCH_LAST_ADMIN_WITH_QUERY_FAIL;

	// % protected region % [Add any additional class fields for FetchLastWithQueryFailed here] off begin
	// % protected region % [Add any additional class fields for FetchLastWithQueryFailed here] end

	public constructor(
		public readonly error?: any,
		// % protected region % [Add any additional constructor parameters for FetchLastWithQueryFailed here] off begin
		// % protected region % [Add any additional constructor parameters for FetchLastWithQueryFailed here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for FetchLastWithQueryFailed here] off begin
			// % protected region % [Add any additional constructor arguments for FetchLastWithQueryFailed here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for FetchLastWithQueryFailed here] off begin
		// % protected region % [Add any additional constructor logic for FetchLastWithQueryFailed here] end
	}

	// % protected region % [Add any additional class methods for FetchLastWithQueryFailed here] off begin
	// % protected region % [Add any additional class methods for FetchLastWithQueryFailed here] end
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   _____    ____    _    _   _   _   _______
//  / ____|  / __ \  | |  | | | \ | | |__   __|
// | |      | |  | | | |  | | |  \| |    | |
// | |      | |  | | | |  | | | . ` |    | |
// | |____  | |__| | | |__| | | |\  |    | |
//  \_____|  \____/   \____/  |_| \_|    |_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class CountAdminModels extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.COUNT_ADMINS;

	// % protected region % [Add any additional class fields for CountModels here] off begin
	// % protected region % [Add any additional class fields for CountModels here] end

	public constructor(
		// % protected region % [Add any additional constructor parameters for CountModels here] off begin
		// % protected region % [Add any additional constructor parameters for CountModels here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for CountModels here] off begin
			// % protected region % [Add any additional constructor arguments for CountModels here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for CountModels here] off begin
		// % protected region % [Add any additional constructor logic for CountModels here] end
	}

	// % protected region % [Add any additional class methods for CountModels here] off begin
	// % protected region % [Add any additional class methods for CountModels here] end
}

export class CountAdminModelsOK extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.COUNT_ADMINS_OK;

	// % protected region % [Add any additional class fields for CountModelsOK here] off begin
	// % protected region % [Add any additional class fields for CountModelsOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for CountModelsOK here] off begin
		// % protected region % [Add any additional constructor parameters for CountModelsOK here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for CountModelsOK here] off begin
			// % protected region % [Add any additional constructor arguments for CountModelsOK here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for CountModelsOK here] off begin
		// % protected region % [Add any additional constructor logic for CountModelsOK here] end
	}

	// % protected region % [Add any additional class methods for CountModelsOK here] off begin
	// % protected region % [Add any additional class methods for CountModelsOK here] end
}

export class CountAdminModelsFail extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.COUNT_ADMINS_FAIL;

	// % protected region % [Add any additional class fields for CountModelsFail here] off begin
	// % protected region % [Add any additional class fields for CountModelsFail here] end

	public constructor(
		public readonly error?: any,
		// % protected region % [Add any additional constructor parameters for CountModelsFail here] off begin
		// % protected region % [Add any additional constructor parameters for CountModelsFail here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for CountModelsFail here] off begin
			// % protected region % [Add any additional constructor arguments for CountModelsFail here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for CountModelsFail here] off begin
		// % protected region % [Add any additional constructor logic for CountModelsFail here] end
	}

	// % protected region % [Add any additional class methods for CountModelsFail here] off begin
	// % protected region % [Add any additional class methods for CountModelsFail here] end
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  _____   _   _   _____   _______   _____              _        _____    _____   ______
// |_   _| | \ | | |_   _| |__   __| |_   _|     /\     | |      |_   _|  / ____| |  ____|
//   | |   |  \| |   | |      | |      | |      /  \    | |        | |   | (___   | |__
//   | |   | . ` |   | |      | |      | |     / /\ \   | |        | |    \___ \  |  __|
//  _| |_  | |\  |  _| |_     | |     _| |_   / ____ \  | |____   _| |_   ____) | | |____
// |_____| |_| \_| |_____|    |_|    |_____| /_/    \_\ |______| |_____| |_____/  |______|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class InitialiseAdminCollectionState extends BaseAdminAction {

	readonly type: string = AdminModelActionTypes.INITIALISE_ADMIN_COLLECTION_STATE;

	// % protected region % [Add any additional class fields for Initialise here] off begin
	// % protected region % [Add any additional class fields for Initialise here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<AdminModel>,
		// % protected region % [Add any additional constructor parameters for Initialise here] off begin
		// % protected region % [Add any additional constructor parameters for Initialise here] end
		afterwardActions: Action[] = []
	) {
		super(
			// % protected region % [Add any additional constructor arguments for Initialise here] off begin
			// % protected region % [Add any additional constructor arguments for Initialise here] end
			afterwardActions
		);

		// % protected region % [Add any additional constructor logic for Initialise here] off begin
		// % protected region % [Add any additional constructor logic for Initialise here] end
	}

	// % protected region % [Add any additional class methods for Initialise here] off begin
	// % protected region % [Add any additional class methods for Initialise here] end
}

export function isAdminModelAction(e: any): e is BaseAdminAction {
	return Object.values(AdminModelActionTypes).includes(e);
}

// % protected region % [Add any additional actions here] off begin
// % protected region % [Add any additional actions here] end
