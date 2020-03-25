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

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractComponent} from '../abstract.component';
import {AbstractModel} from '../../models/abstract.model';
import {ButtonSize, ButtonStyle} from '../button/button.component';
import {Form, FormControl, FormGroup} from '@angular/forms';
import {DropdownConfig} from '../dropdown/dropdown.component';
import {DatepickerConfig} from '../datepicker/datepicker.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * The available types of the question to display
 */
export enum FilterQuestionType {
	dropdown,
	textfield,
	checkbox,
	date
}

/**
 * The interface to display the configure used in the filter questions
 */
export interface FilterQuestion {
	/**
	 * The type of the question to display
	 */
	filterType: FilterQuestionType,
	
	/**
	 * Name of the property
	 */
	name: string,
	
	/**
	 * Configurations for the element component
	 */
	config: DropdownConfig | DatepickerConfig
	
	// % protected region % [Add any additional fields for filter questions here] off begin
	// % protected region % [Add any additional fields for filter questions here] end
}

/**
 * Components to display the filter fields in the collection
 */
@Component({
	selector: 'cb-collection-filter',
	templateUrl: './collection-filter.component.html',
	styleUrls: [
		'./collection-filter.component.scss',
		// % protected region % [Add any additional style configurations here] off begin
		// % protected region % [Add any additional style configurations here] end
	]
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class CollectionFilterComponent extends AbstractComponent implements OnInit {
	/**
	 * Copy of the ButtonStyle Enum
	 */
	buttonStyle = ButtonStyle;

	/**
	 * Copy of the ButtonSize Enum
	 */
	buttonSize = ButtonSize;
	
	/**
	 * The enum of the filter question type
	 * @type {FilterQuestionType}
	 */
	filterQuestionType = FilterQuestionType;

	/**
	 * The form group to bind to the filter form
	 * @type {FormGroup}
	 */
	filterFormGroup: FormGroup;

	/**
	 * The question models to display
	 */
	@Input()
	filterQuestions: FilterQuestion[];

	/**
	 * The event emitter to trigger the event to filter the data
	 * @type {EventEmitter<{filterFormGroup: FormGroup}>}
	 */
	@Output()
	filterEmitter: EventEmitter<{ isClean?: boolean, filterFormGroup: FormGroup }> = new EventEmitter();

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end
	
	ngOnInit() {
		// % protected region % [Add any additional logic here before the main logic of init] off begin
		// % protected region % [Add any additional logic here before the main logic of init] end
		
		// Create the formGroup according to the questions
		this.filterFormGroup = new FormGroup({});
		this.filterQuestions.forEach(
			question => this.filterFormGroup.addControl(question.name, new FormControl(''))
		);
		
		// % protected region % [Add any additional logic here after the main logic of init] off begin
		// % protected region % [Add any additional logic here after the main logic of init] end
	}
	
	/**
	 * Trigger when the apply button is clicked
	 */
	onFilterButtonClick() {
		// % protected region % [Add any additional logic here before the main logic of filter button click] off begin
		// % protected region % [Add any additional logic here before the main logic of filter button click] end
		
		this.filterEmitter.emit({filterFormGroup: this.filterFormGroup});
		
		// % protected region % [Add any additional logic here before the main logic of filter button click] off begin
		// % protected region % [Add any additional logic here before the main logic of filter button click] end
	}
	
	/**
	 * Trigger when the clear button is clicked
	 */
	onClearButtonClick() {
		// % protected region % [Add any additional onClearButtonClick logic before the main body here] off begin
		// % protected region % [Add any additional onClearButtonClick logic before the main body here] end

		this.filterFormGroup.reset();

		// % protected region % [Add any additional onClearButtonClick logic before constructing emit event here] off begin
		// % protected region % [Add any additional onClearButtonClick logic before constructing emit event here] end

		let eventToBeEmitted = {
			isClean: true,
			filterFormGroup: this.filterFormGroup
		};

		// % protected region % [Add any additional onClearButtonClick logic before before emitting the event here] off begin
		// % protected region % [Add any additional onClearButtonClick logic before before emitting the event here] end

		this.filterEmitter.emit(eventToBeEmitted);
		
		// % protected region % [Add any additional onClearButtonClick logic after the main body here] off begin
		// % protected region % [Add any additional onClearButtonClick logic after the main body here] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}

// % protected region % [Add any additional definitions here] off begin
// % protected region % [Add any additional definitions here] end
