import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchOfficeComponent } from './branch-office.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DxDataGridModule, DxFormModule } from "devextreme-angular";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




const routes: Routes = [
  {
    path: '',
    component: BranchOfficeComponent
  }
];
@NgModule({
  declarations: [BranchOfficeComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    DxDataGridModule,
    DxFormModule,
    NgbModule,
  ]
})
export class BranchOfficeModule { }
