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

import {Component, EventEmitter, Input, OnChanges, OnInit, OnDestroy, Output, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable, Subject, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';
import {Store, Action as NgRxAction} from '@ngrx/store';
import * as routingAction from '../../../../lib/routing/routing.action';
import {ModelProperty, ModelRelation} from '../../../../lib/models/abstract.model';
import * as modelAction from '../../../../models/tank/tank.model.action';
import {TankModelState, TankModelAudit} from '../../../../models/tank/tank.model.state';
import {TankModel} from '../../../../models/tank/tank.model';
import {
	getTankModelAuditsByEntityId,
	getTankModelWithId,
} from '../../../../models/tank/tank.model.selector';
import {getRouterState} from '../../../../models/model.selector';
import {FishModel} from '../../../../models/fish/fish.model';
import * as fishModelAction from '../../../../models/fish/fish.model.action';
import {
	getFishCollectionModels,
} from '../../../../models/fish/fish.model.selector';
import {RouterState} from '../../../../models/model.state';
import {PassableStateConfig, QueryOperation, QueryParams, Where, Expand} from '../../../../lib/services/http/interfaces';
import {createReactiveFormFromModel} from '../../../../lib/models/model-utils';
import {CrudTileMode} from '../tank-tile-crud.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

// % protected region % [Add any additional definitions here] off begin
// % protected region % [Add any additional definitions here] end

@Component({
	selector: 'cb-tank-tile-crud-edit',
	templateUrl: './tank-tile-crud-edit.component.html',
	styleUrls: [
		'./tank-tile-crud-edit.component.scss',
		// % protected region % [Add any additional CSS styling here] off begin
		// % protected region % [Add any additional CSS styling here] end
	],
	// % protected region % [Add any additional component configuration here] off begin
	// % protected region % [Add any additional component configuration here] end
})
export class TankTileCrudEditComponent implements OnInit, OnChanges, OnDestroy
// % protected region % [Add any additional interfaces to implement here] off begin
// % protected region % [Add any additional interfaces to implement here] end
{

	/************************************************************************
	 *	   _____             __ _         ______ _      _     _
	 *  / ____|           / _(_)       |  ____(_)    | |   | |
	 * | |     ___  _ __ | |_ _  __ _  | |__   _  ___| | __| |___
	 * | |    / _ \| '_ \|  _| |/ _` | |  __| | |/ _ \ |/ _` / __|
	 * | |___| (_) | | | | | | | (_| | | |    | |  __/ | (_| \__ \
	 *  \_____\___/|_| |_|_| |_|\__, | |_|    |_|\___|_|\__,_|___/
	 *                           __/ |
	 *                          |___/
	 ************************************************************************/
	/**
	 * Whether route component
	 */
	@Input()
	disableRouting = false;

	/**
	 * Whether in create/edit/view mode
	 * Only used when disableRouting is turned on
	 * Routing will overwrite this according to the url path
	 */
	@Input()
	tileMode: CrudTileMode = CrudTileMode.Create;

	/**
	 * Id of entity to display
	 * Only used when disableRouting is turned on
	 */
	@Input()
	targetModelId: string;

	/**
	 * How many items are included in this page.
	 */
	@Input()
	pageSize: number = 10;

	// % protected region % [Change your collection id if required here] off begin
	/**
	 * The collection id used in the store
	 * Default to be the uuid of the tile, you could change this to custom id you want to share in different component
	 * But this must to be unique to avoid mess up the data
	 */
	@Input()
	collectionId: string = '7296cf06-3058-47f9-bc40-9604f64d09fa-create-edit';
	// % protected region % [Change your collection id if required here] end

	/**
	 * Event emitter when user clicking button to change mode of tile
	 */
	@Output()
	tileModeChange: EventEmitter<{tileMode: CrudTileMode, payload?: any}> = new EventEmitter();

	/**
	 * Whether componet is view only
	 */
	get isViewOnly(): boolean {
		return this.tileMode == CrudTileMode.View;
	}

	/**
	 * Entity audits to be fetched from the server.
	 */
	tankAudits$: Observable<TankModelAudit[]>;

	// % protected region % [Change your model properties here] off begin
	/**
	 * List of all property names for this entity.
	 */
	modelProperties: ModelProperty[] = TankModel.getProps();
	// % protected region % [Change your model properties here] end

	// % protected region % [Change your model relations here] off begin
	/**
	 * List of all relations of the model
	 */
	modelRelations: { [name: string]: ModelRelation } = TankModel.getRelations();
	// % protected region % [Change your model relations here] end

	// % protected region % [Change your default expands if required here] off begin
	/**
	 * Default references to expand
	 * In CRUD tile, default to expand all the references
	 */
	private get defaultExpands(): Expand[] {
		// TODO fix the hard code s once the standard is confirmed
		let expands: Expand[] =  Object.entries(TankModel.getRelations()).map(
			([key, entry]): Expand => {
				return {
					name: key,
					fields: ['id', entry.displayName],
				};
			}
		);
		return expands;
	}
	// % protected region % [Change your default expands if required here] end

	/**
	 * The model to be created or edited depending on what the model currently is.
	 */
	targetModel: TankModel;

	/**
	 * The form group created from the target model
	 */
	modelFormGroup: FormGroup;

	/**
	 * The current router state when this page is displayed.
	 */
	routerState: RouterState;

	/**
	 * Subscription to be unsubscribe when tile is destoried
	 */
	routerStateSubscription$: Subscription;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		private readonly store: Store<{ model: TankModelState }>,
		private readonly routerStore: Store<{ router: RouterState }>,
		private readonly activatedRoute: ActivatedRoute,
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional constructor logic before the main body here] off begin
		// % protected region % [Add any additional constructor logic before the main body here] end

		// % protected region % [Add any additional constructor logic after the main body here] off begin
		// % protected region % [Add any additional constructor logic after the main body here] end
	}

	/**
	 * @inheritDoc
	 */
	ngOnChanges(changes: SimpleChanges) {
		// % protected region % [Add any additional ngOnChanges logic before the main body here] off begin
		// % protected region % [Add any additional ngOnChanges logic before the main body here] end

		if (changes.hasOwnProperty("tileMode") || changes.hasOwnProperty("targetModelId")) {
			this.initializeTargetModel();
		}

		// % protected region % [Add any additional ngOnChanges logic after the main body here] off begin
		// % protected region % [Add any additional ngOnChanges logic after the main body here] end
	}

	/**
	 * @inheritDoc
	 */
	ngOnInit() {
		// % protected region % [Add any additional ngOnInit logic before the main body here] off begin
		// % protected region % [Add any additional ngOnInit logic before the main body here] end

		this.routerStateSubscription$ = this.routerStore.select(getRouterState).subscribe(routerState => {
				this.routerState = routerState;
				this.initializeTargetModel();
			}
		);

		// % protected region % [Add any additional ngOnInit logic after the main body here] off begin
		// % protected region % [Add any additional ngOnInit logic after the main body here] end
	}

	/**
	 * @inheritDoc
	 */
	ngOnDestroy() {
		// % protected region % [Add any additional ngOnDestroy logic before the main body here] off begin
		// % protected region % [Add any additional ngOnDestroy logic before the main body here] end

		this.routerStateSubscription$.unsubscribe();

		// % protected region % [Add any additional ngOnDestroy logic after the main body here] off begin
		// % protected region % [Add any additional ngOnDestroy logic after the main body here] end
	}

	/**
	 * Initialize target model when input fields changed or router changed
	 */
	private initializeTargetModel() {
		// % protected region % [Add any additional initializeTargetModel logic before the main body here] off begin
		// % protected region % [Add any additional initializeTargetModel logic before the main body here] end

		if (!this.disableRouting) {
			this.initWithRouting();
		}

		// When tile mode is not defiend, reutrn directly without fetching data
		if (this.tileMode == undefined) {
			return;
		}

		this.prepareReferenceCollections();
		this.createReactiveForm();

		if (this.tileMode === CrudTileMode.Edit || this.tileMode === CrudTileMode.View) {
			// % protected region % [Add additional processing for View and Edit mode before the main body here] off begin
			// % protected region % [Add additional processing for View and Edit mode before the main body here] end

			this.fetchEntity();

			// % protected region % [Add additional processing for View and Edit mode after the main body here] off begin
			// % protected region % [Add additional processing for View and Edit mode after the main body here] end
		} else if (this.tileMode === CrudTileMode.Create) {
			// % protected region % [Add additional processing for Create mode before the main body here] off begin
			// % protected region % [Add additional processing for Create mode before the main body here] end

			this.targetModel = new TankModel();

			// % protected region % [Add additional processing for Create mode after the main body here] off begin
			// % protected region % [Add additional processing for Create mode after the main body here] end
		}

		if (this.targetModelId) {
			this.tankAudits$ = this.store.select(getTankModelAuditsByEntityId, this.routerState.params.id);
		}

		// % protected region % [Add any additional initializeTargetModel logic after the main body here] off begin
		// % protected region % [Add any additional initializeTargetModel logic after the main body here] end
	}

	/**
	 * Function to initialize the component fields according to the routing
	 * Method only be invoked when routing is enabled
	 */
	private initWithRouting() {
		this.targetModelId = this.routerState.params.id;
		if(this.routerState.urls.includes('view')) {
			this.tileMode = CrudTileMode.View;
		} else if (this.routerState.urls.includes('edit')) {
			this.tileMode = CrudTileMode.Edit;
		} else if (this.routerState.urls.includes('create')) {
			this.tileMode = CrudTileMode.Create;
		} else {
			this.tileMode = undefined;
		}
	}

	/**
	 * Initialize and dispatch event to fetch data from serverside
	 */
	private fetchEntity() {
		const stateConfig: PassableStateConfig<TankModel> = {
			targetModelId: this.targetModelId,
			queryParams: {
				expands: this.defaultExpands
			}
		};

		// % protected region % [Add additional processing for state configuration here] off begin
		// % protected region % [Add additional processing for state configuration here] end

		//Fetch models
		this.store.dispatch(new modelAction.FetchTankModel(stateConfig));
		this.store.select(getTankModelWithId, this.targetModelId).subscribe(model => {
			this.targetModel = model;
			if (this.targetModel) {
				this.modelFormGroup.patchValue(this.targetModel);
			}
			// % protected region % [Add additional actions after setting targetModel here] off begin
			// % protected region % [Add additional actions after setting targetModel here] end
		});
	}

	/**
	 * Prepare collections of entities to be displayed in the dropdown
	 *
	 * TODO rewrite this part of the code
	 */
	private prepareReferenceCollections() {
		// % protected region % [Add any additional code here before the main logic of prepareReferenceCollections] off begin
		// % protected region % [Add any additional code here before the main logic of prepareReferenceCollections] end

		// Set the observable for outgoing references
		this.modelRelations.fishTank.stateConfig = {
			pageIndex: 0,
			pageSize: this.pageSize,
			collectionId: this.collectionId
		} as PassableStateConfig<FishModel>;

		this.store.dispatch(new fishModelAction.InitialiseFishCollectionState(this.modelRelations.fishTank.stateConfig));
		this.modelRelations.fishTank.collection = this.store.select(getFishCollectionModels, this.collectionId);
		this.addSearchFunction(this.modelRelations.fishTank, getFishCollectionModels, fishModelAction.FetchFishModelsWithQuery);

		this.store.dispatch(new fishModelAction.FetchAllFishModels(this.modelRelations.fishTank.stateConfig));

		// % protected region % [Add any additional code here after the main logic of prepareReferenceCollections] off begin
		// % protected region % [Add any additional code here after the main logic of prepareReferenceCollections] end
	}

	/**
	 * Add the search function for each of the relations.
	 *
	 * TODO refactor this part of the code. Extract the search function and debounce function to a separate file
	 */
	private addSearchFunction(modelRelation: ModelRelation, modelSelector: any, action: new (...args: any[]) => NgRxAction) {
		modelRelation.searchFunction = new Subject<string>();
		modelRelation.collection = this.store.select(modelSelector, this.collectionId);
		modelRelation.searchFunction.pipe(
			debounceTime(500),
			distinctUntilChanged(),
			filter(value => value != null)
		).subscribe(
			(term: string) => {
				modelRelation.stateConfig.queryParams = {
					pageSize: this.pageSize,
					pageIndex: 0,
					where: [
						[
							{
								path: modelRelation.displayName,
								operation: QueryOperation.CONTAINS,
								value: term
							}
						]
					]
				};
				this.store.dispatch(new action(modelRelation.stateConfig));
			}
		);
	}

	/**
	 * Chang tile mode based on action and whether using routing
	 */
	private triggerTileModeChange(tileMode: CrudTileMode, id?: string, other?: object) {
		if (this.disableRouting) {
			this.tileModeChange.emit({
				tileMode: tileMode,
				payload: {
					id: id,
					...other
				}
			})
		} else {
			const commands = [`./${tileMode == CrudTileMode.List ? '' : tileMode.toString()}`];

			if (id) {
				commands.push(id);
			}

			this.routerStore.dispatch(new routingAction.NavigateRoutingAction(commands, {
				relativeTo: this.activatedRoute.parent
			}));
		}
	}

	/**
	 * Triggered when the user clicks on the "View History" button.
	 */
	onViewHistory() {
		// % protected region % [Add any additional onViewHistory logic before the main body here] off begin
		// % protected region % [Add any additional onViewHistory logic before the main body here] end

		this.store.dispatch(new modelAction.FetchTankModelAuditsByEntityId({
			targetModelId: this.targetModelId
		}));

		// % protected region % [Add any additional onViewHistory logic after the main body here] off begin
		// % protected region % [Add any additional onViewHistory logic after the main body here] end
	}

	/**
	 * Triggered when the `Create` or `Save` button is clicked in the child create/edit view.
	 */
	onCreateOrSaveClicked(event: { isCreate: boolean, payload?: { [s: string]: any } }) {
		// % protected region % [Add any additional onCreateOrSaveClicked logic before the main body here] off begin
		// % protected region % [Add any additional onCreateOrSaveClicked logic before the main body here] end

		if (event.isCreate) {
			let stateConfig: PassableStateConfig<TankModel> = {
				targetModel: this.targetModel,
			};

			let afterwardActions: NgRxAction[] = [];

			if (!this.disableRouting) {
				afterwardActions = [
					new routingAction.BackRoutingAction()
				];
			}

			// % protected region % [Add any additional logic before creating a new model here] off begin
			// % protected region % [Add any additional logic before creating a new model here] end

			this.store.dispatch(new modelAction.CreateTankModel(
				stateConfig,
				// % protected region % [Add any additional constructor arguments for CreateModel here] off begin
				// % protected region % [Add any additional constructor arguments for CreateModel here] end,
				afterwardActions
			));

			if (this.disableRouting) {
				this.triggerTileModeChange(CrudTileMode.List);
			}

		} else {
			let stateConfig: PassableStateConfig<TankModel> = {
				targetModel: this.targetModel,
				updates: event.payload,
			};

			let afterwardActions: NgRxAction[] = [];

			if (!this.disableRouting) {
				afterwardActions = [
					new routingAction.BackRoutingAction()
				];
			}

			// % protected region % [Add any additional logic before update the current model here] off begin
			// % protected region % [Add any additional logic before update the current model here] end

			this.store.dispatch(new modelAction.UpdateTankModel(
				stateConfig,
				// % protected region % [Add any additional constructor arguments for UpdateModel here] off begin
				// % protected region % [Add any additional constructor arguments for UpdateModel here] end,
				afterwardActions
			));

			if (this.disableRouting) {
				this.triggerTileModeChange(CrudTileMode.List);
			}
		}

		// % protected region % [Add any additional onCreateOrSaveClicked logic after the main body here] off begin
		// % protected region % [Add any additional onCreateOrSaveClicked logic after the main body here] end
	}

	/**
	 * Triggered when the user switches from view mode to edit mode.
	 */
	onSwitchEdit() {
		// % protected region % [Add any additional onSwitchEdit logic before the main body here] off begin
		// % protected region % [Add any additional onSwitchEdit logic before the main body here] end

		this.triggerTileModeChange(CrudTileMode.Edit, this.targetModelId);

		// % protected region % [Add any additional onSwitchEdit logic after the main body here] off begin
		// % protected region % [Add any additional onSwitchEdit logic after the main body here] end
	}

	/**
	 * Triggered whenever the `Cancel` of the create/edit child component is clicked.
	 */
	onCancelClicked() {
		// % protected region % [Add any additional onCancelClicked logic before the main body here] off begin
		// % protected region % [Add any additional onCancelClicked logic before the main body here] end

		this.triggerTileModeChange(CrudTileMode.List);

		// % protected region % [Add any additional onCancelClicked logic after the main body here] off begin
		// % protected region % [Add any additional onCancelClicked logic after the main body here] end
	}

	/**
	 * Create the reactive form from the input model
	 */
	private createReactiveForm() {
		// % protected region % [Add any additional createReactiveForm logic before the main body here] off begin
		// % protected region % [Add any additional createReactiveForm logic before the main body here] end

		this.modelFormGroup = createReactiveFormFromModel(this.modelProperties, this.modelRelations, this.isViewOnly);

		// % protected region % [Add any additional createReactiveForm logic after the main body here] off begin
		// % protected region % [Add any additional createReactiveForm logic after the main body here] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
