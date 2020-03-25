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

import {AdminSpeciesTileCrudComponent} from '../../tiles/crud/species/species.admin.tile.crud.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * A list of routes that spans across the application.
 */
export const appRoutes: Routes = [
	{
		path: 'admin/entities/species',
		children: [
			{
				path: '',
				component: AdminSpeciesTileCrudComponent,
			},
			{
				path: 'view/:id',
				component: AdminSpeciesTileCrudComponent,
			},
			{
				path: 'create',
				component: AdminSpeciesTileCrudComponent,
			},
			{
				path: 'edit/:id',
				component: AdminSpeciesTileCrudComponent,
			}
		],
		canActivate: [
			AuthenticationGuard,
			RoleGuard
			// % protected region % [Add any additional guards for AdminSpeciesTile here] off begin
			// % protected region % [Add any additional guards for AdminSpeciesTile here] end
		],
		data: {
			/*
			 * Required
			 * The roles allowed to visited the page
			 */
			expectedRoles: [
				// % protected region % [Add roles for admin crud tile here] off begin
				// % protected region % [Add roles for admin crud tile here] end
			],
			// % protected region % [Modify the data before displaying it on the crud tile] off begin
			// % protected region % [Modify the data before displaying it on the crud tile] end
		},
		// % protected region % [Add any additional route configuration for crud AdminSpeciesTile here] off begin
		// % protected region % [Add any additional route configuration for crud AdminSpeciesTile here] end
	},

	// % protected region % [Add any additional routes here] off begin
	// % protected region % [Add any additional routes here] end
];
