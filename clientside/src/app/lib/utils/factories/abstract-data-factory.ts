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

import {v4 as uuid} from 'uuid';
import {AbstractModel} from '../../models/abstract.model';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

export abstract class AbstractDataFactory<E extends AbstractModel> {

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	protected constructor(
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional constructor arguments here] off begin
		// % protected region % [Add any additional constructor arguments here] end
	}

	/**
	 * Create and return a new model with all properties populated.
	 *
	 * @return a new model with all properties populated
	 */
	abstract create(): E;

	/**
	 * Create and return a new collection whose models' properties are populated.
	 *
	 * @param size how many models in the collection to be created
	 * @return a new collection whose models' properties are populated.
	 */
	createAll(size: number = 10): E[] {
		let models: E[] = [];

		for (let i = 0; i < size; ++i) {
			models.push(this.create());
		}

		// % protected region % [Add any additional modification to the new collection here] off begin
		// % protected region % [Add any additional modification to the new collection here] end

		return models;
	}

	/**
	 * Given a blank abstract model, populate the model with its properties, i.e. id, created and modified timestamps.
	 * By default, all chronic properties are set to the current timestamp.
	 *
	 * @param model the model whose properties will be populated
	 */
	populate(model: E) {
		// % protected region % [Add any additional populate logic before the main body here] off begin
		// % protected region % [Add any additional populate logic before the main body here] end

		model.id = uuid();
		model.created = new Date();
		model.modified = new Date();

		// % protected region % [Add any additional populate logic after the main body here] off begin
		// % protected region % [Add any additional populate logic after the main body here] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}

// % protected region % [Add any additional definitions here] off begin
// % protected region % [Add any additional definitions here] end
