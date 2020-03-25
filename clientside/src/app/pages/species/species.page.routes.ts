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
import {RoleGuard} from '../../lib/guards/role.guard';
import {SpeciesWrappingTileTileComponent} from '../../tiles/custom/speciesWrappingTile/species_wrapping_tile.tile.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * A list of routes that spans across the application.
 */
export const appRoutes: Routes = [
	{
		path: 'species',
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'species-wrapping-tile',
			},
			{
				path: 'species-wrapping-tile',
				// % protected region % [Configure component or redirect for Species Wrapping Tile here] off begin
				component: SpeciesWrappingTileTileComponent,
				// % protected region % [Configure component or redirect for Species Wrapping Tile here] end
				canActivate: [
					RoleGuard,
					// % protected region % [Add any additional guards for Species Wrapping Tile here] off begin
					// % protected region % [Add any additional guards for Species Wrapping Tile here] end
				],
				data: {
					expectedRoles: [
						'ADMIN',
						'FISHNATIC',
						// % protected region % [Add additional roles here] off begin
						// % protected region % [Add additional roles here] end
					],
					// % protected region % [Customise your data passed to data for Species Wrapping Tile here] off begin
					// % protected region % [Customise your data passed to data for Species Wrapping Tile here] end
				},
				// % protected region % [Add any additional route configuration for Species Wrapping Tile here] off begin
				// % protected region % [Add any additional route configuration for Species Wrapping Tile here] end
			},
		]
	}
	// % protected region % [Add any additional routes here] off begin
	// % protected region % [Add any additional routes here] end
];
