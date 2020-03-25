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

import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {AbstractHttpService} from '../../lib/services/http/abstract-http.service';
import {UserModel} from '../../models/user/user.model';
import {AuthenticationService} from '../../lib/services/authentication/authentication.service';
import {AbstractModelAudit} from '../../models/model.state';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * User service used to handle all CRUD operations against this entity.
 */
@Injectable({
	providedIn: 'root'
})
export abstract class UserService<E extends UserModel, T extends AbstractModelAudit<E>> extends AbstractHttpService<E, T> {

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	protected constructor(
		apollo: Apollo,
		router: Router,
		authService: AuthenticationService,
		toastrService: ToastrService,
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
	) {
		super(
			apollo,
			router,
			authService,
			toastrService,
			// % protected region % [Add any additional constructor arguments here] off begin
			// % protected region % [Add any additional constructor arguments here] end
		);
		// % protected region % [Add any additional constructor logic here] off begin
		// % protected region % [Add any additional constructor logic here] end
	}

	protected fragments(className: string) {
		return {
			properties: gql`
				fragment ${className}UserProperties on ${className} {
					...${className}BaseProperties
					firstName
					lastName
					username
					gender
					email
					isArchived
				}
				${super.fragments(className).properties}
			`,
			// % protected region % [Add any additional fragments here] off begin
			// % protected region % [Add any additional fragments here] end
		};
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
