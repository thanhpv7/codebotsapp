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

import {AbstractModel, ModelProperty} from './abstract.model';
import * as _ from 'lodash';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class FileModel extends AbstractModel {

	name: string;
	size: number;
	content: string;
	doDelete: boolean = false;

	static create(file: File): Observable<FileModel> {
		return FileModel.readFileContent(file).pipe(
			map(fileContent => {
				const newModel = new FileModel();
				newModel.name = file.name;
				newModel.modified = new Date(file.lastModified);
				newModel.size = file.size;
				newModel.content = fileContent;
				return newModel;
			})
		);
	}

	private static readFileContent(file: File): Observable<string> {
		return new Observable(observer => {
			const fileReader = new FileReader();
			fileReader.onload = () => {
				observer.next(fileReader.result as string);
				observer.complete();
			};
			fileReader.onerror = (err) => observer.error(err);
			fileReader.readAsDataURL(file);
		});
	}

	difference(other: AbstractModel): any {
		if (!(other instanceof FileModel)) {
			return {};
		}

		const diff = {};

		for (const key of _.keys(this)) {
			const thisValue = this[key];
			const otherValue = other[key];
			if (thisValue !== otherValue) {
				diff[key] = thisValue;
			}
		}

		return _.omit(diff, [
			'created',
			'modified',
		]);
	}

	getPropDisplayNames(): { [p: string]: ModelProperty } {
		return {};
	}

	toJSON() {
		return {
			...super.toJSON(),
			name: this.name,
			size: this.size,
			content: this.content,
			doDelete: this.doDelete
		};
	}
}
