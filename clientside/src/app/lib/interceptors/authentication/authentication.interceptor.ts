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

import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../services/authentication/authentication.service';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Interceptor used to ensure that each request has been authenticated correctly.
 */
@Injectable({
	providedIn: 'root'
})
export class AuthenticationInterceptor implements HttpInterceptor {

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
			private authenticationService: AuthenticationService,
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	/**
	 * @inheritDoc
	 */
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// % protected region % [Add any additional intercept logic before the main body here] off begin
		// % protected region % [Add any additional intercept logic before the main body here] end

		let newRequest = req.clone({
			headers: req.headers.set('XSRF-TOKEN', this.authenticationService.xsrfToken),
			// % protected region % [Add any additional cloned properties here] off begin
			// % protected region % [Add any additional cloned properties here] end
		});

		// % protected region % [Add any additional logic to configure the new request here] off begin
		// % protected region % [Add any additional logic to configure the new request here] end

		return next.handle(newRequest).pipe(
			// % protected region % [Add any additional piping logic here] off begin
			// % protected region % [Add any additional piping logic here] end
		);
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
