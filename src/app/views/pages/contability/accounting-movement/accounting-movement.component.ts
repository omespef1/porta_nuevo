import { Component, OnInit } from "@angular/core";

import { BusinessService } from "../../../../core/security/_services/business.service";

import { AccountingMoveement } from "../../../../core/contability/_models/accounting-movement.model";
import { BranchOfficeService } from "../../../../core/general/_services/branch-office.service";

import { ContabilityAccounting } from "../../../../core/contability/_models/contability-accounting.model";
import { Business } from "../../../../core/security/models/business.model";
import { BranchOffice } from "../../../../core/general/_models/branch-office.model";
import { ContabilityAccouintingService } from "../../../../core/contability/_services/contability-accouinting.service";
import { DocumentService } from "../../../../core/general/_services/document.service";
import { DocumentAccounting } from "../../../../core/general/_models/document.model";
import { CostCenterService } from "../../../../core/general/_services/cost-center.service";
import { CostCenter } from "../../../../core/general/_models/cost-center.model";
import { AccountingMovementService } from '../../../../core/contability/_services/accounting-movement.service';
import notify from 'devextreme/ui/notify';


@Component({
	selector: "kt-accounting-movement",
	templateUrl: "./accounting-movement.component.html",
	styleUrls: ["./accounting-movement.component.scss"],
})
export class AccountingMovementComponent implements OnInit {
	businessList: Business[] = [];
	movement: AccountingMoveement = new AccountingMoveement();
	branchOfficeList: BranchOffice[] = [];
	contabilityAccountingsList: ContabilityAccounting[] = [];
	documentsAccountingsList: DocumentAccounting[] = [];
	loadIndicatorVisible=false;

	costCenterList: CostCenter[] = [];
	editing: {
		allowUpdating: true; // Enables editing
		allowAdding: true; // Enables insertion
		allowDeleting: true; // Enables removing
	};
	constructor(
		private _business: BusinessService,
		private _branch: BranchOfficeService,
		private _accounting: ContabilityAccouintingService,
		private _movement: AccountingMovementService,
		private _documents: DocumentService,
		private _costcenter: CostCenterService
	) {
		this.loadBranchOffice();
	}
	ngOnInit() {
		this.loadCompanes();
		this.GetData();
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

	loadAccountings(code: any) {
		console.log(this.movement);
		this._accounting.GetAllAccouintings(code).subscribe((data) => {
			if (data.ObjTransaction) {
				this.contabilityAccountingsList = data.ObjTransaction;
			}
		});
	}
	onValueChanged(event: any) {
		console.log(event);
		this.loadDocumentsAccountings(event.value);
		this.loadAccountings(event.value);
		this.loadCostCenter(event.value);
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

	save() {
		this.loadIndicatorVisible=true;
		console.log('guardando...');
		this._movement.Save(this.movement).subscribe(data=>{
			setTimeout(() => {
				this.loadIndicatorVisible=false;
			}, 1000);
			console.log(data);
			if(data.Retorno==0){
				notify('Movimiento contable realizado','success',3000);
			}
			else {
				notify('Error generando documento contable. Verifique.','warning',3000);
			}
		})
	}
}
