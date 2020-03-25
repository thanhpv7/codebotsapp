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
import * as moment from 'moment';
import {AbstractComponent} from '../abstract.component';
import {AbstractModel, ModelPropertyType, ModelProperty} from '../../models/abstract.model';
import {ButtonStyle, IconPosition} from '../button/button.component';
import {FilterQuestion} from './collection-filter.component';
import {InputComponentDisplayType} from '../abstract.input.component';
import {Observable} from "rxjs";

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Interface to define the options from which the headers of the collection will be displayed.
 */
export interface HeaderOption {
	name: string;
	displayName: string;
	sortable: boolean;
	sourceDirectFromModel: boolean;
	valueSource?: string | (() => string);
	valueFunction?: (() => string) | ((any) => Observable<any>);
	// Type of the field. Used in the date/datetime/time
	type?: ModelPropertyType;
	doHide?: boolean;
}

/**
 * Enumeration used to configure the collection component's pagination settings.
 */
export enum LoadingType {
	PAGINATION,
	CONTINUOUS
}

/**
 * Interface to declare a custom action to include into the collection.
 */
export interface Action {
	label: string;
	icon: string;
	iconPos: IconPosition;
	showIcon: boolean;
	//Show this action in a combobox menu
	isAdditional: boolean;
	group?: string;
	//disable clicking this item action given an anonymous function
	disableOption?: (any) => boolean;
}

@Component({
	selector: 'cb-collection',
	templateUrl: './collection.component.html',
	styleUrls: [
		'./collection.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class CollectionComponent<E extends AbstractModel> extends AbstractComponent implements OnInit {

	// Enum refs to be used in the template
	buttonStyle = ButtonStyle;
	iconPos = IconPosition;
	loadingType = LoadingType;
	modelPropertyType = ModelPropertyType;
	inputComponentDisplayType = InputComponentDisplayType;

	/**
	 * List of models that will be managed by this CRUD tile. Note that this may just be a slice of the complete list.
	 */
	@Input()
	models: E[] = [];

	/**
	 * List of header options to be used to configure the collection.
	 */
	@Input()
	headerOptions: HeaderOption[] = [];

	/**
	 * List of additional actions that can be added to the collection against each item.
	 */
	@Input()
	itemActions: Action[] = [];

	/**
	 * List of additional actions that can be added to the collection against the collection itself.
	 */
	@Input()
	collectionActions: Action[] = [];

	/**
	 * List of additional actions that can be added to the collection against a selection of items.
	 */
	@Input()
	multipleItemsActions: Action[] = [];

	/**
	 * Flag to check if the collection is currently being displayed as a grid or a list.
	 */
	@Input()
	isGrid = false;

	/**
	 * Pagination settings
	 */
	@Input('loadingType')
	paginationType: LoadingType | string = LoadingType.PAGINATION;

	/**
	 * Flag to check whether to display the filter forms
	 */
	displayFilter = false;

	/**
	 * Whether the user can toggle between the views.
	 */
	@Input()
	allowViewToggle = true;

	/**
	 * Questions to be displayed in the filter
	 */
	@Input()
	filterQuestions: FilterQuestion[] = [];

	/**
	 * Page index used to display the current page the collection is displaying. Start with 0.
	 */
	@Input()
	pageIndex: number = 0;

	/**
	 * Whether the current page is the last page.
	 */
	@Input()
	isLastPage: boolean = false;

	/**
	 * Whether 'Load More' should be used instead of pagination buttons.
	 */
	@Input()
	isContinuousLoading: boolean = false;

	/**
	 * Event emitter for each action against an item.
	 */
	@Output('itemActionClick')
	itemActionEventEmitter: EventEmitter<{ actionName: string, payload?: any }> = new EventEmitter();

	/**
	 * Event emitter for each action against an item.
	 */
	@Output('collectionActionClick')
	collectionActionEventEmitter: EventEmitter<{ actionName: string, payload?: any }> = new EventEmitter();

	/**
	 * Event emitter for each action against an item.
	 */
	@Output('multipleItemsActionClick')
	multipleItemsActionEventEmitter: EventEmitter<{ actionName: string, payload?: any }> = new EventEmitter();

	/**
	 * Event emitter for the sorting
	 */
	@Output('sort')
	sortEmitter: EventEmitter<{ path: string, descending: boolean }[]> = new EventEmitter();

	/**
	 * Event emitter for first page pagination requests.
	 */
	@Output('first')
	firstPageEmitter: EventEmitter<any> = new EventEmitter();

	/**
	 * Event emitter for previous page pagination requests.
	 */
	@Output('prev')
	prevPageEmitter: EventEmitter<any> = new EventEmitter();

	/**
	 * Event emitter for next page pagination requests.
	 */
	@Output('next')
	nextPageEmitter: EventEmitter<any> = new EventEmitter();

	/**
	 * Event emitter for last page pagination requests.
	 */
	@Output('last')
	lastPageEmitter: EventEmitter<any> = new EventEmitter();

	/**
	 * Event emitter for the searching
	 */
	@Output('search')
	searchEmitter: EventEmitter<string> = new EventEmitter();

	/**
	 * Event emitter for the filtering
	 */
	@Output('filter')
	filterEmitter: EventEmitter<{ isClean?: boolean, filterFormGroup: FormGroup }> = new EventEmitter();

	/**
	 * Option to not display the top menu
	 */
	@Input('hideMenu')
	hideMenu: boolean;

	/**
	 * Option to not display the select boxes
	 */
	@Input('hideCheckbox')
	hideCheckbox: boolean;

	/**
	 * List of selected models in the collection.
	 */
	selectedModels: Set<E> = new Set();

	/**
	 * A map to keep record of how the models are currently being sorted and what headers are currently used to sort the
	 * models.
	 */
	areItemsSortedAscending: { [s: string]: boolean } = {};

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
	) {
		super(
			// % protected region % [Add any additional constructor arguments here] off begin
			// % protected region % [Add any additional constructor arguments here] end
		);

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	ngOnInit(): void {
		// % protected region % [Add any additional ngOnInit logic before the main body here] off begin
		// % protected region % [Add any additional ngOnInit logic before the main body here] end

		this.headerOptions.forEach(opt => this.areItemsSortedAscending[opt.name] = false);
		this.areItemsSortedAscending['id'] = true;

		// % protected region % [Add any additional ngOnInit logic after the main body here] off begin
		// % protected region % [Add any additional ngOnInit logic after the main body here] end
	}

	/**
	 * Triggered when the 'Select All' checkbox is checked or unchecked.
	 *
	 * @param newValue whether the checkbox is currently being checked or not
	 */
	onSelectAllChange(newValue: boolean) {
		// % protected region % [Add any additional onSelectAllChange logic before updating the value here] off begin
		// % protected region % [Add any additional onSelectAllChange logic before updating the value here] end

		// If selected, select all other checkboxes. Otherwise, clear them out.
		if (newValue) {
			this.models.forEach(model => this.selectedModels.add(model));
		} else {
			this.selectedModels.clear();
		}

		// % protected region % [Add any additional onSelectAllChange logic after updated the value here] off begin
		// % protected region % [Add any additional onSelectAllChange logic after updated the value here] end
	}

	/**
	 * Triggered when the 'Cancel' button is clicked.
	 */
	onSelectAllCancel() {
		// % protected region % [Add any additional onSelectAllCancel logic before the main logic here] off begin
		// % protected region % [Add any additional onSelectAllCancel logic before the main logic here] end

		// Deselect all checkboxes.
		this.onSelectAllChange(false);

		// % protected region % [Add any additional onSelectAllCancel logic after the main logic here] off begin
		// % protected region % [Add any additional onSelectAllCancel logic after the main logic here] end
	}

	/**
	 * Triggered when a row's checkbox is selected.
	 *
	 * @param model the model that is currently being selected
	 */
	onModelSelected(model: E) {
		// % protected region % [Add any additional onModelSelected logic before the main logic here] off begin
		// % protected region % [Add any additional onModelSelected logic before the main logic here] end

		this.selectedModels.add(model);

		// % protected region % [Add any additional onModelSelected logic after the main logic here] off begin
		// % protected region % [Add any additional onModelSelected logic after the main logic here] end
	}

	/**
	 * Triggered when a row's checkbox is deselected.
	 *
	 * @param model the model that is currently being deselected
	 */
	onModelDeselected(model: E) {
		// % protected region % [Add any additional onModelDeselected logic before the main logic here] off begin
		// % protected region % [Add any additional onModelDeselected logic before the main logic here] end

		this.selectedModels.delete(model);

		// % protected region % [Add any additional onModelDeselected logic after the main logic here] off begin
		// % protected region % [Add any additional onModelDeselected logic after the main logic here] end
	}

	/**
	 * Triggered when an action against an item is clicked.
	 */
	onItemActionClicked(actionName: string, model: E) {
		// % protected region % [Add any additional onItemActionClicked logic before the main body here] off begin
		// % protected region % [Add any additional onItemActionClicked logic before the main body here] end

		this.itemActionEventEmitter.emit({
			actionName: actionName,
			payload: {
				model: model,
				// % protected region % [Add any additional payload for onItemActionClicked here] off begin
				// % protected region % [Add any additional payload for onItemActionClicked here] end
			}
		});

		// % protected region % [Add any additional onItemActionClicked logic after the main body here] off begin
		// % protected region % [Add any additional onItemActionClicked logic after the main body here] end
	}

	/**
	 * Triggered when an action against the collection is clicked.
	 */
	onCollectionActionClicked(actionName: string) {
		// % protected region % [Add any additional onCollectionActionClicked logic before the main body here] off begin
		// % protected region % [Add any additional onCollectionActionClicked logic before the main body here] end

		this.collectionActionEventEmitter.emit({
			actionName: actionName,
			// % protected region % [Add any additional payload for onCollectionActionClicked here] off begin
			// % protected region % [Add any additional payload for onCollectionActionClicked here] end
		});

		// % protected region % [Add any additional onCollectionActionClicked logic after the main body here] off begin
		// % protected region % [Add any additional onCollectionActionClicked logic after the main body here] end
	}

	/**
	 * Triggered when an action against a selection of items is clicked.
	 */
	onMultipleItemsActionClicked(actionName: string) {
		// % protected region % [Add any additional onMultipleItemsActionClicked logic before the main body here] off begin
		// % protected region % [Add any additional onMultipleItemsActionClicked logic before the main body here] end

		this.multipleItemsActionEventEmitter.emit({
			actionName: actionName,
			payload: {
				selectedModels: Array.from(this.selectedModels),
				// % protected region % [Add any additional payload here] off begin
				// % protected region % [Add any additional payload here] end
			}
		});

		// % protected region % [Add any additional onMultipleItemsActionClicked logic after the main body here] off begin
		// % protected region % [Add any additional onMultipleItemsActionClicked logic after the main body here] end
	}

	/**
	 * Triggered when a header is clicked to sort the current models accordingly to the header.
	 *
	 * @param opt the current header to be sorted against the array
	 */
	onHeaderClicked(opt: HeaderOption) {
		// % protected region % [Add any additional onHeaderClicked logic before the main logic here] off begin
		// % protected region % [Add any additional onHeaderClicked logic before the main logic here] end

		// Clear out everything and make sure that make sure that only the current header is flipped.
		const oldValue = this.areItemsSortedAscending[opt.name];
		Object.keys(this.areItemsSortedAscending).forEach(key => this.areItemsSortedAscending[key] = false);
		this.areItemsSortedAscending[opt.name] = !oldValue;

		// Pass to the parent component to sort the items
		this.sortEmitter.emit([
			{
				path: opt.name,
				descending: !this.areItemsSortedAscending[opt.name]
			}
		]);

		// % protected region % [Add any additional onHeaderClicked logic after the main logic here] off begin
		// % protected region % [Add any additional onHeaderClicked logic after the main logic here] end
	}

	/**
	 * Listen to the event when the filter button is clicked
	 */
	onFilter(event: { filterFormGroup: FormGroup }) {
		// % protected region % [Add any additional onFilter logic before the main logic here] off begin
		// % protected region % [Add any additional onFilter logic before the main logic here] end

		this.filterEmitter.emit(event);

		// % protected region % [Add any additional onFilter logic after the main logic here] off begin
		// % protected region % [Add any additional onFilter logic after the main logic here] end
	}

	onSearch(value: string) {
		// % protected region % [Add any additional onSearch logic before the main logic here] off begin
		// % protected region % [Add any additional onSearch logic before the main logic here] end

		this.searchEmitter.emit(value);

		// % protected region % [Add any additional onSearch logic after the main logic here] off begin
		// % protected region % [Add any additional onSearch logic after the main logic here] end
	}

	/**
	 * Given a header option and a model, determine and return the value to be displayed in the actual collection.
	 *
	 * @param opt the header option which determines how to read the model
	 * @param model the model that contains the information in some form
	 */
	getValue(opt: HeaderOption, model: E): string | Observable<any> {
		if (opt.valueSource) {
			if (opt.sourceDirectFromModel && typeof opt.valueSource === 'string') {
				const value = model[opt.valueSource];
				if (value instanceof Date) {
					if (opt.type === ModelPropertyType.DATETIME) {
						return moment(value).format('DD MMM YYYY HH:mm');
					} else if (opt.type === ModelPropertyType.DATE) {
						return moment(value).format('DD MMM YYYY');
					} else if (opt.type === ModelPropertyType.TIME) {
						return moment(value).format('HH:mm:ss');
					}
					console.error(`Not supported date type be passed into ${opt.name}`);
					return moment(value).format('DD MMM YYYY HH:mm');
				} else if (opt.type === ModelPropertyType.ENUM) {
					// FIXME: Tidy up how enum values are passed to this point so we don't have to find them
					const result = (value) ? (opt as ModelProperty).enumLiterals.find(item => item.key === value) : null;
					return (result && result.value) ? result.value : '';
				} else {
					return value;
				}
			} else if (typeof opt.valueSource === 'function') {
				return opt.valueSource();
			} else {
				return opt.valueSource;
			}
		} else if (opt.valueFunction) {
			return opt.valueFunction(model);
		} else {
			console.error('Error getting the value from thea HeaderOption');
			return '';
		}
	}

	/**
	 * Triggered when the user requests the first page of the collection.
	 */
	onFirstPage() {
		// % protected region % [Add any additional onFirstPage logic before the main body here] off begin
		// % protected region % [Add any additional onFirstPage logic before the main body here] end

		this.firstPageEmitter.emit(null);
		this.onSelectAllCancel();

		// % protected region % [Add any additional onFirstPage logic after the main body here] off begin
		// % protected region % [Add any additional onFirstPage logic after the main body here] end
	}

	/**
	 * Triggered when the user requests the previous page of the collection.
	 */
	onPreviousPage() {
		// % protected region % [Add any additional onPreviousPage logic before the main body here] off begin
		// % protected region % [Add any additional onPreviousPage logic before the main body here] end

		this.prevPageEmitter.emit(null);
		this.onSelectAllCancel();

		// % protected region % [Add any additional onPreviousPage logic after the main body here] off begin
		// % protected region % [Add any additional onPreviousPage logic after the main body here] end
	}

	/**
	 * Triggered when the user requests the next page of the collection.
	 */
	onNextPage() {
		// % protected region % [Add any additional onNextPage logic before the main body here] off begin
		// % protected region % [Add any additional onNextPage logic before the main body here] end

		this.nextPageEmitter.emit(null);
		this.onSelectAllCancel();

		// % protected region % [Add any additional onNextPage logic after the main body here] off begin
		// % protected region % [Add any additional onNextPage logic after the main body here] end
	}

	/**
	 * Triggered when the user requests the last page of the collection.
	 */
	onLastPage() {
		// % protected region % [Add any additional onLastPage logic before the main body here] off begin
		// % protected region % [Add any additional onLastPage logic before the main body here] end

		this.lastPageEmitter.emit(null);
		this.onSelectAllCancel();

		// % protected region % [Add any additional onLastPage logic after the main body here] off begin
		// % protected region % [Add any additional onLastPage logic after the main body here] end
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
}
