import { Component, OnInit } from '@angular/core';

import { MeasurentUnityService } from '../../../../core/inventary/_services/measurent-unity.service';
import { BusinessService } from '../../../../core/security/_services/business.service';
import { MeasurentUnity } from '../../../../core/inventary/models/measurent-unity.model';
import { Business } from '../../../../core/security/models/business.model';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'kt-inventary-meaasurent-unity',
  templateUrl: './inventary-meaasurent-unity.component.html',
  styleUrls: ['./inventary-meaasurent-unity.component.scss']
})
export class InventaryMeaasurentUnityComponent implements OnInit {

  data: MeasurentUnity[] = [];
	businessData: Business[] = [];
	successMessage: string=null;
	loading=false;
	editing: {
		allowUpdating: true; // Enables editing
		allowAdding: true; // Enables insertion
		allowDeleting: true; // Enables removing
	};
	allowMovement = [
		{ value: "S", text: "Si" },
		{ value: "N", text: "No" },
	];
	constructor(
		private _measurentUnity: MeasurentUnityService,
		private _business: BusinessService
	) {
    this.GetAllBusiness();
  }

	ngOnInit() {
	
		this.GetAllMeasurentUnity();
	}

	GetAllMeasurentUnity() {
		this.loading=true;
		this._measurentUnity.GetAllMeasurentUnity().subscribe((data) => {
			this.loading=false;
			console.log(data);
			if (data.ObjTransaction) {
				console.log(data);
				this.data = data.ObjTransaction;
			}
		});
	}

	async GetAllBusiness() {
		this._business.GetAllBusiness().subscribe((data) => {
			if (data.ObjTransaction) {
				console.log(data);
				this.businessData = data.ObjTransaction;
			}
		});
	}

	updateMeasurentUnity(log: any) {
		console.log(log.key);
		this._measurentUnity.updateMeasurentUnity(log.key).subscribe((resp) => {
			if (resp.Retorno == 1) {
        console.log('respuesta obtenida');
	   notify('Actualizado!','success',3000);
			}
		});
	}

	addMeasurentUnity(log: any) {
		this._measurentUnity.addMeasurentUnity(log.key).subscribe((resp) => {
			console.log(resp);
			if (resp.Retorno == -1) {
				console.log("actualizado");
				notify('Unidad de medida creada!','success',3000);
			}
		});
	}
}
