import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule, DxFormModule, DxSelectBoxModule, DxLookupModule, DxToolbarModule, DxButtonModule, DxLoadIndicatorModule, DxLoadPanelModule } from 'devextreme-angular';
import { BillingPriceListComponent } from './billing-price-list.component';
import { NgbAlertModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {
    path: '',
    component: BillingPriceListComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    DxDataGridModule,
    DxFormModule,
    NgbModule,
    DxLoadPanelModule
  ],
  declarations: [BillingPriceListComponent]
})
export class BillingPriceModule { }
