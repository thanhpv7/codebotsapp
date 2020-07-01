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

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import * as routingAction from '../../../../lib/routing/routing.action';
import {ModelProperty, ModelRelation} from '../../../../lib/models/abstract.model';
import {Action, HeaderOption, LoadingType} from '../../../../lib/components/collection/collection.component';
import * as modelAction from '../../../../models/fish/fish.model.action';
import {FishModelState} from '../../../../models/fish/fish.model.state';
import {AuthenticationService} from '../../../../lib/services/authentication/authentication.service';
import {FishModel} from '../../../../models/fish/fish.model';
import {getFishCollectionCount, getFishCollectionModels} from '../../../../models/fish/fish.model.selector';
import {IconPosition} from '../../../../lib/components/button/button.component';
import {
	Expand,
	OrderBy,
	PassableStateConfig,
	QueryOperation,
	QueryParams,
	Where
} from '../../../../lib/services/http/interfaces';
import {FilterQuestion} from '../../../../lib/components/collection/collection-filter.component';
import {CrudTileMode} from '../fish-tile-crud.component';
import {RouterState} from '../../../../models/model.state';
// % protected region % [Add any additional imports here] on begin
import {CommonService} from '../../../../lib/services/common/common.service';
import {FishService} from "../../../../services/fish/fish.service";
import {__await} from "tslib";
import {environment} from "../../../../../environments/environment.prod";
// % protected region % [Add any additional imports here] end

/**
 * Enum used to declare every custom collection action that will be included into the underlying collection.
 *
 * Note that this is only for declaration. If the developer wants to use it, they must register it into the actions
 * property below.
 */
enum CollectionActionEnum {
	// % protected region % [Customise what collection actions show here] off begin
	Create = 'Create',
	// % protected region % [Customise what collection actions show here] end
	// % protected region % [Add any additional collection actions here] off begin
	// % protected region % [Add any additional collection actions here] end
}

/**
 * Enum used to declare every custom item action that will be included into the underlying collection.
 *
 * Note that this is only for declaration. If the developer wants to use it, they must register it into the actions
 * property below.
 */
enum ItemActionEnum {
	// % protected region % [Customise what item actions show here] off begin
	View = 'View',
	Edit = 'Edit',
	Delete = 'Delete',
	// % protected region % [Customise what item actions show here] end
	// % protected region % [Add any additional item actions here] off begin
	// % protected region % [Add any additional item actions here] end
}

/**
 * Enum used to declare every custom action for a selection of items that will be included into the underlying
 * collection.
 *
 * Note that this is only for declaration. If the developer wants to use it, they must register it into the actions
 * property below.
 */
enum MultipleItemActionEnum {
	// % protected region % [Customise what multiple items actions show here] off begin
	ExportALL = 'Export All',
	Export = 'Export',
	Archive = 'Archive',
	Delete = 'Delete',
	// % protected region % [Customise what multiple items actions show here] end
	// % protected region % [Add any additional multiple items actions here] off begin
	// % protected region % [Add any additional multiple items actions here] end
}

// % protected region % [Add any additional definitions here] off begin
// % protected region % [Add any additional definitions here] end

@Component({
	selector: 'cb-fish-tile-crud-list',
	templateUrl: './fish-tile-crud-list.component.html',
	styleUrls: [
		'./fish-tile-crud-list.component.scss',
		// % protected region % [Add any additional CSS styling here] off begin
		// % protected region % [Add any additional CSS styling here] end
	],
	// % protected region % [Add any additional component configuration here] off begin
	// % protected region % [Add any additional component configuration here] end
})
export class FishTileCrudListComponent implements OnInit {
	/**
	 * The name of the fields which are used in the search box
	 */
	private searchFields: string[] = [
		...FishModel.searchFields,
		// % protected region % [Add any fields here used in the search] off begin
		// % protected region % [Add any fields here used in the search] end
	];

	/**
	 * Where statements used in search
	 * Connected with 'or' operation
	 */
	private searchConditions: Where[] = [];

	/**
	 * Where statements used in filtering
	 * Connected with 'and' operation
	 */
	private filterConditions: Where[][] = [];

	/**
	 * Whether disable routing
	 * This would change behaviours when clicking edit/view/create button
	 */
	@Input()
	disableRouting = false;

	/**
	 * List of Fishs that will be managed by this CRUD tile. Note that this list is not complete, i.e. it
	 * does not represent all models in the database. Instead it represents a slice or page of the complete list.
	 */
	fishs: Observable<FishModel[]>;

	/**
	 * The total number of entities in the database.
	 */
	fishsCount: number = 0;

	// % protected region % [Change your model properties here] off begin
	/**
	 * List of all property names for this entity.
	 */
	modelProperties: ModelProperty[] = FishModel.getProps();
	// % protected region % [Change your model properties here] end

	// % protected region % [Change your model relations here] off begin
	/**
	 * List of all relations of the model
	 */
	modelRelations: { [name: string]: ModelRelation } = FishModel.getRelations();
	// % protected region % [Change your model relations here] end]

	// % protected region % [Change your collection id if required here] off begin
	/**
	 * The collection id used in the store
	 * Default to be the uuid of the tile, you could change this to custom id you want to share in different component
	 * But this must to be unique to avoid mess up the data
	 */
	@Input()
	collectionId: string = 'a623e09f-5ccc-45fe-a1c7-e860b58f5c3e';
	// % protected region % [Change your collection id if required here] end

	/**
	 * Which type of pagination to be used in the collection.
	 */
	@Input()
	loadingType: LoadingType | string = LoadingType.PAGINATION;

	/**
	 * A page index indicates the start index of a "page", which default to 0.
	 */
	@Input()
	pageIndex: number = 0;

	/**
	 * How many items are included in this page.
	 */
	@Input()
	pageSize: number = 10;

	/**
	 * Default ordering of the items.
	 */
	@Input()
	orderBy: OrderBy[] = [
		// % protected region % [Change your default ordering if required here] off begin
		{
			path: 'created',
			descending: true
		}
		// % protected region % [Change your default ordering if required here] end
	];

	/**
	 * Default conditions to be applied when the component first loaded.
	 */
	private readonly defaultWheres: Where[][] = [
		// % protected region % [Add any additional default where conditions here] off begin
		// % protected region % [Add any additional default where conditions here] end
	];

	// % protected region % [Change your default expands if required here] off begin
	/**
	 * Default references to expand
	 * In CRUD tile, default to expand all the references
	 */
	private get defaultExpands(): Expand[] {
		return [];
	}
	// % protected region % [Change your default expands if required here] end

	/**
	 * Where can be passed in as where statement in query
	 */
	@Input()
	where: Where[][] = [];

	/**
	 * The reference want to fetch from the server side
	 */
	@Input()
	expands: Expand[] = [];

	/**
	 * Event emitter when user clicking button to change mode of tile
	 */
	@Output()
	tileModeChange: EventEmitter<{tileMode: CrudTileMode, payload?: any}> = new EventEmitter();

	/**
	 * The query parameters for the collection
	 */
	get queryParams(): QueryParams {
		return {
			pageIndex: this.pageIndex,
			pageSize: this.pageSize,
			orderBy: this.orderBy,
			where: [
				...this.where,
				...this.defaultWheres,
				...this.filterConditions,
				this.searchConditions,
				// % protected region % [Add any additional where conditions here] off begin
				// % protected region % [Add any additional where conditions here] end
			],
			expands: [
				...this.expands,
				...this.defaultExpands
			],
		};
	}

	@Input()
	set queryParams(queryParams: QueryParams) {
			this.pageIndex = queryParams.pageIndex;
			this.pageSize = queryParams.pageSize;
			this.orderBy = queryParams.orderBy;
			this.where = queryParams.where;
			this.expands = queryParams.expands;
	}

	/**
	 * Whether the current page is the last page or not
	 */
	get isLastPage(): boolean {
		return Math.max(Math.floor((this.fishsCount - 1) / this.pageSize), 0) === this.pageIndex;
	}

	/**
	 * List of all header options for the collection
	 */
	// % protected region % [Change your header options required here] off begin
	readonly headerOptions: HeaderOption[] = this.modelProperties.map(prop => {
		return {
			...prop,
			sortable: true,
			sourceDirectFromModel: true,
			valueSource: prop.name
		} as HeaderOption;
	}).filter(opt => opt.name !== 'id').filter(opt => !opt.doHide);
	// % protected region % [Change your header options required here] end

	/**
	 * Additional actions to be added as buttons on the menu of the collection.
	 */
	collectionActions: Action[] = [
		// % protected region % [Customise create button here] off begin
		{
			label: CollectionActionEnum.Create,
			icon: 'create',
			iconPos: IconPosition.TOP,
			showIcon: true,
			isAdditional: false,
			disableOption: () => !this.canCreate()
		},
		// % protected region % [Customise create button here] end

		// % protected region % [Add any additional actions for the collection here] off begin
		// % protected region % [Add any additional actions for the collection here] end
	];

	/**
	 * Additional actions to be added as buttons on each row of the collection.
	 */
	itemActions: Action[] = [
		// % protected region % [Update the default view item action here] off begin
		{
			label: ItemActionEnum.View,
			icon: 'look',
			iconPos: IconPosition.TOP,
			showIcon: true,
			isAdditional: false
		},
		// % protected region % [Update the default view item action here] end
		// % protected region % [Update the default edit item action here] off begin
		{
			label: ItemActionEnum.Edit,
			icon: 'edit',
			iconPos: IconPosition.TOP,
			showIcon: true,
			isAdditional: false,
			disableOption: () => !this.canEdit()
		},
		// % protected region % [Update the default edit item action here] end
		// % protected region % [Update the default delete item action here] off begin
		{
			label: ItemActionEnum.Delete,
			icon: 'bin-delete',
			iconPos: IconPosition.TOP,
			showIcon: true,
			isAdditional: false,
			disableOption: () => !this.canDelete()
		},
		// % protected region % [Update the default delete item action here] end
		// % protected region % [Add any additional actions for the items here] off begin
		// % protected region % [Add any additional actions for the items here] end
	];

	/**
	 * Additional actions to be added as buttons when any number of items are selected.
	 */
	multipleItemsActions: Action[] = [
		{
			label: MultipleItemActionEnum.ExportALL,
			icon: 'export ALL',
			iconPos: IconPosition.LEFT,
			showIcon: true,
			isAdditional: false
		},
		{
			label: MultipleItemActionEnum.Export,
			icon: 'export',
			iconPos: IconPosition.LEFT,
			showIcon: true,
			isAdditional: false
		},
		{
			label: MultipleItemActionEnum.Delete,
			icon: 'bin-delete',
			iconPos: IconPosition.LEFT,
			showIcon: true,
			isAdditional: false
		},
		// % protected region % [Add any additional multiple actions for the collection here] off begin
		// % protected region % [Add any additional multiple actions for the collection here] end
	];

	/**
	 * The questions to be used in the filter
	 * TODO fix the enum value in java
	 */
	filterQuestions: FilterQuestion[] = [
		// % protected region % [Add any additional filter questions for the collection here] off begin
		// % protected region % [Add any additional filter questions for the collection here] end
	];

	// % protected region % [Add any additional class fields here] end

	constructor(
		private readonly store: Store<{ model: FishModelState }>,
		private readonly routerStore: Store<{ router: RouterState }>,
		private readonly activatedRoute: ActivatedRoute,
		private authenticationService: AuthenticationService,
		// % protected region % [Add any additional constructor parameters here] on begin
		private commonService: CommonService,
		protected readonly fishService: FishService,
		// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional constructor logic before the main body here] off begin
		// % protected region % [Add any additional constructor logic before the main body here] end

		this.fishs = this.store.select(getFishCollectionModels, this.collectionId);

		// % protected region % [Add any additional constructor logic after the main body here] off begin
		// % protected region % [Add any additional constructor logic after the main body here] end
	}

	ngOnInit() {
		// % protected region % [Add any additional ngOnInit logic before the main body here] off begin
		// % protected region % [Add any additional ngOnInit logic before the main body here] end

		this.store.dispatch(new modelAction.InitialiseFishCollectionState({
			queryParams: this.queryParams,
			collectionId: this.collectionId
		}));

		this.store.select(getFishCollectionCount, this.collectionId).subscribe(
			(count) => this.fishsCount = count
		);

		this.store.dispatch(new modelAction.FetchFishModelsWithQuery({
				queryParams: this.queryParams,
				collectionId: this.collectionId
			},
			[
				new modelAction.CountFishModels()
			]
		));
		// % protected region % [Add any additional ngOnInit logic after the main body here] off begin
		// % protected region % [Add any additional ngOnInit logic after the main body here] end
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
			const commands = [tileMode.toString()];
			if (id) {
				commands.push(id);
			}
			this.routerStore.dispatch(new routingAction.NavigateRoutingAction(commands, {
				relativeTo: this.activatedRoute.parent
			}));
		}
	}

	/**
	 * Triggered whenever a custom action against an item is clicked.
	 */
	onItemActionClicked(event: { actionName: string, payload?: any }) {
		// % protected region % [Add any additional onActionClicked logic before the main body here] off begin
		// % protected region % [Add any additional onActionClicked logic before the main body here] end

		if (event.actionName === ItemActionEnum.View) {
			// % protected region % [Add any additional logic for View action before the main body here] off begin
			// % protected region % [Add any additional logic for View action before the main body here] end

			this.triggerTileModeChange(CrudTileMode.View, event.payload.model.id);

			// % protected region % [Add any additional logic for View action after the main body here] off begin
			// % protected region % [Add any additional logic for View action after the main body here] end
		} else if (event.actionName === ItemActionEnum.Edit) {
			// % protected region % [Add any additional logic for Edit action before the main body here] off begin
			// % protected region % [Add any additional logic for Edit action before the main body here] end

			this.triggerTileModeChange(CrudTileMode.Edit, event.payload.model.id);

			// % protected region % [Add any additional logic for Edit action after the main body here] off begin
			// % protected region % [Add any additional logic for Edit action after the main body here] end
		} else if (event.actionName === ItemActionEnum.Delete) {
			if (confirm('Would you like to delete this model')) {
				// % protected region % [Add any additional logic for Delete action before the main body here] off begin
				// % protected region % [Add any additional logic for Delete action before the main body here] end

				this.store.dispatch(new modelAction.DeleteFishModel({
					targetModelId: event.payload.model.id,
					queryParams: this.queryParams,
					collectionId: this.collectionId
				}));

				// % protected region % [Add any additional logic for Delete action after the main body here] off begin
				// % protected region % [Add any additional logic for Delete action after the main body here] end
			}
		}

		// % protected region % [Add any additional onActionClicked logic after the main body here] off begin
		// % protected region % [Add any additional onActionClicked logic after the main body here] end
	}

	/**
	 * Triggered whenever a custom action against a collection is clicked.
	 */
	onCollectionActionClicked(event: { actionName: string, payload?: any }) {
		// % protected region % [Add any additional onCollectionActionClicked logic before the main body here] off begin
		// % protected region % [Add any additional onCollectionActionClicked logic before the main body here] end

		if (event.actionName === CollectionActionEnum.Create) {
			this.onCreateClicked();
		}

		// % protected region % [Add any additional onCollectionActionClicked logic after the main body here] off begin
		// % protected region % [Add any additional onCollectionActionClicked logic after the main body here] end
	}

	/**
	 * Triggered whenever a custom action against a selection of items is clicked.
	 */
	onMultipleItemsActionClicked(event: { actionName: string, payload?: any }) {
		// % protected region % [Add any additional onMultipleItemsActionClicked logic before the main body here] off begin
		// % protected region % [Add any additional onMultipleItemsActionClicked logic before the main body here] end

		if (event.actionName === MultipleItemActionEnum.Delete) {
			if (confirm('Would you like to delete this model')) {
				// % protected region % [Add any additional logic before deleting the selected entities here] off begin
				// % protected region % [Add any additional logic before deleting the selected entities here] end

				this.store.dispatch(new modelAction.DeleteFishModels({
					targetModelIds: event.payload.selectedModels.map(model => model.id),
					queryParams: this.queryParams,
					collectionId: this.collectionId
				}));

				// % protected region % [Add any additional logic after deleted the selected entities here] off begin
				// % protected region % [Add any additional logic after deleted the selected entities here] end
			}
		} else if (event.actionName === MultipleItemActionEnum.Export) {
			this.commonService.downloadFile(event.payload.selectedModels, 'data', this.modelProperties);
		} else if (event.actionName === MultipleItemActionEnum.ExportALL) {
			let queryParams1 = this.queryParams;
			queryParams1.pageIndex = 0;
			debugger;
			if (this.fishsCount < environment.MAX_EXPORT_RECORD) {
				queryParams1.pageSize = this.fishsCount;
			} else {
				queryParams1.pageSize = environment.MAX_EXPORT_RECORD;
			}
			this.fishService.getWithQuery(queryParams1).subscribe(result => {
				this.commonService.downloadFile(result.targetModels, 'data', this.modelProperties);
			});
		}

		// % protected region % [Add any additional onMultipleItemsActionClicked logic after the main body here] off begin
		// % protected region % [Add any additional onMultipleItemsActionClicked logic after the main body here] end
	}

	/**
	 * Triggered when the user clicks on the `Create new` button.
	 */
	onCreateClicked() {
		// % protected region % [Add any additional onCreateClicked logic before the main body here] off begin
		// % protected region % [Add any additional onCreateClicked logic before the main body here] end

		this.triggerTileModeChange(CrudTileMode.Create);

		// % protected region % [Add any additional onCreateClicked logic after the main body here] off begin
		// % protected region % [Add any additional onCreateClicked logic after the main body here] end
	}

	/**
	 * Triggered when a header in the collection is clicked
	 */
	onCollectionSort($event: OrderBy[]) {
		// % protected region % [Add any additional onCollectionSort logic before the main body here] off begin
		// % protected region % [Add any additional onCollectionSort logic before the main body here] end

		this.orderBy = $event;

		// % protected region % [Add any additional onCollectionSort logic before constructing a state config here] off begin
		// % protected region % [Add any additional onCollectionSort logic before constructing a state config here] end

		let stateConfig: PassableStateConfig<FishModel> = {
			queryParams: this.queryParams,
			collectionId: this.collectionId
		};

		// % protected region % [Add any additional onCollectionSort logic before dispatching event here] off begin
		// % protected region % [Add any additional onCollectionSort logic before dispatching event here] end

		this.store.dispatch(new modelAction.FetchFishModelsWithQuery(stateConfig));

		// % protected region % [Add any additional onCollectionSort logic after the main body here] off begin
		// % protected region % [Add any additional onCollectionSort logic after the main body here] end
	}

	/**
	 * Triggered when a filter is applied
	 */
	onCollectionFilter($event: { isClean?: boolean, filterFormGroup: FormGroup }) {
		// % protected region % [Add any additional onCollectionFilter logic before the main body here] off begin
		// % protected region % [Add any additional onCollectionFilter logic before the main body here] end

		this.filterConditions = FishModel.convertFilterToCondition($event.filterFormGroup);

		// % protected region % [Add any additional onCollectionFilter logic before constructing a state config here] off begin
		// % protected region % [Add any additional onCollectionFilter logic before constructing a state config here] end

		let stateConfig: PassableStateConfig<FishModel> = {
			queryParams: this.queryParams,
			collectionId: this.collectionId
		};

		// % protected region % [Add any additional onCollectionFilter logic before dispatching event here] off begin
		// % protected region % [Add any additional onCollectionFilter logic before dispatching event here] end

		this.store.dispatch(new modelAction.FetchFishModelsWithQuery(stateConfig));

		// % protected region % [Add any additional onCollectionFilter logic after the main body here] off begin
		// % protected region % [Add any additional onCollectionFilter logic after the main body here] end
	}

	/**
	 * Triggered when type or hit the enter in the search box
	 * Do http request to fetch the search results
	 */
	onCollectionSearch(searchText: string) {
		// % protected region % [Add any additional logic here before change the search conditions] off begin
		// % protected region % [Add any additional logic here before change the search conditions] end

		this.pageIndex = 0;

		this.searchConditions = this.searchFields.map((field) => ({
			path: field,
			operation: QueryOperation.CONTAINS,
			value: searchText
		}));

		// % protected region % [Add any additional onCollectionSearch logic before constructing a state config here] off begin
		// % protected region % [Add any additional onCollectionSearch logic before constructing a state config here] end

		let stateConfig: PassableStateConfig<FishModel> = {
			queryParams: this.queryParams,
			collectionId: this.collectionId
		};

		// % protected region % [Add any additional onCollectionSearch logic after constructing a state config here] off begin
		// % protected region % [Add any additional onCollectionSearch logic after constructing a state config here] end

		this.store.dispatch(new modelAction.FetchFishModelsWithQuery(stateConfig));

		// % protected region % [Add any additional logic here before the main logic of collection filtered] off begin
		// % protected region % [Add any additional logic here before the main logic of collection filtered] end
	}

	/**
	 * Triggered when there is a new request for first page.
	 */
	onFirstPageRequested() {
		// % protected region % [Add any additional onFirstPageRequested logic before the main body here] off begin
		// % protected region % [Add any additional onFirstPageRequested logic before the main body here] end

		this.pageIndex = 0;

		// % protected region % [Add any additional onFirstPageRequested logic before constructing a state config here] off begin
		// % protected region % [Add any additional onFirstPageRequested logic before constructing a state config here] end

		let stateConfig: PassableStateConfig<FishModel> = {
			queryParams: this.queryParams,
			collectionId: this.collectionId
		};

		// % protected region % [Add any additional onFirstPageRequested logic before dispatching event here] off begin
		// % protected region % [Add any additional onFirstPageRequested logic before dispatching event here] end

		this.store.dispatch(new modelAction.FetchFishModelsWithQuery(stateConfig));

		// % protected region % [Add any additional onFirstPageRequested logic after the main body here] off begin
		// % protected region % [Add any additional onFirstPageRequested logic after the main body here] end
	}

	/**
	 * Triggered when there is a new request for previous page.
	 */
	onPrevPageRequested() {
		// % protected region % [Add any additional onPrevPageRequested logic before the main body here] off begin
		// % protected region % [Add any additional onPrevPageRequested logic before the main body here] end

		this.pageIndex -= 1;

		// % protected region % [Add any additional onPrevPageRequested logic before constructing a state config here] off begin
		// % protected region % [Add any additional onPrevPageRequested logic before constructing a state config here] end

		let stateConfig: PassableStateConfig<FishModel> = {
			queryParams: this.queryParams,
			collectionId: this.collectionId
		};

		// % protected region % [Add any additional onPrevPageRequested logic before dispatching event here] off begin
		// % protected region % [Add any additional onPrevPageRequested logic before dispatching event here] end

		this.store.dispatch(new modelAction.FetchFishModelsWithQuery(stateConfig));

		// % protected region % [Add any additional onPrevPageRequested logic after the main body here] off begin
		// % protected region % [Add any additional onPrevPageRequested logic after the main body here] end
	}

	/**
	 * Triggered when there is a new request for next page.
	 */
	onNextPageRequested() {
		// % protected region % [Add any additional onNextPageRequested logic before the main body here] off begin
		// % protected region % [Add any additional onNextPageRequested logic before the main body here] end

		this.pageIndex += 1;

		// % protected region % [Add any additional onNextPageRequested logic before constructing a state config here] off begin
		// % protected region % [Add any additional onNextPageRequested logic before constructing a state config here] end

		let stateConfig: PassableStateConfig<FishModel> = {
			queryParams: this.queryParams,
			collectionId: this.collectionId
		};

		// % protected region % [Add any additional onNextPageRequested logic before dispatching event here] off begin
		// % protected region % [Add any additional onNextPageRequested logic before dispatching event here] end

		this.store.dispatch(new modelAction.FetchFishModelsWithQuery(stateConfig));

		// % protected region % [Add any additional onNextPageRequested logic after the main body here] off begin
		// % protected region % [Add any additional onNextPageRequested logic after the main body here] end
	}

	/**
	 * Triggered when there is a new request for last page.
	 */
	onLastPageRequested() {
		// % protected region % [Add any additional onLastPageRequested logic before the main body here] off begin
		// % protected region % [Add any additional onLastPageRequested logic before the main body here] end

		this.pageIndex = Math.floor((this.fishsCount - 1) / this.pageSize);

		// % protected region % [Add any additional onLastPageRequested logic before constructing a state config here] off begin
		// % protected region % [Add any additional onLastPageRequested logic before constructing a state config here] end

		let stateConfig: PassableStateConfig<FishModel> = {
			queryParams: this.queryParams,
			collectionId: this.collectionId
		};

		// % protected region % [Add any additional onLastPageRequested logic before dispatching event here] off begin
		// % protected region % [Add any additional onLastPageRequested logic before dispatching event here] end

		this.store.dispatch(new modelAction.FetchFishModelsWithQuery(stateConfig));

		// % protected region % [Add any additional onLastPageRequested logic after the main body here] off begin
		// % protected region % [Add any additional onLastPageRequested logic after the main body here] end
	}

	/**
	 * Check if current user can create this entity
	 *
	 * @returns True if create is allowed for current user
	 */
	private canCreate(): boolean {

		const allowedGroups = [
			'ADMIN',
			'FISHNATIC',
		];

		return this.authenticationService.isPermitted(allowedGroups);
	}

	/**
	 * Check if current user can edit this entity
	 *
	 * @returns True if create is allowed for current user
	 */
	private canEdit(): boolean {

		const allowedGroups = [
			'ADMIN',
			'FISHNATIC',
		];

		return this.authenticationService.isPermitted(allowedGroups);
	}

	/**
	 * Check if current user can delete this entity
	 *
	 * @returns True if create is allowed for current user
	 */
	private canDelete(): boolean {

		const allowedGroups = [
			'ADMIN',
			'FISHNATIC',
		];

		return this.authenticationService.isPermitted(allowedGroups);
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
