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
import * as modelAction from './role.model.action';
import {RoleService} from '../../services/role/role.service';
import {RoleModel} from './role.model';
import * as _ from 'lodash';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Effect class used for side effects related to Role model.
 */
@Injectable()
export class RoleEffect {

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		protected readonly action$: Actions,
		protected readonly service: RoleService,
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

		ofType<modelAction.CountRoleModels>(modelAction.RoleModelActionTypes.COUNT_ROLES),

		// % protected region % [Add any additional operations before using the service for count models here] off begin
		// % protected region % [Add any additional operations before using the service for count models here] end

		concatMap((action) => {
			// % protected region % [Add any additional logic before fetching the models for count models here] off begin
			// % protected region % [Add any additional logic before fetching the models for count models here] end

			return this.service.count().pipe(
				// % protected region % [Add any additional handling before creating the action for count models here] off begin
				// % protected region % [Add any additional handling before creating the action for count models here] end

				map(stateConfig => new modelAction.CountRoleModelsOK(
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
						new modelAction.CountRoleModelsFail(
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

		ofType<modelAction.FetchRoleModel>(modelAction.RoleModelActionTypes.FETCH_ROLE),

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

				map(stateConfig => new modelAction.FetchRoleModelOK(
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
						new modelAction.FetchRoleModelFail(
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

		ofType<modelAction.FetchAllRoleModels>(modelAction.RoleModelActionTypes.FETCH_ALL_ROLE),

		// % protected region % [Add any additional operations before using the service for fetchedModels here] off begin
		// % protected region % [Add any additional operations before using the service for fetchedModels here] end

		concatMap((action) => {
			// % protected region % [Add any additional logic before fetching the models for fetchedModels here] off begin
			// % protected region % [Add any additional logic before fetching the models for fetchedModels here] end

			return this.service.getAll().pipe(
				// % protected region % [Add any additional handling before creating the action for fetchedModels here] off begin
				// % protected region % [Add any additional handling before creating the action for fetchedModels here] end

				map(stateConfig => new modelAction.FetchAllRoleModelsOK(
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
						new modelAction.FetchAllRoleModelsFail(
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

		ofType<modelAction.FetchRoleModelsWithQuery>(modelAction.RoleModelActionTypes.FETCH_ROLE_WITH_QUERY),

		// % protected region % [Add any additional operations before using the service for get models with query params here] off begin
		// % protected region % [Add any additional operations before using the service for get models with query params here] end

		concatMap((action) => {
			const queryParams = action.stateConfig.queryParams;

			// % protected region % [Add any additional logic before fetching the models for getModels with queryParams here] off begin
			// % protected region % [Add any additional logic before fetching the models for getModels with queryParams here] end

			return this.service.getWithQuery(queryParams).pipe(
				// % protected region % [Add any additional handling before creating the action for get models with query params here] off begin
				// % protected region % [Add any additional handling before creating the action for get models with query params here] end

				map(stateConfig => new modelAction.FetchRoleModelsWithQueryOK(
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
						new modelAction.FetchRoleModelsWithQueryFail(
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

		ofType<modelAction.FetchLastRoleModelsWithQuery>(modelAction.RoleModelActionTypes.FETCH_LAST_ROLE_WITH_QUERY),

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

				map(stateConfig => new modelAction.FetchLastRoleModelsWithQueryOK(
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
						new modelAction.FetchLastRoleModelsWithQueryFail(
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

		ofType<modelAction.CreateRoleModel>(modelAction.RoleModelActionTypes.CREATE_ROLE),

		// % protected region % [Add any additional operations before using the service for createdModel here] off begin
		// % protected region % [Add any additional operations before using the service for createdModel here] end

		concatMap((action) => {
			const modelToBeCreated = action.stateConfig.targetModel as RoleModel;
			const collectionId = action.stateConfig.collectionId;
			const queryParams = action.stateConfig.queryParams;

			// % protected region % [Add any additional logic before createdModel here] off begin
			// % protected region % [Add any additional logic before createdModel here] end

			return this.service.create(modelToBeCreated, queryParams).pipe(
				// % protected region % [Add any additional handling before creating the action for createdModel here] off begin
				// % protected region % [Add any additional handling before creating the action for createdModel here] end

				map(stateConfig => new modelAction.CreateRoleModelOK(
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
						new modelAction.CreateRoleModelFail(
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

		ofType<modelAction.CreateAllRoleModel>(modelAction.RoleModelActionTypes.CREATE_ALL_ROLE),

		// % protected region % [Add any additional operations before using the service for createdModel here] off begin
		// % protected region % [Add any additional operations before using the service for createdModel here] end

		concatMap((action) => {
			const modelsToCreate = action.stateConfig.targetModels as RoleModel[];
			const collectionId = action.stateConfig.collectionId;
			const queryParams = action.stateConfig.queryParams;

			// % protected region % [Add any additional logic before creatAllModels here] off begin
			// % protected region % [Add any additional logic before creatAllModels here] end

			return this.service.createAll(modelsToCreate, queryParams).pipe(
				// % protected region % [Add any additional handling before creating the action for createAllModes here] off begin
				// % protected region % [Add any additional handling before creating the action for createAllModes here] end

				map(stateConfig => new modelAction.CreateAllRoleModelOK(
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
						new modelAction.CreateAllRoleModelFail(
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

		ofType<modelAction.UpdateRoleModel>(modelAction.RoleModelActionTypes.UPDATE_ROLE),

		// % protected region % [Add any additional operations before using the service for updatedModel here] off begin
		// % protected region % [Add any additional operations before using the service for updatedModel here] end

		concatMap((action) => {
			const modelToBeUpdated = action.stateConfig.targetModel as RoleModel;
			const updates = action.stateConfig.updates;
			const collectionId = action.stateConfig.collectionId;
			const queryParams = action.stateConfig.queryParams;

			// % protected region % [Add any additional logic before update the model here] off begin
			// % protected region % [Add any additional logic before update the model here] end

			return this.service.update(new RoleModel({
				...modelToBeUpdated,
				...updates
			}), queryParams).pipe(
				// % protected region % [Add any additional handling before creating the action for updatedModel here] off begin
				// % protected region % [Add any additional handling before creating the action for updatedModel here] end

				map(stateConfig => new modelAction.UpdateRoleModelOK(
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
						new modelAction.UpdateRoleModelFail(
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

		ofType<modelAction.UpdateRoleModel>(modelAction.RoleModelActionTypes.UPDATE_ALL_ROLE),

		// % protected region % [Add any additional operations before using the service for updateAllModels here] off begin
		// % protected region % [Add any additional operations before using the service for updateAllModels here] end

		concatMap((action) => {
			const modelsToUpdate = action.stateConfig.targetModels as RoleModel[];
			const updates = action.stateConfig.updates;
			const updatedModels = _.zipWith(modelsToUpdate, updates, (targetModel, update) => new RoleModel({
				...targetModel,
				...update
			}));
			const queryParams = action.stateConfig.queryParams;

			// % protected region % [Add any additional logic before update all models here] off begin
			// % protected region % [Add any additional logic before update all models here] end

			return this.service.updateAll(updatedModels, queryParams).pipe(
				// % protected region % [Add any additional handling before creating the action for updateAllModels here] off begin
				// % protected region % [Add any additional handling before creating the action for updateAllModels here] end

				map(stateConfig => new modelAction.UpdateAllRoleModelOK(
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
						new modelAction.UpdateAllRoleModelFail(
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

		ofType<modelAction.DeleteRoleModel>(modelAction.RoleModelActionTypes.DELETE_ROLE),

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

				map(stateConfig => new modelAction.DeleteRoleModelOK(
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
						new modelAction.DeleteRoleModelFail(
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

		ofType<modelAction.DeleteRoleModels>(modelAction.RoleModelActionTypes.DELETE_ALL_ROLE),

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

				map(stateConfig => new modelAction.DeleteRoleModelsOK(
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
						new modelAction.DeleteRoleModelsFail(
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

		ofType<modelAction.FetchRoleModelAudit>(modelAction.RoleModelActionTypes.FETCH_ROLE_AUDIT),

		// % protected region % [Add any additional operations before using the service for fetchedAudits here] off begin
		// % protected region % [Add any additional operations before using the service for fetchedAudits here] end

		concatMap((action) => {
			// % protected region % [Add any additional logic before fetching the models for fetchedAudits here] off begin
			// % protected region % [Add any additional logic before fetching the models for fetchedAudits here] end

			return this.service.getAudits().pipe(
				// % protected region % [Add any additional handling before creating the action for fetchedAudits here] off begin
				// % protected region % [Add any additional handling before creating the action for fetchedAudits here] end

				map(audits => new modelAction.FetchRoleModelAuditOK(
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
						new modelAction.FetchRoleModelAuditFail(
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

		ofType<modelAction.FetchRoleModelAuditsByEntityId>(modelAction.RoleModelActionTypes.FETCH_ROLE_AUDITS_BY_ENTITY_ID),

		// % protected region % [Add any additional operations before using the service for fetchedAuditsByEntityId here] off begin
		// % protected region % [Add any additional operations before using the service for fetchedAuditsByEntityId here] end

		concatMap((action) => {

			const entityId = action.stateConfig.targetModelId;
			// % protected region % [Add any additional logic before fetching the models for fetchedAuditsByEntityId here] off begin
			// % protected region % [Add any additional logic before fetching the models for fetchedAuditsByEntityId here] end

			return this.service.getAuditsByEntityId(entityId).pipe(
				// % protected region % [Add any additional handling before creating the action for fetchedAuditsByEntityId here] off begin
				// % protected region % [Add any additional handling before creating the action for fetchedAuditsByEntityId here] end

				map(audits => new modelAction.FetchRoleModelAuditsByEntityIdOK(
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
						new modelAction.FetchRoleModelAuditsByEntityIdFail(
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
