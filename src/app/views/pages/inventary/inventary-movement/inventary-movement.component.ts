import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
import { InventaryMovementService } from '../../../../core/inventary/_services/inventary-movement.service';
import notify from 'devextreme/ui/notify';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'kt-inventary-movement',
  templateUrl: './inventary-movement.component.html',
  styleUrls: ['./inventary-movement.component.scss']
})
export class InventaryMovementComponent implements OnInit {
  isPossibleApply=false;
  loadIndicatorVisible = false;
  token: any;
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
  buttonOptionsApply = {
    text: "Aplicar",
    icon:'check',
    type: "success",   
    onClick: ()=>{
      this.aplicar();
    }
};
form:NgForm;
  movement:InvetaryMovement= new InvetaryMovement();
  constructor(private _documents: DocumentService,
    private _thirdparties: ThirdPartiesService,
    private _business: BusinessService,
    private _costcenter: CostCenterService,
    private _branch: BranchOfficeService,
    private _businessUnit: BusinessUnitService,
    private _products:ProductService,
    private _cellar:CellarService,
    private _movement:InventaryMovementService,
    private cd: ChangeDetectorRef) { }
   
   
   
    ngOnInit() {
      this.loadCompanes();
    this.movement.movi_fechas = new Date();
    
    }
  
    aplicar() {
     
      if(this.isPossibleApply){
        this._movement.apply(this.movement).subscribe((data) => {
          if (data.Retorno == 0) {
            notify("Registro aplicado", "success", 3000);
            this.movement = new InvetaryMovement();
          //  form.reset();
          this.refresh();
          } else {
            notify(data.TxtError, "danger", 3000);
          }
        });
      }
      else {
        notify('Primero debe guardar el documento','warning',3000);
      }
   
    }
    saveAction(){
      document.getElementById("dxGuardar").click();
    }
    refresh(): void {
   
   
    window.location.reload();
   
  }
	save($event) {
		if (
			this.movement.movements == undefined ||
			this.movement.movements.length == 0
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
          this.movement.movi_consec = this.token.headerToken;
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

  setTypeMovement(event:any){
    this.movement.movi_clamov = event.value;
  }
  
  calculateCellValue(newData){
    newData.dmin_valtot = newData.dmin_valimp + newData.dmin_valmov;
  
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
    this._products.GetAllProduct().subscribe(resp=>{
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
this._cellar.GetAllCellar().subscribe(data=>{
  if(data.ObjTransaction){
    this.cellarList = data.ObjTransaction;
  }
})
  }
  
  setCellar(event:any){
    this.movement.bode_consec = event.value;
  }
}
