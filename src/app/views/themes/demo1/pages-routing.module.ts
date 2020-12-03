// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './base/base.component';
import { ErrorPageComponent } from './content/error-page/error-page.component';
// Auth
import { AuthGuard } from '../../../core/auth';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: 'app/views/pages/dashboard/dashboard.module#DashboardModule'
			},
			{
				path: 'mail',
				loadChildren: 'app/views/pages/apps/mail/mail.module#MailModule'
			},		
			{
				path: 'accounting-movement', // <= Page URL
				loadChildren: 'app/views/pages/contability/accounting-movement/accounting-movement.module#AccountingMovementModule'
			  },
			  {
				path: 'accounting-movement-query', // <= Page URL
				loadChildren: 'app/views/pages/contability/accounting-movement-query/accouinting-movemnt-query/accouinting-movemnt-query.module#AccouintingMovemntQueryModule'
			  },
			  {
				path: 'branch-office', // <= Page URL
				loadChildren: 'app/views/pages/general/branch-office/branch-office.module#BranchOfficeModule'
			  },
			  {
				  path: 'inventary-movement',
				  loadChildren:'app/views/pages/inventary/inventary-movement/inventary-movement.module#InventaryMovementModule'
			  },
			  {
				  path:'inventary-movement-query',
				  loadChildren:'app/views/pages/inventary/inventary-movement-query/inventary-movement-query.module#InventaryMovementQueryModule'
			  },
			  {
				path: 'inventary-cellar',
				loadChildren:'app/views/pages/inventary/inventary-cellar/inventary-cellar.module#InventaryCellarModule'
			},
			{
				path: 'inventary-products',
				loadChildren:'app/views/pages/inventary/inventary-products/inventary-products.module#InventaryProductsModule'
			},
			{
				path: 'inventary-type-products',
				loadChildren:'app/views/pages/inventary/inventary-type-product/inventary-type-product.module#InventaryTypeProductModule'
			},
			{
				path: 'inventary-measurent-unity',
				loadChildren:'app/views/pages/inventary/inventary-meaasurent-unity/inventary-meaasurent-unity.module#InventaryMeaasurentUnityModule'
			},
			  {
				path: 'third-parties', // <= Page URL
				loadChildren: 'app/views/pages/general/third-parties/third-parties.module#ThirdPartiesModule'
			  },
			  {
				path: 'billing-price-list', // <= Page URL
				loadChildren :'app/views/pages/billing/billing-price.list/billing-price-list.module#BillingPriceModule',
			},					
			{
				path: 'user-management',
				loadChildren: 'app/views/pages/user-management/user-management.module#UserManagementModule'
			},
			{
				path: 'builder',
				loadChildren: 'app/views/themes/demo1/content/builder/builder.module#BuilderModule'
			},
			{
				path: 'error/403',
				component: ErrorPageComponent,
				data: {
					'type': 'error-v6',
					'code': 403,
					'title': '403... Access forbidden',
					'desc': 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator'
				}
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
			{path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {
}
