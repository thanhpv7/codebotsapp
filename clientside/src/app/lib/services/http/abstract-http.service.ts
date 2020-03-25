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

import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Observable} from 'rxjs';
import {AbstractModel} from '../../models/abstract.model';
import {AbstractModelAudit} from '../../../models/model.state';
import {AuthenticationService} from '../authentication/authentication.service';
import {QueryParams, PassableStateConfig, Expand} from './interfaces';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Abstract service class used to define default HTTP operations for CRUD. By default any subclasses of this class will
 * have these operations implemented by default. User can choose to add custom logic into it if required.
 */
export abstract class AbstractHttpService<E extends AbstractModel, T extends AbstractModelAudit<E>> {

	protected constructor(
		protected apollo: Apollo,
		protected router: Router,
		protected authService: AuthenticationService,
		protected toastrService: ToastrService,
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	protected fragments(className: string) {
		return {
			properties: gql`
				fragment ${className}BaseProperties on ${className} {
					id
					created
					modified
				}
			`,
			// % protected region % [Add any additional fragments here] off begin
			// % protected region % [Add any additional fragments here] end
		};
	}

	/**
	 * Transfer the expands to graphql fragment
	 * Cannot use the fragment because the fragment could not be empty
	 * TODO change to fragment when graphql allows empty fragment
	 */
	protected getExpands(expands: Expand[]) {
		if (expands && expands.length > 0) {
			return `
				${expands.map(expand => {
						return `${expand.name} {
							${expand.fields.map(field => `${field}\n`)}
						}\n`;
					})
				}
			`;
		} else {
			return '';
		}
	}

	/**
	 * Return the number of records in the database.
	 *
	 * @return the number of records in the database
	 */
	abstract count(): Observable<PassableStateConfig<E>>;

	/**
	 * Return all of the entities.
	 *
	 * @return all of the entities
	 */
	abstract getAll(): Observable<PassableStateConfig<E>>;

	/**
	 * Get the entities by the query parameters
	 *
	 * @param query the parameters to filter the query
	 * @return The list of the entities
	 */
	abstract getWithQuery(query: QueryParams): Observable<PassableStateConfig<E>>;

	/**
	 * Get the last entities by the query parameters
	 *
	 * @param query the parameters to filter the query
	 * @return The list of the entities
	 */
	abstract getLastWithQuery(query: QueryParams): Observable<PassableStateConfig<E>>;

	/**
	 * Given an ID string, return the entity whose ID matches the string.
	 *
	 * @param id the ID string of the entity to be fetched
	 * @return the entity whose ID matches the given ID string
	 */
	abstract get(id: string, queryParams?: QueryParams): Observable<PassableStateConfig<E>>;

	/**
	 * Given an entity, create the entity in the backend and return the current page according to the query params.
	 *
	 * @param entity      the entity to be created in the backend
	 * @return the created model
	 */
	abstract create(entity: E, queryParams?: QueryParams): Observable<PassableStateConfig<E>>;

	/**
	 * Given entities, create all the entity in the backend and return the current page according to the query params.
	 */
	abstract createAll(entities: E[], queryParams?: QueryParams): Observable<PassableStateConfig<E>>;

	/**
	 * Given an entity, update the entity in the backend and return the current page according to the query params.
	 *
	 * @param entity      the entity to be updated in the backend
	 * @return the updated model
	 */
	abstract update(entity: E, queryParams?: QueryParams): Observable<PassableStateConfig<E>>;

	/**
	 * Given entities, update all the entity in the backend and return the current page according to the query params.
	 */
	abstract updateAll(entities: E[], queryParams?: QueryParams): Observable<PassableStateConfig<E>>;

	/**
	 * Given an entity, delete the entity in the backend and return the current page according to the query params.
	 *
	 * @param id          the ID of the entity to be deleted in the backend
	 * @return the deleted ID
	 */
	abstract delete(id: string): Observable<PassableStateConfig<E>>;

	/**
	 * Given an array of IDs, delete the entities whose IDs match the given ones.
	 *
	 * @param ids the ids of the entities to be deleted
	 * @return the deleted IDs
	 */
	abstract deleteAll(ids: string[]): Observable<PassableStateConfig<E>>;

	/**
	 * Return a list of audits against the entity.
	 *
	 * @return a list of audits against the entity
	 */
	abstract getAudits(): Observable<T[]>;
}
