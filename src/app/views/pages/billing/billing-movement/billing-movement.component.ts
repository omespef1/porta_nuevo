import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Business } from '../../../../core/security/models/business.model';
import { BillingMovement } from '../../../../core/billing/_models/billing-movement';
import { BranchOffice } from "../../../../core/general/_models/branch-office.model";
import { ThirdPartie } from "../../../../core/general/_models/third-partie.model";
import { BusinessUnit } from "../../../../core/general/_models/business-unit.model";
import { CostCenter } from "../../../../core/general/_models/cost-center.model";
import { BusinessService } from "../../../../core/security/_services/business.service";
import { BranchOfficeService } from "../../../../core/general/_services/branch-office.service";
import { DocumentService } from "../../../../core/general/_services/document.service";
import { CostCenterService } from "../../../../core/general/_services/cost-center.service";
import { ThirdPartiesService } from "../../../../core/general/_services/third-parties.service";
import { Cellar } from '../../../../core/inventary/models/cellar.model';
import { CellarService } from '../../../../core/inventary/_services/cellar.service';
import { PriceList } from '../../../../core/billing/_models/price-list';
import { BillingPriceListService } from '../../../../core/billing/_services/billing-price-list';
import { DocumentAccounting } from "../../../../core/general/_models/document.model";
import notify from "devextreme/ui/notify";
import { BillingMovementService } from '../../../../core/billing/_services/billing-movement.service';
import { BusinessUnitService } from '../../../../core/general/_services/business-unit.service';
import { ProductService } from '../../../../core/inventary/_services/product.service';
import { Product } from '../../../../core/inventary/models/product.model';
import { TypeProductService } from '../../../../core/inventary/_services/type-product.service';

@Component({
  selector: 'kt-billing-movement',
  templateUrl: './billing-movement.component.html',
  styleUrls: ['./billing-movement.component.scss']
})
export class BillingMovementComponent implements OnInit {
  businessList: Business[] = [];
	movement: BillingMovement = new BillingMovement();
	branchOfficeList: BranchOffice[] = [];
	documentsAccountingsList: DocumentAccounting[] = [];
	thirdpartiesList: ThirdPartie[] = [];
	unitBusiness: BusinessUnit[] = [];
	priceList:PriceList[]=[];
	loadIndicatorVisible = false;
	isPossibleApply = false;
	productsList:Product[]=[];
	costCenterList: CostCenter[] = [];
	cellarList:Cellar[]=[];
	listPriceSelected:PriceList=new PriceList();
	ValPorcImp:number=0;
	editing: {
		allowUpdating: true; // Enables editing
		allowAdding: true; // Enables insertion
		allowDeleting: true; // Enables removing
	};

	token: any;

	constructor(
		private _business: BusinessService,
		private _branch: BranchOfficeService,
		private _documents: DocumentService,
		private _costcenter: CostCenterService,
		private _thirdparties: ThirdPartiesService,
		private _businessUnit: BusinessUnitService,
		private _cellar:CellarService,
		private _price:BillingPriceListService,
		private _movement:BillingMovementService,
		private _products:ProductService,
		private _typeProducts:TypeProductService,
		private cd: ChangeDetectorRef
	) {
		this.loadBranchOffice();
	}
	ngOnInit() {
		this.loadCompanes();
		this.GetData();
		this.loadThirdParties();
		this.loadBusinessUnit();
	}

	GetData() {
		this.movement.Movements = [];
	}

	loadCompanes() {
		this._business.GetAllBusiness().subscribe((businessList) => {
			if (businessList.ObjTransaction != null) {
				this.businessList = businessList.ObjTransaction;
			}
		});
	}

	loadBranchOffice() {
		this._branch.GetAllBranchOffice().subscribe((data) => {
			if (data.ObjTransaction) {
				this.branchOfficeList = data.ObjTransaction;
			}
		});
	}

	loadCellar() {
		this._cellar.GetAllCellar().subscribe((data) => {
			if (data.ObjTransaction) {
				this.cellarList = data.ObjTransaction;
			}
		});
	}


	setContabilityAccoount(event: any) {}
	setDocument(event: any) {
		this.movement.Docu_Consec = event.value;
	}

	setBranchOffice(event: any) {
		this.movement.Sucu_Consec = event.value;
	}

	setThirdPartie(event:any){
		this.movement.Terc_Consec = event.value;
	}
	setCellar(event:any){
		this.movement.Bode_Consec = event.value;
	}

	setPriceList(event:any){
		this.movement.Lisp_Consec = event.value;
		this.listPriceSelected = this.priceList.filter(v=>v.Lisp_Consec== event.value)[0];
		 this._typeProducts.GetTypeProduct(this.listPriceSelected.Prod_Consec).subscribe((resp) => {
			 if (resp.Retorno === 0) {
				 this.ValPorcImp = resp.ObjTransaction[0].TIPP_PIVA;
				 console.log( this.ValPorcImp);
			 }
		 });
		//Se debe obtener el producto, su tipo de producto,y despues su porcentaje para calcular el valor de impuestos
	}
	setCostCenter(event:any){
		this.movement.Cenc_Consec = event.value;
	}
	SetBusinessUnity(event:any){
		this.movement.Unin_Consec = event.value;
	}
	onInitNewRow(e){
			e.data.Dmfa_Valmov = this.listPriceSelected.Lisp_Valorp;
			e.data.Dmfa_Valimp = this.ValPorcImp;
	}
	
	onValueChanged(event: any) {
		if(event !=null){
			this.movement.Empr_Codigo = event.value;
			console.log(event);
			this.loadDocumentsAccountings(event.value);
			this.loadCostCenter(event.value);
			this.loadThirdParties();
			this.loadBusinessUnit();
			this.loadPriceList();
			this.loadProducts();
			this.loadCellar();
		}
	}

	loadDocumentsAccountings(code: any) {
		this._documents.GetDocumentAccounting(code).subscribe((data) => {
			if (data.ObjTransaction) {
				this.documentsAccountingsList = data.ObjTransaction;
			}
		});
	}

	loadCostCenter(code: any) {
		this._costcenter.GetAllCostCenter(code).subscribe((data) => {
			if (data.ObjTransaction) {
				this.costCenterList = data.ObjTransaction;
			}
		});
	}

	loadThirdParties() {
		this._thirdparties.GetAllThirdPartie().subscribe((data) => {
			if (data.ObjTransaction) {
				console.log(data);
				this.thirdpartiesList = data.ObjTransaction;
			}
		});
	}

	loadBusinessUnit() {
		this._businessUnit.GetAllBusinessUnit().subscribe((data) => {
			if (data.ObjTransaction) {
				console.log(data.ObjTransaction);
				this.unitBusiness = data.ObjTransaction;
			}
		});
	}
	loadPriceList() {
		this._price.GetAllPriceList().subscribe((data) => {
			if (data.ObjTransaction) {
				console.log(data.ObjTransaction);
				this.priceList = data.ObjTransaction;
			}
		});
	}
	loadProducts() {
		this._products.GetAllProduct().subscribe((data) => {
			if (data.ObjTransaction) {
				console.log(data.ObjTransaction);
				this.productsList = data.ObjTransaction;
			}
		});
	}

	save($event) {
		if (
			this.movement.Movements == undefined ||
			this.movement.Movements.length == 0
		) {
			notify("Debe ingresar al menos un detalle", "warning", 3000);
		} else {
			this.loadIndicatorVisible = true;
			console.log("guardando...");
			this._movement.Save(this.movement).subscribe((data) => {
				this.loadIndicatorVisible = false;
				console.log(data);
				if (data.Retorno == 0) {
					this.token = data.ObjTransaction;
					this.isPossibleApply = true;
					this.cd.detectChanges();
					notify("Registro guardado!", "success", 3000);
				} else {
					notify(
						"Error generando documento contable. Verifique.",
						"warning",
						3000
					);
				}
			});
		}
	}

	aplicar() {
		console.log("aplicando");
		this._movement.apply(this.token).subscribe((data) => {
			if (data.Retorno == 0) {
				notify("Registro aplicado", "success", 3000);
			} else {
				notify(data.TxtError, "danger", 3000);
			}
		});
	}
}
