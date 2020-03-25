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
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, concatMap, catchError} from 'rxjs/operators';
import * as modelAction from './privilege.model.action';
import {PrivilegeService} from '../../services/privilege/privilege.service';
import {PrivilegeModel} from './privilege.model';
import * as _ from 'lodash';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Effect class used for side effects related to Privilege model.
 */
@Injectable()
export class PrivilegeEffect {

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		protected readonly action$: Actions,
		protected readonly service: PrivilegeService,
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	@Effect()
	countModels = this.action$.pipe(
		// % protected region % [Add any additional operations before processing the actions for count models here] off begin
		// % protected region % [Add any additional operations before processing the actions for count models here] end

		ofType<modelAction.CountPrivilegeModels>(modelAction.PrivilegeModelActionTypes.COUNT_PRIVILEGES),

		// % protected region % [Add any additional operations before using the service for count models here] off begin
		// % protected region % [Add any additional operations before using the service for count models here] end

		concatMap((action) => {
			// % protected region % [Add any additional logic before fetching the models for count models here] off begin
			// % protected region % [Add any additional logic before fetching the models for count models here] end

			return this.service.count().pipe(
				// % protected region % [Add any additional handling before creating the action for count models here] off begin
				// % protected region % [Add any additional handling before creating the action for count models here] end

				map(stateConfig => new modelAction.CountPrivilegeModelsOK(
					{
						...stateConfig,
						// % protected region % [Add any additional passable state config properties for count models here] off begin
						// % protected region % [Add any additional passable state config properties for count models here] end
					},
					// % protected region % [Add any additional constructor arguments for CountModelsOK here] off begin
					// % protected region % [Add any additional constructor arguments for CountModelsOK here] end
					action.afterwardActions
				)),

				concatMap(innerAction => [
					innerAction,
					...innerAction.afterwardActions
				]),

				// % protected region % [Add any additional handling before returning the action for count models here] off begin
				// % protected region % [Add any additional handling before returning the action for count models here] end

				catchError((err) => {
					return [
						new modelAction.CountPrivilegeModelsFail(
							err
						)
					];
				}),
			);
		}),

		// % protected region % [Add any additional operations before dispatching the action for count models here] off begin
		// % protected region % [Add any additional operations before dispatching the action for count models here] end
	);

	@Effect()
	fetchedModel = this.action$.pipe(
		// % protected region % [Add any additional operations before processing the actions for fetchedModel here] off begin
		// % protected region % [Add any additional operations before processing the actions for fetchedModel here] end

		ofType<modelAction.FetchPrivilegeModel>(modelAction.PrivilegeModelActionTypes.FETCH_PRIVILEGE),

		// % protected region % [Add any additional operations before using the service for fetchedModel here] off begin
		// % protected region % [Add any additional operations before using the service for fetchedModel here] end

		concatMap((action) => {
			const modelId = action.stateConfig.targetModelId;

			const queryParams = action.stateConfig.queryParams;

			// % protected region % [Add any additional logic before fetching the models for fetchedModel here] off begin
			// % protected region % [Add any additional logic before fetching the models for fetchedModel here] end

			return this.service.get(modelId, queryParams).pipe(
				// % protected region % [Add any additional handling before creating the action for fetchedModel here] off begin
				// % protected region % [Add any additional handling before creating the action for fetchedModel here] end

				map(stateConfig => new modelAction.FetchPrivilegeModelOK(
					{
						...action.stateConfig,
						...stateConfig,
						// % protected region % [Add any additional passable state config properties here] off begin
						// % protected region % [Add any additional passable state config properties here] end
					},
					// % protected region % [Add any additional constructor arguments for FetchModelOK here] off begin
					// % protected region % [Add any additional constructor arguments for FetchModelOK here] end
					action.afterwardActions
				)),

				concatMap(innerAction => [
					innerAction,
					...innerAction.afterwardActions
				]),

				// % protected region % [Add any additional handling before returning the action for fetchedModel here] off begin
				// % protected region % [Add any additional handling before returning the action for fetchedModel here] end

				catchError((err) => {
					return [
						new modelAction.FetchPrivilegeModelFail(
							modelId,
							err
						)
					];
				}),
			);
		}),

		// % protected region % [Add any additional operations before dispatching the action for fetchedModel here] off begin
		// % protected region % [Add any additional operations before dispatching the action for fetchedModel here] end
	);

	@Effect()
	fetchedModels = this.action$.pipe(
		// % protected region % [Add any additional operations before processing the actions for fetchedModels here] off begin
		// % protected region % [Add any additional operations before processing the actions for fetchedModels here] end

		ofType<modelAction.FetchAllPrivilegeModels>(modelAction.PrivilegeModelActionTypes.FETCH_ALL_PRIVILEGE),

		// % protected region % [Add any additional operations before using the service for fetchedModels here] off begin
		// % protected region % [Add any additional operations before using the service for fetchedModels here] end

		concatMap((action) => {
			// % protected region % [Add any additional logic before fetching the models for fetchedModels here] off begin
			// % protected region % [Add any additional logic before fetching the models for fetchedModels here] end

			return this.service.getAll().pipe(
				// % protected region % [Add any additional handling before creating the action for fetchedModels here] off begin
				// % protected region % [Add any additional handling before creating the action for fetchedModels here] end

				map(stateConfig => new modelAction.FetchAllPrivilegeModelsOK(
					{
						...action.stateConfig,
						...stateConfig,
						// % protected region % [Add any additional passable state config properties for fetched models here] off begin
						// % protected region % [Add any additional passable state config properties for fetched models here] end
					},
					// % protected region % [Add any additional constructor arguments for FetchModelsOK here] off begin
					// % protected region % [Add any additional constructor arguments for FetchModelsOK here] end
					action.afterwardActions
				)),

				concatMap(innerAction => [
					innerAction,
					...innerAction.afterwardActions
				]),

				// % protected region % [Add any additional handling before returning the action for fetchedModels here] off begin
				// % protected region % [Add any additional handling before returning the action for fetchedModels here] end

				catchError((err) => {
					return [
						new modelAction.FetchAllPrivilegeModelsFail(
							err
						)
					];
				}),
			);
		}),

		// % protected region % [Add any additional operations before dispatching the action for fetchedModels here] off begin
		// % protected region % [Add any additional operations before dispatching the action for fetchedModels here] end
	);

	@Effect()
	fetchModelWithQuery = this.action$.pipe(
		// % protected region % [Add any additional operations before processing the actions for get models with query params here] off begin
		// % protected region % [Add any additional operations before processing the actions for get models with query params here] end

		ofType<modelAction.FetchPrivilegeModelsWithQuery>(modelAction.PrivilegeModelActionTypes.FETCH_PRIVILEGE_WITH_QUERY),

		// % protected region % [Add any additional operations before using the service for get models with query params here] off begin
		// % protected region % [Add any additional operations before using the service for get models with query params here] end

		concatMap((action) => {
			const queryParams = action.stateConfig.queryParams;

			// % protected region % [Add any additional logic before fetching the models for getModels with queryParams here] off begin
			// % protected region % [Add any additional logic before fetching the models for getModels with queryParams here] end

			return this.service.getWithQuery(queryParams).pipe(
				// % protected region % [Add any additional handling before creating the action for get models with query params here] off begin
				// % protected region % [Add any additional handling before creating the action for get models with query params here] end

				map(stateConfig => new modelAction.FetchPrivilegeModelsWithQueryOK(
					{
						...action.stateConfig,
						...stateConfig,
						// % protected region % [Add any additional passable state config properties for get models with query params here] off begin
						// % protected region % [Add any additional passable state config properties for get models with query params here] end
					},
					// % protected region % [Add any additional constructor arguments for FetchModelWithQueryOK here] off begin
					// % protected region % [Add any additional constructor arguments for FetchModelWithQueryOK here] end
					action.afterwardActions
				)),

				concatMap(innerAction => [
					innerAction,
					...innerAction.afterwardActions
				]),

				// % protected region % [Add any additional handling before returning the action for get models with query params here] off begin
				// % protected region % [Add any additional handling before returning the action for get models with query params here] end

				catchError((err) => {
					return [
						new modelAction.FetchPrivilegeModelsWithQueryFail(
							err
						)
					];
				}),

			);
		}),

		// % protected region % [Add any additional operations before dispatching the action for get models with query params here] off begin
		// % protected region % [Add any additional operations before dispatching the action for get models with query params here] end
	);

	@Effect()
	fetchLastModelWithQuery = this.action$.pipe(
		// % protected region % [Add any additional operations before processing the actions for fetch last query params here] off begin
		// % protected region % [Add any additional operations before processing the actions for fetch last query params here] end

		ofType<modelAction.FetchLastPrivilegeModelsWithQuery>(modelAction.PrivilegeModelActionTypes.FETCH_LAST_PRIVILEGE_WITH_QUERY),

		// % protected region % [Add any additional operations before using the service for fetch last query params here] off begin
		// % protected region % [Add any additional operations before using the service for fetch last query params here] end

		concatMap((action) => {
			const queryParams = action.stateConfig.queryParams;
			const collectionId = action.stateConfig.collectionId;

			// % protected region % [Add any additional logic before fetching the models for fetch last query params here] off begin
			// % protected region % [Add any additional logic before fetching the models for fetch last query params here] end

			return this.service.getLastWithQuery(queryParams).pipe(
				// % protected region % [Add any additional handling before creating the action for getLastModels with queryParams here] off begin
				// % protected region % [Add any additional handling before creating the action for getLastModels with queryParams here] end

				map(stateConfig => new modelAction.FetchLastPrivilegeModelsWithQueryOK(
					{
						...action.stateConfig,
						...stateConfig,
						// % protected region % [Add any additional passable state config properties for fetch last query params here] off begin
						// % protected region % [Add any additional passable state config properties for fetch last query params here] end
					},
					// % protected region % [Add any additional constructor arguments for FetchLastModelWithQueryOK here] off begin
					// % protected region % [Add any additional constructor arguments for FetchLastModelWithQueryOK here] end
					action.afterwardActions
				)),

				concatMap(innerAction => [
					innerAction,
					...innerAction.afterwardActions
				]),

				// % protected region % [Add any additional handling before returning the action for getLastModels with queryParams here here] off begin
				// % protected region % [Add any additional handling before returning the action for getLastModels with queryParams here here] end

				catchError((err) => {
					return [
						new modelAction.FetchLastPrivilegeModelsWithQueryFail(
							err
						)
					];
				}),

			);
		}),

		// % protected region % [Add any additional operations before dispatching the action for fetch last query params here] off begin
		// % protected region % [Add any additional operations before dispatching the action for fetch last query params here] end
	);

	@Effect()
	createdModel = this.action$.pipe(
		// % protected region % [Add any additional operations before processing the actions for createdModel here] off begin
		// % protected region % [Add any additional operations before processing the actions for createdModel here] end

		ofType<modelAction.CreatePrivilegeModel>(modelAction.PrivilegeModelActionTypes.CREATE_PRIVILEGE),

		// % protected region % [Add any additional operations before using the service for createdModel here] off begin
		// % protected region % [Add any additional operations before using the service for createdModel here] end

		concatMap((action) => {
			const modelToBeCreated = action.stateConfig.targetModel as PrivilegeModel;
			const collectionId = action.stateConfig.collectionId;
			const queryParams = action.stateConfig.queryParams;

			// % protected region % [Add any additional logic before createdModel here] off begin
			// % protected region % [Add any additional logic before createdModel here] end

			return this.service.create(modelToBeCreated, queryParams).pipe(
				// % protected region % [Add any additional handling before creating the action for createdModel here] off begin
				// % protected region % [Add any additional handling before creating the action for createdModel here] end

				map(stateConfig => new modelAction.CreatePrivilegeModelOK(
					{
						...action.stateConfig,
						...stateConfig,
						// % protected region % [Add any extra passable state config properties for created model here] off begin
						// % protected region % [Add any extra passable state config properties for created model here] end
					},
					// % protected region % [Add any additional constructor arguments for CreateModelOK here] off begin
					// % protected region % [Add any additional constructor arguments for CreateModelOK here] end
					action.afterwardActions
				)),

				concatMap(innerAction => [
					innerAction,
					...innerAction.afterwardActions
				]),

				// % protected region % [Add any additional handling before returning the action for createdModel here] off begin
				// % protected region % [Add any additional handling before returning the action for createdModel here] end

				catchError((err) => {
					return [
						new modelAction.CreatePrivilegeModelFail(
							modelToBeCreated,
							err
						)
					];
				}),
			);
		}),

		// % protected region % [Add any additional operations before dispatching the action for createdModel here] off begin
		// % protected region % [Add any additional operations before dispatching the action for createdModel here] end
	);

	@Effect()
	createAllModels = this.action$.pipe(
		// % protected region % [Add any additional operations before processing the actions for createdModel here] off begin
		// % protected region % [Add any additional operations before processing the actions for createdModel here] end

		ofType<modelAction.CreateAllPrivilegeModel>(modelAction.PrivilegeModelActionTypes.CREATE_ALL_PRIVILEGE),

		// % protected region % [Add any additional operations before using the service for createdModel here] off begin
		// % protected region % [Add any additional operations before using the service for createdModel here] end

		concatMap((action) => {
			const modelsToCreate = action.stateConfig.targetModels as PrivilegeModel[];
			const collectionId = action.stateConfig.collectionId;
			const queryParams = action.stateConfig.queryParams;

			// % protected region % [Add any additional logic before creatAllModels here] off begin
			// % protected region % [Add any additional logic before creatAllModels here] end

			return this.service.createAll(modelsToCreate, queryParams).pipe(
				// % protected region % [Add any additional handling before creating the action for createAllModes here] off begin
				// % protected region % [Add any additional handling before creating the action for createAllModes here] end

				map(stateConfig => new modelAction.CreateAllPrivilegeModelOK(
					{
						...action.stateConfig,
						...stateConfig,
						// % protected region % [Add any extra passable state config properties for created models here] off begin
						// % protected region % [Add any extra passable state config properties for created models here] end
					},
					// % protected region % [Add any additional constructor arguments for CreateAllModelOK here] off begin
					// % protected region % [Add any additional constructor arguments for CreateAllModelOK here] end
					action.afterwardActions
				)),

				concatMap(innerAction => [
					innerAction,
					...innerAction.afterwardActions
				]),

				// % protected region % [Add any additional handling before returning the action for createdModel here] off begin
				// % protected region % [Add any additional handling before returning the action for createdModel here] end

				catchError((err) => {
					return [
						new modelAction.CreateAllPrivilegeModelFail(
							modelsToCreate,
							err
						)
					];
				}),
			);
		}),

		// % protected region % [Add any additional operations after dispatching the action for createAllModels here] off begin
		// % protected region % [Add any additional operations after dispatching the action for createAllModels here] end
	);

	@Effect()
	updatedModel = this.action$.pipe(
		// % protected region % [Add any additional operations before processing the actions for updatedModel here] off begin
		// % protected region % [Add any additional operations before processing the actions for updatedModel here] end

		ofType<modelAction.UpdatePrivilegeModel>(modelAction.PrivilegeModelActionTypes.UPDATE_PRIVILEGE),

		// % protected region % [Add any additional operations before using the service for updatedModel here] off begin
		// % protected region % [Add any additional operations before using the service for updatedModel here] end

		concatMap((action) => {
			const modelToBeUpdated = action.stateConfig.targetModel as PrivilegeModel;
			const updates = action.stateConfig.updates;
			const collectionId = action.stateConfig.collectionId;
			const queryParams = action.stateConfig.queryParams;

			// % protected region % [Add any additional logic before update the model here] off begin
			// % protected region % [Add any additional logic before update the model here] end

			return this.service.update(new PrivilegeModel({
				...modelToBeUpdated,
				...updates
			}), queryParams).pipe(
				// % protected region % [Add any additional handling before creating the action for updatedModel here] off begin
				// % protected region % [Add any additional handling before creating the action for updatedModel here] end

				map(stateConfig => new modelAction.UpdatePrivilegeModelOK(
					{
						...action.stateConfig,
						...stateConfig,
						// % protected region % [Add any extra passable state config properties for updated model here] off begin
						// % protected region % [Add any extra passable state config properties for updated model here] end
					},
					// % protected region % [Add any additional constructor arguments for UpdateModelOK here] off begin
					// % protected region % [Add any additional constructor arguments for UpdateModelOK here] end
					action.afterwardActions
				)),

				concatMap(innerAction => [
					innerAction,
					...innerAction.afterwardActions
				]),

				// % protected region % [Add any additional handling before returning the action for updatedModel here] off begin
				// % protected region % [Add any additional handling before returning the action for updatedModel here] end

				catchError((err) => {
					return [
						new modelAction.UpdatePrivilegeModelFail(
							modelToBeUpdated,
							err
						)
					];
				}),
			);
		}),

		// % protected region % [Add any additional operations before dispatching the action for updatedModel here] off begin
		// % protected region % [Add any additional operations before dispatching the action for updatedModel here] end
	);

	@Effect()
	updateAllModels = this.action$.pipe(
		// % protected region % [Add any additional operations before processing the actions for updateAllModels here] off begin
		// % protected region % [Add any additional operations before processing the actions for updateAllModels here] end

		ofType<modelAction.UpdatePrivilegeModel>(modelAction.PrivilegeModelActionTypes.UPDATE_ALL_PRIVILEGE),

		// % protected region % [Add any additional operations before using the service for updateAllModels here] off begin
		// % protected region % [Add any additional operations before using the service for updateAllModels here] end

		concatMap((action) => {
			const modelsToUpdate = action.stateConfig.targetModels as PrivilegeModel[];
			const updates = action.stateConfig.updates;
			const updatedModels = _.zipWith(modelsToUpdate, updates, (targetModel, update) => new PrivilegeModel({
				...targetModel,
				...update
			}));
			const queryParams = action.stateConfig.queryParams;

			// % protected region % [Add any additional logic before update all models here] off begin
			// % protected region % [Add any additional logic before update all models here] end

			return this.service.updateAll(updatedModels, queryParams).pipe(
				// % protected region % [Add any additional handling before creating the action for updateAllModels here] off begin
				// % protected region % [Add any additional handling before creating the action for updateAllModels here] end

				map(stateConfig => new modelAction.UpdateAllPrivilegeModelOK(
					{
						...action.stateConfig,
						...stateConfig,
						// % protected region % [Add any extra passable state config properties for updated models here] off begin
						// % protected region % [Add any extra passable state config properties for updated models here] end
					},
					// % protected region % [Add any additional constructor arguments for UpdateAllModelsOk here] off begin
					// % protected region % [Add any additional constructor arguments for UpdateAllModelsOk here] end
					action.afterwardActions
				)),

				concatMap(innerAction => [
					innerAction,
					...innerAction.afterwardActions
				]),

				// % protected region % [Add any additional handling before returning the action for updateAllModels here] off begin
				// % protected region % [Add any additional handling before returning the action for updateAllModels here] end

				catchError((err) => {
					return [
						new modelAction.UpdateAllPrivilegeModelFail(
							modelsToUpdate,
							err
						)
					];
				}),
			);
		}),

		// % protected region % [Add any additional operations before dispatching the action for updateAllModels here] off begin
		// % protected region % [Add any additional operations before dispatching the action for updateAllModels here] end
	);

	@Effect()
	deletedModel = this.action$.pipe(
		// % protected region % [Add any additional operations before processing the actions for deletedModel here] off begin
		// % protected region % [Add any additional operations before processing the actions for deletedModel here] end

		ofType<modelAction.DeletePrivilegeModel>(modelAction.PrivilegeModelActionTypes.DELETE_PRIVILEGE),

		// % protected region % [Add any additional operations before using the service for deletedModel here] off begin
		// % protected region % [Add any additional operations before using the service for deletedModel here] end

		concatMap((action) => {
			const modelIdToBeDeleted = action.stateConfig.targetModelId;
			const collectionId = action.stateConfig.collectionId;
			const queryParams = action.stateConfig.queryParams;

			// % protected region % [Add any additional logic before delete the model here] off begin
			// % protected region % [Add any additional logic before delete the model here] end

			return this.service.delete(modelIdToBeDeleted).pipe(
				// % protected region % [Add any additional handling before creating the action for deletedModel here] off begin
				// % protected region % [Add any additional handling before creating the action for deletedModel here] end

				map(stateConfig => new modelAction.DeletePrivilegeModelOK(
					{
						...action.stateConfig,
						...stateConfig,
						// % protected region % [Add any extra passable state config properties for deleted model here] off begin
						// % protected region % [Add any extra passable state config properties for deleted model here] end
					},
					// % protected region % [Add any additional constructor arguments for DeleteModelOK here] off begin
					// % protected region % [Add any additional constructor arguments for DeleteModelOK here] end
					action.afterwardActions
				)),

				concatMap(innerAction => [
					innerAction,
					...innerAction.afterwardActions
				]),

				// % protected region % [Add any additional handling before returning the action for deletedModel here] off begin
				// % protected region % [Add any additional handling before returning the action for deletedModel here] end

				catchError((err) => {
					return [
						new modelAction.DeletePrivilegeModelFail(
							modelIdToBeDeleted,
							err
						)
					];
				}),
			);
		}),

		// % protected region % [Add any additional operations before dispatching the action for deletedModel here] off begin
		// % protected region % [Add any additional operations before dispatching the action for deletedModel here] end
	);

	@Effect()
	deletedModels = this.action$.pipe(
		// % protected region % [Add any additional operations before processing the actions for deletedModels here] off begin
		// % protected region % [Add any additional operations before processing the actions for deletedModels here] end

		ofType<modelAction.DeletePrivilegeModels>(modelAction.PrivilegeModelActionTypes.DELETE_ALL_PRIVILEGE),

		// % protected region % [Add any additional operations before using the service for deletedModels here] off begin
		// % protected region % [Add any additional operations before using the service for deletedModels here] end

		concatMap((action) => {
			const modelIdsToBeDeleted = action.stateConfig.targetModelIds;
			const collectionId = action.stateConfig.collectionId;
			const queryParams = action.stateConfig.queryParams;

			// % protected region % [Add any additional logic before delete the models for deletedModels here] off begin
			// % protected region % [Add any additional logic before delete the models for deletedModels here] end

			return this.service.deleteAll(modelIdsToBeDeleted).pipe(
				// % protected region % [Add any additional handling before creating the action for deletedModels here] off begin
				// % protected region % [Add any additional handling before creating the action for deletedModels here] end

				map(stateConfig => new modelAction.DeletePrivilegeModelsOK(
					{
						...action.stateConfig,
						...stateConfig,
						// % protected region % [Add any extra passable state config properties for deletedModels here] off begin
						// % protected region % [Add any extra passable state config properties for deletedModels here] end
					},
					// % protected region % [Add any additional constructor arguments for DeleteModelsOK here] off begin
					// % protected region % [Add any additional constructor arguments for DeleteModelsOK here] end
					action.afterwardActions
				)),

				concatMap(innerAction => [
					innerAction,
					...innerAction.afterwardActions
				]),

				// % protected region % [Add any additional handling before returning the action for deletedModels here] off begin
				// % protected region % [Add any additional handling before returning the action for deletedModels here] end

				catchError((err) => {
					return [
						new modelAction.DeletePrivilegeModelsFail(
							modelIdsToBeDeleted,
							err
						)
					];
				}),
			);
		}),

		// % protected region % [Add any additional operations before dispatching the action for deletedModels here] off begin
		// % protected region % [Add any additional operations before dispatching the action for deletedModels here] end
	);

	@Effect()
	fetchedAudits = this.action$.pipe(
		// % protected region % [Add any additional operations before processing the actions for fetchedAudits here] off begin
		// % protected region % [Add any additional operations before processing the actions for fetchedAudits here] end

		ofType<modelAction.FetchPrivilegeModelAudit>(modelAction.PrivilegeModelActionTypes.FETCH_PRIVILEGE_AUDIT),

		// % protected region % [Add any additional operations before using the service for fetchedAudits here] off begin
		// % protected region % [Add any additional operations before using the service for fetchedAudits here] end

		concatMap((action) => {
			// % protected region % [Add any additional logic before fetching the models for fetchedAudits here] off begin
			// % protected region % [Add any additional logic before fetching the models for fetchedAudits here] end

			return this.service.getAudits().pipe(
				// % protected region % [Add any additional handling before creating the action for fetchedAudits here] off begin
				// % protected region % [Add any additional handling before creating the action for fetchedAudits here] end

				map(audits => new modelAction.FetchPrivilegeModelAuditOK(
					audits,
					// % protected region % [Add any additional constructor arguments for FetchAuditsOK here] off begin
					// % protected region % [Add any additional constructor arguments for FetchAuditsOK here] end
					action.afterwardActions
				)),

				concatMap(innerAction => [
					innerAction,
					...innerAction.afterwardActions
				]),

				// % protected region % [Add any additional handling before returning the action for fetchedAudits here] off begin
				// % protected region % [Add any additional handling before returning the action for fetchedAudits here] end

				catchError((err) => {
					return [
						new modelAction.FetchPrivilegeModelAuditFail(
							err
						)
					];
				}),
			);
		}),

		// % protected region % [Add any additional operations before dispatching the action for getModels here] off begin
		// % protected region % [Add any additional operations before dispatching the action for getModels here] end
	);

	@Effect()
	fetchedAuditsByEntityId = this.action$.pipe(
		// % protected region % [Add any additional operations before processing the actions for fetchedAuditsByEntityId here] off begin
		// % protected region % [Add any additional operations before processing the actions for fetchedAuditsByEntityId here] end

		ofType<modelAction.FetchPrivilegeModelAuditsByEntityId>(modelAction.PrivilegeModelActionTypes.FETCH_PRIVILEGE_AUDITS_BY_ENTITY_ID),

		// % protected region % [Add any additional operations before using the service for fetchedAuditsByEntityId here] off begin
		// % protected region % [Add any additional operations before using the service for fetchedAuditsByEntityId here] end

		concatMap((action) => {

			const entityId = action.stateConfig.targetModelId;
			// % protected region % [Add any additional logic before fetching the models for fetchedAuditsByEntityId here] off begin
			// % protected region % [Add any additional logic before fetching the models for fetchedAuditsByEntityId here] end

			return this.service.getAuditsByEntityId(entityId).pipe(
				// % protected region % [Add any additional handling before creating the action for fetchedAuditsByEntityId here] off begin
				// % protected region % [Add any additional handling before creating the action for fetchedAuditsByEntityId here] end

				map(audits => new modelAction.FetchPrivilegeModelAuditsByEntityIdOK(
					audits,
					// % protected region % [Add any additional constructor arguments for FetchAuditsByEntityIdOK here] off begin
					// % protected region % [Add any additional constructor arguments for FetchAuditsByEntityIdOK here] end
					action.afterwardActions
				)),

				concatMap(innerAction => [
					innerAction,
					...innerAction.afterwardActions
				]),

				// % protected region % [Add any additional handling before returning the action for fetchedAuditsByEntityId here] off begin
				// % protected region % [Add any additional handling before returning the action for fetchedAuditsByEntityId here] end

				catchError((err) => {
					return [
						new modelAction.FetchPrivilegeModelAuditsByEntityIdFail(
							err
						)
					];
				}),
			);
		}),

		// % protected region % [Add any additional operations before dispatching the action for fetchedAuditsByEntityId here] off begin
		// % protected region % [Add any additional operations before dispatching the action for fetchedAuditsByEntityId here] end
	);

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
