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
import {CommonModule} from '@angular/common';
import {async, ComponentFixture, fakeAsync, flush, TestBed, tick} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {CollectionComponent, HeaderOption} from './collection.component';
import {AdminModel} from '../../../models/admin/admin.model';
import {AdminDataFactory} from '../../utils/factories/admin-data-factory';
import {FishnaticModel} from '../../../models/fishnatic/fishnatic.model';
import {FishnaticDataFactory} from '../../utils/factories/fishnatic-data-factory';
import {TankModel} from '../../../models/tank/tank.model';
import {TankDataFactory} from '../../utils/factories/tank-data-factory';
import {SpeciesModel} from '../../../models/species/species.model';
import {SpeciesDataFactory} from '../../utils/factories/species-data-factory';
import {FishModel} from '../../../models/fish/fish.model';
import {FishDataFactory} from '../../utils/factories/fish-data-factory';
import {RoleModel} from '../../../models/role/role.model';
import {RoleDataFactory} from '../../utils/factories/role-data-factory';
import {PrivilegeModel} from '../../../models/privilege/privilege.model';
import {PrivilegeDataFactory} from '../../utils/factories/privilege-data-factory';
import {ModelProperty} from '../../models/abstract.model';
import {CommonComponentModule} from '../common.component.module';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

describe('Collection component against Admin', () => {

	let fixture: ComponentFixture<CollectionComponent<AdminModel>>;
	let collectionComponent: CollectionComponent<AdminModel>;

	let adminDataFactory: AdminDataFactory;
	let models: AdminModel[];
	let modelProperties: ModelProperty[];

	let defaultHeaderOptions: HeaderOption[];

	beforeAll(() => {
		// % protected region % [Add any additional setup in beforeAll before the main body here for entity.Name] off begin
		// % protected region % [Add any additional setup in beforeAll before the main body here for entity.Name] end

		adminDataFactory = new AdminDataFactory();

		modelProperties = AdminModel.getProps();

		defaultHeaderOptions =  modelProperties.map(prop => {
			return {
				...prop,
				sortable: true,
				sourceDirectFromModel: true,
				valueSource: prop.name
			} as HeaderOption;
		});

		// % protected region % [Add any additional setup in beforeAll after the main body here for Admin] off begin
		// % protected region % [Add any additional setup in beforeAll after the main body here for Admin] end
	});

	beforeEach(async(() => {
		models = adminDataFactory.createAll();

		TestBed.configureTestingModule({
			imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule,
				CommonComponentModule
			],
			// % protected region % [Add any additional configurations here for Collection component against Admin] off begin
			// % protected region % [Add any additional configurations here for Collection component against Admin] end
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent<CollectionComponent<AdminModel>>(CollectionComponent);
			collectionComponent = fixture.debugElement.componentInstance;
		});
	}));

	afterEach(() => {
		(fixture.nativeElement as HTMLElement).remove();
	});

	it('should create the collection component', () => {
		expect(collectionComponent).toBeTruthy();
	});

	it('should have no items selected when first viewed', () => {
		// % protected region % [Add any additional logic before main process of 'should have no items selected when first viewed' here for Collection component against Admin] off begin
		// % protected region % [Add any additional logic before main process of 'should have no items selected when first viewed' here for Collection component against Admin] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;
		fixture.detectChanges();

		const selectAllInputEl: HTMLInputElement = fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement;

		expect(selectAllInputEl.checked).toBeFalsy(`'Select All' is checked`);

		const checkboxEls: HTMLInputElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'))
			.map(el => el.nativeElement as HTMLInputElement);

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => {
			return prev && currentValue;
		});
		expect(allChecked).toBeFalsy('Not all checkboxes are deselected');

		// % protected region % [Add any additional logic for 'should have no items selected when first viewed' here for Collection component against Admin] off begin
		// % protected region % [Add any additional logic for 'should have no items selected when first viewed' here for Collection component against Admin] end
	});

	it('should select all items when \'Select All\' is checked', fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should select all items when 'Select All' is checked' here for Collection component against Admin] off begin
		// % protected region % [Add any additional logic before main process of 'should select all items when 'Select All' is checked' here for Collection component against Admin] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement
			.click();

		fixture.detectChanges();
		tick();

		expect(collectionComponent.selectedModels.size).toBe(models.length, 'Not all checkboxes are checked');

		fixture.detectChanges();

		const checkboxEls: HTMLInputElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox > input[type="checkbox"]'))
			.map(el => el.nativeElement as HTMLInputElement);

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => prev && currentValue);

		expect(allChecked).toBeTruthy('Not all checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe('10 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should select all items when 'Select All' is checked' here for Collection component against Admin] off begin
		// % protected region % [Add any additional logic for 'should select all items when 'Select All' is checked' here for Collection component against Admin] end

	}));

	it('should check \'Select All\' when all checkboxes are checked',  fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should check 'Select All' when all checkboxes are checked' here for Collection component against Admin] off begin
		// % protected region % [Add any additional logic before main process of 'should check 'Select All' when all checkboxes are checked' here for Collection component against Admin] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		const checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));
		const checkboxEls: HTMLInputElement[] = checkboxes.map(checkbox => checkbox.nativeElement as HTMLInputElement);

		checkboxEls.forEach(checkbox => checkbox.click());

		fixture.detectChanges();
		tick();

		fixture.detectChanges();

		expect(collectionComponent.selectedModels.size).toBe(collectionComponent.models.length, 'Not all checkboxes are checked');

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => prev && currentValue);

		expect(allChecked).toBeTruthy('Not all checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe(`${collectionComponent.models.length} selected`, 'Select number not showing correctly');

		const selectAllEl: HTMLInputElement = fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement;

		expect(selectAllEl.checked).toBeTruthy('\'Select All\' checkbox is not selected when all rows of the current page are selected');

		// % protected region % [Add any additional logic for 'should check 'Select All' when all checkboxes are checked' here for Collection component against Admin] off begin
		// % protected region % [Add any additional logic for 'should check 'Select All' when all checkboxes are checked' here for Collection component against Admin] end
	}));

	it('should select the correct row', () => {
		// % protected region % [Add any additional logic before main process of 'should select the correct row' here for Collection component against Admin] off begin
		// % protected region % [Add any additional logic before main process of 'should select the correct row' here for Collection component against Admin] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;
		fixture.detectChanges();

		const checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));
		const checkboxEls: HTMLInputElement[] = checkboxes.map(checkbox => checkbox.nativeElement as HTMLInputElement);

		// Random row to select
		const rowIndex = 2;
		const checkbox: DebugElement = checkboxes[rowIndex];
		const checkboxEl: HTMLInputElement = checkbox.nativeElement;

		checkboxEl.click();
		fixture.detectChanges();

		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');

		const unselectedCheckboxes: boolean[] = checkboxEls
			.filter(checkbox => !checkbox.checked)
			.map(checkbox => checkbox.checked);

		expect(unselectedCheckboxes).toEqual(new Array(collectionComponent.models.length - 1).fill(false), 'Some other checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should select the correct row' here for Collection component against Admin] off begin
		// % protected region % [Add any additional logic for 'should select the correct row' here for Collection component against Admin] end
	});

	it('should keep selection when switch between grid and list', fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should keep selection when switch between grid and list' here for Collection component against Admin] off begin
		// % protected region % [Add any additional logic before main process of 'should keep selection when switch between grid and list' here for Collection component against Admin] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		// Random row to select
		const rowIndex = Math.floor(Math.random() * 10);
		let checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		let checkbox: DebugElement = checkboxes[rowIndex];
		let checkboxEl: HTMLInputElement = checkbox.nativeElement;

		checkbox.nativeElement.click();

		fixture.detectChanges();
		tick();

		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');

		// Switch to grid view
		const gridButton = fixture.debugElement.query(By.css('.btn.icon-grid'));
		gridButton.nativeElement.click();

		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		checkboxes = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		checkbox = checkboxes[rowIndex];
		checkboxEl = checkbox.nativeElement;

		// The checkbox is still selected and display correctly
		let selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;
		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');
		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');


		// Change back to list
		const listButton = fixture.debugElement.query(By.css('.btn.icon-list'));
		listButton.nativeElement.click();

		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		checkboxes = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		checkbox = checkboxes[rowIndex];
		checkboxEl = checkbox.nativeElement;

		// The checkbox is still selected
		selectText = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;
		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');
		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should keep selection when switch between grid and list' here for Collection component against Admin] off begin
		// % protected region % [Add any additional logic for 'should keep selection when switch between grid and list' here for Collection component against Admin] end
	}));

	// % protected region % [Add any additional tests here for Collection component against Admin] off begin
	// % protected region % [Add any additional tests here for Collection component against Admin] end
});

describe('Collection component against Fishnatic', () => {

	let fixture: ComponentFixture<CollectionComponent<FishnaticModel>>;
	let collectionComponent: CollectionComponent<FishnaticModel>;

	let fishnaticDataFactory: FishnaticDataFactory;
	let models: FishnaticModel[];
	let modelProperties: ModelProperty[];

	let defaultHeaderOptions: HeaderOption[];

	beforeAll(() => {
		// % protected region % [Add any additional setup in beforeAll before the main body here for entity.Name] off begin
		// % protected region % [Add any additional setup in beforeAll before the main body here for entity.Name] end

		fishnaticDataFactory = new FishnaticDataFactory();

		modelProperties = FishnaticModel.getProps();

		defaultHeaderOptions =  modelProperties.map(prop => {
			return {
				...prop,
				sortable: true,
				sourceDirectFromModel: true,
				valueSource: prop.name
			} as HeaderOption;
		});

		// % protected region % [Add any additional setup in beforeAll after the main body here for Fishnatic] off begin
		// % protected region % [Add any additional setup in beforeAll after the main body here for Fishnatic] end
	});

	beforeEach(async(() => {
		models = fishnaticDataFactory.createAll();

		TestBed.configureTestingModule({
			imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule,
				CommonComponentModule
			],
			// % protected region % [Add any additional configurations here for Collection component against Fishnatic] off begin
			// % protected region % [Add any additional configurations here for Collection component against Fishnatic] end
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent<CollectionComponent<FishnaticModel>>(CollectionComponent);
			collectionComponent = fixture.debugElement.componentInstance;
		});
	}));

	afterEach(() => {
		(fixture.nativeElement as HTMLElement).remove();
	});

	it('should create the collection component', () => {
		expect(collectionComponent).toBeTruthy();
	});

	it('should have no items selected when first viewed', () => {
		// % protected region % [Add any additional logic before main process of 'should have no items selected when first viewed' here for Collection component against Fishnatic] off begin
		// % protected region % [Add any additional logic before main process of 'should have no items selected when first viewed' here for Collection component against Fishnatic] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;
		fixture.detectChanges();

		const selectAllInputEl: HTMLInputElement = fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement;

		expect(selectAllInputEl.checked).toBeFalsy(`'Select All' is checked`);

		const checkboxEls: HTMLInputElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'))
			.map(el => el.nativeElement as HTMLInputElement);

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => {
			return prev && currentValue;
		});
		expect(allChecked).toBeFalsy('Not all checkboxes are deselected');

		// % protected region % [Add any additional logic for 'should have no items selected when first viewed' here for Collection component against Fishnatic] off begin
		// % protected region % [Add any additional logic for 'should have no items selected when first viewed' here for Collection component against Fishnatic] end
	});

	it('should select all items when \'Select All\' is checked', fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should select all items when 'Select All' is checked' here for Collection component against Fishnatic] off begin
		// % protected region % [Add any additional logic before main process of 'should select all items when 'Select All' is checked' here for Collection component against Fishnatic] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement
			.click();

		fixture.detectChanges();
		tick();

		expect(collectionComponent.selectedModels.size).toBe(models.length, 'Not all checkboxes are checked');

		fixture.detectChanges();

		const checkboxEls: HTMLInputElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox > input[type="checkbox"]'))
			.map(el => el.nativeElement as HTMLInputElement);

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => prev && currentValue);

		expect(allChecked).toBeTruthy('Not all checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe('10 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should select all items when 'Select All' is checked' here for Collection component against Fishnatic] off begin
		// % protected region % [Add any additional logic for 'should select all items when 'Select All' is checked' here for Collection component against Fishnatic] end

	}));

	it('should check \'Select All\' when all checkboxes are checked',  fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should check 'Select All' when all checkboxes are checked' here for Collection component against Fishnatic] off begin
		// % protected region % [Add any additional logic before main process of 'should check 'Select All' when all checkboxes are checked' here for Collection component against Fishnatic] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		const checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));
		const checkboxEls: HTMLInputElement[] = checkboxes.map(checkbox => checkbox.nativeElement as HTMLInputElement);

		checkboxEls.forEach(checkbox => checkbox.click());

		fixture.detectChanges();
		tick();

		fixture.detectChanges();

		expect(collectionComponent.selectedModels.size).toBe(collectionComponent.models.length, 'Not all checkboxes are checked');

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => prev && currentValue);

		expect(allChecked).toBeTruthy('Not all checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe(`${collectionComponent.models.length} selected`, 'Select number not showing correctly');

		const selectAllEl: HTMLInputElement = fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement;

		expect(selectAllEl.checked).toBeTruthy('\'Select All\' checkbox is not selected when all rows of the current page are selected');

		// % protected region % [Add any additional logic for 'should check 'Select All' when all checkboxes are checked' here for Collection component against Fishnatic] off begin
		// % protected region % [Add any additional logic for 'should check 'Select All' when all checkboxes are checked' here for Collection component against Fishnatic] end
	}));

	it('should select the correct row', () => {
		// % protected region % [Add any additional logic before main process of 'should select the correct row' here for Collection component against Fishnatic] off begin
		// % protected region % [Add any additional logic before main process of 'should select the correct row' here for Collection component against Fishnatic] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;
		fixture.detectChanges();

		const checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));
		const checkboxEls: HTMLInputElement[] = checkboxes.map(checkbox => checkbox.nativeElement as HTMLInputElement);

		// Random row to select
		const rowIndex = 2;
		const checkbox: DebugElement = checkboxes[rowIndex];
		const checkboxEl: HTMLInputElement = checkbox.nativeElement;

		checkboxEl.click();
		fixture.detectChanges();

		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');

		const unselectedCheckboxes: boolean[] = checkboxEls
			.filter(checkbox => !checkbox.checked)
			.map(checkbox => checkbox.checked);

		expect(unselectedCheckboxes).toEqual(new Array(collectionComponent.models.length - 1).fill(false), 'Some other checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should select the correct row' here for Collection component against Fishnatic] off begin
		// % protected region % [Add any additional logic for 'should select the correct row' here for Collection component against Fishnatic] end
	});

	it('should keep selection when switch between grid and list', fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should keep selection when switch between grid and list' here for Collection component against Fishnatic] off begin
		// % protected region % [Add any additional logic before main process of 'should keep selection when switch between grid and list' here for Collection component against Fishnatic] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		// Random row to select
		const rowIndex = Math.floor(Math.random() * 10);
		let checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		let checkbox: DebugElement = checkboxes[rowIndex];
		let checkboxEl: HTMLInputElement = checkbox.nativeElement;

		checkbox.nativeElement.click();

		fixture.detectChanges();
		tick();

		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');

		// Switch to grid view
		const gridButton = fixture.debugElement.query(By.css('.btn.icon-grid'));
		gridButton.nativeElement.click();

		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		checkboxes = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		checkbox = checkboxes[rowIndex];
		checkboxEl = checkbox.nativeElement;

		// The checkbox is still selected and display correctly
		let selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;
		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');
		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');


		// Change back to list
		const listButton = fixture.debugElement.query(By.css('.btn.icon-list'));
		listButton.nativeElement.click();

		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		checkboxes = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		checkbox = checkboxes[rowIndex];
		checkboxEl = checkbox.nativeElement;

		// The checkbox is still selected
		selectText = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;
		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');
		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should keep selection when switch between grid and list' here for Collection component against Fishnatic] off begin
		// % protected region % [Add any additional logic for 'should keep selection when switch between grid and list' here for Collection component against Fishnatic] end
	}));

	// % protected region % [Add any additional tests here for Collection component against Fishnatic] off begin
	// % protected region % [Add any additional tests here for Collection component against Fishnatic] end
});

describe('Collection component against Tank', () => {

	let fixture: ComponentFixture<CollectionComponent<TankModel>>;
	let collectionComponent: CollectionComponent<TankModel>;

	let tankDataFactory: TankDataFactory;
	let models: TankModel[];
	let modelProperties: ModelProperty[];

	let defaultHeaderOptions: HeaderOption[];

	beforeAll(() => {
		// % protected region % [Add any additional setup in beforeAll before the main body here for entity.Name] off begin
		// % protected region % [Add any additional setup in beforeAll before the main body here for entity.Name] end

		tankDataFactory = new TankDataFactory();

		modelProperties = TankModel.getProps();

		defaultHeaderOptions =  modelProperties.map(prop => {
			return {
				...prop,
				sortable: true,
				sourceDirectFromModel: true,
				valueSource: prop.name
			} as HeaderOption;
		});

		// % protected region % [Add any additional setup in beforeAll after the main body here for Tank] off begin
		// % protected region % [Add any additional setup in beforeAll after the main body here for Tank] end
	});

	beforeEach(async(() => {
		models = tankDataFactory.createAll();

		TestBed.configureTestingModule({
			imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule,
				CommonComponentModule
			],
			// % protected region % [Add any additional configurations here for Collection component against Tank] off begin
			// % protected region % [Add any additional configurations here for Collection component against Tank] end
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent<CollectionComponent<TankModel>>(CollectionComponent);
			collectionComponent = fixture.debugElement.componentInstance;
		});
	}));

	afterEach(() => {
		(fixture.nativeElement as HTMLElement).remove();
	});

	it('should create the collection component', () => {
		expect(collectionComponent).toBeTruthy();
	});

	it('should have no items selected when first viewed', () => {
		// % protected region % [Add any additional logic before main process of 'should have no items selected when first viewed' here for Collection component against Tank] off begin
		// % protected region % [Add any additional logic before main process of 'should have no items selected when first viewed' here for Collection component against Tank] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;
		fixture.detectChanges();

		const selectAllInputEl: HTMLInputElement = fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement;

		expect(selectAllInputEl.checked).toBeFalsy(`'Select All' is checked`);

		const checkboxEls: HTMLInputElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'))
			.map(el => el.nativeElement as HTMLInputElement);

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => {
			return prev && currentValue;
		});
		expect(allChecked).toBeFalsy('Not all checkboxes are deselected');

		// % protected region % [Add any additional logic for 'should have no items selected when first viewed' here for Collection component against Tank] off begin
		// % protected region % [Add any additional logic for 'should have no items selected when first viewed' here for Collection component against Tank] end
	});

	it('should select all items when \'Select All\' is checked', fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should select all items when 'Select All' is checked' here for Collection component against Tank] off begin
		// % protected region % [Add any additional logic before main process of 'should select all items when 'Select All' is checked' here for Collection component against Tank] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement
			.click();

		fixture.detectChanges();
		tick();

		expect(collectionComponent.selectedModels.size).toBe(models.length, 'Not all checkboxes are checked');

		fixture.detectChanges();

		const checkboxEls: HTMLInputElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox > input[type="checkbox"]'))
			.map(el => el.nativeElement as HTMLInputElement);

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => prev && currentValue);

		expect(allChecked).toBeTruthy('Not all checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe('10 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should select all items when 'Select All' is checked' here for Collection component against Tank] off begin
		// % protected region % [Add any additional logic for 'should select all items when 'Select All' is checked' here for Collection component against Tank] end

	}));

	it('should check \'Select All\' when all checkboxes are checked',  fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should check 'Select All' when all checkboxes are checked' here for Collection component against Tank] off begin
		// % protected region % [Add any additional logic before main process of 'should check 'Select All' when all checkboxes are checked' here for Collection component against Tank] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		const checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));
		const checkboxEls: HTMLInputElement[] = checkboxes.map(checkbox => checkbox.nativeElement as HTMLInputElement);

		checkboxEls.forEach(checkbox => checkbox.click());

		fixture.detectChanges();
		tick();

		fixture.detectChanges();

		expect(collectionComponent.selectedModels.size).toBe(collectionComponent.models.length, 'Not all checkboxes are checked');

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => prev && currentValue);

		expect(allChecked).toBeTruthy('Not all checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe(`${collectionComponent.models.length} selected`, 'Select number not showing correctly');

		const selectAllEl: HTMLInputElement = fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement;

		expect(selectAllEl.checked).toBeTruthy('\'Select All\' checkbox is not selected when all rows of the current page are selected');

		// % protected region % [Add any additional logic for 'should check 'Select All' when all checkboxes are checked' here for Collection component against Tank] off begin
		// % protected region % [Add any additional logic for 'should check 'Select All' when all checkboxes are checked' here for Collection component against Tank] end
	}));

	it('should select the correct row', () => {
		// % protected region % [Add any additional logic before main process of 'should select the correct row' here for Collection component against Tank] off begin
		// % protected region % [Add any additional logic before main process of 'should select the correct row' here for Collection component against Tank] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;
		fixture.detectChanges();

		const checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));
		const checkboxEls: HTMLInputElement[] = checkboxes.map(checkbox => checkbox.nativeElement as HTMLInputElement);

		// Random row to select
		const rowIndex = 2;
		const checkbox: DebugElement = checkboxes[rowIndex];
		const checkboxEl: HTMLInputElement = checkbox.nativeElement;

		checkboxEl.click();
		fixture.detectChanges();

		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');

		const unselectedCheckboxes: boolean[] = checkboxEls
			.filter(checkbox => !checkbox.checked)
			.map(checkbox => checkbox.checked);

		expect(unselectedCheckboxes).toEqual(new Array(collectionComponent.models.length - 1).fill(false), 'Some other checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should select the correct row' here for Collection component against Tank] off begin
		// % protected region % [Add any additional logic for 'should select the correct row' here for Collection component against Tank] end
	});

	it('should keep selection when switch between grid and list', fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should keep selection when switch between grid and list' here for Collection component against Tank] off begin
		// % protected region % [Add any additional logic before main process of 'should keep selection when switch between grid and list' here for Collection component against Tank] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		// Random row to select
		const rowIndex = Math.floor(Math.random() * 10);
		let checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		let checkbox: DebugElement = checkboxes[rowIndex];
		let checkboxEl: HTMLInputElement = checkbox.nativeElement;

		checkbox.nativeElement.click();

		fixture.detectChanges();
		tick();

		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');

		// Switch to grid view
		const gridButton = fixture.debugElement.query(By.css('.btn.icon-grid'));
		gridButton.nativeElement.click();

		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		checkboxes = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		checkbox = checkboxes[rowIndex];
		checkboxEl = checkbox.nativeElement;

		// The checkbox is still selected and display correctly
		let selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;
		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');
		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');


		// Change back to list
		const listButton = fixture.debugElement.query(By.css('.btn.icon-list'));
		listButton.nativeElement.click();

		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		checkboxes = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		checkbox = checkboxes[rowIndex];
		checkboxEl = checkbox.nativeElement;

		// The checkbox is still selected
		selectText = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;
		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');
		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should keep selection when switch between grid and list' here for Collection component against Tank] off begin
		// % protected region % [Add any additional logic for 'should keep selection when switch between grid and list' here for Collection component against Tank] end
	}));

	// % protected region % [Add any additional tests here for Collection component against Tank] off begin
	// % protected region % [Add any additional tests here for Collection component against Tank] end
});

describe('Collection component against Species', () => {

	let fixture: ComponentFixture<CollectionComponent<SpeciesModel>>;
	let collectionComponent: CollectionComponent<SpeciesModel>;

	let speciesDataFactory: SpeciesDataFactory;
	let models: SpeciesModel[];
	let modelProperties: ModelProperty[];

	let defaultHeaderOptions: HeaderOption[];

	beforeAll(() => {
		// % protected region % [Add any additional setup in beforeAll before the main body here for entity.Name] off begin
		// % protected region % [Add any additional setup in beforeAll before the main body here for entity.Name] end

		speciesDataFactory = new SpeciesDataFactory();

		modelProperties = SpeciesModel.getProps();

		defaultHeaderOptions =  modelProperties.map(prop => {
			return {
				...prop,
				sortable: true,
				sourceDirectFromModel: true,
				valueSource: prop.name
			} as HeaderOption;
		});

		// % protected region % [Add any additional setup in beforeAll after the main body here for Species] off begin
		// % protected region % [Add any additional setup in beforeAll after the main body here for Species] end
	});

	beforeEach(async(() => {
		models = speciesDataFactory.createAll();

		TestBed.configureTestingModule({
			imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule,
				CommonComponentModule
			],
			// % protected region % [Add any additional configurations here for Collection component against Species] off begin
			// % protected region % [Add any additional configurations here for Collection component against Species] end
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent<CollectionComponent<SpeciesModel>>(CollectionComponent);
			collectionComponent = fixture.debugElement.componentInstance;
		});
	}));

	afterEach(() => {
		(fixture.nativeElement as HTMLElement).remove();
	});

	it('should create the collection component', () => {
		expect(collectionComponent).toBeTruthy();
	});

	it('should have no items selected when first viewed', () => {
		// % protected region % [Add any additional logic before main process of 'should have no items selected when first viewed' here for Collection component against Species] off begin
		// % protected region % [Add any additional logic before main process of 'should have no items selected when first viewed' here for Collection component against Species] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;
		fixture.detectChanges();

		const selectAllInputEl: HTMLInputElement = fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement;

		expect(selectAllInputEl.checked).toBeFalsy(`'Select All' is checked`);

		const checkboxEls: HTMLInputElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'))
			.map(el => el.nativeElement as HTMLInputElement);

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => {
			return prev && currentValue;
		});
		expect(allChecked).toBeFalsy('Not all checkboxes are deselected');

		// % protected region % [Add any additional logic for 'should have no items selected when first viewed' here for Collection component against Species] off begin
		// % protected region % [Add any additional logic for 'should have no items selected when first viewed' here for Collection component against Species] end
	});

	it('should select all items when \'Select All\' is checked', fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should select all items when 'Select All' is checked' here for Collection component against Species] off begin
		// % protected region % [Add any additional logic before main process of 'should select all items when 'Select All' is checked' here for Collection component against Species] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement
			.click();

		fixture.detectChanges();
		tick();

		expect(collectionComponent.selectedModels.size).toBe(models.length, 'Not all checkboxes are checked');

		fixture.detectChanges();

		const checkboxEls: HTMLInputElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox > input[type="checkbox"]'))
			.map(el => el.nativeElement as HTMLInputElement);

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => prev && currentValue);

		expect(allChecked).toBeTruthy('Not all checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe('10 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should select all items when 'Select All' is checked' here for Collection component against Species] off begin
		// % protected region % [Add any additional logic for 'should select all items when 'Select All' is checked' here for Collection component against Species] end

	}));

	it('should check \'Select All\' when all checkboxes are checked',  fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should check 'Select All' when all checkboxes are checked' here for Collection component against Species] off begin
		// % protected region % [Add any additional logic before main process of 'should check 'Select All' when all checkboxes are checked' here for Collection component against Species] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		const checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));
		const checkboxEls: HTMLInputElement[] = checkboxes.map(checkbox => checkbox.nativeElement as HTMLInputElement);

		checkboxEls.forEach(checkbox => checkbox.click());

		fixture.detectChanges();
		tick();

		fixture.detectChanges();

		expect(collectionComponent.selectedModels.size).toBe(collectionComponent.models.length, 'Not all checkboxes are checked');

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => prev && currentValue);

		expect(allChecked).toBeTruthy('Not all checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe(`${collectionComponent.models.length} selected`, 'Select number not showing correctly');

		const selectAllEl: HTMLInputElement = fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement;

		expect(selectAllEl.checked).toBeTruthy('\'Select All\' checkbox is not selected when all rows of the current page are selected');

		// % protected region % [Add any additional logic for 'should check 'Select All' when all checkboxes are checked' here for Collection component against Species] off begin
		// % protected region % [Add any additional logic for 'should check 'Select All' when all checkboxes are checked' here for Collection component against Species] end
	}));

	it('should select the correct row', () => {
		// % protected region % [Add any additional logic before main process of 'should select the correct row' here for Collection component against Species] off begin
		// % protected region % [Add any additional logic before main process of 'should select the correct row' here for Collection component against Species] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;
		fixture.detectChanges();

		const checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));
		const checkboxEls: HTMLInputElement[] = checkboxes.map(checkbox => checkbox.nativeElement as HTMLInputElement);

		// Random row to select
		const rowIndex = 2;
		const checkbox: DebugElement = checkboxes[rowIndex];
		const checkboxEl: HTMLInputElement = checkbox.nativeElement;

		checkboxEl.click();
		fixture.detectChanges();

		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');

		const unselectedCheckboxes: boolean[] = checkboxEls
			.filter(checkbox => !checkbox.checked)
			.map(checkbox => checkbox.checked);

		expect(unselectedCheckboxes).toEqual(new Array(collectionComponent.models.length - 1).fill(false), 'Some other checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should select the correct row' here for Collection component against Species] off begin
		// % protected region % [Add any additional logic for 'should select the correct row' here for Collection component against Species] end
	});

	it('should keep selection when switch between grid and list', fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should keep selection when switch between grid and list' here for Collection component against Species] off begin
		// % protected region % [Add any additional logic before main process of 'should keep selection when switch between grid and list' here for Collection component against Species] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		// Random row to select
		const rowIndex = Math.floor(Math.random() * 10);
		let checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		let checkbox: DebugElement = checkboxes[rowIndex];
		let checkboxEl: HTMLInputElement = checkbox.nativeElement;

		checkbox.nativeElement.click();

		fixture.detectChanges();
		tick();

		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');

		// Switch to grid view
		const gridButton = fixture.debugElement.query(By.css('.btn.icon-grid'));
		gridButton.nativeElement.click();

		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		checkboxes = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		checkbox = checkboxes[rowIndex];
		checkboxEl = checkbox.nativeElement;

		// The checkbox is still selected and display correctly
		let selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;
		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');
		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');


		// Change back to list
		const listButton = fixture.debugElement.query(By.css('.btn.icon-list'));
		listButton.nativeElement.click();

		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		checkboxes = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		checkbox = checkboxes[rowIndex];
		checkboxEl = checkbox.nativeElement;

		// The checkbox is still selected
		selectText = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;
		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');
		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should keep selection when switch between grid and list' here for Collection component against Species] off begin
		// % protected region % [Add any additional logic for 'should keep selection when switch between grid and list' here for Collection component against Species] end
	}));

	// % protected region % [Add any additional tests here for Collection component against Species] off begin
	// % protected region % [Add any additional tests here for Collection component against Species] end
});

describe('Collection component against Fish', () => {

	let fixture: ComponentFixture<CollectionComponent<FishModel>>;
	let collectionComponent: CollectionComponent<FishModel>;

	let fishDataFactory: FishDataFactory;
	let models: FishModel[];
	let modelProperties: ModelProperty[];

	let defaultHeaderOptions: HeaderOption[];

	beforeAll(() => {
		// % protected region % [Add any additional setup in beforeAll before the main body here for entity.Name] off begin
		// % protected region % [Add any additional setup in beforeAll before the main body here for entity.Name] end

		fishDataFactory = new FishDataFactory();

		modelProperties = FishModel.getProps();

		defaultHeaderOptions =  modelProperties.map(prop => {
			return {
				...prop,
				sortable: true,
				sourceDirectFromModel: true,
				valueSource: prop.name
			} as HeaderOption;
		});

		// % protected region % [Add any additional setup in beforeAll after the main body here for Fish] off begin
		// % protected region % [Add any additional setup in beforeAll after the main body here for Fish] end
	});

	beforeEach(async(() => {
		models = fishDataFactory.createAll();

		TestBed.configureTestingModule({
			imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule,
				CommonComponentModule
			],
			// % protected region % [Add any additional configurations here for Collection component against Fish] off begin
			// % protected region % [Add any additional configurations here for Collection component against Fish] end
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent<CollectionComponent<FishModel>>(CollectionComponent);
			collectionComponent = fixture.debugElement.componentInstance;
		});
	}));

	afterEach(() => {
		(fixture.nativeElement as HTMLElement).remove();
	});

	it('should create the collection component', () => {
		expect(collectionComponent).toBeTruthy();
	});

	it('should have no items selected when first viewed', () => {
		// % protected region % [Add any additional logic before main process of 'should have no items selected when first viewed' here for Collection component against Fish] off begin
		// % protected region % [Add any additional logic before main process of 'should have no items selected when first viewed' here for Collection component against Fish] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;
		fixture.detectChanges();

		const selectAllInputEl: HTMLInputElement = fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement;

		expect(selectAllInputEl.checked).toBeFalsy(`'Select All' is checked`);

		const checkboxEls: HTMLInputElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'))
			.map(el => el.nativeElement as HTMLInputElement);

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => {
			return prev && currentValue;
		});
		expect(allChecked).toBeFalsy('Not all checkboxes are deselected');

		// % protected region % [Add any additional logic for 'should have no items selected when first viewed' here for Collection component against Fish] off begin
		// % protected region % [Add any additional logic for 'should have no items selected when first viewed' here for Collection component against Fish] end
	});

	it('should select all items when \'Select All\' is checked', fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should select all items when 'Select All' is checked' here for Collection component against Fish] off begin
		// % protected region % [Add any additional logic before main process of 'should select all items when 'Select All' is checked' here for Collection component against Fish] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement
			.click();

		fixture.detectChanges();
		tick();

		expect(collectionComponent.selectedModels.size).toBe(models.length, 'Not all checkboxes are checked');

		fixture.detectChanges();

		const checkboxEls: HTMLInputElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox > input[type="checkbox"]'))
			.map(el => el.nativeElement as HTMLInputElement);

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => prev && currentValue);

		expect(allChecked).toBeTruthy('Not all checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe('10 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should select all items when 'Select All' is checked' here for Collection component against Fish] off begin
		// % protected region % [Add any additional logic for 'should select all items when 'Select All' is checked' here for Collection component against Fish] end

	}));

	it('should check \'Select All\' when all checkboxes are checked',  fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should check 'Select All' when all checkboxes are checked' here for Collection component against Fish] off begin
		// % protected region % [Add any additional logic before main process of 'should check 'Select All' when all checkboxes are checked' here for Collection component against Fish] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		const checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));
		const checkboxEls: HTMLInputElement[] = checkboxes.map(checkbox => checkbox.nativeElement as HTMLInputElement);

		checkboxEls.forEach(checkbox => checkbox.click());

		fixture.detectChanges();
		tick();

		fixture.detectChanges();

		expect(collectionComponent.selectedModels.size).toBe(collectionComponent.models.length, 'Not all checkboxes are checked');

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => prev && currentValue);

		expect(allChecked).toBeTruthy('Not all checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe(`${collectionComponent.models.length} selected`, 'Select number not showing correctly');

		const selectAllEl: HTMLInputElement = fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement;

		expect(selectAllEl.checked).toBeTruthy('\'Select All\' checkbox is not selected when all rows of the current page are selected');

		// % protected region % [Add any additional logic for 'should check 'Select All' when all checkboxes are checked' here for Collection component against Fish] off begin
		// % protected region % [Add any additional logic for 'should check 'Select All' when all checkboxes are checked' here for Collection component against Fish] end
	}));

	it('should select the correct row', () => {
		// % protected region % [Add any additional logic before main process of 'should select the correct row' here for Collection component against Fish] off begin
		// % protected region % [Add any additional logic before main process of 'should select the correct row' here for Collection component against Fish] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;
		fixture.detectChanges();

		const checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));
		const checkboxEls: HTMLInputElement[] = checkboxes.map(checkbox => checkbox.nativeElement as HTMLInputElement);

		// Random row to select
		const rowIndex = 2;
		const checkbox: DebugElement = checkboxes[rowIndex];
		const checkboxEl: HTMLInputElement = checkbox.nativeElement;

		checkboxEl.click();
		fixture.detectChanges();

		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');

		const unselectedCheckboxes: boolean[] = checkboxEls
			.filter(checkbox => !checkbox.checked)
			.map(checkbox => checkbox.checked);

		expect(unselectedCheckboxes).toEqual(new Array(collectionComponent.models.length - 1).fill(false), 'Some other checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should select the correct row' here for Collection component against Fish] off begin
		// % protected region % [Add any additional logic for 'should select the correct row' here for Collection component against Fish] end
	});

	it('should keep selection when switch between grid and list', fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should keep selection when switch between grid and list' here for Collection component against Fish] off begin
		// % protected region % [Add any additional logic before main process of 'should keep selection when switch between grid and list' here for Collection component against Fish] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		// Random row to select
		const rowIndex = Math.floor(Math.random() * 10);
		let checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		let checkbox: DebugElement = checkboxes[rowIndex];
		let checkboxEl: HTMLInputElement = checkbox.nativeElement;

		checkbox.nativeElement.click();

		fixture.detectChanges();
		tick();

		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');

		// Switch to grid view
		const gridButton = fixture.debugElement.query(By.css('.btn.icon-grid'));
		gridButton.nativeElement.click();

		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		checkboxes = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		checkbox = checkboxes[rowIndex];
		checkboxEl = checkbox.nativeElement;

		// The checkbox is still selected and display correctly
		let selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;
		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');
		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');


		// Change back to list
		const listButton = fixture.debugElement.query(By.css('.btn.icon-list'));
		listButton.nativeElement.click();

		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		checkboxes = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		checkbox = checkboxes[rowIndex];
		checkboxEl = checkbox.nativeElement;

		// The checkbox is still selected
		selectText = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;
		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');
		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should keep selection when switch between grid and list' here for Collection component against Fish] off begin
		// % protected region % [Add any additional logic for 'should keep selection when switch between grid and list' here for Collection component against Fish] end
	}));

	// % protected region % [Add any additional tests here for Collection component against Fish] off begin
	// % protected region % [Add any additional tests here for Collection component against Fish] end
});

describe('Collection component against Role', () => {

	let fixture: ComponentFixture<CollectionComponent<RoleModel>>;
	let collectionComponent: CollectionComponent<RoleModel>;

	let roleDataFactory: RoleDataFactory;
	let models: RoleModel[];
	let modelProperties: ModelProperty[];

	let defaultHeaderOptions: HeaderOption[];

	beforeAll(() => {
		// % protected region % [Add any additional setup in beforeAll before the main body here for entity.Name] off begin
		// % protected region % [Add any additional setup in beforeAll before the main body here for entity.Name] end

		roleDataFactory = new RoleDataFactory();

		modelProperties = RoleModel.getProps();

		defaultHeaderOptions =  modelProperties.map(prop => {
			return {
				...prop,
				sortable: true,
				sourceDirectFromModel: true,
				valueSource: prop.name
			} as HeaderOption;
		});

		// % protected region % [Add any additional setup in beforeAll after the main body here for Role] off begin
		// % protected region % [Add any additional setup in beforeAll after the main body here for Role] end
	});

	beforeEach(async(() => {
		models = roleDataFactory.createAll();

		TestBed.configureTestingModule({
			imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule,
				CommonComponentModule
			],
			// % protected region % [Add any additional configurations here for Collection component against Role] off begin
			// % protected region % [Add any additional configurations here for Collection component against Role] end
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent<CollectionComponent<RoleModel>>(CollectionComponent);
			collectionComponent = fixture.debugElement.componentInstance;
		});
	}));

	afterEach(() => {
		(fixture.nativeElement as HTMLElement).remove();
	});

	it('should create the collection component', () => {
		expect(collectionComponent).toBeTruthy();
	});

	it('should have no items selected when first viewed', () => {
		// % protected region % [Add any additional logic before main process of 'should have no items selected when first viewed' here for Collection component against Role] off begin
		// % protected region % [Add any additional logic before main process of 'should have no items selected when first viewed' here for Collection component against Role] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;
		fixture.detectChanges();

		const selectAllInputEl: HTMLInputElement = fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement;

		expect(selectAllInputEl.checked).toBeFalsy(`'Select All' is checked`);

		const checkboxEls: HTMLInputElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'))
			.map(el => el.nativeElement as HTMLInputElement);

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => {
			return prev && currentValue;
		});
		expect(allChecked).toBeFalsy('Not all checkboxes are deselected');

		// % protected region % [Add any additional logic for 'should have no items selected when first viewed' here for Collection component against Role] off begin
		// % protected region % [Add any additional logic for 'should have no items selected when first viewed' here for Collection component against Role] end
	});

	it('should select all items when \'Select All\' is checked', fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should select all items when 'Select All' is checked' here for Collection component against Role] off begin
		// % protected region % [Add any additional logic before main process of 'should select all items when 'Select All' is checked' here for Collection component against Role] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement
			.click();

		fixture.detectChanges();
		tick();

		expect(collectionComponent.selectedModels.size).toBe(models.length, 'Not all checkboxes are checked');

		fixture.detectChanges();

		const checkboxEls: HTMLInputElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox > input[type="checkbox"]'))
			.map(el => el.nativeElement as HTMLInputElement);

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => prev && currentValue);

		expect(allChecked).toBeTruthy('Not all checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe('10 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should select all items when 'Select All' is checked' here for Collection component against Role] off begin
		// % protected region % [Add any additional logic for 'should select all items when 'Select All' is checked' here for Collection component against Role] end

	}));

	it('should check \'Select All\' when all checkboxes are checked',  fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should check 'Select All' when all checkboxes are checked' here for Collection component against Role] off begin
		// % protected region % [Add any additional logic before main process of 'should check 'Select All' when all checkboxes are checked' here for Collection component against Role] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		const checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));
		const checkboxEls: HTMLInputElement[] = checkboxes.map(checkbox => checkbox.nativeElement as HTMLInputElement);

		checkboxEls.forEach(checkbox => checkbox.click());

		fixture.detectChanges();
		tick();

		fixture.detectChanges();

		expect(collectionComponent.selectedModels.size).toBe(collectionComponent.models.length, 'Not all checkboxes are checked');

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => prev && currentValue);

		expect(allChecked).toBeTruthy('Not all checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe(`${collectionComponent.models.length} selected`, 'Select number not showing correctly');

		const selectAllEl: HTMLInputElement = fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement;

		expect(selectAllEl.checked).toBeTruthy('\'Select All\' checkbox is not selected when all rows of the current page are selected');

		// % protected region % [Add any additional logic for 'should check 'Select All' when all checkboxes are checked' here for Collection component against Role] off begin
		// % protected region % [Add any additional logic for 'should check 'Select All' when all checkboxes are checked' here for Collection component against Role] end
	}));

	it('should select the correct row', () => {
		// % protected region % [Add any additional logic before main process of 'should select the correct row' here for Collection component against Role] off begin
		// % protected region % [Add any additional logic before main process of 'should select the correct row' here for Collection component against Role] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;
		fixture.detectChanges();

		const checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));
		const checkboxEls: HTMLInputElement[] = checkboxes.map(checkbox => checkbox.nativeElement as HTMLInputElement);

		// Random row to select
		const rowIndex = 2;
		const checkbox: DebugElement = checkboxes[rowIndex];
		const checkboxEl: HTMLInputElement = checkbox.nativeElement;

		checkboxEl.click();
		fixture.detectChanges();

		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');

		const unselectedCheckboxes: boolean[] = checkboxEls
			.filter(checkbox => !checkbox.checked)
			.map(checkbox => checkbox.checked);

		expect(unselectedCheckboxes).toEqual(new Array(collectionComponent.models.length - 1).fill(false), 'Some other checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should select the correct row' here for Collection component against Role] off begin
		// % protected region % [Add any additional logic for 'should select the correct row' here for Collection component against Role] end
	});

	it('should keep selection when switch between grid and list', fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should keep selection when switch between grid and list' here for Collection component against Role] off begin
		// % protected region % [Add any additional logic before main process of 'should keep selection when switch between grid and list' here for Collection component against Role] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		// Random row to select
		const rowIndex = Math.floor(Math.random() * 10);
		let checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		let checkbox: DebugElement = checkboxes[rowIndex];
		let checkboxEl: HTMLInputElement = checkbox.nativeElement;

		checkbox.nativeElement.click();

		fixture.detectChanges();
		tick();

		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');

		// Switch to grid view
		const gridButton = fixture.debugElement.query(By.css('.btn.icon-grid'));
		gridButton.nativeElement.click();

		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		checkboxes = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		checkbox = checkboxes[rowIndex];
		checkboxEl = checkbox.nativeElement;

		// The checkbox is still selected and display correctly
		let selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;
		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');
		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');


		// Change back to list
		const listButton = fixture.debugElement.query(By.css('.btn.icon-list'));
		listButton.nativeElement.click();

		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		checkboxes = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		checkbox = checkboxes[rowIndex];
		checkboxEl = checkbox.nativeElement;

		// The checkbox is still selected
		selectText = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;
		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');
		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should keep selection when switch between grid and list' here for Collection component against Role] off begin
		// % protected region % [Add any additional logic for 'should keep selection when switch between grid and list' here for Collection component against Role] end
	}));

	// % protected region % [Add any additional tests here for Collection component against Role] off begin
	// % protected region % [Add any additional tests here for Collection component against Role] end
});

describe('Collection component against Privilege', () => {

	let fixture: ComponentFixture<CollectionComponent<PrivilegeModel>>;
	let collectionComponent: CollectionComponent<PrivilegeModel>;

	let privilegeDataFactory: PrivilegeDataFactory;
	let models: PrivilegeModel[];
	let modelProperties: ModelProperty[];

	let defaultHeaderOptions: HeaderOption[];

	beforeAll(() => {
		// % protected region % [Add any additional setup in beforeAll before the main body here for entity.Name] off begin
		// % protected region % [Add any additional setup in beforeAll before the main body here for entity.Name] end

		privilegeDataFactory = new PrivilegeDataFactory();

		modelProperties = PrivilegeModel.getProps();

		defaultHeaderOptions =  modelProperties.map(prop => {
			return {
				...prop,
				sortable: true,
				sourceDirectFromModel: true,
				valueSource: prop.name
			} as HeaderOption;
		});

		// % protected region % [Add any additional setup in beforeAll after the main body here for Privilege] off begin
		// % protected region % [Add any additional setup in beforeAll after the main body here for Privilege] end
	});

	beforeEach(async(() => {
		models = privilegeDataFactory.createAll();

		TestBed.configureTestingModule({
			imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule,
				CommonComponentModule
			],
			// % protected region % [Add any additional configurations here for Collection component against Privilege] off begin
			// % protected region % [Add any additional configurations here for Collection component against Privilege] end
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent<CollectionComponent<PrivilegeModel>>(CollectionComponent);
			collectionComponent = fixture.debugElement.componentInstance;
		});
	}));

	afterEach(() => {
		(fixture.nativeElement as HTMLElement).remove();
	});

	it('should create the collection component', () => {
		expect(collectionComponent).toBeTruthy();
	});

	it('should have no items selected when first viewed', () => {
		// % protected region % [Add any additional logic before main process of 'should have no items selected when first viewed' here for Collection component against Privilege] off begin
		// % protected region % [Add any additional logic before main process of 'should have no items selected when first viewed' here for Collection component against Privilege] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;
		fixture.detectChanges();

		const selectAllInputEl: HTMLInputElement = fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement;

		expect(selectAllInputEl.checked).toBeFalsy(`'Select All' is checked`);

		const checkboxEls: HTMLInputElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'))
			.map(el => el.nativeElement as HTMLInputElement);

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => {
			return prev && currentValue;
		});
		expect(allChecked).toBeFalsy('Not all checkboxes are deselected');

		// % protected region % [Add any additional logic for 'should have no items selected when first viewed' here for Collection component against Privilege] off begin
		// % protected region % [Add any additional logic for 'should have no items selected when first viewed' here for Collection component against Privilege] end
	});

	it('should select all items when \'Select All\' is checked', fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should select all items when 'Select All' is checked' here for Collection component against Privilege] off begin
		// % protected region % [Add any additional logic before main process of 'should select all items when 'Select All' is checked' here for Collection component against Privilege] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement
			.click();

		fixture.detectChanges();
		tick();

		expect(collectionComponent.selectedModels.size).toBe(models.length, 'Not all checkboxes are checked');

		fixture.detectChanges();

		const checkboxEls: HTMLInputElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox > input[type="checkbox"]'))
			.map(el => el.nativeElement as HTMLInputElement);

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => prev && currentValue);

		expect(allChecked).toBeTruthy('Not all checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe('10 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should select all items when 'Select All' is checked' here for Collection component against Privilege] off begin
		// % protected region % [Add any additional logic for 'should select all items when 'Select All' is checked' here for Collection component against Privilege] end

	}));

	it('should check \'Select All\' when all checkboxes are checked',  fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should check 'Select All' when all checkboxes are checked' here for Collection component against Privilege] off begin
		// % protected region % [Add any additional logic before main process of 'should check 'Select All' when all checkboxes are checked' here for Collection component against Privilege] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		const checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));
		const checkboxEls: HTMLInputElement[] = checkboxes.map(checkbox => checkbox.nativeElement as HTMLInputElement);

		checkboxEls.forEach(checkbox => checkbox.click());

		fixture.detectChanges();
		tick();

		fixture.detectChanges();

		expect(collectionComponent.selectedModels.size).toBe(collectionComponent.models.length, 'Not all checkboxes are checked');

		const allChecked = checkboxEls.map(el => el.checked).reduce((prev, currentValue) => prev && currentValue);

		expect(allChecked).toBeTruthy('Not all checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe(`${collectionComponent.models.length} selected`, 'Select number not showing correctly');

		const selectAllEl: HTMLInputElement = fixture
			.debugElement
			.query(By.css('.input-group.input-group-inline.input-group__checkbox.collection__list--select-all > input[type="checkbox"]'))
			.nativeElement;

		expect(selectAllEl.checked).toBeTruthy('\'Select All\' checkbox is not selected when all rows of the current page are selected');

		// % protected region % [Add any additional logic for 'should check 'Select All' when all checkboxes are checked' here for Collection component against Privilege] off begin
		// % protected region % [Add any additional logic for 'should check 'Select All' when all checkboxes are checked' here for Collection component against Privilege] end
	}));

	it('should select the correct row', () => {
		// % protected region % [Add any additional logic before main process of 'should select the correct row' here for Collection component against Privilege] off begin
		// % protected region % [Add any additional logic before main process of 'should select the correct row' here for Collection component against Privilege] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;
		fixture.detectChanges();

		const checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));
		const checkboxEls: HTMLInputElement[] = checkboxes.map(checkbox => checkbox.nativeElement as HTMLInputElement);

		// Random row to select
		const rowIndex = 2;
		const checkbox: DebugElement = checkboxes[rowIndex];
		const checkboxEl: HTMLInputElement = checkbox.nativeElement;

		checkboxEl.click();
		fixture.detectChanges();

		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');

		const unselectedCheckboxes: boolean[] = checkboxEls
			.filter(checkbox => !checkbox.checked)
			.map(checkbox => checkbox.checked);

		expect(unselectedCheckboxes).toEqual(new Array(collectionComponent.models.length - 1).fill(false), 'Some other checkboxes are selected');

		const multipleItemsActionBar: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options'))
			.nativeElement;

		expect(multipleItemsActionBar.hidden).toBeFalsy('Multiple items action bar not showing when select all');

		const selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;

		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should select the correct row' here for Collection component against Privilege] off begin
		// % protected region % [Add any additional logic for 'should select the correct row' here for Collection component against Privilege] end
	});

	it('should keep selection when switch between grid and list', fakeAsync(() => {
		// % protected region % [Add any additional logic before main process of 'should keep selection when switch between grid and list' here for Collection component against Privilege] off begin
		// % protected region % [Add any additional logic before main process of 'should keep selection when switch between grid and list' here for Collection component against Privilege] end

		collectionComponent.models = models;
		collectionComponent.headerOptions = defaultHeaderOptions;

		fixture.detectChanges();
		tick();

		// Random row to select
		const rowIndex = Math.floor(Math.random() * 10);
		let checkboxes: DebugElement[] = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		let checkbox: DebugElement = checkboxes[rowIndex];
		let checkboxEl: HTMLInputElement = checkbox.nativeElement;

		checkbox.nativeElement.click();

		fixture.detectChanges();
		tick();

		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');

		// Switch to grid view
		const gridButton = fixture.debugElement.query(By.css('.btn.icon-grid'));
		gridButton.nativeElement.click();

		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		checkboxes = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		checkbox = checkboxes[rowIndex];
		checkboxEl = checkbox.nativeElement;

		// The checkbox is still selected and display correctly
		let selectText: HTMLElement = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;
		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');
		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');


		// Change back to list
		const listButton = fixture.debugElement.query(By.css('.btn.icon-list'));
		listButton.nativeElement.click();

		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		checkboxes = fixture
			.debugElement
			.queryAll(By.css('.input-group.input-group-block.input-group__checkbox:not(.collection__list--select-all) > input[type="checkbox"]'));

		checkbox = checkboxes[rowIndex];
		checkboxEl = checkbox.nativeElement;

		// The checkbox is still selected
		selectText = fixture
			.debugElement
			.query(By.css('.collection__select-options > p.crud__selection-count'))
			.nativeElement;
		expect(checkboxEl.checked).toBeTruthy('Checkbox is not checked when selected');
		expect(selectText.innerText).toBe('1 selected', 'Select number not showing correctly');

		// % protected region % [Add any additional logic for 'should keep selection when switch between grid and list' here for Collection component against Privilege] off begin
		// % protected region % [Add any additional logic for 'should keep selection when switch between grid and list' here for Collection component against Privilege] end
	}));

	// % protected region % [Add any additional tests here for Collection component against Privilege] off begin
	// % protected region % [Add any additional tests here for Collection component against Privilege] end
});

