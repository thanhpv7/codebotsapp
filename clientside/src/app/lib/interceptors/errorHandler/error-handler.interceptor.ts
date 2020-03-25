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

import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {RouterReducerState} from '@ngrx/router-store';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {RouterState} from '../../../models/model.state';
import * as routerActions from '../../routing/routing.action';
import {getRouterState} from '../../../models/model.selector';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Interceptor used to handle errors across the application.
 */
@Injectable({
	providedIn: 'root'
})
export class ErrorHandlerInterceptor implements HttpInterceptor {

	private routerState: RouterState;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		private readonly routerStore: Store<{ router: RouterReducerState<RouterState> }>,
		private readonly toastrService: ToastrService,
		private readonly authService: AuthenticationService,
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional constructor logic before the main body here] off begin
		// % protected region % [Add any additional constructor logic before the main body here] end

		this.routerStore.select(getRouterState).subscribe(
			(routerState) => this.routerState = routerState,
			// % protected region % [Add any additional subscription logic for router state here] off begin
			// % protected region % [Add any additional subscription logic for router state here] end
		);

		// % protected region % [Add any additional constructor logic after the main body here] off begin
		// % protected region % [Add any additional constructor logic after the main body here] end
	}

	/**
	 * @inheritDoc
	 */
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// % protected region % [Add any additional constructor logic for intercept before the main body here] off begin
		// % protected region % [Add any additional constructor logic for intercept before the main body here] end

		// If on login page, simply pass along since error are handled properly on the login page already.
		if (this.routerState.urls[0] === 'login') {
			return next.handle(req);
		}

		// % protected region % [Add any additional constructor logic for intercept here] off begin
		// % protected region % [Add any additional constructor logic for intercept here] end

		return next.handle(req).pipe(
			catchError((error: HttpErrorResponse) => {
				// % protected region % [Add any additional error handling logic before the main body here] off begin
				// % protected region % [Add any additional error handling logic before the main body here] end

				// Check whether the error is clientside or serverside
				if (error.error instanceof ErrorEvent) {
					// % protected region % [Add any additional error handling logic for clientside before the main body here] off begin
					// % protected region % [Add any additional error handling logic for clientside before the main body here] end

					// % protected region % [Add any additional error handling logic for clientside error here] off begin
					this.toastrService.error('Unable to complete operation', error.error && error.error.message ? error.error.message : 'Network error encountered!');
					// % protected region % [Add any additional error handling logic for clientside error here] end

					// % protected region % [Add any additional error handling logic for clientside after the main body here] off begin
					// % protected region % [Add any additional error handling logic for clientside after the main body here] end
				} else {
					// % protected region % [Add any additional error handling logic for serverside before the main body here] off begin
					// % protected region % [Add any additional error handling logic for serverside before the main body here] end

					switch (error.status) {
						case 400:
							// % protected region % [Add any additional error handling logic for 400 here] off begin
							this.toastrService.error('Invalid or malformed request', 'Unable to perform operation');
							break;
							// % protected region % [Add any additional error handling logic for 400 here] end
						case 401:
							// % protected region % [Add any additional error handling logic for 401 here] off begin
							this.toastrService.error('You are not authenticated!', 'Unable to perform operation');
							this.authService.clean();

							if (this.routerState.urls[0] !== 'login') {
								this.routerStore.dispatch(new routerActions.NavigateRoutingAction(['/login'], {
										queryParams: {
											redirectTo: this.routerState.url
										}
									})
								);
							}
							break;
							// % protected region % [Add any additional error handling logic for 401 here] end
						case 403:
							// % protected region % [Add any additional error handling logic for 403 here] off begin
							this.toastrService.error('You are not authorised!', 'Unable to perform operation');
							break;
							// % protected region % [Add any additional error handling logic for 403 here] end
						case 409:
							// % protected region % [Add any additional error handling logic for 409 here] off begin
							this.toastrService.error(error.error && error.error.error_description ? error.error.error_description : 'Conflict encountered!', 'Unable to perform operation');
							break;
							// % protected region % [Add any additional error handling logic for 409 here] end
						case 422:
							// % protected region % [Add any additional error handling logic for 422 here] off begin
							this.toastrService.error('Validation errors found!', 'Unable to perform operation');
							break;
							// % protected region % [Add any additional error handling logic for 422 here] end
						default:
							// % protected region % [Add any additional error handling logic for default case here] off begin
							this.toastrService.error(error.error && error.error.error_description ? error.error.error_description : 'Unknown cause!', 'Unable to perform operation');
							break;
							// % protected region % [Add any additional error handling logic for default case here] end
					}

					// % protected region % [Add any additional error handling logic for serverside after the main body here] off begin
					// % protected region % [Add any additional error handling logic for serverside after the main body here] end
				}

				// % protected region % [Add any additional error handling logic after the main body here] off begin
				// % protected region % [Add any additional error handling logic after the main body here] end

				return throwError(error);
			})
		);
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
