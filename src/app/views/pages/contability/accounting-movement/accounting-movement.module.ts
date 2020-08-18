import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingMovementComponent } from './accounting-movement.component';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { DxDataGridModule, DxFormModule, DxSelectBoxModule, DxLookupModule, DxToolbarModule, DxButtonModule, DxLoadIndicatorModule } from 'devextreme-angular';

const routes: Routes = [
  {
    path: '',
    component: AccountingMovementComponent
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
    DxToolbarModule,DxButtonModule,DxLoadIndicatorModule
  ],
  declarations: [AccountingMovementComponent]
})
export class AccountingMovementModule { }
