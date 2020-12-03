import { Component, OnInit } from '@angular/core';
import { Business } from "src/app/core/security/models/business.model";
import { PriceList } from '../../../../core/billing/_models/price-list';
import { BillingPriceListService } from "src/app/core/billing/_services/billing-price-list";
import { BusinessService } from "src/app/core/security/_services/business.service";
import notify from "devextreme/ui/notify";
import { BranchOffice } from '../../../../core/general/_models/branch-office.model';
import { BranchOfficeService } from '../../../../core/general/_services/branch-office.service';

@Component({
  selector: 'kt-billing-price-list',
  templateUrl: './billing-price-list.component.html',
  styleUrls: ['./billing-price-list.component.scss']
})
export class BillingPriceListComponent implements OnInit {

  data: PriceList[] = [];
  businessData: Business[] = [];
  branchData:BranchOffice[]=[];
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
		private _priceList: BillingPriceListService,
    private _business: BusinessService,
    private _branch:BranchOfficeService
	) {
    this.GetAllBusiness();
    this.GetAllBranchOffice();
  }

	ngOnInit() {
	
		this.GetAllPriceList();
	}

	GetAllPriceList() {
		this.loading=true;
		this._priceList.GetAllPriceList().subscribe((data) => {
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
  
  async GetAllBranchOffice() {
		this._branch.GetAllBranchOffice().subscribe((data) => {
			if (data.ObjTransaction) {
				console.log(data);
				this.branchData = data.ObjTransaction;
			}
		});
  }

	updatePriceList(log: any) {
		console.log(log.key);
		this._priceList.updatePriceList(log.key).subscribe((resp) => {
			if (resp.Retorno == 1) {
        console.log('respuesta obtenida');
	   notify('Actualizado!','success',3000);
			}
		});
	}

	addPriceList(log: any) {
		this._priceList.addPriceList(log.key).subscribe((resp) => {
			console.log(resp);
			if (resp.Retorno == -1) {
				console.log("actualizado");
				notify('Sucursal creada!','success',3000);
			}
		});
	}

}
