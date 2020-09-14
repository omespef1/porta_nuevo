import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DxDataGridModule, DxFormModule, DxLoadPanelModule } from "devextreme-angular";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InventaryCellarComponent } from "./inventary-cellar.component";




const routes: Routes = [
  {
    path: '',
    component: InventaryCellarComponent
  }
];
@NgModule({
  declarations: [InventaryCellarComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    DxDataGridModule,
    DxFormModule,
    NgbModule,
    DxLoadPanelModule
  ]
})
export class InventaryCellarModule { }
