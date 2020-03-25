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

import {DebugElement} from '@angular/core';
import {async, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Store} from '@ngrx/store';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {BehaviorSubject} from 'rxjs';
import {RouterState} from '../../../models/model.state';
import {FishTileCrudComponent} from './fish.tile.crud.component';
import {FishDataFactory} from '../../../lib/utils/factories/fish-data-factory';
import {FishModel} from '../../../models/fish/fish.model';
import {FishTileCrudModule} from './fish.tile.crud.module';
import {
	FishModelState,
	initialState as initialFishModelState
} from '../../../models/fish/fish.model.state';
import {getRouterState} from '../../../models/model.selector';
import {
	getFishCollectionCount,
	getFishCollectionModels
} from '../../../models/fish/fish.model.selector';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Define the tests for the crud tile component
 */
describe('Fish Crud Tile Component', () => {

	let fixture;
	let fishTileCrudComponent: FishTileCrudComponent;

	let store: MockStore<{ model: FishModelState }>;
	let routerStore: MockStore<{router: RouterState}>;

	let fishModelState: FishModelState;

	let collectionCountBehaviorSubject: BehaviorSubject<number>;
	let collectionModelsBehaviorSubject: BehaviorSubject<FishModel[]>;
	let routerStateBehaviorSubject: BehaviorSubject<RouterState>;

	let collectionId = '8da8f69e-4060-4c7a-afb9-a598f7704e68';
	let searchContent ='text';

	const routerState: RouterState = {
		url: 'fish-crud',
		urls: ['fish-crud'],
		params: {},
		queryParams: {},
		data: {},
	};

	const fishDataFactory = new FishDataFactory();

	const defaultDataSize = 30;
	const defaultData = fishDataFactory.createAll(defaultDataSize);

	// % protected region % [Add any additional variables here] off begin
	// % protected region % [Add any additional variables here] end

	function spySelectorsInStore ()  {
		// Setup the Mock Store and fake selector
		store = TestBed.get<Store<{ model: FishModelState }>>(Store);
		routerStore = TestBed.get<Store<{ router: RouterState }>>(Store);

		fishModelState = initialFishModelState;
		store.setState({model: fishModelState});

		// Create Behavior Subjects to trigger later
		collectionCountBehaviorSubject = new BehaviorSubject(defaultData.length);
		collectionModelsBehaviorSubject = new BehaviorSubject(defaultData);
		routerStateBehaviorSubject = new BehaviorSubject(routerState);

		// Create spy on select function to return value
		spyOn(store, 'select')
			.withArgs(getFishCollectionCount, collectionId).and.returnValue(collectionCountBehaviorSubject)
			.withArgs(getFishCollectionModels, collectionId).and.returnValue(collectionModelsBehaviorSubject)
			.withArgs(getRouterState).and.returnValue(routerStateBehaviorSubject);
	}

	// % protected region % [Add any additional functions here] off begin
	// % protected region % [Add any additional functions here] end

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FishTileCrudModule,
			],
			providers: [
				provideMockStore()
			]
		}).compileComponents().then(() => {

			spySelectorsInStore();

			fixture = TestBed.createComponent(FishTileCrudComponent);
			fishTileCrudComponent = fixture.debugElement.componentInstance;

		});
	}));

	afterEach(() => {
		// Need to do this since for some reason the last component queried from the fixture will be rendered on the
		// browser
		if (fixture.nativeElement instanceof HTMLElement) {
			(fixture.nativeElement as HTMLElement).remove();
		}
	});

	it ('Reset the page index and update page count after searching', () => {

		// Check the initial state
		fixture.detectChanges();
		expect(fishTileCrudComponent.fishsCount).toBe(defaultData.length);

		// Go to next page
		const nextPageButton: DebugElement = fixture.debugElement
			.queryAll(By.css('button'))
			.find(element => element.nativeElement.textContent.includes('Next'));

		const lastPageButton: DebugElement = fixture.debugElement
			.queryAll(By.css('button'))
			.find(element => element.nativeElement.textContent.includes('Last'));

		nextPageButton.nativeElement.click();
		expect(fishTileCrudComponent.pageIndex).toBe(1);
		fixture.detectChanges();

		// Trigger the search function
		spyOn(fishTileCrudComponent, 'onCollectionSearch').and.callThrough();
		const searchBox: DebugElement = fixture.debugElement.query(By.css('input.search'));
		searchBox.nativeElement.value = searchContent;
		searchBox.nativeElement.dispatchEvent(new Event('change'));
		fishTileCrudComponent.onCollectionSearch(searchContent);
		fixture.detectChanges();

		// Update selector to mock search results\
		let filteredDataSize = 5;
		let filteredData = fishDataFactory.createAll(filteredDataSize);

		collectionModelsBehaviorSubject.next(filteredData);
		collectionCountBehaviorSubject.next(filteredData.length);

		fixture.detectChanges();

		// Check the search item is updated
		expect(fixture.debugElement.queryAll(By.css('tr.collection__item')).length).toBe(filteredDataSize);
		expect(fishTileCrudComponent.fishsCount).toBe(filteredDataSize);
		expect(fishTileCrudComponent.pageIndex).toBe(0);
		// Check Pagination display correctly
		// Already the last page, and the pagination div should not be shown
		expect(fixture.debugElement.query(By.css('ul.collection__pagination'))).toBeNull();

	});

	// % protected region % [Add any additional tests here] off begin
	// % protected region % [Add any additional tests here] end
});
