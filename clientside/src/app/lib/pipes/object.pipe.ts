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

import {Pipe, PipeTransform} from '@angular/core';
import {ModelProperty} from '../models/abstract.model';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Pipe used to get all the keys of the given object.
 *
 * @return an array of keys of the given object
 */
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
	transform<E>(arg: { [s: string]: E } | { [s: number]: E }): string[] | number[] {
		return Object.keys(arg);
	}
}

/**
 * Pipe used to get all of the values of the given object.
 *
 * @return an array of values of the given object
 */
@Pipe({name: 'values'})
export class ValuesPipe implements PipeTransform {
	transform<E>(arg: { [s: string]: E }): E[] {
		return Object.values(arg);
	}
}

/**
 * Simple pipe used to ignore ID property when looping over properties of a model.
 *
 * @return an array of properties without the ID
 */
@Pipe({name: 'ignoreBasicProperties'})
export class IgnoreBasicPropertiesPipe implements PipeTransform {
	transform(props: ModelProperty[]): ModelProperty[] {
		return props.filter(item => item.name !== 'id' && item.name !== 'created' && item.name !== 'modified');
	}
}

/**
 * Piped used to ignore read only properties when looping over properties of a model
 *
 * @return an array of properties with readOnly set to false
 */
@Pipe({name: 'ignoreReadOnly'})
export class IgnoreReadOnly implements PipeTransform {
	transform(props: ModelProperty[]): ModelProperty[] {
		return props.filter(item => !item.readOnly);
	}
}

/**
 * Pipe used to return the type of the argument
 *
 * @return the same argument but just different type
 */
@Pipe({name: 'typeof'})
export class TypeOfPipe implements PipeTransform {
	transform(arg: any): any {
		return typeof arg;
	}
}

type Constructor<T> = { new (...args: any[]): T };

/**
 * Pipe used to convert the given argument to another type.
 *
 * @return the same argument but just different type
 */
@Pipe({name: 'as'})
export class AsPipe implements PipeTransform {
	transform<T>(arg: any, classType: Constructor<T>): T {
		return arg;
	}
}

// % protected region % [Add any additional pipes here] off begin
// % protected region % [Add any additional pipes here] end
