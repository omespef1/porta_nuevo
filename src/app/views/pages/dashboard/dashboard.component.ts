// Angular
import { Component, OnInit } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';
// Services
import { LayoutConfigService } from '../../../core/_base/layout';
// Widgets model
import { SparklineChartOptions } from '../../../core/_base/layout';
import { Widget4Data } from '../../partials/content/widgets/widget4/widget4.component';
// NGRX
import { select, Store } from '@ngrx/store';
import { currentUser, Logout, User } from '../../../core/auth';
import { AppState } from  '../../../core/reducers';

@Component({
	selector: 'kt-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	chartOptions1: SparklineChartOptions;
	chartOptions2: SparklineChartOptions;
	chartOptions3: SparklineChartOptions;
	chartOptions4: SparklineChartOptions;
	widget4_1: Widget4Data;
	widget4_2: Widget4Data;
	widget4_3: Widget4Data;
	widget4_4: Widget4Data;

	constructor(private layoutConfigService: LayoutConfigService,private store: Store<AppState>) {
	}
	logout(){
		this.store.dispatch(new Logout());
	}
	ngOnInit(): void {
		this.chartOptions1 = {
			data: [10, 14, 18, 11, 9, 12, 14, 17, 18, 14],
			color: this.layoutConfigService.getConfig('colors.state.brand'),
			border: 3
		};
		this.chartOptions2 = {
			data: [11, 12, 18, 13, 11, 12, 15, 13, 19, 15],
			color: this.layoutConfigService.getConfig('colors.state.danger'),
			border: 3
		};
		this.chartOptions3 = {
			data: [12, 12, 18, 11, 15, 12, 13, 16, 11, 18],
			color: this.layoutConfigService.getConfig('colors.state.success'),
			border: 3
		};
		this.chartOptions4 = {
			data: [11, 9, 13, 18, 13, 15, 14, 13, 18, 15],
			color: this.layoutConfigService.getConfig('colors.state.primary'),
			border: 3
		};

		// @ts-ignore
		this.widget4_1 = shuffle([
			{
				pic: './assets/media/files/doc.svg',
				title: 'Metronic Documentation',
				url: 'https://keenthemes.com.my/metronic',
			}, {
				pic: './assets/media/files/jpg.svg',
				title: 'Project Launch Evgent',
				url: 'https://keenthemes.com.my/metronic',
			}, {
				pic: './assets/media/files/pdf.svg',
				title: 'Full Developer Manual For 4.7',
				url: 'https://keenthemes.com.my/metronic',
			}, {
				pic: './assets/media/files/javascript.svg',
				title: 'Make JS Great Again',
				url: 'https://keenthemes.com.my/metronic',
			}, {
				pic: './assets/media/files/zip.svg',
				title: 'Download Ziped version OF 5.0',
				url: 'https://keenthemes.com.my/metronic',
			}, {
				pic: './assets/media/files/pdf.svg',
				title: 'Finance Report 2016/2017',
				url: 'https://keenthemes.com.my/metronic',
			},
		]);
		// @ts-ignore
		this.widget4_2 = shuffle([
			{
				pic: './assets/media/users/100_4.jpg',
				username: 'Anna Strong',
				desc: 'Visual Designer,Google Inc.',
				url: 'https://keenthemes.com.my/metronic',
				buttonClass: 'btn-label-brand'
			}, {
				pic: './assets/media/users/100_14.jpg',
				username: 'Milano Esco',
				desc: 'Product Designer, Apple Inc.',
				url: 'https://keenthemes.com.my/metronic',
				buttonClass: 'btn-label-warning'
			}, {
				pic: './assets/media/users/100_11.jpg',
				username: 'Nick Bold',
				desc: 'Web Developer, Facebook Inc.',
				url: 'https://keenthemes.com.my/metronic',
				buttonClass: 'btn-label-danger'
			}, {
				pic: './assets/media/users/100_1.jpg',
				username: 'Wilter Delton',
				desc: 'Project Manager, Amazon Inc.',
				url: 'https://keenthemes.com.my/metronic',
				buttonClass: 'btn-label-success'
			}, {
				pic: './assets/media/users/100_5.jpg',
				username: 'Nick Stone',
				desc: 'Visual Designer, Github Inc.',
				url: 'https://keenthemes.com.my/metronic',
				buttonClass: 'btn-label-dark'
			},
		]);
		// @ts-ignore
		this.widget4_3 = shuffle([
			{
				icon: 'flaticon-pie-chart-1 kt-font-info',
				title: 'Nueva versión de Seven liberada!',
				url: 'https://keenthemes.com.my/metronic',
				value: '+$500',
				valueColor: 'kt-font-info'
			}, {
				icon: 'flaticon-safe-shield-protection kt-font-success',
				title: 'Nuevo evento de tecnología en Bogotá.',
				url: 'https://keenthemes.com.my/metronic',
				value: '+$1260',
				valueColor: 'kt-font-success'
			}, {
				icon: 'flaticon2-line-chart kt-font-danger',
				title: 'Seven versión 2019 muy pronto..',
				url: 'https://keenthemes.com.my/metronic',
				value: '+$1080',
				valueColor: 'kt-font-danger'
			}, {
				icon: 'flaticon2-pie-chart-1 kt-font-primary',
				title: 'ale! Compra seven ahora con un 20% de descuento',
				url: 'https://keenthemes.com.my/metronic',
				value: '70% Off!',
				valueColor: 'kt-font-primary'
			}, {
				icon: 'flaticon2-rocket kt-font-brand',
				title: 'Nuevo portal de seven web en progreso!',
				url: 'https://keenthemes.com.my/metronic',
				value: '+134',
				valueColor: 'kt-font-brand'
			}, {
				icon: 'flaticon2-notification kt-font-warning',
				title: 'uevo portal de seven web en progreso!',
				url: 'https://keenthemes.com.my/metronic',
				value: '70% Off!',
				valueColor: 'kt-font-warning'
			}, {
				icon: 'flaticon2-file kt-font-focus',
				title: 'uevo portal de seven web en progreso!',
				url: 'https://keenthemes.com.my/metronic',
				value: '+13%',
				valueColor: 'kt-font-focus'
			},
		]);
		// @ts-ignore
		this.widget4_4 = shuffle([
			{
				pic: './assets/media/client-logos/logo5.png',
				title: 'Trump Themes',
				desc: 'Motronic',
				url: 'https://keenthemes.com.my/metronic',
				value: '+$2500',
				valueColor: 'kt-font-brand'
			}, {
				pic: './assets/media/client-logos/logo4.png',
				title: 'StarBucks',
				desc: 'Good Coffee & Snacks',
				url: 'https://keenthemes.com.my/metronic',
				value: '-$290',
				valueColor: 'kt-font-brand'
			}, {
				pic: './assets/media/client-logos/logo3.png',
				title: 'Phyton',
				desc: 'Un lenguaje de programaciòn',
				url: 'https://keenthemes.com.my/metronic',
				value: '+$17',
				valueColor: 'kt-font-brand'
			}, {
				pic: './assets/media/client-logos/logo2.png',
				title: 'GreenMakers',
				desc: 'Test',
				url: 'https://keenthemes.com.my/metronic',
				value: '-$2.50',
				valueColor: 'kt-font-brand'
			}, {
				pic: './assets/media/client-logos/logo1.png',
				title: 'FlyThemes',
				desc: 'Test',
				url: 'https://keenthemes.com.my/metronic',
				value: '+200',
				valueColor: 'kt-font-brand'
			},
		]);
	}
}
