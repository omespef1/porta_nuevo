import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DxDataGridModule, DxFormModule, DxLoadPanelModule } from "devextreme-angular";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InventaryMeaasurentUnityComponent } from "./inventary-meaasurent-unity.component";




const routes: Routes = [
  {
    path: '',
    component: InventaryMeaasurentUnityComponent
  }
];
@NgModule({
  declarations: [InventaryMeaasurentUnityComponent],
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
export class InventaryMeaasurentUnityModule { }
