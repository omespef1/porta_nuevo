import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { DxDataGridModule, DxFormModule, DxSelectBoxModule, DxLookupModule, DxToolbarModule, DxButtonModule, DxLoadIndicatorModule } from 'devextreme-angular';
import { InventaryMovementComponent } from "./inventary-movement.component";

const routes: Routes = [
  {
    path: '',
    component: InventaryMovementComponent
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
  declarations: [InventaryMovementComponent]
})
export class InventaryMovementModule { }
