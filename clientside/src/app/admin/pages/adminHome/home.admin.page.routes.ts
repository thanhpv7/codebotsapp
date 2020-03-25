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

import {Routes} from '@angular/router';
import {AuthenticationGuard} from '../../../lib/guards/authentication.guard';
import {RoleGuard} from '../../../lib/guards/role.guard';
import {AdminDashboardTileComponent} from '../../tiles/adminDashboard/admin_dashboard.tile.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * A list of routes that spans across the application.
 */
export const appRoutes: Routes = [
	{
		path: 'admin',
		component: AdminDashboardTileComponent,
		canActivate: [
			AuthenticationGuard,
			RoleGuard
			// % protected region % [Add any additional guards for Admin Dashboard here] off begin
			// % protected region % [Add any additional guards for Admin Dashboard here] end
		],
		data: {
			/*
			 * Required
			 * The roles allowed to visited the page
			*/
			expectedRoles: [
			],
			// % protected region % [Customise your data passed to data for Admin Dashboard here] off begin
			// % protected region % [Customise your data passed to data for Admin Dashboard here] end
		},
		// % protected region % [Add any additional route configuration for Admin Dashboard here] off begin
		// % protected region % [Add any additional route configuration for Admin Dashboard here] end

	},
	// % protected region % [Add any additional routes here] off begin
	// % protected region % [Add any additional routes here] end

];
