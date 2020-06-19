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
import {BornEnum, bornEnumArray} from '../../enums/born.enum';
import {SpeciesModel} from '../species/species.model';
import {TankModel} from '../tank/tank.model';
import * as _ from 'lodash';
import {QueryOperation, Where} from '../../lib/services/http/interfaces';
import {ElementType} from '../../lib/components/abstract.input.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * POJO model class used to store information related to the entity.
 */
export class FishModel extends AbstractModel {
	/**
	 * The fields which are set as searchable in the entity model
	 * The fields could be used in search in the server side
	 * The fields would be by default used as search in the crud tile.
	 * You could also use this in other tiles for searching.
	 */
	static searchFields: string[] = [
		'name',
		// % protected region % [Add any additional searchable field names here] on begin
		'speciesName',
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

	readonly className = 'FishModel';

	/**
	 * Default value to be displayed in dropdown etc
	 */
	get valueToDisplay(): string {
		// % protected region % [Change displayName here if needed] off begin
		return FishModel.displayAttributes.map((attr) => this[attr]).join(' ');
		// % protected region % [Change displayName here if needed] end
	}

	/**
	 * The fish's name. .
	 */
	name: string;

	/**
	 * The fish's birthday..
	 */
	dateOfBirth: Date;

	/**
	 * Is the fish alive?.
	 */
	alive: boolean = false;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=5, example=Sally}.
	 */
	born: BornEnum;

	speciesId: string;

	tankId: string;

	static modelPropGroups: { [s: string]: Group } = {
		// % protected region % [Add groups for the entity here] off begin
		// % protected region % [Add groups for the entity here] end
	};

	modelPropGroups: { [s: string]: Group } = FishModel.modelPropGroups;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	getPropDisplayNames(): { [s: string]: ModelProperty } {
		const returned = {};
		FishModel.getProps().map(prop => returned[prop.name] = prop);
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
				name: 'dateOfBirth',
				// % protected region % [Set displayName for Date of Birth here] off begin
				displayName: 'Date of Birth',
				// % protected region % [Set displayName for Date of Birth here] end
				type: ModelPropertyType.DATE,
				// % protected region % [Set display element type for Date of Birth here] off begin
				elementType: ElementType.DATETIME,
				// % protected region % [Set display element type for Date of Birth here] end
				// % protected region % [Set isSensitive for Date of Birth here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive for Date of Birth here] end
				// % protected region % [Set readonly for Date of Birth here] off begin
				readOnly: false,
				// % protected region % [Set readonly for Date of Birth here] end
				validators: [
					// % protected region % [Add other validators for Date of Birth here] off begin
					// % protected region % [Add other validators for Date of Birth here] end
				],
				// % protected region % [Add any additional model attribute properties for Date of Birth here] off begin
				// % protected region % [Add any additional model attribute properties for Date of Birth here] end
			},
			{
				name: 'alive',
				// % protected region % [Set displayName for Alive here] off begin
				displayName: 'Alive',
				// % protected region % [Set displayName for Alive here] end
				type: ModelPropertyType.BOOLEAN,
				// % protected region % [Set display element type for Alive here] off begin
				elementType: ElementType.CHECKBOX,
				// % protected region % [Set display element type for Alive here] end
				// % protected region % [Set isSensitive for Alive here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive for Alive here] end
				// % protected region % [Set readonly for Alive here] off begin
				readOnly: false,
				// % protected region % [Set readonly for Alive here] end
				validators: [
					// % protected region % [Add other validators for Alive here] off begin
					// % protected region % [Add other validators for Alive here] end
				],
				// % protected region % [Add any additional model attribute properties for Alive here] off begin
				// % protected region % [Add any additional model attribute properties for Alive here] end
			},
			{
				name: 'born',
				// % protected region % [Set displayName for Born here] off begin
				displayName: 'Born',
				// % protected region % [Set displayName for Born here] end
				type: ModelPropertyType.ENUM,
				enumLiterals: bornEnumArray,
				// TODO maybe consider to change to the enum
				// % protected region % [Set display element type for Born here] off begin
				elementType: ElementType.ENUM,
				// % protected region % [Set display element type for Born here] end
				// % protected region % [Set isSensitive for Born here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive for Born here] end
				// % protected region % [Set readonly for Born here] off begin
				readOnly: false,
				// % protected region % [Set readonly for Born here] end
				validators: [
					// % protected region % [Add other validators for Born here] off begin
					// % protected region % [Add other validators for Born here] end
				],
				// % protected region % [Add any additional model attribute properties for Born here] off begin
				// % protected region % [Add any additional model attribute properties for Born here] end
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
			species: {
				type: ModelRelationType.ONE,
				name: 'speciesId',
				// % protected region % [Customise your label for Species here] off begin
				label: 'Species',
				// % protected region % [Customise your label for Species here] end
				// % protected region % [Customise your display name for Species here] off begin
				// TODO change implementation to use OrderBy or create new metamodel property DisplayBy
				displayName: 'name',
				// % protected region % [Customise your display name for Species here] end
				validators: [
					// % protected region % [Add other validators for Species here] off begin
					// % protected region % [Add other validators for Species here] end
				],
				// % protected region % [Add any additional field for relation Species here] off begin
				// % protected region % [Add any additional field for relation Species here] end
			},
			tank: {
				type: ModelRelationType.ONE,
				name: 'tankId',
				// % protected region % [Customise your label for Tank here] off begin
				label: 'Tank',
				// % protected region % [Customise your label for Tank here] end
				// % protected region % [Customise your display name for Tank here] off begin
				// TODO change implementation to use OrderBy or create new metamodel property DisplayBy
				displayName: 'name',
				// % protected region % [Customise your display name for Tank here] end
				validators: [
					// % protected region % [Add other validators for Tank here] off begin
					// % protected region % [Add other validators for Tank here] end
				],
				// % protected region % [Add any additional field for relation Tank here] off begin
				// % protected region % [Add any additional field for relation Tank here] end
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
	static deepParse(data: string | { [K in keyof FishModel]?: FishModel[K] }, currentModel?): AbstractModel[] {
		if (currentModel == null) {
			currentModel = new FishModel(data);
		}

		let returned: AbstractModel[] = [currentModel];
		const json = typeof data === 'string' ? JSON.parse(data) : data;

		// Incoming one to many
		if (json.species) {
			currentModel.speciesId = json.species.id;
			returned = _.union(returned, SpeciesModel.deepParse(json.species));
		}

		// Incoming one to many
		if (json.tank) {
			currentModel.tankId = json.tank.id;
			returned = _.union(returned, TankModel.deepParse(json.tank));
		}


		// % protected region % [Customise your deep parse before return here] off begin
		// % protected region % [Customise your deep parse before return here] end

		return returned;
	}

	constructor(data?: string | { [K in keyof FishModel]?: FishModel[K] }) {
		super(data);

		if (data) {
			const json = typeof data === 'string' ? JSON.parse(data) as { [K in keyof FishModel]?: FishModel[K] } : data;
			this.name = json.name;
			if (json.dateOfBirth) {
				this.dateOfBirth = new Date(json.dateOfBirth);
			} else {
				// If no value is present, it can both be partial model or empty value. Regardless simply reassigned it
				// with the original empty value (null) or lack thereof (undefined).
				this.dateOfBirth = json.dateOfBirth;
			}
			this.alive = json.alive;
			this.born = json.born;
			this.born = json.born;
			this.speciesId = json.speciesId;
			this.tankId = json.tankId;
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
			dateOfBirth: this.dateOfBirth,
			alive: this.alive,
			born: this.born,
			speciesId: this.speciesId,
			tankId: this.tankId,
			// % protected region % [Add any additional logic here to json] off begin
			// % protected region % [Add any additional logic here to json] end
		};
	}

	/**
	 * @inheritDoc
	 */
	difference(other: AbstractModel): any {
		if (!(other instanceof FishModel)) {
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
			'speciesIds',
			'tankIds',
			// % protected region % [Add any other fields to omit here] off begin
			// % protected region % [Add any other fields to omit here] end
		]);
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
