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
import {OrderBy, QueryParams} from '../services/http/interfaces';
import {AbstractModel, ModelProperty, ModelRelation} from './abstract.model';
import * as _ from 'lodash';
import {FormControl, FormGroup} from '@angular/forms';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Sort By the OrderBy
 * Pass in an array of OrderBy, and sort with it
 * @param {AbstractModel[]} entities the entities to sort
 * @param {OrderBy[]} orders the array of order, which determine the attributes to order with
 * @return {AbstractModel[]} the sorted entities
 */
export function sortByOrders<T extends AbstractModel>(entities: T[], orders: OrderBy[]): T[] {
	// % protected region % [Add any additional methods here before sorting] off begin
	// % protected region % [Add any additional methods here before sorting] end

	 entities = _.orderBy(entities, orders.map(orderBy => orderBy.path), orders.map(orderBy => orderBy.descending ? 'desc': 'asc'));

	 // % protected region % [Add any additional methods here after sorting] off begin
	 // % protected region % [Add any additional methods here after sorting] end

	 return entities;
}

/**
 * Sort and filter the model collection by the query parameters
 * @param {AbstractModel[]} entities entities to sort and filter
 * @param {QueryParams} queryParams The query parameters object to sort and filter the entities
 * @return {AbstractModel[]} sorted and filtered entities
 */
export function sortAndFilterByQueryParams<T extends AbstractModel>(entities: T[], queryParams: QueryParams): T[] {
	// % protected region % [Add any additional methods here before sorting and filtering] off begin
	// % protected region % [Add any additional methods here before sorting and filtering] end

	entities = sortByOrders(entities, queryParams.orderBy);

	// % protected region % [Add any additional methods here after sorting and filtering] off begin
	// % protected region % [Add any additional methods here after sorting and filtering] end

	return entities;
}

/**
 * Transfer the enum to an aryy of object
 * @param enumType The Enum in the ts
 * @return {{ key: string; value: any }[]}
 */
export function enumToArray(enumType): { key: string, value: any }[] {
	return Object.keys(enumType).map(key => (
		{
			key: key,
			value: enumType[key]
		}
	));
}

/**
 * Create a reactive form based
 * @param modelProperties Properties The properties of the model
 * @param modelRelations modelRelations Relations of the model
 * @param fields Is set, just create hte form for which name is in fields array
 * @return {FormGroup} The form group created form the model
 */
export function createReactiveFormFromModel(
	modelProperties: ModelProperty[],
	modelRelations: { [name: string]: ModelRelation },
	disabled: boolean = false,
	fields ?: string[]): FormGroup {

	const formGroup = new FormGroup({});
	modelProperties
		.filter(prop => fields ? fields.includes(prop.name) : true)
		.forEach(modelProperty => {
			formGroup.addControl(modelProperty.name, new FormControl({
				value: undefined,
				disabled: disabled || modelProperty.readOnly
			}, modelProperty.validators));
		});

	Object.entries(modelRelations)
		.filter(([key, value]) => fields ? fields.includes(value.name) : true)
		.forEach(([key, modelRelation]) => {
			formGroup.addControl(modelRelation.name, new FormControl({
				value: undefined,
				disabled: disabled
			}, modelRelation.validators));
		});

	return formGroup;
}

// % protected region % [Add any additional methods here] off begin
// % protected region % [Add any additional methods here] end