import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { Business } from "../../../../core/security/models/business.model";
import {
	BillingMovement,
	DetailBillingMovement,
} from "../../../../core/billing/_models/billing-movement";
import { BranchOffice } from "../../../../core/general/_models/branch-office.model";
import { ThirdPartie } from "../../../../core/general/_models/third-partie.model";
import { BusinessUnit } from "../../../../core/general/_models/business-unit.model";
import { CostCenter } from "../../../../core/general/_models/cost-center.model";
import { BusinessService } from "../../../../core/security/_services/business.service";
import { BranchOfficeService } from "../../../../core/general/_services/branch-office.service";
import { DocumentService } from "../../../../core/general/_services/document.service";
import { CostCenterService } from "../../../../core/general/_services/cost-center.service";
import { ThirdPartiesService } from "../../../../core/general/_services/third-parties.service";
import { Cellar } from "../../../../core/inventary/models/cellar.model";
import { CellarService } from "../../../../core/inventary/_services/cellar.service";
import { PriceList } from "../../../../core/billing/_models/price-list";
import { BillingPriceListService } from "../../../../core/billing/_services/billing-price-list";
import { DocumentAccounting } from "../../../../core/general/_models/document.model";
import notify from "devextreme/ui/notify";
import { BillingMovementService } from "../../../../core/billing/_services/billing-movement.service";
import { BusinessUnitService } from "../../../../core/general/_services/business-unit.service";
import { ProductService } from "../../../../core/inventary/_services/product.service";
import { Product } from "../../../../core/inventary/models/product.model";
import { TypeProductService } from "../../../../core/inventary/_services/type-product.service";
import { BehaviorSubject } from "rxjs";
import { PriceListDetailProd } from "../../../../core/billing/_models/price-list";
import { each } from "lodash";
import { DxFormComponent, DxPopupComponent } from "devextreme-angular";

@Component({
	selector: "kt-billing-movement",
	templateUrl: "./billing-movement.component.html",
	styleUrls: ["./billing-movement.component.scss"],
})
export class BillingMovementComponent implements OnInit {
	@ViewChild(DxPopupComponent) popupProduct: DxPopupComponent;
	@ViewChild("formDetail") formDetail: DxFormComponent;
	@ViewChild("formFacturation") formFacturation: DxFormComponent;
	
	businessList: Business[] = [];
	businessData: BehaviorSubject<Business[]> = new BehaviorSubject<Business[]>(
		null
	);
	movement: BillingMovement = new BillingMovement();
	applicated=false;
	branchOfficeList: BranchOffice[] = [];
	documentsAccountingsList: DocumentAccounting[] = [];
	thirdpartiesList: ThirdPartie[] = [];
	unitBusiness: BusinessUnit[] = [];
	priceList: PriceList[] = [];
	loadIndicatorVisible = false;
	isPossibleApply = false;
	productsList: PriceListDetailProd[] = [];
	costCenterList: CostCenter[] = [];
	cellarList: Cellar[] = [];
	listPriceSelected: PriceList = new PriceList();
	ValPorcImp: number = 0;
	lastValue: number = 0;
	detail: DetailBillingMovement = new DetailBillingMovement();
	productsData: BehaviorSubject<PriceListDetailProd[]> = new BehaviorSubject<
		PriceListDetailProd[]
	>(null);
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
		private _cellar: CellarService,
		private _price: BillingPriceListService,
		public _movement: BillingMovementService,
		private _products: ProductService,
		private _typeProducts: TypeProductService,
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

	setNewDetail() {
		this.detail = new DetailBillingMovement();
	}

	setNewMovement() {
		if (this.formDetail.instance.validate().isValid) {
			this.movement.Movements.push(this.detail);
			this.closeModal();
			this.getSubtotal();
		}
	}

	showpopUpDetail() {
		if(this.movement.Lisp_Consec == undefined || this.movement.Empr_Codigo==undefined){
			notify('Debe seleccionar Empresa y Lista de precios primero')
		}else{
		this.setNewDetail();
		this.popupProduct.instance.show();
		}
	}

	setProduct(e) {
		if(e.value != undefined){
			this.detail.Prod_Consec = e.value;
			let product = this.productsData.value.filter(
				(p) => p.Prod_Consec == e.value
			)[0];
			this.detail.Dmfa_Valimp = product.Dlis_Valimp;
			this.detail.Dmfa_Valmov = product.Dlis_Valor;
		}
		
	}

	loadCompanes() {
		this._business.GetAllBusiness().subscribe((businessList) => {
			if (businessList.ObjTransaction != null) {
				this.businessList = businessList.ObjTransaction;
				this.businessData.next(this.businessList);
			}
		});
	}
	setValtot(e) {
		this.detail.Dmfa_Cantid = e.value;
		this.detail.Dmfa_Valtot =
			e.value * (this.detail.Dmfa_Valimp + this.detail.Dmfa_Valmov);
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

	setThirdPartie(event: any) {
		this.movement.Terc_Consec = event.value;
	}
	setCellar(event: any) {
		this.movement.Bode_Consec = event.value;
	}

	setPriceList(event: any) {
		this.movement.Lisp_Consec = event.value;

		this.loadProducts();		
	}

	setCostCenter(event: any) {
		this.movement.Cenc_Consec = event.value;
	}
	SetBusinessUnity(event: any) {
		this.movement.Unin_Consec = event.value;
	}


	onValueChanged(event: any) {
		if (event != null) {
			this.movement.Empr_Codigo = event.value;
			this.loadDocumentsAccountings(event.value);
			this.loadCostCenter(event.value);
			this.loadThirdParties();
			this.loadBusinessUnit();
			this.loadPriceList();
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
				this.thirdpartiesList = data.ObjTransaction;
			}
		});
	}

	loadBusinessUnit() {
		this._businessUnit.GetAllBusinessUnit().subscribe((data) => {
			if (data.ObjTransaction) {
				this.unitBusiness = data.ObjTransaction;
			}
		});
	}
	loadPriceList() {
		this._price.GetAllPriceListActive().subscribe((data) => {
			if (data.ObjTransaction) {
				this.priceList = data.ObjTransaction;
			}
		});
	}
	loadProducts() {
		this._price
			.GetDetailListPrice(this.movement.Lisp_Consec)
			.subscribe((data) => {
				if (data.ObjTransaction) {
					this.productsList = data.ObjTransaction;
					this.productsData.next(this.productsList);
				}
			});
	}

	save($event) {

		if(this.formFacturation.instance.validate().isValid){
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
	
	}

	aplicar() {
		console.log("aplicando");
		this._movement.apply(this.movement.Movf_Consec).subscribe((data) => {
			if (data.Retorno == 0) {
				this.applicated=true;
				notify("Registro aplicado", "success", 3000);
			} else {
				notify(data.TxtError, "danger", 3000);
			}
		});
	}

	closeModal() {
		this.popupProduct.instance.hide();
	}

	getSubtotal() {
		let subtotal = 0;
		let valTaxes = 0;
		let total = 0;
		for (let item of this.movement.Movements) {
			subtotal += item.Dmfa_Cantid * item.Dmfa_Valmov;
			valTaxes += item.Dmfa_Cantid * item.Dmfa_Valimp;
			total += item.Dmfa_Valtot;
		}
		this.movement.Movf_Valsub = subtotal;
		this.movement.Movf_Valtim = valTaxes;
		this.movement.Movf_Valtot = total;
	}
}
