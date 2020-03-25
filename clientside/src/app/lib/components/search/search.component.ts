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

import {Component, EventEmitter, SimpleChanges, HostBinding, Input, OnInit, OnChanges, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {catchError, debounceTime, filter} from 'rxjs/operators';
import {AbstractComponent} from '../abstract.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * Search Component
 */
@Component({
	selector: 'form[cb-search]',
	templateUrl: './search.component.html',
	styleUrls: [
		'./search.component.scss',
		// % protected region % [Add any additional SCSS imports here] off begin
		// % protected region % [Add any additional SCSS imports here] end
	],
	// % protected region % [Add any additional component configurations here] off begin
	// % protected region % [Add any additional component configurations here] end
})
export class SearchComponent extends AbstractComponent implements OnInit {
	/**
	 * The processor for the text, debounce the time and filter by the length of the text
	 * @type {Subject<any>}
	 */
	private searchTextProcessor: Subject<string> = new Subject();

	/**
	 * role attribute in the form element
	 * @type {string}
	 */
	@HostBinding('attr.role')
	elementRole = 'search';

	/**
	 * Arial Label attribute in teh form element
	 * @type {string}
	 */
	@HostBinding('attr.aria-label')
	ariaLabel = 'Search';

	/**
	 * Class on the form element
	 * @type {string}
	 */
	@Input()
	@HostBinding('class')
	className = '';

	/**
	 * The text displayed in placeholder of the serach box
	 */
	@Input()
	placeholder: any = '';

	/**
	 * Whether the search button is visible
	 * @type {boolean}
	 */
	@Input()
	buttonVisible = true;

	/**
	 * The default value for the search to display
	 */
	@Input()
	searchText = '';
	
	/**
	 * The interval time to debounce the search. In milliseconds.
	 * @type {number}
	 */
	@Input()
	debounceTime = 500;

	/**
	 * The minimum length of the text to be able trigger the search
	 * @type {number}
	 */
	@Input()
	minLength = 2;

	/**
	 * Emitter to broadcast value of the search event
	 */
	@Output('search')
	searchEmitter: EventEmitter<any> = new EventEmitter();

	// % protected region % [Add any additional class fields here] off begin
	// % protected region % [Add any additional class fields here] end

	constructor(
		// % protected region % [Add any additional DI here] off begin
		// % protected region % [Add any additional DI here] end
	) {
		// % protected region % [Add any additional constructor logic before default process here] off begin
		// % protected region % [Add any additional constructor logic before default process here] end

		super(
			// % protected region % [Add any additional arguments here for the parent constructor] off begin
			// % protected region % [Add any additional arguments here for the parent constructor] end
		);

		// % protected region % [Add any additional constructor logic before default process here] off begin
		// % protected region % [Add any additional constructor logic before default process here] end
	}

	// % protected region % [Add any additional class constructors here] off begin
	// % protected region % [Add any additional class constructors here] end

	ngOnInit() {
		// % protected region % [Add any additional ngOnInit logic before default process here] off begin
		// % protected region % [Add any additional ngOnInit logic before default process here] end

		// Use the observable to filter and debounce the search input
		this.searchTextProcessor.pipe(
			// % protected region % [Add any additional searchTextProcessor piping logic before the main body here] off begin
			// % protected region % [Add any additional searchTextProcessor piping logic before the main body here] end

			// only do search when the input text is long enough or the text is clear
			filter(text => text.length >= this.minLength || text.length === 0),
			// debounce the time to avoid flooding request
			debounceTime(this.debounceTime),
			catchError(error => {
				// % protected region % [Add your error handler here] off begin
				console.error('Error happens when user input in the search box');
				throw error;
				// % protected region % [Add your error handler here] end
			}),

			// % protected region % [Add any additional searchTextProcessor piping logic after the main body here] off begin
			// % protected region % [Add any additional searchTextProcessor piping logic after the main body here] end
		).subscribe(
			(text) => {
				// % protected region % [Add any additional logic here before the main process of subscribe] off begin
				// % protected region % [Add any additional logic here before the main process of subscribe] end

				this.searchEmitter.emit(text);

				// % protected region % [Add any additional logic here after the main process of subscribe] off begin
				// % protected region % [Add any additional logic here after the main process of subscribe] end
			}
		);

		// % protected region % [Add any additional ngOnInit logic after default process here] off begin
		// % protected region % [Add any additional ngOnInit logic after default process here] end
	}

	/**
	 * Listen to the event when user type into the input
	 */
	searchInputChange($event) {
		// % protected region % [Add any additional logic before search input event] off begin
		// % protected region % [Add any additional logic before search input event] end

		this.searchTextProcessor.next($event.target.value);

		// % protected region % [Add any additional logic before search  event] off begin
		// % protected region % [Add any additional logic before search  event] end
	}
	
	/**
	 * Listen to the enter key press to force emmit the search event
	 */
	forceTriggerSearch() {
		// % protected region % [Add any additional logic before force trigger search event] off begin
		// % protected region % [Add any additional logic before force trigger search event] end

		this.searchEmitter.emit(this.searchText);

		// % protected region % [Add any additional logic before force trigger search event] off begin
		// % protected region % [Add any additional logic before force trigger search event] end
	}

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
