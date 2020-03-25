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

import {Directive, HostListener, Input} from '@angular/core';

// % protected region % [Add any inital imports here] off begin
// % protected region % [Add any inital imports here] end

@Directive({
	selector: '[routerLink]'
})
export class RouterLinkDirectiveStub {

	@Input('routerLink') linkParams: any;

	navigatedTo: any = null;

	// % protected region % [Add any additional fields here] off begin
	// % protected region % [Add any additional fields here] end

	@HostListener('click')
	onClick() {
		this.navigatedTo = this.linkParams;
		// % protected region % [Add any additional logic for onClick method here] off begin
		// % protected region % [Add any additional logic for onClick method here] end
	}

	// % protected region % [Add any additional methods here] off begin
	// % protected region % [Add any additional methods here] end
}



// % protected region % [Add any additional stuffs here] off begin
// % protected region % [Add any additional stuffs here] end
