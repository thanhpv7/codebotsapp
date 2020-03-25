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

import {ActivatedRouteSnapshot, convertToParamMap, Data, ParamMap, Params, Route, UrlSegment} from '@angular/router';
import {Observable, ReplaySubject} from 'rxjs';
import {Type} from '@angular/core';

// % protected region % [Add any inital imports here] off begin
// % protected region % [Add any inital imports here] end

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStub {
	// Use a ReplaySubject to share previous values with subscribers
	// and pump new values into the `paramMap` observable
	private subject = new ReplaySubject<ParamMap>();

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	constructor(
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
		initialParams?: Params
	) {
		this.setParamMap(initialParams);
		// % protected region % [Add any additional logic for constructor here] off begin
		// % protected region % [Add any additional logic for constructor here] end
	}

	/** An observable of the URL segments matched by this route. */
	url: Observable<UrlSegment[]>;
	/** An observable of the matrix parameters scoped to this route. */
	params: Observable<Params>;
	/** An observable of the query parameters shared by all the routes. */
	queryParams: Observable<Params>;
	/** An observable of the URL fragment shared by all the routes. */
	fragment: Observable<string>;
	/** An observable of the static and resolved data of this route. */
	data: Observable<Data>;
	/** The outlet name of the route, a constant. */
	outlet: string;
	/** The component of the route, a constant. */
	component: Type<any> | string | null;
	/** The current snapshot of this route */
	snapshot: ActivatedRouteSnapshot;
	/** The configuration used to match this route. */
	readonly routeConfig: Route | null;
	/** The root of the router state. */
	readonly root: ActivatedRouteStub;
	/** The parent of this route in the router state tree. */
	parent: ActivatedRouteStub | null;
	/** The first child of this route in the router state tree. */
	readonly firstChild: ActivatedRouteStub | null;
	/** The children of this route in the router state tree. */
	readonly children: ActivatedRouteStub[];
	/** The path from the root of the router state tree to this route. */
	readonly pathFromRoot: ActivatedRouteStub[];
	/** An Observable that contains a map of the required and optional parameters
	 * specific to the route.
	 * The map supports retrieving single and multiple values from the same parameter. */
	/** The mock paramMap observable */
	readonly paramMap = this.subject.asObservable();
	/**
	 * An Observable that contains a map of the query parameters available to all routes.
	 * The map supports retrieving single and multiple values from the query parameter.
	 */
	readonly queryParamMap: Observable<ParamMap>;

	/** Set the paramMap observables's next value */
	setParamMap(params?: Params) {
		this.subject.next(convertToParamMap(params));
	};

	// % protected region % [Add any additional functions here] off begin
	// % protected region % [Add any additional functions here] end
}

// % protected region % [Add any additional stuffs here] off begin
// % protected region % [Add any additional stuffs here] end
