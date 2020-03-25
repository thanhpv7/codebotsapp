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

import {Component, OnInit, Input, ElementRef, HostBinding, Injector, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {forkJoin} from 'rxjs';
import {AbstractComponent} from '../abstract.component';
import {ButtonAccentColour, ButtonStyle, IconPosition} from '../button/button.component';
import {AbstractModel} from '../../models/abstract.model';
import {FileModel} from '../../models/file.model';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Type used to filter the keys whose values are of a certain type from the original type.
 */
type FilteredKeys<T, U> = { [P in keyof T]: T[P] extends U ? P : never }[keyof T];

@Component({
	selector: 'div[cb-file-upload]',
	templateUrl: './file.upload.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: FileUploadComponent,
			multi: true
		},
		// % protected region % [Add any additional component providers here] off begin
		// % protected region % [Add any additional component providers here] end
	],
	styleUrls: [
		'./file.upload.component.scss',
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class FileUploadComponent<E extends AbstractModel> extends AbstractComponent implements OnInit, ControlValueAccessor {
	buttonAccentColour = ButtonAccentColour;
	buttonStyle = ButtonStyle;
	iconPos = IconPosition;

	onChange: (arg: any) => void;

	@HostBinding('class.upload')
	hostUploadClass = true;

	@HostBinding('class.upload__file')
	hostUploadFileClass = true;

	/**
	 * The underlying input element. This is required so we can clear the file when the user hit the delete button.
	 */
	@ViewChild('fileUpload', { static: false })
	fileUpload: ElementRef<HTMLInputElement>;

	/**
	 * Whether the user is allowed to select and upload multiple files.
	 */
	@Input()
	isMultiple: boolean = true;

	/**
	 * The entity model whose attribute is of type FileModel.
	 */
	@Input()
	model: E;

	/**
	 * The attribute name whose value is of type FileModel.
	 */
	@Input()
	fileField: FilteredKeys<E, FileModel>;

	/**
	 * The label for this component.
	 */
	@Input()
	label: string;

	/**
	 * The file that was selected by the user recently.
	 */
	fileModels: FileModel[] = [];

	/**
	 * The file that was selected by the user previously.
	 */
	previousFileModels: FileModel[] = [];

	/**
	 * The form control for this component. We use this to handle form group and validation.
	 */
	formControl: FormControl;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		private injector?: Injector,
		// % protected region % [Add any additional constructor parameters here] off begin
		// % protected region % [Add any additional constructor parameters here] end
	) {
		// % protected region % [Add any additional constructor logic before the main body here] off begin
		// % protected region % [Add any additional constructor logic before the main body here] end

		super(
			// % protected region % [Add any additional constructor arguments here] off begin
			// % protected region % [Add any additional constructor arguments here] end
		);

		// % protected region % [Add any additional constructor logic after the main body here] off begin
		// % protected region % [Add any additional constructor logic after the main body here] end
	}

	ngOnInit() {
		// % protected region % [Add any additional ngOnInit logic before the main body here] off begin
		// % protected region % [Add any additional ngOnInit logic before the main body here] end

		if (this.injector) {
			this.formControl = this.injector.get(NgControl, null);
		}

		if (this.model[this.fileField]) {
			this.previousFileModels = this.model[this.fileField] as unknown as FileModel[];

			this.previousFileModels.forEach(file => file.doDelete = false);
		}

		// % protected region % [Add any additional ngOnInit logic after the main body here] off begin
		// % protected region % [Add any additional ngOnInit logic after the main body here] end
	}

	writeValue(value: null) {
		// % protected region % [Add any additional writeValue logic before the main body here] off begin
		// % protected region % [Add any additional writeValue logic before the main body here] end
		// % protected region % [Add any additional writeValue logic after the main body here] off begin
		// % protected region % [Add any additional writeValue logic after the main body here] end
	}

	registerOnChange(fn: (arg: any) => void) {
		// % protected region % [Add any additional registerOnChange logic before the main body here] off begin
		// % protected region % [Add any additional registerOnChange logic before the main body here] end

		this.onChange = fn;

		// % protected region % [Add any additional registerOnChange logic after the main body here] off begin
		// % protected region % [Add any additional registerOnChange logic after the main body here] end
	}

	registerOnTouched(fn: (arg: any) => void) {
		// % protected region % [Add any additional registerOnTouched logic here] off begin
		// % protected region % [Add any additional registerOnTouched logic here] end
	}

	/**
	 * Triggered when the user clicks the delete file button.
	 */
	onDeleteFile(fileModel: FileModel) {
		// % protected region % [Add any additional onDeleteFile logic before the main body here] off begin
		// % protected region % [Add any additional onDeleteFile logic before the main body here] end

		this.fileModels.splice(this.fileModels.indexOf(fileModel), 1);

		this.onChange([...this.previousFileModels, ...this.fileModels]);

		// % protected region % [Add any additional onDeleteFile logic after the main body here] off begin
		// % protected region % [Add any additional onDeleteFile logic after the main body here] end
	}

	/**
	 * Triggered when the user wants to delete the old file.
	 */
	onDeleteOldFile(fileModel: FileModel) {
		// % protected region % [Add any additional onDeleteOldFile logic before the main body here] off begin
		// % protected region % [Add any additional onDeleteOldFile logic before the main body here] end

		this.previousFileModels[this.previousFileModels.indexOf(fileModel)].doDelete = true;

		this.onChange([...this.previousFileModels, ...this.fileModels]);

		// % protected region % [Add any additional onDeleteOldFile logic after the main body here] off begin
		// % protected region % [Add any additional onDeleteOldFile logic after the main body here] end
	}

	/**
	 * Listener for when the user selects a new file.
	 */
	onFileChange($event) {
		// % protected region % [Add any additional onFileChange logic before the main body here] off begin
		// % protected region % [Add any additional onFileChange logic before the main body here] end

		const files = $event.target.files as FileList;

		if (files) {
			forkJoin(Array.from(files).map(file => FileModel.create(file))).subscribe(fileModels => {
				this.fileModels.push(...fileModels);
				this.onChange([...this.previousFileModels, ...this.fileModels]);
				this.fileUpload.nativeElement.value = '';
			});
		}

		// % protected region % [Add any additional onFileChange logic after the main body here] off begin
		// % protected region % [Add any additional onFileChange logic after the main body here] end
	}

	/**
	 * Sets the 'disabled' property on the input element.
	 * This would be set with the form control
	 * @param isDisabled The disabled value
	 */
	setDisabledState(isDisabled: boolean): void {
		// % protected region % [Add any additional setDisabledState logic before the main body here] off begin
		// % protected region % [Add any additional setDisabledState logic before the main body here] end

		this.isDisabled = isDisabled;

		// % protected region % [Add any additional setDisabledState logic after the main body here] off begin
		// % protected region % [Add any additional setDisabledState logic after the main body here] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
