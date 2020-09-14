import { Component, OnInit } from '@angular/core';

import {  TypeProductService } from '../../../../core/inventary/_services/type-product.service';

import notify from 'devextreme/ui/notify';
import { TypeProduct } from '../../../../core/inventary/models/type-product';
import { BusinessService } from '../../../../core/security/_services/business.service';
import { Business } from '../../../../core/security/models/business.model';
@Component({
  selector: 'kt-inventary-type-product',
  templateUrl: './inventary-type-product.component.html',
  styleUrls: ['./inventary-type-product.component.scss']
})
export class InventaryTypeProductComponent implements OnInit {
	data: TypeProduct[] = [];
	businessData: Business[] = [];
	successMessage: string=null;
	loading=false;
	editing: {
		allowUpdating: true; // Enables editing
		allowAdding: true; // Enables insertion
		allowDeleting: true; // Enables removing
	};
	constructor(
		private _typeProduct: TypeProductService,
		private _business: BusinessService
	) {
    this.GetAllBusiness();
  }

	ngOnInit() {
	
		this.GetAllTypeProduct();
	}

	GetAllTypeProduct() {
		this.loading=true;
		this._typeProduct.GetAllTypeProduct().subscribe((data) => {
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

	updateTypeProduct(log: any) {
		console.log(log.key);
		this._typeProduct.updateTypeProduct(log.key).subscribe((resp) => {
			if (resp.Retorno == 1) {
        console.log('respuesta obtenida');
	   notify('Actualizado!','success',3000);
			}
		});
	}

	addTypeProduct(log: any) {
		this._typeProduct.addTypeProduct(log.key).subscribe((resp) => {
			console.log(resp);
			if (resp.Retorno == -1) {
				console.log("actualizado");
				notify('Tipo de producto creado!','success',3000);
			}
		});
	}

}
