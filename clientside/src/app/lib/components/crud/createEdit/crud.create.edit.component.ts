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

import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {AbstractModelAudit, RouterState} from '../../../../models/model.state';
import {getRouterState} from '../../../../models/model.selector';
import {FileModel} from '../../../models/file.model';
import {AbstractComponent} from '../../abstract.component';
import {ButtonStyle, ButtonAccentColour, ButtonSize, IconPosition} from '../../button/button.component';
import {BottomActionBarGroup, BottomActionBarElementType} from '../../bottom-action-bar/bottom-action-bar.component';
import {TextfieldType} from '../../textfield/textfield.component';
import {AbstractModel, ModelProperty, ModelRelation, ModelRelationType, ModelPropertyType} from '../../../models/abstract.model';
import {ElementType} from '../../abstract.input.component';
import {createReactiveFormFromModel} from '../../../models/model-utils';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@Component({
	selector: 'cb-crud-create-edit',
	templateUrl: './crud.create.edit.component.html',
	styleUrls: [
		'./crud.create.edit.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class CrudCreateEditComponent<E extends AbstractModel, T extends AbstractModelAudit<E>> extends AbstractComponent implements OnInit, OnChanges {
	buttonStyle = ButtonStyle;
	iconPos = IconPosition;
	modelRelationType = ModelRelationType;
	elementType = ElementType;
	textFieldType = TextfieldType;

	/**
	 * Element groups to be displayed in the bottom action bar.
	 */
	actionBarGroups: BottomActionBarGroup[];

	/**
	 * Additional Element groups passed in to display unique crud page actions
	 */
	@Input()
	customGroups: BottomActionBarGroup[] = [];

	/**
	 * Model to be edited if this component is opened in edit mode.
	 * The value of the model would be applied to the form group
	 */
	@Input()
	model: E;

	/**
	 * Form group to display. This is required to passed in
	 */
	@Input()
	modelFormGroup: FormGroup;

	/**
	 * Event emitter used to trigger events whenever the user clicks on the `Create` or `Save` button.
	 */
	@Output('createOrSaveClick')
	createOrSaveEventEmitter: EventEmitter<{ isCreate: boolean, payload?: { [key in keyof E]?: any } }> = new EventEmitter();

	/**
	 * Event emitter used to to trigger events when the user wants to switch from the view mode to edit mode.
	 */
	@Output('switchEdit')
	switchEditEventEmitter: EventEmitter<null> = new EventEmitter();

	/**
	 * Event emitter used to trigger events whenever the user clicks on the `Cancel` button.
	 */
	@Output('cancelClick')
	cancelEventEmitter: EventEmitter<null> = new EventEmitter();

	/**
	 * Event emitter used to trigger events whenever the user clicks on the `View History` button.
	 */
	@Output('viewHistory')
	viewHistoryEventEmitter: EventEmitter<null> = new EventEmitter();

	/**
	 * List of properties/attributes of the model class managed by this create CRUD component.
	 */
	@Input()
	modelProperties: ModelProperty[] = [];

	/**
	 * List of relations of the model class managed by this create CRUD component.
	 */
	@Input()
	modelRelations: { [name: string]: ModelRelation } = {};

	/**
	 * Whether the info sidebar is current displayed.
	 */
	@Input()
	displayViewHistory: boolean = false;

	@Input()
	showHeader: boolean = true;

	@Input()
	showActionBar: boolean = true;

	/**
	 * Whether to hide the edit button in the view mode
	 */
	@Input()
	hideEditButton: boolean = false;

	/**
	 * When set to true, the create-edit would scroll to invalid input when try to submit
	 */
	@Input()
	scrollToInvalidInput: boolean = true;

	/**
	 * The audits for this model. Only applicable when in edit mode.
	 */
	@Input()
	audits: T[] = [];

	/**
	 * Changes to be made to the original model.
	 */
	pendingChanges: { [key in keyof E]?: any } = {};

	/**
	 * Whether the current page is displayed in admin/backend mode or not.
	 */
	isAdminMode: boolean = false;

	/**
	 * All model properties with no explicit group.
	 */
	modelPropertiesWithNoGroup: ModelProperty[] = [];

	/**
	 *  All model relations with no explicit group
	 */
	modelRelationsWithNoGroup: ModelRelation[] = [];

	/**
	 * Used to store group name against all model properties with that group.
	 */
	modelPropertiesWithGroup: { [s: string]: { displayName: string, props: ModelProperty[], relations: ModelRelation[], combined: [] } } = {};

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		private store: Store<{ router: RouterState }>,
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
	) {
		super(
			// % protected region % [Add any additional constructor arguments here] off begin
			// % protected region % [Add any additional constructor arguments here] end
		);

		this.store.select(getRouterState).subscribe(
			routerState => {
				if (routerState && routerState.url) {
					this.isAdminMode = routerState.url.startsWith('/admin');
				}
			}
		);

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	/**
	 * @inheritDoc
	 */
	ngOnInit() {
		// % protected region % [Add any additional ngOnInit logic before the main body here] off begin
		// % protected region % [Add any additional ngOnInit logic before the main body here] end

		this.actionBarGroups = [
			// % protected region % [Add any additional element groups before the main ones here] off begin
			// % protected region % [Add any additional element groups before the main ones here] end
			{
				elements: [
					// % protected region % [Add any additional elements before the main ones here] off begin
					// % protected region % [Add any additional elements before the main ones here] end
					{
						type: BottomActionBarElementType.BUTTON,
						label: 'Help Documentation',
						iconPos: IconPosition.RIGHT,
						iconClasses: 'help',
						buttonAccentColour: ButtonAccentColour.SECONDARY,
						doHide: () => !this.isAdminMode
					},
					{
						type: BottomActionBarElementType.BUTTON,
						label: 'Cancel',
						buttonStyle: ButtonStyle.OUTLINE,
						iconPos: IconPosition.LEFT,
						callback: this.onCancelClicked.bind(this)
					},
					{
						type: BottomActionBarElementType.BUTTON,
						label: 'Edit',
						buttonStyle: ButtonStyle.SOLID,
						iconPos: IconPosition.LEFT,
						callback: this.onEditClicked.bind(this),
						doHide: () => !this.isDisabled || this.hideEditButton
					},
					{
						type: BottomActionBarElementType.BUTTON,
						label: 'Save',
						buttonStyle: ButtonStyle.SOLID,
						iconPos: IconPosition.LEFT,
						callback: this.model.id ? this.onSaveClicked.bind(this) : this.onCreateClicked.bind(this),
						doHide: () => this.isDisabled
					},
					// % protected region % [Add any additional elements after the main ones here] off begin
					// % protected region % [Add any additional elements after the main ones here] end
				]
			},
			...this.customGroups,
			// % protected region % [Add any additional element groups after the main ones here] off begin
			// % protected region % [Add any additional element groups after the main ones here] end
		];

		// % protected region % [Add any additional ngOnInit logic after the main body here] off begin
		// % protected region % [Add any additional ngOnInit logic after the main body here] end
	}

	/**
	 * @inheritDoc
	 */
	ngOnChanges(changes: SimpleChanges): void {
		if (changes.hasOwnProperty('modelProperties') || changes.hasOwnProperty('modelRelations')) {
			this.separateForm();
		}
	}

	/**
	 * Triggered when the user clicks on the `Create` button.
	 */
	onCreateClicked() {
		// % protected region % [Add any additional onCreateClicked logic before the main body here] off begin
		// % protected region % [Add any additional onCreateClicked logic before the main body here] end

		if (this.getChangedValuesAndValidate()) {
			this.createOrSaveEventEmitter.emit({
				isCreate: true
			});
		}

		// % protected region % [Add any additional onCreateClicked logic after the main body here] off begin
		// % protected region % [Add any additional onCreateClicked logic after the main body here] end
	}

	/**
	 * Triggered when the user clicks on the `Save` button.
	 */
	onSaveClicked() {
		// % protected region % [Add any additional onSaveClicked logic before the main body here] off begin
		// % protected region % [Add any additional onSaveClicked logic before the main body here] end

		if (this.getChangedValuesAndValidate()) {
			this.createOrSaveEventEmitter.emit({
				isCreate: false,
				payload: this.pendingChanges
			});
		}

		// % protected region % [Add any additional onSaveClicked logic after the main body here] off begin
		// % protected region % [Add any additional onSaveClicked logic after the main body here] end
	}

	/**
	 * Triggered when the user clicks on the `Edit` button.
	 */
	onEditClicked() {
		// % protected region % [Add any additional onEditClicked logic before the main body here] off begin
		// % protected region % [Add any additional onEditClicked logic before the main body here] end

		this.switchEditEventEmitter.emit(null);

		// % protected region % [Add any additional onEditClicked logic after the main body here] off begin
		// % protected region % [Add any additional onEditClicked logic after the main body here] end
	}

	/**
	 * Triggered when the user clicks on the `Cancel` button.
	 */
	onCancelClicked() {
		// % protected region % [Add any additional onCancelClicked logic before the main body here] off begin
		// % protected region % [Add any additional onCancelClicked logic before the main body here] end

		this.cancelEventEmitter.emit(null);

		// % protected region % [Add any additional onCancelClicked logic after the main body here] off begin
		// % protected region % [Add any additional onCancelClicked logic after the main body here] end
	}

	/**
	 * Triggered when the user clicks on the `View History` button.
	 */
	onViewHistory() {
		// % protected region % [Add any additional onViewHistory logic before the main body here] off begin
		// % protected region % [Add any additional onViewHistory logic before the main body here] end

		this.displayViewHistory = true;
		this.viewHistoryEventEmitter.emit(null);

		// % protected region % [Add any additional onViewHistory logic after the main body here] off begin
		// % protected region % [Add any additional onViewHistory logic after the main body here] end
	}

	/**
	 * Given the JS type of a property in the current model type, return the appropriate textfield type.
	 *
	 * @returns the appropriate input type
	 */
	getInputType(elementType: string): TextfieldType {
		if (elementType === ElementType.NUMBER) {
			return TextfieldType.NUMBER;
		} else if (elementType === ElementType.PASSWORD){
			return TextfieldType.PASSWORD;
		} else {
			return TextfieldType.TEXT;
		}
	}

	/**
	 * Get the changed values from the modelFormGroup and update to the pendingChanges
	 */
	private getChangedValuesAndValidate(): boolean {
		// % protected region % [Add any additional getChangedValuesAndValidate logic before the main body here] off begin
		// % protected region % [Add any additional getChangedValuesAndValidate logic before the main body here] end

		// Validates all the inputs
		Object.values(this.modelFormGroup.controls)
			.filter(control => !control.disabled)
			.forEach(formControl => formControl.updateValueAndValidity({emitEvent: true}));

		if (this.modelFormGroup.invalid) {
			if (this.scrollToInvalidInput) {
				this.scrollToError();
			}
			return false;
		}

		if (this.model.id) {
			this.pendingChanges = {};
			Object.entries(this.modelFormGroup.controls)
				.filter(([key, formControl]) => formControl.dirty)
				.forEach(([key, formControl]) => this.pendingChanges[key] = formControl.value);
		} else {
			Object.assign(this.model, this.modelFormGroup.value);
		}

		// % protected region % [Add any additional getChangedValuesAndValidate logic after the main body here] off begin
		// % protected region % [Add any additional getChangedValuesAndValidate logic after the main body here] end

		return true;
	}

	/**
	 * Separate properties and relations into their respective groups.
	 */
	private separateForm() {
		// % protected region % [Add any additional separateForm logic before the main body here] off begin
		// % protected region % [Add any additional separateForm logic before the main body here] end

		// Initialize the groups
		this.modelPropertiesWithNoGroup = [];
		this.modelRelationsWithNoGroup = [];
		this.modelPropertiesWithGroup = {};

		this.modelProperties.forEach(prop => {
			if (!prop.group) {
				this.modelPropertiesWithNoGroup.push(prop);
			} else {
				if (!this.modelPropertiesWithGroup[prop.group.id]) {
					this.modelPropertiesWithGroup[prop.group.id] = {
						displayName: prop.group.displayName,
						props: [],
						relations: [],
						combined: []
					};
				}
				this.modelPropertiesWithGroup[prop.group.id].props.push(prop);
			}
		});

		Object.values(this.modelRelations).forEach(prop => {
			if (!prop.group) {
				this.modelRelationsWithNoGroup.push(prop);
			} else {
				if (!this.modelPropertiesWithGroup[prop.group.id]) {
					this.modelPropertiesWithGroup[prop.group.id] = {
						displayName: prop.group.displayName,
						props: [],
						relations: [],
						combined: []
					};
				}
				this.modelPropertiesWithGroup[prop.group.id].relations.push(prop);
			}
		});

		const orderedModelPropertiesWithGroup = {};
		Object.entries(this.model.modelPropGroups).forEach(([k, v]) => {
			if (this.modelPropertiesWithGroup[v.id]) {
				orderedModelPropertiesWithGroup[v.id] = this.modelPropertiesWithGroup[v.id];
			}
		});

		const sortFn = (p1, p2) => {
			if (!p1.index) {
				return p2.index;
			} else if (!p2.index) {
				return p1.index;
			} else {
				return p1.index - p2.index;
			}
		};

		Object.keys(orderedModelPropertiesWithGroup).forEach(k => {
				const orderedProps = orderedModelPropertiesWithGroup[k].props.sort(sortFn);
				const orderedRefs = orderedModelPropertiesWithGroup[k].relations.sort(sortFn);
				const combined = [
					...orderedRefs.map(ref => {
						return {...ref, isProp: false};
					}),
					...orderedProps
						.filter(item => item.name !== 'id' && item.name !== 'created' && item.name !== 'modified')
						.map(prop => {
							return {...prop, isProp: true};
						}),
				].sort(sortFn);

				orderedModelPropertiesWithGroup[k] = {
					displayName: orderedModelPropertiesWithGroup[k].displayName,
					props: orderedProps,
					relations: orderedRefs,
					combined: combined
				};
			}
		);
		this.modelPropertiesWithGroup = orderedModelPropertiesWithGroup;

		// % protected region % [Add any additional separateForm logic after the main body here] off begin
		// % protected region % [Add any additional separateForm logic after the main body here] end
	}

	/**
	 * Scroll to the element in the dom
	 */
	scrollTo(el: Element) {
		if(el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	}

	/**
	 * Find the error message and scroll to it
	 */
	scrollToError() {
		const firstElementWithError = document.querySelector('.ng-invalid');
		this.scrollTo(firstElementWithError);
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
