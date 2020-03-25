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

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Simple pipe used to append elements into the given array and return the array with the elements appended.
 *
 * @param value the array to be appended with the new elements
 * @param args the elements to be appended
 * @return the array with the elements appended
 */
@Pipe({name: 'appendWith'})
export class ArrayAppendWithPipe implements PipeTransform {
	transform<E>(value: E[], ...args: E[]): E[] {
		value.push(...args);
		return value;
	}
}

/**
 * Simple pipe used to append the given element to the given array and return the array with the element appended.
 *
 * @param value the element to be appended
 * @param args the array to which the new element will be appended
 * @return the array with the element appended
 */
@Pipe({name: 'appendTo'})
export class ArrayAppendToPipe implements PipeTransform {
	transform<E>(value: E, arg: E[]): E[] {
		arg.push(value);
		return arg;
	}
}

/**
 * Pipe used to obtain the a slice of the array. A slice has a size of the given slice size, so it's basically a
 * 'window' of the complete list itself. If the slice is not within the array itself, then it will return back the last
 * slice of the array.
 *
 * @param value      the array whose last slice to be obtained
 * @param startIndex slice index (not array)
 * @param sliceSize  the size of the slice
 * @return a slice of the array or the last one
 */
@Pipe({name: 'lastSlice'})
export class LastSlice implements PipeTransform {
	transform<E>(value: E[], startIndex: number, sliceSize: number): E[] {
		let lastSliceStartIndex = startIndex * sliceSize;
		let lastSliceEndIndex = lastSliceStartIndex + sliceSize;

		// If the start index is bigger than the last index of the array, then default back to the last slice index.
		if (lastSliceStartIndex > value.length - 1) {
			lastSliceStartIndex = Math.floor((value.length - 1) / sliceSize) * sliceSize;
			lastSliceEndIndex = value.length;
		}

		return value.slice(lastSliceStartIndex, lastSliceEndIndex);
	}
}

/**
 * Simple pipe used to filter out an array based on a property.
 *
 * @param array    the array to be filtered
 * @param propName the property name
 * @param value    the value of the property to be used to filter the array
 * @return the array after filtered
 */
@Pipe({name: 'filterProp'})
export class PropertyFilterPipe implements PipeTransform {
	transform<E, K extends keyof E>(array: E[], propName: K, value: E[K]): E[] {
		return array.filter(el => el[propName] === value);
	}
}

// % protected region % [Add any additional pipes here] off begin
// % protected region % [Add any additional pipes here] end
