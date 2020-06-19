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
import {RouterModule, Routes} from '@angular/router';
import {FrontendComponent} from './frontend.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

export const frontendRoutes: Routes = [
	{
		path: '',
		component: FrontendComponent,
		children: [
			// Admin Crud tile for user and entities
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'welcome',
			},
			{
				path: 'fish',
				loadChildren: () => import('../pages/fish/fish.page.module').then(m => m.FishPageModule),
			},
			{
				path: 'species',
				loadChildren: () => import('../pages/species/species.page.module').then(m => m.SpeciesPageModule),
			},
			{
				path: 'tank',
				loadChildren: () => import('../pages/tank/tank.page.module').then(m => m.TankPageModule),
			},
			{
				path: 'stats',
				loadChildren: () => import('../pages/stats/stats.page.module').then(m => m.StatsPageModule),
			},
			{
				path: 'welcome',
				loadChildren: () => import('../pages/welcome/welcome.page.module').then(m => m.WelcomePageModule),
			},
		]
	}

];

@NgModule({
	declarations: [
		// % protected region % [Add any additional declarations here] off begin
		// % protected region % [Add any additional declarations here] end
	],
	imports: [
		RouterModule.forChild(frontendRoutes),
		// % protected region % [Add any additional imports] off begin
		// % protected region % [Add any additional imports] end
	],
	exports: [
		RouterModule,
		// % protected region % [Add any additional exports] off begin
		// % protected region % [Add any additional exports] end
	],
	// % protected region % [Add any additional module data] off begin
	// % protected region % [Add any additional module data] end
})
export class FrontendRoutingModule { }