import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ThirdPartiesComponent } from './third-parties.component';
import { FormsModule } from "@angular/forms";
import { DxDataGridModule, DxFormModule, DxLoadPanelModule } from "devextreme-angular";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


const routes: Routes = [
  {
    path: '',
    component: ThirdPartiesComponent
  }
];
@NgModule({
  declarations: [ThirdPartiesComponent],
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

export class ThirdPartiesModule {
 }
