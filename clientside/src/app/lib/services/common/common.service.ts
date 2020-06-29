import {Injectable} from '@angular/core';
import {ModelProperty} from "../../models/abstract.model";

@Injectable({
	providedIn: 'root'
})
export class CommonService {

	constructor() {
	}

	downloadFile(data, filename = 'data', headerList: ModelProperty[]) {
		let csvData = this.ConvertToCSV(data, headerList);
		console.log(csvData)
		let blob = new Blob(['\ufeff' + csvData], {type: 'text/csv;charset=utf-8;'});
		let dwldLink = document.createElement("a");
		let url = URL.createObjectURL(blob);
		let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
		if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
			dwldLink.setAttribute("target", "_blank");
		}
		dwldLink.setAttribute("href", url);
		dwldLink.setAttribute("download", filename + ".csv");
		dwldLink.style.visibility = "hidden";
		document.body.appendChild(dwldLink);
		dwldLink.click();
		document.body.removeChild(dwldLink);
	}

	ConvertToCSV(objArray, headerList: ModelProperty[]) {
		debugger;
		let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
		let str = '';
		let row = 'S.No,';

		for (let index in headerList) {
			row += headerList[index].displayName + ',';
		}
		row = row.slice(0, -1);
		str += row + '\r\n';
		for (let i = 0; i < array.length; i++) {
			let line = (i + 1) + '';
			for (let index in headerList) {
				let head = headerList[index].displayName;

				line += ',' + array[i][head];
			}
			str += line + '\r\n';
		}
		return str;
	}
}
