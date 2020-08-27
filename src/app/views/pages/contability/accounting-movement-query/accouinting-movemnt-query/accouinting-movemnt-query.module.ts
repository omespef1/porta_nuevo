import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccouintingMovemntQueryComponent } from './accouinting-movemnt-query.component';
import { DxDataGridModule, DxTemplateModule, DxFormModule, DxSelectBoxModule, DxLookupModule, DxToolbarModule, DxButtonModule, DxLoadIndicatorModule } from "devextreme-angular";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";


const routes: Routes = [
  {
    path: '',
    component: AccouintingMovemntQueryComponent
  }
];
@NgModule({
  declarations: [AccouintingMovemntQueryComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    DxDataGridModule,
    DxFormModule,
    DxSelectBoxModule,
    DxLookupModule,
    DxToolbarModule,DxButtonModule,DxLoadIndicatorModule
  ]
})
export class AccouintingMovemntQueryModule { }
