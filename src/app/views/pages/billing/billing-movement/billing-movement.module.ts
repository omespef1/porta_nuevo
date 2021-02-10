import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule, DxFormModule, DxLoadPanelModule, DxSelectBoxModule, DxLookupModule, DxToolbarModule, DxButtonModule, DxLoadIndicatorModule, DxPopupModule, DxTextBoxModule, DxNumberBoxModule } from 'devextreme-angular';
import {  NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BillingMovementComponent } from './billing-movement.component';

const routes: Routes = [
  {
    path: '',
    component: BillingMovementComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    DxDataGridModule,
    DxFormModule,
    DxSelectBoxModule,
    DxLookupModule,
    DxTextBoxModule,
    DxPopupModule,
    DxNumberBoxModule,
    DxToolbarModule,DxButtonModule,DxLoadIndicatorModule
  ],
  declarations: [BillingMovementComponent]
})
export class BillingMovementModule { }
