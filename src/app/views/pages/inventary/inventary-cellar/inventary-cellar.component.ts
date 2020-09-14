import { Component, OnInit } from '@angular/core';
import { Cellar } from '../../../../core/inventary/models/cellar.model';

import { CellarService } from '../../../../core/inventary/_services/cellar.service';
import notify from 'devextreme/ui/notify';
import { Business } from '../../../../core/security/models/business.model';
import { BusinessService } from '../../../../core/security/_services/business.service';
@Component({
  selector: 'kt-inventary-cellar',
  templateUrl: './inventary-cellar.component.html',
  styleUrls: ['./inventary-cellar.component.scss']
})
export class InventaryCellarComponent implements OnInit {

  data: Cellar[] = [];
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
		private _cellar: CellarService,
		private _business: BusinessService
	) {
    
  }

	ngOnInit() {
		this.GetAllBusiness();
		this.GetAllCellar();
	}

	GetAllCellar() {
		this.loading=true;
		this._cellar.GetAllCellar().subscribe((data) => {
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

	updateCellar(log: any) {
		console.log(log.key);
		this._cellar.updateCellar(log.key).subscribe((resp) => {
			if (resp.Retorno == 1) {
        console.log('respuesta obtenida');
	   notify('Actualizado!','success',3000);
			}
		});
	}

	addCellar(log: any) {
		this._cellar.addCellar(log.key).subscribe((resp) => {
			console.log(resp);
			if (resp.Retorno == -1) {
				console.log("actualizado");
				notify('Bodega creada!','success',3000);
			}
		});
	}

}
