import { Component, OnInit } from '@angular/core';
import { Business } from "../../../../core/security/models/business.model";
import { PriceList, PriceListDetail } from '../../../../core/billing/_models/price-list';
import { BillingPriceListService } from "../../../../core/billing/_services/billing-price-list";
import { BusinessService } from "../../../../core/security/_services/business.service";
import notify from "devextreme/ui/notify";
import { BranchOffice } from '../../../../core/general/_models/branch-office.model';
import { BranchOfficeService } from '../../../../core/general/_services/branch-office.service';
import { Product } from '../../../../core/inventary/models/product.model';
import { ProductService } from '../../../../core/inventary/_services/product.service';

@Component({
  selector: 'kt-billing-price-list',
  templateUrl: './billing-price-list.component.html',
  styleUrls: ['./billing-price-list.component.scss']
})
export class BillingPriceListComponent implements OnInit {

  data: PriceList[] = [];
  businessData: Business[] = [];
  branchData:BranchOffice[]=[];
  productData:Product[]=[];

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
		private _product:ProductService,
    private _business: BusinessService,
    private _branch:BranchOfficeService
	) {
	

  }

	ngOnInit() {
	
		this.GetAllPriceList();
		this.GetAllProduct();
		this.GetAllBusiness();
		this.GetAllBranchOffice();
	}

	GetAllPriceList() {
		this.loading=true;
		this._priceList.GetAllPriceListMasterDetail().subscribe((data) => {
			this.loading=false;
			console.log(data);
			if (data.ObjTransaction) {
				console.log(data);
				this.data = data.ObjTransaction;
			}
		});
	}
	GetAllProduct() {
		this.loading=true;
		this._product.GetAllProduct().subscribe((data) => {
			this.loading=false;
			console.log(data);
			if (data.ObjTransaction) {
				console.log(data);
				this.productData = data.ObjTransaction;
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
		console.log(log);
		this._priceList.updatePriceList(log.data).subscribe((resp) => {
			if (resp.Retorno == 1) {
        console.log('respuesta obtenida');
	   notify('Actualizado!','success',3000);
			}
		});
	}

	updatePriceListDetail(log: any) {
		let data:PriceListDetail = log.data;
		this._priceList.updatePriceListDetail(data).subscribe((resp) => {
			if (resp.Retorno == 1) {
        console.log('respuesta obtenida');
	   notify('Actualizado!','success',3000);
			}
		});
	}

	addPriceList(log: any) {
		this._priceList.addPriceList(log.data).subscribe((resp) => {
			console.log(resp);
			if (resp.Retorno == -1) {
				console.log("actualizado");
				notify('Lista de precios creada!','success',3000);
			}
		});
	}
	addPriceListDetail(detail: any,header:PriceList) {
	 let data:PriceListDetail = detail.data;
	 data.Lisp_Consec = header.Lisp_Consec;	
		this._priceList.addPriceListDetail(data).subscribe((resp) => {
			console.log(resp);
			if (resp.Retorno == -1) {
				console.log("actualizado");
				notify('Detalle creado!','success',3000);
			}
		});
	}


}
