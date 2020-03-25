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

import {AuthenticationService} from '../../services/authentication/authentication.service';
import {AuthenticationInterceptor} from './authentication.interceptor';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CookieService} from 'ngx-cookie-service';
import {Store} from '@ngrx/store';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

describe('Authentication Interceptor', () => {
	const XSRF_TOKEN = '8B7DF143D91C716ECFA5FC1730022F6B421B05CEDEE8FD52B1FC65A96030AD52';

	let httpMock: HttpTestingController;
	let httpClient: HttpClient;

	// % protected region % [Add any additional variables here] off begin
	// % protected region % [Add any additional variables here] end

	beforeEach(() => {
		// % protected region % [Add any additional setup before the main body here] off begin
		// % protected region % [Add any additional setup before the main body here] end

		const cookieService = jasmine.createSpyObj<CookieService>('cookieService', {
			get: XSRF_TOKEN,
			// % protected region % [Add any additional spy methods for cookieService here] off begin
			// % protected region % [Add any additional spy methods for cookieService here] end
		});
		const store = jasmine.createSpyObj<Store<any>>('store', [
			'dispatch',
			// % protected region % [Add any additional spy methods for store here] off begin
			// % protected region % [Add any additional spy methods for store here] end
		]);

		// % protected region % [Add any additional setup before setting up testbed here] off begin
		// % protected region % [Add any additional setup before setting up testbed here] end

		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				// % protected region % [Add any additional test imports here] off begin
				// % protected region % [Add any additional test imports here] end
			],
			providers: [
				{
					provide: CookieService,
					useValue: cookieService
				},
				{
					provide: Store,
					useValue: store
				},
				AuthenticationService,
				{
					provide: HTTP_INTERCEPTORS,
					useClass: AuthenticationInterceptor,
					multi: true
				},
				// % protected region % [Add any additional test providers here] off begin
				// % protected region % [Add any additional test providers here] end
			],
			// % protected region % [Add any additional testbed configuration here] off begin
			// % protected region % [Add any additional testbed configuration here] end
		});

		httpMock = TestBed.get(HttpTestingController);
		httpClient = TestBed.get(HttpClient);

		// % protected region % [Add any additional setup after the main body here] off begin
		// % protected region % [Add any additional setup after the main body here] end
	});

	it('should insert XSRF token as header correctly', () => {
		// % protected region % [Add any additional logic for "should insert XSRF token as header correctly" before the main body here] off begin
		// % protected region % [Add any additional logic for "should insert XSRF token as header correctly" before the main body here] end

		httpClient.get('localhost').subscribe(
			// % protected region % [Add any additional observable handlers here] off begin
			// % protected region % [Add any additional observable handlers here] end
		);

		const httpRequest = httpMock.expectOne('localhost');
		expect(httpRequest.request.headers.has('XSRF-TOKEN')).toBeTruthy('XSRF header not found');
		expect(httpRequest.request.headers.get('XSRF-TOKEN')).toEqual(XSRF_TOKEN, 'XSRF header mismatch');

		// % protected region % [Add any additional logic for "should insert XSRF token as header correctly" after the main body here] off begin
		// % protected region % [Add any additional logic for "should insert XSRF token as header correctly" after the main body here] end
	});

	// % protected region % [Add any additional test cases here] off begin
	// % protected region % [Add any additional test cases here] end
});
