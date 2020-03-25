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
import {ValidatorFn} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {PassableStateConfig} from '../services/http/interfaces';
import {ElementType} from '../components/abstract.input.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

export interface Group {
	id: string,
	displayName: string
}

/**
 * Type of the properties, depends on the type of the attribute in the model
 */
export enum ModelPropertyType {
	STRING = 'string',
	DATE = 'date',
	DATETIME = 'datetime',
	TIME = 'time',
	BOOLEAN = 'boolean',
	NUMBER = 'number',
	ENUM = 'enum',
	FILE = 'file',
	OBSERVABLE = 'observable'
}

/**
 * Interface used to pass information about a model's properties and their display names around.
 */
export interface ModelProperty {
	name: string;
	displayName: string;
	type: ModelPropertyType;
	elementType?: ElementType;
	enumLiterals?: { key: string, value: any }[];
	// Whether the data is sensitive, which could not be fetched from db, and would be show as password fields
	isSensitive?: boolean;
	// Used to control whether to hide element
	// If true, the element would be hide from the view
	hideElement?: boolean;
	readOnly?: boolean;
	validators?: ValidatorFn[];
	group?: { id: string, displayName: string };
	index?: number;
	[s: string]: any;
	// % protected region % [Add any additional model property fields here] off begin
	// % protected region % [Add any additional model property fields here] end
}

export enum ModelRelationType {
	ONE = 'One',
	MANY = 'Many'
}

/**
 * Interface used to pass information about a model's references
 */
export interface ModelRelation {
	// Name of the Relation to bind with, usually is the id
	name: string;
	// Label to display in the input component, usually the Name or OppositeName of the references
	label: string;
	// The field of the model to display in the component
	displayName: string;
	type: ModelRelationType;
	// Validators to be used in the form
	validators?: ValidatorFn[];
	// Function for the dropdown to apply the server side searching
	searchFunction?: Subject<string>;
	// Observable to do the server side fetching
	collection?: Observable<any[]>;
	// Collection state of one instance of relations. Used in searching
	stateConfig?: PassableStateConfig<any>;
	group?: { id: string, displayName: string };
	// Whether the data is sensitive, which could not be fetched from db, and would be show as password fields
	isSensitive?: boolean;
	// Used to control whether to hide element by from the view
	hideElement?: boolean;
	index?: number;
	[s: string]: any;
	// % protected region % [Add any additional model relation fields here] off begin
	// % protected region % [Add any additional model relation fields here] end
}

/**
 * The base class of all models. This class exists to store common attributes/properties that are shared across all
 * sub-classes. It also overrides `expandWithDepth` to allow recursive traversal of the object tree.
 */
export abstract class AbstractModel {
	className: string;

	/**
	 * Id of this models. Also maps to the primary key inside the database.
	 */
	id: string;

	/**
	 * When this entity was created.
	 */
	created: Date = new Date();

	/**
	 * When this entity was modified.
	 */
	modified: Date = new Date();

	modelPropGroups: { [k: string]: Group } = {};

	/**
	 * Attributes to be shown in value to display
	 */
	static displayAttributes: string[] = [
		// % protected region % [Change displayAttributes here if needed] off begin
		'id',
		// % protected region % [Change displayAttributes here if needed] end
	];

	/**
	 * Default value to be displayed in dropdown etc
	 */
	get valueToDisplay(): string {
		// % protected region % [Change displayName here if needed] off begin
		return AbstractModel.displayAttributes.map((attr) => this[attr]).join(' ');
		// % protected region % [Change displayName here if needed] end
	}

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	/**
	 * Return all of the properties that this class has.
	 */
	static getProps(): ModelProperty[] {
		return [
			{
				name: 'id',
				displayName: 'ID',
				type: ModelPropertyType.STRING,
				// % protected region % [Add any additional configuration for this model ID property here] off begin
				// % protected region % [Add any additional configuration for this model ID property here] end
			},
			{
				name: 'created',
				displayName: 'Created Date',
				type: ModelPropertyType.DATETIME,
				// % protected region % [Add any additional configuration for this model Created property here] off begin
				// % protected region % [Add any additional configuration for this model Created property here] end
			},
			{
				name: 'modified',
				displayName: 'Modified Date',
				type: ModelPropertyType.DATETIME,
				// % protected region % [Add any additional configuration for this model Modified property here] off begin
				// % protected region % [Add any additional configuration for this model Modified property here] end
			},
			// % protected region % [Add any additional default model properties here] off begin
			// % protected region % [Add any additional default model properties here] end
		];
	}

	static getRelations(): { [name: string]: ModelRelation } {
		return {
			// % protected region % [Add any additional relations here] off begin
			// % protected region % [Add any additional relations here] end
		};
	}

	// % protected region % [Add any additional static class methods here] off begin
	// % protected region % [Add any additional static class methods here] end

	protected constructor(data?: string | AbstractModel | { [s: string]: any }) {
		if (data) {
			const json = typeof data === 'string' ? JSON.parse(data) : data;
			this.id = json.id;
			this.created = json.created ? new Date(json.created) : new Date();
			this.modified = json.modified ? new Date(json.modified) : new Date();

			// % protected region % [Add any additional assignments here] off begin
			// % protected region % [Add any additional assignments here] end
		}

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	toJSON() {
		return {
			id: this.id,
			created: this.created,
			modified: this.modified
		};
	}

	/**
	 * Given an entity, return the difference between it and this model.
	 *
	 * @param other the other entity to be compared against this one
	 * @return a JSON object containing the differences between the given entity and this one.
	 */
	abstract difference(other: AbstractModel): any;

	/**
	 * Get the properties and their details for the given entity.
	 */
	abstract getPropDisplayNames(): { [s: string]: ModelProperty };

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
