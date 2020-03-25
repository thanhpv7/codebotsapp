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

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ToastContainerModule} from 'ngx-toastr';
import {FrontendComponent} from './frontend.component';
import {CommonComponentModule} from '../lib/components/common.component.module';
import {appRoutes} from '../app.routes';
import {environment} from '../../environments/environment';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

@NgModule({
	declarations: [
		FrontendComponent,
		// % protected region % [Add any additional declarations here] off begin
		// % protected region % [Add any additional declarations here] end
	],
	exports: [
		FrontendComponent,
		// % protected region % [Add any additional exports] off begin
		// % protected region % [Add any additional exports] end
	],
	imports: [
		CommonModule,
		ToastContainerModule,
		RouterModule.forChild(appRoutes),
		CommonComponentModule,
		// % protected region % [Add any additional imports] off begin
		// % protected region % [Add any additional imports] end
	],
	// % protected region % [Add any additional module data] off begin
	// % protected region % [Add any additional module data] end
})
export class FrontendModule { }
