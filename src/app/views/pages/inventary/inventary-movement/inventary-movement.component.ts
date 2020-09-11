import { Component, OnInit } from '@angular/core';
import { InvetaryMovement } from "../../../../core/inventary/models/inventary-movement.model";
import { DocumentService } from "../../../../core/general/_services/document.service";
import { DocumentAccounting } from "../../../../core/general/_models/document.model";
import { Business } from "../../../../core/security/models/business.model";
import { BranchOffice } from '../../../../core/general/_models/branch-office.model';
import { ThirdPartie } from '../../../../core/general/_models/third-partie.model';
import { ThirdPartiesService } from "../../../../core/general/_services/third-parties.service";
import { BusinessService } from "../../../../core/security/_services/business.service";
import { CostCenterService } from "../../../../core/general/_services/cost-center.service";
import { BranchOfficeService } from "../../../../core/general/_services/branch-office.service";
import { CostCenter } from "../../../../core/general/_models/cost-center.model";
import { BusinessUnitService } from "../../../../core/general/_services/business-unit.service";
import { BusinessUnit } from "../../../../core/general/_models/business-unit.model";
import { Product } from '../../../../core/inventary/models/product.model';
import { ProductService } from '../../../../core/inventary/_services/product.service';
import { CellarService } from '../../../../core/inventary/_services/cellar.service';
import { Cellar } from "../../../../core/inventary/models/cellar.model";

@Component({
  selector: 'kt-inventary-movement',
  templateUrl: './inventary-movement.component.html',
  styleUrls: ['./inventary-movement.component.scss']
})
export class InventaryMovementComponent implements OnInit {
  isPossibleApply=false;
  businessList: Business[] = [];
  unitBusiness: BusinessUnit[] = [];
  branchOfficeList:BranchOffice[]=[];
  documentsAccountingsList: DocumentAccounting[] = [];
  thirdPartiesList:ThirdPartie[]=[];
  costCenterList: CostCenter[] = [];
  productsList:Product[]=[];
  cellarList:Cellar[]=[];

  typeMovements:any[] = [
		{ code: "S", text: "Salida" },
		{ code: "E", text: "Entrada" },	
  ];
  editing: {
		allowUpdating: true; // Enables editing
		allowAdding: true; // Enables insertion
		allowDeleting: true; // Enables removing
  };
  movement:InvetaryMovement= new InvetaryMovement();
  constructor(private _documents: DocumentService,
    private _thirdparties: ThirdPartiesService,
    private _business: BusinessService,
    private _costcenter: CostCenterService,
    private _branch: BranchOfficeService,
    private _businessUnit: BusinessUnitService,
    private _products:ProductService,
    private _cellar:CellarService) { }
   
   
   
    ngOnInit() {
      this.loadCompanes();
    
    
    }
  
  aplicar(){

  }
  save(){

  }

  onValueChanged(event: any) {
		if(event !=null){
			this.movement.empr_codigo = event.value;
			console.log(event);
			this.loadDocumentsAccountings(event.value);	
      this.loadCostCenter(event.value);
      this.loadThirdParties();
      this.loadBusinessUnit();
      this.loadBranchOffice();
      this.loadCellarList();
      this.loadProducts();
		}
		
  }
  
  loadDocumentsAccountings(code: any) {
		this._documents.GetDocumentAccounting(code).subscribe((data) => {
			if (data.ObjTransaction) {
				this.documentsAccountingsList = data.ObjTransaction;
			}
		});
  }
  
  setDocument(event: any) {
		this.movement.docu_consec = event.value;
  }
  
  setBranchOffice(event: any) {
		this.movement.sucu_consec = event.value;
  }
    
  setThirdPartie(event: any) {
		this.movement.terc_consec = event.value;
  }
  setCostCenter(event:any){
    this.movement.cenc_consec = event.value;
  }

  setBusinessUnity(event:any){
    this.movement.unin_consec = event.value;
  }
  loadThirdParties() {
		this._thirdparties.GetAllThirdPartie().subscribe((data) => {
			if (data.ObjTransaction) {
				console.log(data);
				this.thirdPartiesList = data.ObjTransaction;
			}
		});
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
  
  loadCostCenter(code: any) {
		this._costcenter.GetAllCostCenter(code).subscribe((data) => {
			if (data.ObjTransaction) {
				this.costCenterList = data.ObjTransaction;
			}
		});
  }
  loadProducts(){
    this._products.GetAllProduct(this.movement.empr_codigo).subscribe(resp=>{
      if(resp.ObjTransaction){
        this.productsList = resp.ObjTransaction;
      }
    })
  }
  loadBusinessUnit() {
		this._businessUnit.GetAllBusinessUnit().subscribe((data) => {
			if (data.ObjTransaction) {
				console.log(data.ObjTransaction);
				this.unitBusiness = data.ObjTransaction;
			}
		});
  }

  loadCellarList(){
this._cellar.GetAllCellar(this.movement.empr_codigo).subscribe(data=>{
  if(data.ObjTransaction){
    this.cellarList = data.ObjTransaction;
  }
})
  }
  
  setCellar(event:any){
    this.movement.bode_consec = event.value;
  }
}
