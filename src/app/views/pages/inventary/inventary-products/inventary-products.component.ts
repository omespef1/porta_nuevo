import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../core/inventary/models/product.model';

import { ProductService } from '../../../../core/inventary/_services/product.service';

import notify from 'devextreme/ui/notify';
import { MeasurentUnityService } from '../../../../core/inventary/_services/measurent-unity.service';
import { TypeProductService } from '../../../../core/inventary/_services/type-product.service';
import { Business } from '../../../../core/security/models/business.model';
import { MeasurentUnity } from '../../../../core/inventary/models/measurent-unity.model';
import { TypeProduct } from '../../../../core/inventary/models/type-product';
import { BusinessService } from '../../../../core/security/_services/business.service';
@Component({
  selector: 'kt-inventary-products',
  templateUrl: './inventary-products.component.html',
  styleUrls: ['./inventary-products.component.scss']
})
export class InventaryProductsComponent implements OnInit {

  data: Product[] = [];
  businessData: Business[] = [];
  measurentUnityList:MeasurentUnity[]=[];
  successMessage: string=null;
  typeProductList:TypeProduct[]=[];
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
		private _product: ProductService,
    private _business: BusinessService,
    private _measurentUnityList:MeasurentUnityService,
    private _typeProduct :TypeProductService
	) {
    
  }

	ngOnInit() {
	
    this.GetAllBusiness();
    this.GetAllMeasurentUnity();
    this.GetAllProducts();
    this.GetAllTypeProducts();
	}

	GetAllProducts() {
		this.loading=true;
		this._product.GetAllProduct().subscribe((data) => {
			this.loading=false;
			console.log(data);
			if (data.ObjTransaction) {
				console.log(data);
				this.data = data.ObjTransaction;
			}
		});
  }


  GetAllTypeProducts(){
    this._typeProduct.GetAllTypeProduct().subscribe(data=>{
      if(data.ObjTransaction){
        this.typeProductList = data.ObjTransaction;
      }
    })
  }
  
  GetAllMeasurentUnity(){
    this._measurentUnityList.GetAllMeasurentUnity().subscribe(data=>{
      if(data.ObjTransaction){
        this.measurentUnityList = data.ObjTransaction;
      }
    })
  }

	async GetAllBusiness() {
		this._business.GetAllBusiness().subscribe((data) => {
			if (data.ObjTransaction) {
				console.log(data);
				this.businessData = data.ObjTransaction;
			}
		});
	}

	updateProduct(log: any) {
		console.log(log.key);
		this._product.updateProduct(log.key).subscribe((resp) => {
			if (resp.Retorno == 1) {
        console.log('respuesta obtenida');
	   notify('Actualizado!','success',3000);
			}
		});
	}

	addProduct(log: any) {
		this._product.addProduct(log.key).subscribe((resp) => {
			console.log(resp);
			if (resp.Retorno == -1) {
				console.log("actualizado");
				notify('Sucursal creada!','success',3000);
			}
		});
	}

}
