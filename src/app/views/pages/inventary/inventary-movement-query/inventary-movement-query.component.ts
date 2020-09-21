import { Component, OnInit } from '@angular/core';

import { InventaryMovementService } from '../../../../core/inventary/_services/inventary-movement.service';
import { InventaryMovementGet } from '../../../../core/inventary/models/inventary-movement.model';

@Component({
  selector: 'kt-inventary-movement-query',
  templateUrl: './inventary-movement-query.component.html',
  styleUrls: ['./inventary-movement-query.component.scss']
})
export class InventaryMovementQueryComponent implements OnInit {

  Empr_Codigo: number;
	constructor(private _accouinting: InventaryMovementService) {}
	data: InventaryMovementGet[] = [];
	tasksDataSourceStorage: any;
	ngOnInit() {

    this.GetAllAccountingsMovements();
  }
	GetAllAccountingsMovements() {
		this._accouinting.GetAllInventaryMovements().subscribe((data) => {
			if (data.ObjTransaction) {
        this.data = data.ObjTransaction;
			}
		});
	}
	getState(rowData){
    return rowData.movi_estado=='I'?'Inactivo':'Activo';
}

getMoviClamov(rowData){
  return rowData.movi_clamov=='E'?'Entrada':'Salida';
}
}
