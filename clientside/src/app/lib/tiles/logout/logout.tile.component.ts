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

import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthenticationService} from '../../services/authentication/authentication.service';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Stub component used to handle logging out.
 */
@Component({
	template: ''
})
export class LogoutTileComponent {

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
			private authenticationService: AuthenticationService,
			// % protected region % [Add any additional constructor parameters here] off begin
			// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional constructor logic here before the main body here] off begin
		// % protected region % [Add any additional constructor logic here before the main body here] end

		this.authenticationService.logout();

		// % protected region % [Add any additional constructor logic here after the main body here] off begin
		// % protected region % [Add any additional constructor logic here after the main body here] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
