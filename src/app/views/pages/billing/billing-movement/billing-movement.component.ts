import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Business } from "../../../../core/security/models/business.model";
import { BillingMovement } from "../../../../core/billing/_models/billing-movement";
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
import {
	PriceList,
	PriceListDetailProd,
} from "../../../../core/billing/_models/price-list";
import { BillingPriceListService } from "../../../../core/billing/_services/billing-price-list";
import { DocumentAccounting } from "../../../../core/general/_models/document.model";
import notify from "devextreme/ui/notify";
import { BillingMovementService } from "../../../../core/billing/_services/billing-movement.service";
import { BusinessUnitService } from "../../../../core/general/_services/business-unit.service";
import { ProductService } from "../../../../core/inventary/_services/product.service";
import { Product } from "../../../../core/inventary/models/product.model";
import { TypeProductService } from "../../../../core/inventary/_services/type-product.service";

@Component({
	selector: "kt-billing-movement",
	templateUrl: "./billing-movement.component.html",
	styleUrls: ["./billing-movement.component.scss"],
})
export class BillingMovementComponent implements OnInit {
	businessList: Business[] = [];
	movement: BillingMovement = new BillingMovement();
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
		private _movement: BillingMovementService,
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

	overrideOnValueChanged(e) {
        if (e.dataField === 'Prod_Consec' && e.parentType === 'dataRow') {
            const defaultValueChangeHandler = e.editorOptions.onValueChanged;
			e.editorOptions.onValueChanged = function (args) { // Override the default handler							
				// ...
                // Custom commands go here
                // ...
                // If you want to modify the editor value, call the setValue function:
                // e.setValue(newValue);
                // Otherwise, call the default handler:
			   // defaultValueChangeHandler(args);
			   defaultValueChangeHandler().call(this,e);
            };
        }
    }
	test(){
		console.log('hola');
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

	setThirdPartie(event: any) {
		this.movement.Terc_Consec = event.value;
	}
	setCellar(event: any) {
		this.movement.Bode_Consec = event.value;
	}

	setPriceList(event: any) {
		this.movement.Lisp_Consec = event.value;

		this.loadProducts();
		//Se debe obtener el producto, su tipo de producto,y despues su porcentaje para calcular el valor de impuestos
	}
	getTypeProduct(prod_consec: any) {
		this.listPriceSelected = this.priceList.filter(
			(v) => v.Lisp_Consec == this.movement.Lisp_Consec
		)[0];
		this._typeProducts.GetTypeProduct(prod_consec).subscribe((resp) => {
			if (resp.Retorno === 0) {
				this.ValPorcImp = resp.ObjTransaction[0].TIPP_PIVA;
			}
		});
	}
	getProductPrice(rowData) {
		console.log(this.productsList);
	}
	setCostCenter(event: any) {
		this.movement.Cenc_Consec = event.value;
	}
	SetBusinessUnity(event: any) {
		this.movement.Unin_Consec = event.value;
	}
	onInitNewRow(e) {
		//  e.data.Dmfa_Valmov = this.listPriceSelected.Lisp_Valorp;
		//  e.data.Dmfa_Valimp = this.ValPorcImp * this.listPriceSelected.Lisp_Valorp;
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

	getSubtotal() {
		let subtotal = 0;
		let valTaxes = 0;
		let total= 0;
		for (let item of this.movement.Movements) {
			subtotal +=
				item.Dmfa_Cantid * (item.Dmfa_Valmov);
				valTaxes +=
				item.Dmfa_Cantid * (item.Dmfa_Valimp);
				total += item.Dmfa_Valtot;
		}
		this.movement.Movf_Valsub = subtotal;
		this.movement.Movf_Valtim = valTaxes;
		this.movement.Movf_Valtot = total;
	}

}
