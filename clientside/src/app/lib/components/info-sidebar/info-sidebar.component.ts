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

import {Component, HostBinding, Input, Output, EventEmitter} from '@angular/core';
import {AbstractComponent} from '../abstract.component';
import {AbstractModel, ModelPropertyType} from '../../models/abstract.model';
import {AbstractModelAudit, AuditQueryType} from '../../../models/model.state';
import * as _ from 'lodash';
import * as moment from 'moment';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

interface AuditContent {
	label: string;
	value: string;
}

@Component({
	selector: 'div[cb-sidebar]',
	templateUrl: './info-sidebar.component.html',
	styleUrls: [
		'./info-sidebar.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class InfoSideBarComponent<E extends AbstractModel, T extends AbstractModelAudit<E>> extends AbstractComponent {
	@HostBinding('class.sidebar')
	hostClass: boolean = true;

	@Input()
	model: E;

	@Input()
	audits: T[] = [];

	@Output('close')
	closeEventEmitter: EventEmitter<null> = new EventEmitter();

	/** The current selected audit content item index */
	selectedListItem = -1;

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	/**
	 * Given the list of audits return back a list of messages to be displayed on the HTML structure.
	 */
	getFormattedAudits(): { timestamp: string, message: string }[] {
		const formattedAudits = [];

		// Filter and then get the history of this model.
		const filteredAudits = this.audits.filter(audit => audit.entity.id === this.model.id);

		// Now calculate and retrieve the string for the audit.
		for (let i = 0; i < filteredAudits.length; i++) {
			const thisAudit = this.audits[i];

			let message = '';

			const content: AuditContent[] = [];
			const attributes = thisAudit.entity.getPropDisplayNames();

			switch (thisAudit.type) {
				case AuditQueryType.CREATE:
					message = `Created by ${thisAudit.authorFirstName} ${thisAudit.authorLastName}`;
					break;
				case AuditQueryType.UPDATE:
					const prevAudit = this.audits[i + 1];
					message = `Updated by ${thisAudit.authorFirstName} ${thisAudit.authorLastName}\n\n`;

					const diff = thisAudit.entity.difference(prevAudit.entity);
					for (const key of _.keys(diff)) {
						// Hide the ID
						if (key === 'id' || key === 'roleIds') {
							continue;
						}

						let value = this.formatDiff(diff[key], attributes, key);

						// % protected region % [Customise your content here] off begin
						// % protected region % [Customise your content here] end

						content.push({
							label: attributes[key].displayName,
							value: value
						});
					}
					break;
				default:
					message = `User ${thisAudit.authorFirstName} ${thisAudit.authorLastName} has deleted ${thisAudit.entity.id}`;
					break;
			}

			// Do not show any audits that are empty if they are not supposed to be
			// Empty audits reflect changes in the associations and cannot currently be displayed in a meaningful way
			if (thisAudit.type === AuditQueryType.CREATE || content.length !== 0) {
				formattedAudits.push({
					timestamp: thisAudit.timestamp,
					message: message,
					content: content
				});
			}
		}

		return formattedAudits;
	}

	/**
	 * Format the diff value for display
	 *
	 * @param value  The value to format
	 * @param attributes The collection of model properties for the current model
	 * @param key The current attribute key
	 *
	 * @returns The formatted value
	 */
	private formatDiff(value: any, attributes, key: string): string {
		if (value && Array.isArray(value)) {
			// Right now the only array that is expected is any attachments and attachments have names
			if (value.length > 0 && ('name' in value[0])) {
				value = value.map(file => file['name']).join(', ');
			}
		} else if (attributes[key].type === ModelPropertyType.DATETIME) {
			value = (value) ? value.toLocaleDateString() : '';
		} else if (attributes[key].type === ModelPropertyType.DATE) {
			value = (value) ? moment(value).format('DD MMM YYYY') : ''
		} else if (attributes[key].type === ModelPropertyType.TIME) {
			value = (value) ? moment(value).format('HH:mm:ss') : '';
		}

		// % protected region % [Customise your format diff before return here] off begin
		// % protected region % [Customise your format diff before return here] end

		return value;
	}

	/**
	 * Toggle the current content item based on the index.
	 *
	 * @param index The index to toggle
	 */
	toggleContent(index: number): void {
		this.selectedListItem = this.selectedListItem === index ? -1 : index;
	}

	onCloseClicked() {
		// % protected region % [Add any additional onCloseClicked logic before the main body here] off begin
		// % protected region % [Add any additional onCloseClicked logic before the main body here] end

		this.closeEventEmitter.emit(null);

		// % protected region % [Add any additional onCloseClicked logic after the main body here] off begin
		// % protected region % [Add any additional onCloseClicked logic after the main body here] end
	}
}
