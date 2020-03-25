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
import {SpeciesModel} from './species.model';
import {SpeciesModelAudit} from './species.model.state';
import {PassableStateConfig} from '../../lib/services/http/interfaces';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * List of Species model actions to be dispatched by NgRx.
 */
export enum SpeciesModelActionTypes {
	CREATE_SPECIES = '[ENTITY] Create SpeciesModel',
	CREATE_SPECIES_OK = '[ENTITY] Create SpeciesModel successfully',
	CREATE_SPECIES_FAIL = '[ENTITY] Create SpeciesModel failed',

	CREATE_ALL_SPECIES = '[ENTITY] Create All SpeciesModel',
	CREATE_ALL_SPECIES_OK = '[ENTITY] Create All SpeciesModel successfully',
	CREATE_ALL_SPECIES_FAIL = '[ENTITY] Create All SpeciesModel failed',

	DELETE_SPECIES = '[ENTITY] Delete SpeciesModel',
	DELETE_SPECIES_OK = '[ENTITY] Delete SpeciesModel successfully',
	DELETE_SPECIES_FAIL = '[ENTITY] Delete SpeciesModel failed',

	DELETE_ALL_SPECIES = '[ENTITY] Delete all SpeciesModels',
	DELETE_ALL_SPECIES_OK = '[ENTITY] Delete all SpeciesModels successfully',
	DELETE_ALL_SPECIES_FAIL = '[ENTITY] Delete all SpeciesModels failed',

	UPDATE_SPECIES = '[ENTITY] Update SpeciesModel',
	UPDATE_SPECIES_OK = '[ENTITY] Update SpeciesModel successfully',
	UPDATE_SPECIES_FAIL = '[ENTITY] Update SpeciesModel failed',

	UPDATE_ALL_SPECIES = '[ENTITY] Update all SpeciesModel',
	UPDATE_ALL_SPECIES_OK = '[ENTITY] Update all SpeciesModel successfully',
	UPDATE_ALL_SPECIES_FAIL = '[ENTITY] Update all SpeciesModel failed',

	FETCH_SPECIES= '[ENTITY] Fetch SpeciesModel',
	FETCH_SPECIES_OK = '[ENTITY] Fetch SpeciesModel successfully',
	FETCH_SPECIES_FAIL = '[ENTITY] Fetch SpeciesModel failed',

	FETCH_SPECIES_AUDIT= '[ENTITY] Fetch SpeciesModel audit',
	FETCH_SPECIES_AUDIT_OK = '[ENTITY] Fetch SpeciesModel audit successfully',
	FETCH_SPECIES_AUDIT_FAIL = '[ENTITY] Fetch SpeciesModel audit failed',

	FETCH_SPECIES_AUDITS_BY_ENTITY_ID= '[ENTITY] Fetch SpeciesModel audits by entity id',
	FETCH_SPECIES_AUDITS_BY_ENTITY_ID_OK = '[ENTITY] Fetch SpeciesModel audits by entity id successfully',
	FETCH_SPECIES_AUDITS_BY_ENTITY_ID_FAIL = '[ENTITY] Fetch SpeciesModel audits by entity id failed',

	FETCH_ALL_SPECIES = '[ENTITY] Fetch all SpeciesModel',
	FETCH_ALL_SPECIES_OK = '[ENTITY] Fetch all SpeciesModel successfully',
	FETCH_ALL_SPECIES_FAIL = '[ENTITY] Fetch all SpeciesModel failed',

	FETCH_SPECIES_WITH_QUERY = '[ENTITY] Fetch SpeciesModel with query',
	FETCH_SPECIES_WITH_QUERY_OK = '[ENTITY] Fetch SpeciesModel with query successfully',
	FETCH_SPECIES_WITH_QUERY_FAIL = '[ENTITY] Fetch SpeciesModel with query failed',

	FETCH_LAST_SPECIES_WITH_QUERY = '[ENTITY] Fetch last SpeciesModel with query',
	FETCH_LAST_SPECIES_WITH_QUERY_OK = '[ENTITY] Fetch last SpeciesModel with query successfully',
	FETCH_LAST_SPECIES_WITH_QUERY_FAIL = '[ENTITY] Fetch last SpeciesModel with query failed',

	COUNT_SPECIESS = '[ENTITY] Fetch number of SpeciesModel records',
	COUNT_SPECIESS_OK = '[ENTITY] Fetch number of SpeciesModel records successfully ',
	COUNT_SPECIESS_FAIL = '[ENTITY] Fetch number of SpeciesModel records failed',

	INITIALISE_SPECIES_COLLECTION_STATE = '[ENTITY] Initialize the CollectionState of SpeciesModel',
	// % protected region % [Add any additional model actions here] off begin
	// % protected region % [Add any additional model actions here] end
}

export abstract class BaseSpeciesAction implements Action {
	readonly className: string = 'SpeciesModel';

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

export class CreateSpeciesModel extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.CREATE_SPECIES;

	// % protected region % [Add any additional class fields for CreateModel here] off begin
	// % protected region % [Add any additional class fields for CreateModel here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class CreateSpeciesModelOK extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.CREATE_SPECIES_OK;

	// % protected region % [Add any additional class fields for CreateModelOK here] off begin
	// % protected region % [Add any additional class fields for CreateModelOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class CreateSpeciesModelFail extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.CREATE_SPECIES_FAIL;

	// % protected region % [Add any additional class fields for CreateModelFail here] off begin
	// % protected region % [Add any additional class fields for CreateModelFail here] end

	public constructor(
		public readonly failedModel: SpeciesModel,
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

export class CreateAllSpeciesModel extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.CREATE_ALL_SPECIES;

	// % protected region % [Add any additional class fields for CreateAllModel here] off begin
	// % protected region % [Add any additional class fields for CreateAllModel here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class CreateAllSpeciesModelOK extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.CREATE_ALL_SPECIES_OK;

	// % protected region % [Add any additional class fields for CreateAllModelOK here] off begin
	// % protected region % [Add any additional class fields for CreateAllModelOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class CreateAllSpeciesModelFail extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.CREATE_ALL_SPECIES_FAIL;

	// % protected region % [Add any additional class fields for CreateAllModelFail here] off begin
	// % protected region % [Add any additional class fields for CreateAllModelFail here] end

	public constructor(
		public readonly failedModels: SpeciesModel[],
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

export class DeleteSpeciesModel extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.DELETE_SPECIES;

	// % protected region % [Add any additional class fields for DeleteModel here] off begin
	// % protected region % [Add any additional class fields for DeleteModel here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class DeleteSpeciesModelOK extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.DELETE_SPECIES_OK;

	// % protected region % [Add any additional class fields for DeleteModelOK here] off begin
	// % protected region % [Add any additional class fields for DeleteModelOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class DeleteSpeciesModelFail extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.DELETE_SPECIES_FAIL;

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

export class DeleteSpeciesModels extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.DELETE_ALL_SPECIES;

	// % protected region % [Add any additional class fields for DeleteModels here] off begin
	// % protected region % [Add any additional class fields for DeleteModels here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class DeleteSpeciesModelsOK extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.DELETE_ALL_SPECIES_OK;

	// % protected region % [Add any additional class fields for DeleteModelsOK here] off begin
	// % protected region % [Add any additional class fields for DeleteModelsOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class DeleteSpeciesModelsFail extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.DELETE_ALL_SPECIES_FAIL;

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

export class UpdateSpeciesModel extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.UPDATE_SPECIES;

	// % protected region % [Add any additional class fields for UpdateModel here] off begin
	// % protected region % [Add any additional class fields for UpdateModel here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class UpdateSpeciesModelOK extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.UPDATE_SPECIES_OK;

	// % protected region % [Add any additional class fields for UpdateModelOK here] off begin
	// % protected region % [Add any additional class fields for UpdateModelOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class UpdateSpeciesModelFail extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.UPDATE_SPECIES_FAIL;

	// % protected region % [Add any additional class fields for UpdateModelFail here] off begin
	// % protected region % [Add any additional class fields for UpdateModelFail here] end

	public constructor(
		public readonly failedModel: SpeciesModel,
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

export class UpdateAllSpeciesModel extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.UPDATE_ALL_SPECIES;

	// % protected region % [Add any additional class fields for UpdateAllModel here] off begin
	// % protected region % [Add any additional class fields for UpdateAllModel here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class UpdateAllSpeciesModelOK extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.UPDATE_ALL_SPECIES_OK;

	// % protected region % [Add any additional class fields for UpdateAllModelOK here] off begin
	// % protected region % [Add any additional class fields for UpdateAllModelOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class UpdateAllSpeciesModelFail extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.UPDATE_ALL_SPECIES_FAIL;

	// % protected region % [Add any additional class fields for UpdateAllModelFail here] off begin
	// % protected region % [Add any additional class fields for UpdateAllModelFail here] end

	public constructor(
		public readonly failedModel: SpeciesModel[],
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

export class FetchSpeciesModel extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_SPECIES;

	// % protected region % [Add any additional class fields for FetchModel here] off begin
	// % protected region % [Add any additional class fields for FetchModel here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class FetchSpeciesModelOK extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_SPECIES_OK;

	// % protected region % [Add any additional class fields for FetchModelOK here] off begin
	// % protected region % [Add any additional class fields for FetchModelOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class FetchSpeciesModelFail extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_SPECIES_FAIL;

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

export class FetchSpeciesModelAudit extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_SPECIES_AUDIT;

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

export class FetchSpeciesModelAuditOK extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_SPECIES_AUDIT_OK;

	// % protected region % [Add any additional class fields for FetchAuditOK here] off begin
	// % protected region % [Add any additional class fields for FetchAuditOK here] end

	public constructor(
		public readonly audits: SpeciesModelAudit[],
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

export class FetchSpeciesModelAuditFail extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_SPECIES_AUDIT_FAIL;

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

export class FetchSpeciesModelAuditsByEntityId extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_SPECIES_AUDITS_BY_ENTITY_ID;

	// % protected region % [Add any additional class fields for FetchAuditsByEntityId here] off begin
	// % protected region % [Add any additional class fields for FetchAuditsByEntityId here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class FetchSpeciesModelAuditsByEntityIdOK extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_SPECIES_AUDITS_BY_ENTITY_ID_OK;

	// % protected region % [Add any additional class fields for FetchAuditsByEntityIdOK here] off begin
	// % protected region % [Add any additional class fields for FetchAuditsByEntityIdOK here] end

	public constructor(
		public readonly audits: SpeciesModelAudit[],
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class FetchSpeciesModelAuditsByEntityIdFail extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_SPECIES_AUDITS_BY_ENTITY_ID_FAIL;

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

export class FetchAllSpeciesModels extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_ALL_SPECIES;

	// % protected region % [Add any additional class fields for FetchAll here] off begin
	// % protected region % [Add any additional class fields for FetchAll here] end

	public constructor(
		public readonly stateConfig?: PassableStateConfig<SpeciesModel>,
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

export class FetchAllSpeciesModelsOK extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_ALL_SPECIES_OK;

	// % protected region % [Add any additional class fields for FetchAllOK here] off begin
	// % protected region % [Add any additional class fields for FetchAllOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class FetchAllSpeciesModelsFail extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_ALL_SPECIES_FAIL;

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

export class FetchSpeciesModelsWithQuery extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_SPECIES_WITH_QUERY;

	// % protected region % [Add any additional class fields for FetchWithQuery here] off begin
	// % protected region % [Add any additional class fields for FetchWithQuery here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class FetchSpeciesModelsWithQueryOK extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_SPECIES_WITH_QUERY_OK;

	// % protected region % [Add any additional class fields for FetchWithQueryOK here] off begin
	// % protected region % [Add any additional class fields for FetchWithQueryOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class FetchSpeciesModelsWithQueryFail extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_SPECIES_WITH_QUERY_FAIL;

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

export class FetchLastSpeciesModelsWithQuery extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_LAST_SPECIES_WITH_QUERY;

	// % protected region % [Add any additional class fields for FetchLastWithQuery here] off begin
	// % protected region % [Add any additional class fields for FetchLastWithQuery here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class FetchLastSpeciesModelsWithQueryOK extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_LAST_SPECIES_WITH_QUERY_OK;

	// % protected region % [Add any additional class fields for FetchLastWithQueryOK here] off begin
	// % protected region % [Add any additional class fields for FetchLastWithQueryOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class FetchLastSpeciesModelsWithQueryFail extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.FETCH_LAST_SPECIES_WITH_QUERY_FAIL;

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

export class CountSpeciesModels extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.COUNT_SPECIESS;

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

export class CountSpeciesModelsOK extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.COUNT_SPECIESS_OK;

	// % protected region % [Add any additional class fields for CountModelsOK here] off begin
	// % protected region % [Add any additional class fields for CountModelsOK here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export class CountSpeciesModelsFail extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.COUNT_SPECIESS_FAIL;

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

export class InitialiseSpeciesCollectionState extends BaseSpeciesAction {

	readonly type: string = SpeciesModelActionTypes.INITIALISE_SPECIES_COLLECTION_STATE;

	// % protected region % [Add any additional class fields for Initialise here] off begin
	// % protected region % [Add any additional class fields for Initialise here] end

	public constructor(
		public readonly stateConfig: PassableStateConfig<SpeciesModel>,
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

export function isSpeciesModelAction(e: any): e is BaseSpeciesAction {
	return Object.values(SpeciesModelActionTypes).includes(e);
}

// % protected region % [Add any additional actions here] off begin
// % protected region % [Add any additional actions here] end
