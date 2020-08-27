import { Component, OnInit } from "@angular/core";
import { AccountingMovementService } from "../../../../../core/contability/_services/accounting-movement.service";

import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { AccountingMovementGet } from '../../../../../core/contability/_models/accounting-movement.model';

@Component({
	selector: "kt-accouinting-movemnt-query",
	templateUrl: "./accouinting-movemnt-query.component.html",
	styleUrls: ["./accouinting-movemnt-query.component.scss"],
})
export class AccouintingMovemntQueryComponent implements OnInit {
	Empr_Codigo: number;
	constructor(private _accouinting: AccountingMovementService) {}
	data: AccountingMovementGet[] = [];
	tasksDataSourceStorage: any;
	ngOnInit() {

    this.GetAllAccountingsMovements();
  }
	GetAllAccountingsMovements() {
		this._accouinting.GetAllAcoountingMovements().subscribe((data) => {
			if (data.ObjTransaction) {
        this.data = data.ObjTransaction;
			}
		});
	}

	getState(rowData){
			return rowData.movc_estado=='I'?'Inactivo':'Activo';
	}


	// getTasks(key) {
    //     let item = this.tasksDataSourceStorage.find((i) => i.key === key);
    //     if (!item) {
    //         item = {
    //             key: key,
    //             dataSourceInstance: new DataSource({
    //                 store: new ArrayStore({
    //                     data: this.tasks,
    //                     key: "movc_consec"
    //                 }),
    //                 filter: ["movc_consec", "=", key]
    //             })
    //         };
    //         this.tasksDataSourceStorage.push(item)
    //     }
    //     return item.dataSourceInstance;
    // }
}
