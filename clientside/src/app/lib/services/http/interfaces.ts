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

import {AbstractModel} from '../../models/abstract.model';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * The OrderBy parameter used in the graphql query
 */
export interface OrderBy {
	/**
	 * The path is the property name used in the sorting
	 */
	path: string;

	/**
	 * Whether order by descending or ascending
	 */
	descending: boolean;
}

/**
 * Available operations types can be used in the query conditions
 */
export enum QueryOperation {
	EQUAL = 'equal',
	NOT_EQUAL = 'notEqual',
	GREATER_THAN = 'greaterThan',
	GREATER_THAN_OR_EQUAL = 'greaterThanOrEqual',
	LESS_THAN = 'lessThan',
	LESS_THAN_OR_EQUAL = 'lessThanOrEqual',
	CONTAINS = 'contains',
	STARTS_WITH = 'startsWith',
	ENDS_WITH = 'endWith',
	IN = 'in',
	NOT_IN = 'notIn',
	LIKE = 'like'
}

/**
 * The Where parameter used in the graphql query
 * This represents the query conditions to be used
 */
export interface Where {
	/**
	 * The path is the property name used in the sorting
	 */
	path: string;

	/**
	 * The operation of the query
	 */
	operation: string;

	/**
	 * The value to be used in the query
	 */
	value: string;
}

/**
 * Expand parameter is used in the graphql query
 * Represents the references want to fetch.
 * This would add extra fields of associated model in the graphql
 */
export interface Expand {
	/**
	 * The name of the reference
	 */
	name: string;

	/**
	 * The fields want to fetch in the associated model
	 * e.g id, name
	 */
	fields: string[];
}

/**
 * Parameters used in the GraphQL query
 */
export interface QueryParams {
	/**
	 * The index of the page
	 */
	pageIndex?: number;

	/**
	 * Number of items in one page
	 */
	pageSize?: number;

	/**
	 * The order in the query
	 */
	orderBy?: OrderBy[];

	/**
	 * The where statement in the graphql statement
	 */
	where?: Where[][];

	/**
	 * Associated models used in the graphql
	 */
	expands?: Expand[];
}

/**
 * Object used to aggregate all of the info relevant to a specific entity type to be passed around the application.
 */
export interface PassableStateConfig<E extends AbstractModel> {
	totalCount?: number;
	targetModelId?: string;
	targetModelIds?: string[];
	targetModel?: E;
	targetModels?: E[];
	collectionId?: string;
	queryParams?: QueryParams;
	[s: string]: any;
}

// % protected region % [Add any additional interfaces here] off begin
// % protected region % [Add any additional interfaces here] end
