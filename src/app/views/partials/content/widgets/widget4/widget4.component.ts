// Angular
import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';
// Layout
import { LayoutConfigService } from '../../../../../core/_base/layout';

export interface Widget4Data {
	icon?: string;
	pic?: string;
	title?: string;
	username?: string;
	desc?: string;
	url?: string;
}

@Component({
	selector: 'kt-widget4',
	templateUrl: './widget4.component.html',
	styleUrls: ['./widget4.component.scss']
})
export class Widget4Component implements OnInit {
	// Public properties
	@Input() data: Widget4Data[];

	@ContentChild('actionTemplate') actionTemplate: TemplateRef<any>;

	/**
	 * Component constructor
	 *
	 * @param layoutConfigService: LayoutConfigService
	 */
	constructor(private layoutConfigService: LayoutConfigService) {
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
		// dummy data
		if (!this.data) {
			this.data = shuffle([
				{
					pic: './assets/media/files/doc.svg',
					title: 'Web services Documentación',
					url: 'https://keenthemes.com.my/metronic',
				}, {
					pic: './assets/media/files/jpg.svg',
					title: 'REST Documentación',
					url: 'https://keenthemes.com.my/metronic',
				}, {
					pic: './assets/media/files/pdf.svg',
					title: 'Manual',
					url: 'https://keenthemes.com.my/metronic',
				}, {
					pic: './assets/media/files/javascript.svg',
					title: 'SAC CASOS PDF',
					url: 'https://keenthemes.com.my/metronic',
				}, {
					pic: './assets/media/files/zip.svg',
					title: 'Descargar caso SAC PDF 564564 5.0',
					url: 'https://keenthemes.com.my/metronic',
				}, {
					pic: './assets/media/files/pdf.svg',
					title: 'Reporte financiero 2018/2019',
					url: 'https://keenthemes.com.my/metronic',
				},
			]);
		}
	}
}
