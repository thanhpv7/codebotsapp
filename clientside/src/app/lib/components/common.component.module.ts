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
import {PortalModule} from '@angular/cdk/portal';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgSelectModule} from '@ng-select/ng-select';
import {ClickOutsideModule} from 'ng-click-outside';
import {OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE} from 'ng-pick-datetime';
import {CommonPipeModule} from '../pipes/common.pipe.module';
import {ButtonComponent} from './button/button.component';
import {ButtonGroupComponent} from './buttonGroup/button.group.component';
import {InfoSideBarComponent} from './info-sidebar/info-sidebar.component';
import {TextfieldComponent} from './textfield/textfield.component';
import {TextareaComponent} from './textarea/textarea.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {ContextMenuComponent} from './context-menu/context-menu.component';
import {CheckboxGroupComponent} from './checkboxGroup/checkbox.group.component';
import {ComboboxComponent} from './combobox/combobox.component';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {RadioButtonComponent} from './radioButton/radio.button.component';
import {RadioButtonGroupComponent} from './radioButtonGroup/radio.button.group.component';
import {SearchComponent} from './search/search.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {CollectionComponent} from './collection/collection.component';
import {CollectionFilterComponent} from './collection/collection-filter.component';
import {CrudCreateEditComponent} from './crud/createEdit/crud.create.edit.component';
import {AdminTopBarComponent} from './adminTopBar/admin_top_bar.component';
import {BottomActionBarComponent} from './bottom-action-bar/bottom-action-bar.component';
import {appRoutes} from '../../app.routes';
import {environment} from '../../../environments/environment';
import {InputErrorMessageComponent} from './abstract.input.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FileUploadComponent} from './fileUpload/file.upload.component';
import {TabGroupComponent} from './tab/tab-group.component';
import {TabComponent} from './tab/tab.component';
import {AccordionComponent, AccordionInfoDirective} from './accordion/accordion.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Module used to contain all core Angular view components of the view diagram.
 */
@NgModule({
	declarations: [
		InputErrorMessageComponent,
		ButtonComponent,
		ButtonGroupComponent,
		InfoSideBarComponent,
		TextfieldComponent,
		TextareaComponent,
		CheckboxComponent,
		CheckboxGroupComponent,
		ComboboxComponent,
		ContextMenuComponent,
		DatepickerComponent,
		RadioButtonComponent,
		RadioButtonGroupComponent,
		SearchComponent,
		DropdownComponent,
		CollectionComponent,
		CollectionFilterComponent,
		CrudCreateEditComponent,
		AdminTopBarComponent,
		NavigationComponent,
		BottomActionBarComponent,
		FileUploadComponent,
		TabGroupComponent,
		TabComponent,
		AccordionComponent,
		AccordionInfoDirective,
		// % protected region % [Add any additional declaration here] off begin
		// % protected region % [Add any additional declaration here] end
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		CommonPipeModule,
		RouterModule.forChild(appRoutes),
		NgSelectModule,
		OwlDateTimeModule,
		OwlNativeDateTimeModule,
		ClickOutsideModule,
		PortalModule,
		// % protected region % [Add any additional module imports here] off begin
		// % protected region % [Add any additional module imports here] end
	],
	exports: [
		AccordionComponent,
		AccordionInfoDirective,
		ButtonComponent,
		ButtonGroupComponent,
		InfoSideBarComponent,
		TextfieldComponent,
		TextareaComponent,
		CheckboxComponent,
		CheckboxGroupComponent,
		ComboboxComponent,
		ContextMenuComponent,
		DatepickerComponent,
		RadioButtonGroupComponent,
		SearchComponent,
		DropdownComponent,
		CollectionComponent,
		CrudCreateEditComponent,
		AdminTopBarComponent,
		NavigationComponent,
		BottomActionBarComponent,
		FileUploadComponent,
		TabGroupComponent,
		TabComponent,
		// % protected region % [Add any additional exports here] off begin
		// % protected region % [Add any additional exports here] end
	],
	providers: [
		{provide: OWL_DATE_TIME_LOCALE, useValue: 'en-AU'},
		// % protected region % [Add any additional providers here] off begin
		// % protected region % [Add any additional providers here] end
	],
	// % protected region % [Add any additional module configurations here] off begin
	// % protected region % [Add any additional module configurations here] end
})
export class CommonComponentModule {
}
