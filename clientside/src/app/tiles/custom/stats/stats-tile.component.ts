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

import {Component} from '@angular/core';

// % protected region % [Add any additional imports here] on begin
import {ElementRef, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {Store} from '@ngrx/store';
import {
	getFishCollectionModels,
	getFishCollectionState
} from '../../../models/fish/fish.model.selector';
import {Observable} from 'rxjs';
import {FishModel} from '../../../models/fish/fish.model';
import * as modelAction from '../../../models/fish/fish.model.action';
import {QueryOperation} from '../../../lib/services/http/interfaces';
import { FishModelState } from 'src/app/models/fish/fish.model.state';
// % protected region % [Add any additional imports here] end

@Component({
	selector: 'cb-stats-tile',
	templateUrl: './stats-tile.component.html',
	styleUrls: ['./stats-tile.component.scss']
})
export class StatsTileComponent {
	// % protected region % [Add any additional class fields here] on begin
	aliveFishes: Observable<FishModel[]>;
	aliveFishesCount: number = 0;
	aliveFishesId = 'alive-fish';

	deadFishes: Observable<FishModel[]>;
	deadFishesCount: number = 0;
	deadFishesId = 'dead-fish';

	constructor(
		private readonly store: Store<{ model: FishModelState }>,
	) {

		this.store.dispatch(new modelAction.InitialiseFishCollectionState({
			collectionId: this.aliveFishesId
		}));

		this.aliveFishes = this.store.select(getFishCollectionModels, this.aliveFishesId);

		this.store.dispatch(new modelAction.FetchFishModelsWithQuery({
				queryParams: {
					pageIndex: 0,
					pageSize: 1000,
					where: [
						[
							{
								path: 'fishAlive',
								operation: QueryOperation.EQUAL,
								value: 'true'
							}
						]
					]

				},
				collectionId: this.aliveFishesId
			},
		));


		this.store.select(getFishCollectionState, this.aliveFishesId).subscribe(collectionStatus => {
			this.aliveFishesCount = collectionStatus.collectionCount;
			this.updateChart();
		});

		// Get Dead Fish
		this.store.dispatch(new modelAction.InitialiseFishCollectionState({
			collectionId: this.deadFishesId
		}));

		this.aliveFishes = this.store.select(getFishCollectionModels, this.deadFishesId);

		this.store.dispatch(new modelAction.FetchFishModelsWithQuery({
				queryParams: {
					pageIndex: 0,
					pageSize: 1000,
					where: [
						[
							{
								path: 'fishAlive',
								operation: QueryOperation.EQUAL,
								value: 'false'
							}
						]
					]

				},
				collectionId: this.deadFishesId
			},
		));


		this.store.select(getFishCollectionState, this.deadFishesId).subscribe(collectionStatus => {
			this.deadFishesCount = collectionStatus.collectionCount;
			this.updateChart();
		});

	}

	updateChart() {
		if (this.chart) {
			this.chart.data.datasets[0].data = [
				this.aliveFishesCount,
				this.deadFishesCount,
			];
			this.chart.update();
		}
	}



	@ViewChild('canvas')
	canvasEl: ElementRef;

	chart: Chart;

	ngAfterViewInit() {
		const ctx = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');

		this.chart = new Chart(ctx, {
			// The type of chart we want to create
			type: 'bar',

			// The data for our dataset
			data: {
				labels: ['Alive', 'Dead'],
				datasets: [{
					label: 'Fish count',
					backgroundColor: 'rgb(255, 99, 132)',
					borderColor: 'rgb(255, 99, 132)',
					data: [this.aliveFishesCount, this.deadFishesCount]
				}]
			},
			// Configuration options go here
			options: {
				title: {
					text: 'Fish Count',
					display: true
				},
				scales: {
					xAxes: [{
						display: true
					}],
					yAxes: [{
						display: true,
						ticks: {
							beginAtZero: true
						}
					}],
				}
			}
		});
	}
	// % protected region % [Add any additional class fields here] end

	// % protected region % [Add any additional class methods here] off begin
	// % protected region % [Add any additional class methods here] end
}
