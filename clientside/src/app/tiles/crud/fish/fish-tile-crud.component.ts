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
import {Component, Input} from '@angular/core';
// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Different mode of Crud Tile
 */
export enum CrudTileMode {
	View = 'view',
	Create = 'create',
	List = 'list',
	Edit = 'edit',
	// % protected region % [Add any additional crud tile mode here here] off begin
	// % protected region % [Add any additional crud tile mode here here] end
}

/**
 * Base tile to show all crud components.
 */
@Component({
	selector: 'cb-fish-tile-crud',
	templateUrl: './fish-tile-crud.component.html',
	styleUrls: [
		'./fish-tile-crud.component.scss',
		// % protected region % [Add any additional CSS styling here] off begin
		// % protected region % [Add any additional CSS styling here] end
	],
	// % protected region % [Add any additional component configuration here] off begin
	// % protected region % [Add any additional component configuration here] end
})
export class FishTileCrudComponent {
	readonly CrudTileMode = CrudTileMode;

	/**
	 * Whether route component
	 */
	@Input()
	disableRouting = false;

	/**
	 * Whether to show collection or save/edit page
	 * Only used when disableRouting is turned on
	 */
	@Input()
	tileMode: CrudTileMode = CrudTileMode.List;

	/**
	 * Id of entity to show
	 * Only used when disableRouting is turned on
	 */
	@Input()
	targetModelId: string;

	/**
	 * Triggered when tile mode is changed
	 * Only used when disableRouting is turned on
	 */
	onTileModeChange($event: { tileMode: CrudTileMode, payload?: any}) {
		if ($event.payload && $event.payload.id) {
			this.targetModelId = $event.payload.id;
		}

		this.tileMode = $event.tileMode;
	}
}