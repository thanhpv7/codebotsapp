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
import {CleanEnum, cleanEnumArray} from '../../enums/clean.enum';
import {FishModel} from '../fish/fish.model';
import * as _ from 'lodash';
import {QueryOperation, Where} from '../../lib/services/http/interfaces';
import {ElementType} from '../../lib/components/abstract.input.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * POJO model class used to store information related to the entity.
 */
export class TankModel extends AbstractModel {
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

	readonly className = 'TankModel';

	/**
	 * Default value to be displayed in dropdown etc
	 */
	get valueToDisplay(): string {
		// % protected region % [Change displayName here if needed] off begin
		return TankModel.displayAttributes.map((attr) => this[attr]).join(' ');
		// % protected region % [Change displayName here if needed] end
	}

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=2, example=Sally}.
	 */
	name: string;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=3, example=1.41}.
	 */
	width: number;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=4, example=1.41}.
	 */
	length: number;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=5, example=1.41}.
	 */
	height: number;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, dataType = "string", position=6, example=Timestamp}.
	 */
	lastCleaned: Date;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=7, example=Sally}.
	 */
	clean: CleanEnum;

	fishTankIds: string[] = [];

	static modelPropGroups: { [s: string]: Group } = {
		// % protected region % [Add groups for the entity here] off begin
		// % protected region % [Add groups for the entity here] end
	};

	modelPropGroups: { [s: string]: Group } = TankModel.modelPropGroups;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	getPropDisplayNames(): { [s: string]: ModelProperty } {
		const returned = {};
		TankModel.getProps().map(prop => returned[prop.name] = prop);
		return returned;
	}

	static getProps(): ModelProperty[] {
		return super.getProps().concat([
			{
				name: 'name',
				// % protected region % [Set displayName for Name here] off begin
				displayName: 'Name',
				// % protected region % [Set displayName for Name here] end
				type: ModelPropertyType.STRING,
				// % protected region % [Set display element type for Name here] off begin
				elementType: ElementType.INPUT,
				// % protected region % [Set display element type for Name here] end
				// % protected region % [Set isSensitive for Name here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive for Name here] end
				// % protected region % [Set readonly for Name here] off begin
				readOnly: false,
				// % protected region % [Set readonly for Name here] end
				validators: [
					Validators.required,
					// % protected region % [Add other validators for Name here] off begin
					// % protected region % [Add other validators for Name here] end
				],
				// % protected region % [Add any additional model attribute properties for Name here] off begin
				// % protected region % [Add any additional model attribute properties for Name here] end
			},
			{
				name: 'width',
				// % protected region % [Set displayName for Width here] off begin
				displayName: 'Width',
				// % protected region % [Set displayName for Width here] end
				type: ModelPropertyType.NUMBER,
				// % protected region % [Set display element type for Width here] off begin
				elementType: ElementType.NUMBER,
				// % protected region % [Set display element type for Width here] end
				// % protected region % [Set isSensitive for Width here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive for Width here] end
				// % protected region % [Set readonly for Width here] off begin
				readOnly: false,
				// % protected region % [Set readonly for Width here] end
				validators: [
					// % protected region % [Add other validators for Width here] off begin
					// % protected region % [Add other validators for Width here] end
				],
				// % protected region % [Add any additional model attribute properties for Width here] off begin
				// % protected region % [Add any additional model attribute properties for Width here] end
			},
			{
				name: 'length',
				// % protected region % [Set displayName for Length here] off begin
				displayName: 'Length',
				// % protected region % [Set displayName for Length here] end
				type: ModelPropertyType.NUMBER,
				// % protected region % [Set display element type for Length here] off begin
				elementType: ElementType.NUMBER,
				// % protected region % [Set display element type for Length here] end
				// % protected region % [Set isSensitive for Length here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive for Length here] end
				// % protected region % [Set readonly for Length here] off begin
				readOnly: false,
				// % protected region % [Set readonly for Length here] end
				validators: [
					// % protected region % [Add other validators for Length here] off begin
					// % protected region % [Add other validators for Length here] end
				],
				// % protected region % [Add any additional model attribute properties for Length here] off begin
				// % protected region % [Add any additional model attribute properties for Length here] end
			},
			{
				name: 'height',
				// % protected region % [Set displayName for Height here] off begin
				displayName: 'Height',
				// % protected region % [Set displayName for Height here] end
				type: ModelPropertyType.NUMBER,
				// % protected region % [Set display element type for Height here] off begin
				elementType: ElementType.NUMBER,
				// % protected region % [Set display element type for Height here] end
				// % protected region % [Set isSensitive for Height here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive for Height here] end
				// % protected region % [Set readonly for Height here] off begin
				readOnly: false,
				// % protected region % [Set readonly for Height here] end
				validators: [
					// % protected region % [Add other validators for Height here] off begin
					// % protected region % [Add other validators for Height here] end
				],
				// % protected region % [Add any additional model attribute properties for Height here] off begin
				// % protected region % [Add any additional model attribute properties for Height here] end
			},
			{
				name: 'lastCleaned',
				// % protected region % [Set displayName for Last Cleaned here] off begin
				displayName: 'Last Cleaned',
				// % protected region % [Set displayName for Last Cleaned here] end
				type: ModelPropertyType.DATE,
				// % protected region % [Set display element type for Last Cleaned here] off begin
				elementType: ElementType.DATETIME,
				// % protected region % [Set display element type for Last Cleaned here] end
				// % protected region % [Set isSensitive for Last Cleaned here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive for Last Cleaned here] end
				// % protected region % [Set readonly for Last Cleaned here] off begin
				readOnly: false,
				// % protected region % [Set readonly for Last Cleaned here] end
				validators: [
					// % protected region % [Add other validators for Last Cleaned here] off begin
					// % protected region % [Add other validators for Last Cleaned here] end
				],
				// % protected region % [Add any additional model attribute properties for Last Cleaned here] off begin
				// % protected region % [Add any additional model attribute properties for Last Cleaned here] end
			},
			{
				name: 'clean',
				// % protected region % [Set displayName for Clean here] off begin
				displayName: 'Clean',
				// % protected region % [Set displayName for Clean here] end
				type: ModelPropertyType.ENUM,
				enumLiterals: cleanEnumArray,
				// TODO maybe consider to change to the enum
				// % protected region % [Set display element type for Clean here] off begin
				elementType: ElementType.ENUM,
				// % protected region % [Set display element type for Clean here] end
				// % protected region % [Set isSensitive for Clean here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive for Clean here] end
				// % protected region % [Set readonly for Clean here] off begin
				readOnly: false,
				// % protected region % [Set readonly for Clean here] end
				validators: [
					// % protected region % [Add other validators for Clean here] off begin
					// % protected region % [Add other validators for Clean here] end
				],
				// % protected region % [Add any additional model attribute properties for Clean here] off begin
				// % protected region % [Add any additional model attribute properties for Clean here] end
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
			fishTank: {
				type: ModelRelationType.MANY,
				name: 'fishTankIds',
				// % protected region % [Customise your 1-1 or 1-M label for Fish Tank here] off begin
				label: 'Fish Tank',
				// % protected region % [Customise your 1-1 or 1-M label for Fish Tank here] end
				// % protected region % [Customise your display name for Fish Tank here] off begin
				// TODO change implementation to use OrderBy or create new metamodel property DisplayBy
				displayName: 'name',
				// % protected region % [Customise your display name for Fish Tank here] end
				validators: [
					// % protected region % [Add other validators for Fish Tank here] off begin
					// % protected region % [Add other validators for Fish Tank here] end
				],
				// % protected region % [Add any additional field for relation Fish Tank here] off begin
				// % protected region % [Add any additional field for relation Fish Tank here] end
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
				case 'name':
					break;
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
	static deepParse(data: string | { [K in keyof TankModel]?: TankModel[K] }, currentModel?): AbstractModel[] {
		if (currentModel == null) {
			currentModel = new TankModel(data);
		}

		let returned: AbstractModel[] = [currentModel];
		const json = typeof data === 'string' ? JSON.parse(data) : data;

		// Outgoing one to many
		if (json.fishTank) {
			currentModel.fishTankIds = json.fishTank.map(model => model.id);
			returned = _.union(returned, _.flatten(json.fishTank.map(model => FishModel.deepParse(model))));
		}

		// % protected region % [Customise your deep parse before return here] off begin
		// % protected region % [Customise your deep parse before return here] end

		return returned;
	}

	constructor(data?: string | { [K in keyof TankModel]?: TankModel[K] }) {
		super(data);

		if (data) {
			const json = typeof data === 'string' ? JSON.parse(data) as { [K in keyof TankModel]?: TankModel[K] } : data;
			this.name = json.name;
			this.width = json.width;
			this.length = json.length;
			this.height = json.height;
			if (json.lastCleaned) {
				this.lastCleaned = new Date(json.lastCleaned);
			} else {
				// If no value is present, it can both be partial model or empty value. Regardless simply reassigned it
				// with the original empty value (null) or lack thereof (undefined).
				this.lastCleaned = json.lastCleaned;
			}
			this.clean = json.clean;
			this.clean = json.clean;
			this.fishTankIds = json.fishTankIds;
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
			width: this.width,
			length: this.length,
			height: this.height,
			lastCleaned: this.lastCleaned,
			clean: this.clean,
			fishTankIds: this.fishTankIds,
			// % protected region % [Add any additional logic here to json] off begin
			// % protected region % [Add any additional logic here to json] end
		};
	}

	/**
	 * @inheritDoc
	 */
	difference(other: AbstractModel): any {
		if (!(other instanceof TankModel)) {
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
			'fishTankIds',
			// % protected region % [Add any other fields to omit here] off begin
			// % protected region % [Add any other fields to omit here] end
		]);
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
