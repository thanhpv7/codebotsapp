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
import {AsPipe, KeysPipe, IgnoreBasicPropertiesPipe, IgnoreReadOnly, TypeOfPipe, ValuesPipe} from './object.pipe';
import {ArrayAppendToPipe, ArrayAppendWithPipe, PropertyFilterPipe, LastSlice} from './array.pipe';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Module used to contain all core Angular view components of the view diagram.
 */
@NgModule({
	declarations: [
		AsPipe,
		KeysPipe,
		ValuesPipe,
		IgnoreBasicPropertiesPipe,
		IgnoreReadOnly,
		ArrayAppendToPipe,
		ArrayAppendWithPipe,
		PropertyFilterPipe,
		LastSlice,
		TypeOfPipe,
		// % protected region % [Add any additional declaration here] off begin
		// % protected region % [Add any additional declaration here] end
	],
	imports: [
		// % protected region % [Add any additional module imports here] off begin
		// % protected region % [Add any additional module imports here] end
	],
	exports: [
		AsPipe,
		KeysPipe,
		ValuesPipe,
		IgnoreBasicPropertiesPipe,
		ArrayAppendToPipe,
		ArrayAppendWithPipe,
		PropertyFilterPipe,
		LastSlice,
		TypeOfPipe,
		// % protected region % [Add any additional exports here] off begin
		// % protected region % [Add any additional exports here] end
	],
	// % protected region % [Add any additional module configurations here] off begin
	// % protected region % [Add any additional module configurations here] end
})
export class CommonPipeModule {
}
