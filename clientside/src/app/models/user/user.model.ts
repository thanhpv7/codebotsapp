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
import {GenderEnum, genderEnumArray} from '../../enums/gender.enum';
import {RoleModel} from '../role/role.model';
import * as _ from 'lodash';
import {QueryOperation, Where} from '../../lib/services/http/interfaces';
import {ElementType} from '../../lib/components/abstract.input.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * POJO model class used to store information related to the entity.
 */
export abstract class UserModel extends AbstractModel {

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=2, example=Sally}.
	 */
	firstName: string;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=3, example=Sally}.
	 */
	lastName: string;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=4, example=Sally}.
	 */
	username: string;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=5, example=Sally}.
	 */
	password: string;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=7, example=Sally}.
	 */
	email: string;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=8, example=true}.
	 */
	isArchived: boolean = false;

	/**
	 * {docoDescription=TODO: Get doco description, springFoxDataTypeProperty=, position=6, example=Sally}.
	 */
	gender: GenderEnum;

	rolesIds: string[] = [];

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	static getProps(): ModelProperty[] {
		return super.getProps().concat([
			{
				name: 'firstName',
				displayName: 'first name',
				type: ModelPropertyType.STRING,
				// % protected region % [Set display element type for first name here] off begin
				elementType: ElementType.INPUT,
				// % protected region % [Set display element type for first name here] end
				// % protected region % [Set isSensitive type for first name here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive type for first name here] end
			},
			{
				name: 'lastName',
				displayName: 'last name',
				type: ModelPropertyType.STRING,
				// % protected region % [Set display element type for last name here] off begin
				elementType: ElementType.INPUT,
				// % protected region % [Set display element type for last name here] end
				// % protected region % [Set isSensitive type for last name here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive type for last name here] end
			},
			{
				name: 'username',
				displayName: 'username',
				type: ModelPropertyType.STRING,
				// % protected region % [Set display element type for username here] off begin
				elementType: ElementType.INPUT,
				// % protected region % [Set display element type for username here] end
				// % protected region % [Set isSensitive type for username here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive type for username here] end
			},
			{
				name: 'password',
				displayName: 'password',
				type: ModelPropertyType.STRING,
				// % protected region % [Set display element type for password here] off begin
				elementType: ElementType.PASSWORD,
				// % protected region % [Set display element type for password here] end
				// % protected region % [Set isSensitive type for password here] off begin
				isSensitive: true,
				// % protected region % [Set isSensitive type for password here] end
			},
			{
				name: 'gender',
				displayName: 'Gender',
				type: ModelPropertyType.ENUM,
				enumLiterals: genderEnumArray,
				// TODO maybe consider to change to the enum
				// % protected region % [Set display element type for Gender here] off begin
				elementType: ElementType.ENUM,
				// % protected region % [Set display element type for Gender here] end
				// % protected region % [Set isSensitive type for Gender here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive type for Gender here] end
			},
			{
				name: 'email',
				displayName: 'Email',
				type: ModelPropertyType.STRING,
				// % protected region % [Set display element type for Email here] off begin
				elementType: ElementType.INPUT,
				// % protected region % [Set display element type for Email here] end
				// % protected region % [Set isSensitive type for Email here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive type for Email here] end
			},
			{
				name: 'isArchived',
				displayName: 'Is Archived',
				type: ModelPropertyType.BOOLEAN,
				// % protected region % [Set display element type for Is Archived here] off begin
				elementType: ElementType.CHECKBOX,
				// % protected region % [Set display element type for Is Archived here] end
				// % protected region % [Set isSensitive type for Is Archived here] off begin
				isSensitive: false,
				// % protected region % [Set isSensitive type for Is Archived here] end
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
				// % protected region % [Customise your 1-1 or 1-M label for roles here] off begin
				label: 'roles',
				// % protected region % [Customise your 1-1 or 1-M label for roles here] end
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
	 * Convert a nested JSON object into an array of flatten objects.
	 * TODO put in a separate file to avoid circular dependencies
	 */
	static deepParse(data: string | { [K in keyof UserModel]?: UserModel[K] }, currentModel?): AbstractModel[] {
		let returned: AbstractModel[] = [currentModel];
		const json = typeof data === 'string' ? JSON.parse(data) : data;

		// Outgoing many to many
		if (json.roles) {
			currentModel.rolesIds = json.roles.map(model => model.id);
			returned = _.union(returned, _.flatten(json.roles.map(model => RoleModel.deepParse(model))));
		}

		// % protected region % [Customise your deep parse before return here] off begin
		// % protected region % [Customise your deep parse before return here] end

		return returned;
	}

	protected constructor(data: string | { [K in keyof UserModel]?: UserModel[K] }) {
		super(data);

		if (data) {
			const json = typeof data === 'string' ? JSON.parse(data) as { [K in keyof UserModel]?: UserModel[K] } : data;
			this.firstName = json.firstName;
			this.lastName = json.lastName;
			this.username = json.username;
			this.password = json.password;
			this.gender = json.gender;
			this.email = json.email;
			this.isArchived = json.isArchived;
			this.gender = json.gender;
		}

		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	toJSON() {
		return {
			...super.toJSON(),
			firstName: this.firstName,
			lastName: this.lastName,
			username: this.username,
			password: this.password,
			gender: this.gender,
			email: this.email,
			isArchived: this.isArchived,
			rolesIds: this.rolesIds,
			// % protected region % [Add any additional logic here to json] off begin
			// % protected region % [Add any additional logic here to json] end
		};
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
