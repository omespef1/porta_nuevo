import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule, DxFormModule, DxLoadPanelModule } from 'devextreme-angular';
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
    NgbModule,
    DxLoadPanelModule
  ],
  declarations: [BillingMovementComponent]
})
export class BillingMovementModule { }
