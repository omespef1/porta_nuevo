import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventaryMovementQueryComponent } from './inventary-movement-query.component';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { DxDataGridModule, DxFormModule, DxSelectBoxModule, DxLookupModule, DxToolbarModule, DxButtonModule, DxLoadIndicatorModule } from "devextreme-angular";



const routes: Routes = [
  {
    path: '',
    component: InventaryMovementQueryComponent
  }
];
@NgModule({
  declarations: [InventaryMovementQueryComponent],
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
})
export class InventaryMovementQueryModule { }
