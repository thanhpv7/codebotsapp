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
import {FormGroup, Validators} from '@angular/forms';
import {Group, AbstractModel, ModelProperty, ModelPropertyType, ModelRelation, ModelRelationType} from '../../lib/models/abstract.model';
import {RoleModel} from '../role/role.model';
import * as _ from 'lodash';
import {QueryOperation, Where} from '../../lib/services/http/interfaces';
import {ElementType} from '../../lib/components/abstract.input.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * POJO model class used to store information related to the entity.
 */
export class PrivilegeModel extends AbstractModel {
	/**
	 * The fields which are set as searchable in the entity model
	 * The fields could be used in search in the server side
	 * The fields would be by default used as search in the crud tile. You could also use this in other tiles for searching
	 *
	 * @type {string[]} The name of the fields that are searchable
	 */
	// TODO add the searchable in the Metamodel
	static searchFields: string[] = [
		// % protected region % [Add any additional searchable field names here] off begin
		// % protected region % [Add any additional searchable field names here] end
	];

	/**
	 * Attributes to be shown in value to display
	 */
	static displayAttributes: string[] = [
		// % protected region % [Change displayAttributes here if needed] off begin
		'name',
		// % protected region % [Change displayAttributes here if needed] end
	];

	readonly className = 'PrivilegeModel';

	/**
	 * Default value to be displayed in dropdown etc
	 */
	get valueToDisplay(): string {
		// % protected region % [Change displayName here if needed] off begin
		return PrivilegeModel.displayAttributes.map((attr) => this[attr]).join(' ');
		// % protected region % [Change displayName here if needed] end
	}

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=2, example=Sally}.
	 */
	name: string;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=3, example=Sally}.
	 */
	targetEntity: string;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=4, example=true}.
	 */
	allowCreate: boolean = false;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=5, example=true}.
	 */
	allowRead: boolean = false;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=6, example=true}.
	 */
	allowUpdate: boolean = false;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=7, example=true}.
	 */
	allowDelete: boolean = false;

	rolesIds: string[] = [];

	static modelPropGroups: { [s: string]: Group } = {
		// % protected region % [Add groups for the entity here] off begin
		// % protected region % [Add groups for the entity here] end
	};

	modelPropGroups: { [s: string]: Group } = PrivilegeModel.modelPropGroups;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	getPropDisplayNames(): { [s: string]: ModelProperty } {
		const returned = {};
		PrivilegeModel.getProps().map(prop => returned[prop.name] = prop);
		return returned;
	}

	static getProps(): ModelProperty[] {
		return super.getProps().concat([
			{
				name: 'name',
				// % protected region % [Set displayName for name here] off begin
				displayName: 'name',
				// % protected region % [Set displayName for name here] end
				type: ModelPropertyType.STRING,
				// % protected region % [Set display element type for name here] off begin
				elementType: ElementType.INPUT,
				// % protected region % [Set display element type for name here] end
				// % protected region % [Set isSensitive for name here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive for name here] end
				// % protected region % [Set readonly for name here] off begin
				readOnly: false,
				// % protected region % [Set readonly for name here] end
				validators: [
					Validators.required,
					// % protected region % [Add other validators for name here] off begin
					// % protected region % [Add other validators for name here] end
				],
				// % protected region % [Add any additional model attribute properties for name here] off begin
				// % protected region % [Add any additional model attribute properties for name here] end
			},
			{
				name: 'targetEntity',
				// % protected region % [Set displayName for target entity here] off begin
				displayName: 'target entity',
				// % protected region % [Set displayName for target entity here] end
				type: ModelPropertyType.STRING,
				// % protected region % [Set display element type for target entity here] off begin
				elementType: ElementType.INPUT,
				// % protected region % [Set display element type for target entity here] end
				// % protected region % [Set isSensitive for target entity here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive for target entity here] end
				// % protected region % [Set readonly for target entity here] off begin
				readOnly: false,
				// % protected region % [Set readonly for target entity here] end
				validators: [
					Validators.required,
					// % protected region % [Add other validators for target entity here] off begin
					// % protected region % [Add other validators for target entity here] end
				],
				// % protected region % [Add any additional model attribute properties for target entity here] off begin
				// % protected region % [Add any additional model attribute properties for target entity here] end
			},
			{
				name: 'allowCreate',
				// % protected region % [Set displayName for allow create here] off begin
				displayName: 'allow create',
				// % protected region % [Set displayName for allow create here] end
				type: ModelPropertyType.BOOLEAN,
				// % protected region % [Set display element type for allow create here] off begin
				elementType: ElementType.CHECKBOX,
				// % protected region % [Set display element type for allow create here] end
				// % protected region % [Set isSensitive for allow create here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive for allow create here] end
				// % protected region % [Set readonly for allow create here] off begin
				readOnly: false,
				// % protected region % [Set readonly for allow create here] end
				validators: [
					Validators.required,
					// % protected region % [Add other validators for allow create here] off begin
					// % protected region % [Add other validators for allow create here] end
				],
				// % protected region % [Add any additional model attribute properties for allow create here] off begin
				// % protected region % [Add any additional model attribute properties for allow create here] end
			},
			{
				name: 'allowRead',
				// % protected region % [Set displayName for allow read here] off begin
				displayName: 'allow read',
				// % protected region % [Set displayName for allow read here] end
				type: ModelPropertyType.BOOLEAN,
				// % protected region % [Set display element type for allow read here] off begin
				elementType: ElementType.CHECKBOX,
				// % protected region % [Set display element type for allow read here] end
				// % protected region % [Set isSensitive for allow read here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive for allow read here] end
				// % protected region % [Set readonly for allow read here] off begin
				readOnly: false,
				// % protected region % [Set readonly for allow read here] end
				validators: [
					Validators.required,
					// % protected region % [Add other validators for allow read here] off begin
					// % protected region % [Add other validators for allow read here] end
				],
				// % protected region % [Add any additional model attribute properties for allow read here] off begin
				// % protected region % [Add any additional model attribute properties for allow read here] end
			},
			{
				name: 'allowUpdate',
				// % protected region % [Set displayName for allow update here] off begin
				displayName: 'allow update',
				// % protected region % [Set displayName for allow update here] end
				type: ModelPropertyType.BOOLEAN,
				// % protected region % [Set display element type for allow update here] off begin
				elementType: ElementType.CHECKBOX,
				// % protected region % [Set display element type for allow update here] end
				// % protected region % [Set isSensitive for allow update here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive for allow update here] end
				// % protected region % [Set readonly for allow update here] off begin
				readOnly: false,
				// % protected region % [Set readonly for allow update here] end
				validators: [
					Validators.required,
					// % protected region % [Add other validators for allow update here] off begin
					// % protected region % [Add other validators for allow update here] end
				],
				// % protected region % [Add any additional model attribute properties for allow update here] off begin
				// % protected region % [Add any additional model attribute properties for allow update here] end
			},
			{
				name: 'allowDelete',
				// % protected region % [Set displayName for allow delete here] off begin
				displayName: 'allow delete',
				// % protected region % [Set displayName for allow delete here] end
				type: ModelPropertyType.BOOLEAN,
				// % protected region % [Set display element type for allow delete here] off begin
				elementType: ElementType.CHECKBOX,
				// % protected region % [Set display element type for allow delete here] end
				// % protected region % [Set isSensitive for allow delete here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive for allow delete here] end
				// % protected region % [Set readonly for allow delete here] off begin
				readOnly: false,
				// % protected region % [Set readonly for allow delete here] end
				validators: [
					Validators.required,
					// % protected region % [Add other validators for allow delete here] off begin
					// % protected region % [Add other validators for allow delete here] end
				],
				// % protected region % [Add any additional model attribute properties for allow delete here] off begin
				// % protected region % [Add any additional model attribute properties for allow delete here] end
			},
			// % protected region % [Add any additional class field names here] off begin
			// % protected region % [Add any additional class field names here] end
		]);
	}

	/**
	 * The relations of the entity
	 */
	// TODO Add displayName into the metaModel
	static getRelations(): { [name: string]: ModelRelation } {
		return {
			...super.getRelations(),
			roles: {
				type: ModelRelationType.MANY,
				name: 'rolesIds',
				// % protected region % [Customise your label for roles here] off begin
				label: 'roles',
				// % protected region % [Customise your label for roles here] end
				// % protected region % [Customise your display name for roles here] off begin
				// TODO change implementation to use OrderBy or create new metamodel property DisplayBy
				displayName: 'name',
				// % protected region % [Customise your display name for roles here] end
				validators: [
					// % protected region % [Add other validators for roles here] off begin
					// % protected region % [Add other validators for roles here] end
				],
				// % protected region % [Add any additional field for relation roles here] off begin
				// % protected region % [Add any additional field for relation roles here] end
			},
		};
	}

	/**
	 * Convert the form group to the query conditions
	 * @param {FormGroup} formGroup
	 * @return {Where[]}
	 */
	// TODO refactor this function to be more generic
	static convertFilterToCondition(formGroup: FormGroup): Where[][] {
		let conditions: Where[][] = [];

		Object.keys(formGroup.value).forEach((key) => {
			switch (key) {
				case 'created':
					const created = formGroup.value[key];
					// is the range of date
					if (created instanceof Array) {
						conditions.push([
							{
								path: key,
								operation: QueryOperation.GREATER_THAN_OR_EQUAL,
								value: created[0]
							}
						]);
						conditions.push([
							{
								path: key,
								operation: QueryOperation.LESS_THAN_OR_EQUAL,
								value: created[1]
							}
						]);
					}
			}
		});

		return conditions;
	}

	/**
	 * Convert a nested JSON object into an array of flatten objects.
	 * TODO put in a separate file to avoid circular dependencies
	 */
	static deepParse(data: string | { [K in keyof PrivilegeModel]?: PrivilegeModel[K] }, currentModel?): AbstractModel[] {
		if (currentModel == null) {
			currentModel = new PrivilegeModel(data);
		}

		let returned: AbstractModel[] = [currentModel];
		const json = typeof data === 'string' ? JSON.parse(data) : data;

		// Incoming many to many
		if (json.roles) {
			currentModel.rolesIds = json.roles.map(model => model.id);
			returned = _.union(returned, _.flatten(json.roles.map(model => RoleModel.deepParse(model))));
		}

		// % protected region % [Customise your deep parse before return here] off begin
		// % protected region % [Customise your deep parse before return here] end

		return returned;
	}

	constructor(data?: string | { [K in keyof PrivilegeModel]?: PrivilegeModel[K] }) {
		super(data);

		if (data) {
			const json = typeof data === 'string' ? JSON.parse(data) as { [K in keyof PrivilegeModel]?: PrivilegeModel[K] } : data;
			this.name = json.name;
			this.targetEntity = json.targetEntity;
			this.allowCreate = json.allowCreate;
			this.allowRead = json.allowRead;
			this.allowUpdate = json.allowUpdate;
			this.allowDelete = json.allowDelete;
			this.rolesIds = json.rolesIds;
			// % protected region % [Add any additional logic here after set the data] off begin
			// % protected region % [Add any additional logic here after set the data] end
		}

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	toJSON() {
		return {
			...super.toJSON(),
			name: this.name,
			targetEntity: this.targetEntity,
			allowCreate: this.allowCreate,
			allowRead: this.allowRead,
			allowUpdate: this.allowUpdate,
			allowDelete: this.allowDelete,
			rolesIds: this.rolesIds,
			// % protected region % [Add any additional logic here to json] off begin
			// % protected region % [Add any additional logic here to json] end
		};
	}

	/**
	 * @inheritDoc
	 */
	difference(other: AbstractModel): any {
		if (!(other instanceof PrivilegeModel)) {
			return {};
		}

		const diff = {};

		for (const key of _.keys(this)) {
			const thisValue = this[key];
			const otherValue = other[key];

			// Handle dates differently
			if (thisValue instanceof Date) {
				let thisDate = (thisValue) ? thisValue.getTime() : null;
				let otherDate = (otherValue) ? otherValue.getTime() : null;

				if (thisDate !== otherDate) {
					diff[key] = thisValue;
				}
			} else if (thisValue !== otherValue) {
				diff[key] = thisValue;
			}
		}

		return _.omit(diff, [
			'created',
			'modified',
			'rolesIds',
			// % protected region % [Add any other fields to omit here] off begin
			// % protected region % [Add any other fields to omit here] end
		]);
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
