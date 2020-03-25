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

import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {Action, Store} from '@ngrx/store';
import {RouterReducerState} from '@ngrx/router-store';
import {provideMockStore, MockStore} from '@ngrx/store/testing';
import {AlertComponent} from '../../components/alert/alert.component';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {ErrorHandlerInterceptor} from './error-handler.interceptor';
import {initialRouterState, RouterState} from '../../../models/model.state';
import {NavigateRoutingAction} from '../../routing/routing.action';


// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

describe('Error Handler Interceptor', () => {
	// % protected region % [Customise variables here] off begin
	let httpMock: HttpTestingController;
	let httpClient: HttpClient;
	let toastrService: ToastrService;
	let routerStore: MockStore<{ router: RouterReducerState<RouterState> }>;
	let authenticationService: jasmine.SpyObj<AuthenticationService>;
	let toastrError: jasmine.Spy;
	// % protected region % [Customise variables here] end

	// % protected region % [Add any additional variables here] off begin
	// % protected region % [Add any additional variables here] end

	beforeEach(() => {
		// % protected region % [Add any additional setup logic before the main body here] off begin
		// % protected region % [Add any additional setup logic before the main body here] end

		// % protected region % [Customise variable setup here] off begin
		authenticationService = jasmine.createSpyObj('authenticationService', ['clean']);

		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				ToastrModule.forRoot({
					toastComponent: AlertComponent,
					iconClasses: {
						success: 'alert__success',
						info: 'alert__info',
						warning: 'alert__warning',
						error: 'alert__danger'
					},
					toastClass: '',
					positionClass: 'alert-container',
					preventDuplicates: true
				})
			],
			providers: [
				provideMockStore({
					initialState: {
						router: initialRouterState
					}
				}),
				{
					provide: AuthenticationService,
					useValue: authenticationService
				},
				ToastrService,
				{
					provide: HTTP_INTERCEPTORS,
					useClass: ErrorHandlerInterceptor,
					multi: true
				}
			]
		});
		// % protected region % [Customise variable setup here] end

		// % protected region % [Customise variable initialisation here] off begin
		httpMock = TestBed.get(HttpTestingController);
		httpClient = TestBed.get(HttpClient);
		toastrService = TestBed.get(ToastrService);
		routerStore = TestBed.get<Store<{ router: RouterReducerState<RouterState> }>>(Store);

		toastrError = spyOn(toastrService, 'error');
		// % protected region % [Customise variable initialisation here] end

		// % protected region % [Add any additional setup logic after the main body here] off begin
		// % protected region % [Add any additional setup logic after the main body here] end
	});

	it('should not handle login request', () => {
		// % protected region % [Add any additional logic for "should not handle login request" before the main body here] off begin
		// % protected region % [Add any additional logic for "should not handle login request" before the main body here] end

		// % protected region % [Customise variable initialisation for "should not handle login request" here] off begin
		routerStore.setState({
			router: {
				...initialRouterState,
				state: {
					url: '/login',
					urls: ['login'],
					params: [],
					queryParams: [],
					data: {}
				}
			}
		});
		// % protected region % [Customise variable initialisation for "should not handle login request" here] end

		// % protected region % [Customise steps for "should not handle login request" here] off begin
		httpClient.post('localhost', {}).subscribe(
			res => fail('An error was expected but not thrown'),
			error => {}
		);

		const httpRequest = httpMock.expectOne('localhost');
		httpRequest.flush('stub', {
			status: 401,
			statusText: 'Unauthorized'
		});
		// % protected region % [Customise steps for "should not handle login request" here] end

		// % protected region % [Customise assertions for "should not handle login request" here] off begin
		expect(toastrError).toHaveBeenCalledTimes(0);
		// % protected region % [Customise assertions for "should not handle login request" here] end

		// % protected region % [Add any additional logic for "should not handle login request" after the main body here] off begin
		// % protected region % [Add any additional logic for "should not handle login request" after the main body here] end
	});

	it('should handle 400 errors correctly', () => {
		// % protected region % [Add any additional logic for "should handle 400 errors correctly" before the main body here] off begin
		// % protected region % [Add any additional logic for "should handle 400 errors correctly" before the main body here] end

		// % protected region % [Customise variable initialisation for "should handle 400 errors" here] off begin
		routerStore.setState({
			router: {
				...initialRouterState,
				state: {
					url: '/',
					urls: [],
					params: [],
					queryParams: [],
					data: {}
				}
			}
		});
		// % protected region % [Customise variable initialisation for "should handle 400 errors" here] end

		// % protected region % [Customise steps for "should handle 400 errors correctly" here] off begin
		httpClient.post('localhost', {}).subscribe(
			res => fail('An error was expected but not thrown'),
			error => {}
		);

		const httpRequest = httpMock.expectOne('localhost');
		httpRequest.flush('stub', {
			status: 400,
			statusText: 'Bad Request'
		});
		// % protected region % [Customise steps for "should handle 400 errors correctly" here] end

		// % protected region % [Customise assertions for "should handle 400 errors correctly" here] off begin
		expect(toastrError).toHaveBeenCalledTimes(1);
		expect(toastrError).toHaveBeenCalledWith('Invalid or malformed request', 'Unable to perform operation');
		// % protected region % [Customise assertions for "should handle 400 errors correctly" here] end

		// % protected region % [Add any additional logic for "should handle 400 errors correctly" after the main body here] off begin
		// % protected region % [Add any additional logic for "should handle 400 errors correctly" after the main body here] end
	});

	it('should handle 401 errors correctly', () => {
		// % protected region % [Add any additional logic for "should handle 401 errors correctly when not on login page" before the main body here] off begin
		// % protected region % [Add any additional logic for "should handle 401 errors correctly when not on login page" before the main body here] end

		// % protected region % [Customise variable initialisation for "should handle 401 errors correctly when not on login page" here] off begin
		const routerStoreDispatchSpy = spyOn(routerStore, 'dispatch');

		routerStore.setState({
			router: {
				...initialRouterState,
				state: {
					url: '/',
					urls: [],
					params: [],
					queryParams: [],
					data: {}
				}
			}
		});
		// % protected region % [Customise variable initialisation for "should handle 401 errors correctly when not on login page" here] end

		// % protected region % [Add any additional logic for "should handle 401 errors correctly when on not login page" here] off begin
		// % protected region % [Add any additional logic for "should handle 401 errors correctly when on not login page" here] end

		// % protected region % [Customise steps for "should handle 401 errors correctly when on not login page" here] off begin
		httpClient.post('localhost', {}).subscribe(
			res => fail('An error was expected but not thrown'),
			error => {}
		);

		const httpRequest = httpMock.expectOne('localhost');
		httpRequest.flush('stub', {
			status: 401,
			statusText: 'Unauthorized'
		});
		// % protected region % [Customise steps for "should handle 401 errors correctly when on not login page" here] end

		// % protected region % [Customise assertions for "should handle 401 errors correctly when not on login page" here] off begin
		expect(toastrError).toHaveBeenCalledTimes(1);
		expect(toastrError).toHaveBeenCalledWith('You are not authenticated!', 'Unable to perform operation');
		expect(authenticationService.clean).toHaveBeenCalledTimes(1);
		expect(routerStoreDispatchSpy).toHaveBeenCalledTimes(1);
		// % protected region % [Customise assertions for "should handle 401 errors correctly when not on login page" here] end

		// % protected region % [Add any additional logic for "should handle 401 errors correctly when not on login page" after the main body here] off begin
		// % protected region % [Add any additional logic for "should handle 401 errors correctly when not on login page" after the main body here] end
	});

	it('should handle 403 errors correctly', () => {
		// % protected region % [Add any additional logic for "should handle 403 errors correctly" before the main body here] off begin
		// % protected region % [Add any additional logic for "should handle 403 errors correctly" before the main body here] end

		// % protected region % [Customise variable initialisation for "should handle 403 errors" here] off begin
		routerStore.setState({
			router: {
				...initialRouterState,
				state: {
					url: '/',
					urls: [],
					params: [],
					queryParams: [],
					data: {}
				}
			}
		});
		// % protected region % [Customise variable initialisation for "should handle 403 errors" here] end

		// % protected region % [Customise steps for "should handle 403 errors correctly" here] off begin
		httpClient.post('localhost', {}).subscribe(
			res => fail('An error was expected but not thrown'),
			error => {}
		);

		const httpRequest = httpMock.expectOne('localhost');
		httpRequest.flush('stub', {
			status: 403,
			statusText: 'Bad Request'
		});
		// % protected region % [Customise steps for "should handle 403 errors correctly" here] end

		// % protected region % [Customise assertions for "should handle 403 errors correctly" here] off begin
		expect(toastrError).toHaveBeenCalledTimes(1);
		expect(toastrError).toHaveBeenCalledWith('You are not authorised!', 'Unable to perform operation');
		// % protected region % [Customise assertions for "should handle 403 errors correctly" here] end

		// % protected region % [Add any additional logic for "should handle 403 errors correctly" after the main body here] off begin
		// % protected region % [Add any additional logic for "should handle 403 errors correctly" after the main body here] end
	});

	it('should handle 409 errors correctly', () => {
		// % protected region % [Add any additional logic for "should handle 409 errors correctly" before the main body here] off begin
		// % protected region % [Add any additional logic for "should handle 409 errors correctly" before the main body here] end

		// % protected region % [Customise variable initialisation for "should handle 409 errors" here] off begin
		routerStore.setState({
			router: {
				...initialRouterState,
				state: {
					url: '/',
					urls: [],
					params: [],
					queryParams: [],
					data: {}
				}
			}
		});
		// % protected region % [Customise variable initialisation for "should handle 409 errors" here] end

		// % protected region % [Customise steps for "should handle 409 errors correctly" here] off begin
		httpClient.post('localhost', {}).subscribe(
			res => fail('An error was expected but not thrown'),
			error => {}
		);

		const httpRequest = httpMock.expectOne('localhost');
		httpRequest.flush('stub', {
			status: 409,
			statusText: 'Conflict'
		});
		// % protected region % [Customise steps for "should handle 409 errors correctly" here] end

		// % protected region % [Customise assertions for "should handle 409 errors correctly" here] off begin
		expect(toastrError).toHaveBeenCalledTimes(1);
		expect(toastrError).toHaveBeenCalledWith('Conflict encountered!', 'Unable to perform operation');
		// % protected region % [Customise assertions for "should handle 409 errors correctly" here] end

		// % protected region % [Add any additional logic for "should handle 409 errors correctly" after the main body here] off begin
		// % protected region % [Add any additional logic for "should handle 409 errors correctly" after the main body here] end
	});

	it('should handle 422 errors correctly', () => {
		// % protected region % [Add any additional logic for "should handle 422 errors correctly" before the main body here] off begin
		// % protected region % [Add any additional logic for "should handle 422 errors correctly" before the main body here] end

		// % protected region % [Customise variable initialisation for "should handle 422 errors" here] off begin
		routerStore.setState({
			router: {
				...initialRouterState,
				state: {
					url: '/',
					urls: [],
					params: [],
					queryParams: [],
					data: {}
				}
			}
		});
		// % protected region % [Customise variable initialisation for "should handle 422 errors" here] end

		// % protected region % [Customise steps for "should handle 422 errors correctly" here] off begin
		httpClient.post('localhost', {}).subscribe(
			res => fail('An error was expected but not thrown'),
			error => {}
		);

		const httpRequest = httpMock.expectOne('localhost');
		httpRequest.flush('stub', {
			status: 422,
			statusText: 'Unprocessable Entity'
		});
		// % protected region % [Customise steps for "should handle 422 errors correctly" here] end

		// % protected region % [Customise assertions for "should handle 422 errors correctly" here] off begin
		expect(toastrError).toHaveBeenCalledTimes(1);
		expect(toastrError).toHaveBeenCalledWith('Validation errors found!', 'Unable to perform operation');
		// % protected region % [Customise assertions for "should handle 422 errors correctly" here] end

		// % protected region % [Add any additional logic for "should handle 422 errors correctly" after the main body here] off begin
		// % protected region % [Add any additional logic for "should handle 422 errors correctly" after the main body here] end
	});

	it('should handle other errors correctly', () => {
		// % protected region % [Add any additional logic for "should handle other errors correctly" before the main body here] off begin
		// % protected region % [Add any additional logic for "should handle other errors correctly" before the main body here] end

		// % protected region % [Customise variable initialisation for "should handle other errors" here] off begin
		routerStore.setState({
			router: {
				...initialRouterState,
				state: {
					url: '/',
					urls: [],
					params: [],
					queryParams: [],
					data: {}
				}
			}
		});
		// % protected region % [Customise variable initialisation for "should handle other errors" here] end

		// % protected region % [Customise steps for "should handle other errors correctly" here] off begin
		httpClient.post('localhost', {}).subscribe(
			res => fail('An error was expected but not thrown'),
			error => {}
		);

		const httpRequest = httpMock.expectOne('localhost');
		httpRequest.flush('stub', {
			status: 500,
			statusText: 'Unprocessable Entity'
		});
		// % protected region % [Customise steps for "should handle other errors correctly" here] end

		// % protected region % [Customise assertions for "should handle other errors correctly" here] off begin
		expect(toastrError).toHaveBeenCalledTimes(1);
		expect(toastrError).toHaveBeenCalledWith('Unknown cause!', 'Unable to perform operation');
		// % protected region % [Customise assertions for "should handle other errors correctly" here] end

		// % protected region % [Add any additional logic for "should handle other errors correctly" after the main body here] off begin
		// % protected region % [Add any additional logic for "should handle other errors correctly" after the main body here] end
	});

	// % protected region % [Add any additional test cases here] off begin
	// % protected region % [Add any additional test cases here] end
});
