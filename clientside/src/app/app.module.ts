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

import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {enableProdMode, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {ToastrModule} from 'ngx-toastr';
import {ModalDialogModule} from '@preeco-privacy/ngx-modal-dialog';
import {AlertComponent} from './lib/components/alert/alert.component';
import {GraphQLModule} from './graphql.module';
import {AppComponent} from './app.component';
import {effects, CustomSerializer, initialModelState, initialRouterState} from './models/model.state';
import {clearState, reducers} from './models/model.reducer';
import {environment} from '../environments/environment';
import {HTTP_INTERCEPTORS_PROVIDER} from './lib/interceptors/http.interceptors';
import {appRoutes} from './app.routes';

import {CommonInvalidTileModule} from './lib/tiles/invalid/common.invalid.tile.module';
import {CommonComponentModule} from './lib/components/common.component.module';
import {FrontendModule} from './frontend/frontend.module';
// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Imports during only development process.
 */
let developmentImports = [
	StoreDevtoolsModule.instrument({
		// % protected region % [Add any additional configurations for NgRx store devtools here] off begin
		// % protected region % [Add any additional configurations for NgRx store devtools here] end
	}),
	// % protected region % [Add any additional imports during development here] off begin
	// % protected region % [Add any additional imports during development here] end
];

/**
 * Clear out the development imports and enable production if this is currently running in production.
 */
if (environment.production) {
	// % protected region % [Add any additional logic here] off begin
	// % protected region % [Add any additional logic here] end
	developmentImports = [];
	enableProdMode();
}

@NgModule({
	declarations: [
		AppComponent,
		AlertComponent,
		// % protected region % [Add any additional declaration here] off begin
		// % protected region % [Add any additional declaration here] end
	],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		StoreModule.forRoot(reducers, {
			initialState: {
				router: initialRouterState,
				models: initialModelState,
				// % protected region % [Add any additional NGRX initial states here] off begin
				// % protected region % [Add any additional NGRX initial states here] end
			},
			metaReducers: [
				clearState,
				// % protected region % [Add any additional NGRX meta-reducers here] off begin
				// % protected region % [Add any additional NGRX meta-reducers here] end
			],
			// % protected region % [Add any additional NGRX configs here] off begin
			// % protected region % [Add any additional NGRX configs here] end
		}),
		EffectsModule.forRoot(effects),
		StoreRouterConnectingModule.forRoot({
			serializer: CustomSerializer
		}),
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
			preventDuplicates: true,
			// % protected region % [Add any additional toastr configuration here] off begin
			// % protected region % [Add any additional toastr configuration here] end
		}),
		ModalDialogModule.forRoot(),
		GraphQLModule,
		CommonComponentModule,
		// % protected region % [Add any additional module imports here] off begin
		// % protected region % [Add any additional module imports here] end
		FrontendModule,
		RouterModule.forRoot(
			appRoutes,
			{
				enableTracing: !environment.production
			},
			// % protected region % [Add any additional routing configuration here] off begin
			// % protected region % [Add any additional routing configuration here] end
		),
		CommonInvalidTileModule,
		...developmentImports
	],
	entryComponents: [
		AlertComponent,
		// % protected region % [Add any additional entry components here] off begin
		// % protected region % [Add any additional entry components here] end
	],
	providers: [
		HTTP_INTERCEPTORS_PROVIDER,
		CookieService,
		// % protected region % [Add any additional providers here] off begin
		// % protected region % [Add any additional providers here] end
	],
	bootstrap: [AppComponent],
	// % protected region % [Add any additional module configurations here] off begin
	// % protected region % [Add any additional module configurations here] end
})
export class AppModule {
	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
