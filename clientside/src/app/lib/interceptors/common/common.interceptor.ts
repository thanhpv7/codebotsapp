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
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Common headers to be inserted into each request before it is sent to the backend. This is used to simplify common
 * headers that need to be inserted into every request.
 */
export const COMMON_HEADERS: { [s: string]: string } = {
	// % protected region % [Add any additional common headers here] off begin
	// % protected region % [Add any additional common headers here] end
};

/**
 * Interceptor used to add common headers into each HTTP request.
 */
@Injectable({
	providedIn: 'root'
})
export class CommonInterceptor implements HttpInterceptor {

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	/**
	 * @inheritDoc
	 */
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		Object.entries(COMMON_HEADERS).forEach(([k, v]) => req.headers.append(k, v));

		// % protected region % [Add any additional logic before passing on the request here] off begin
		// % protected region % [Add any additional logic before passing on the request here] end

		return next.handle(req);
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
