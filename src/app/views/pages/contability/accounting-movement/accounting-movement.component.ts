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
import { AccountingMovementService } from "../../../../core/contability/_services/accounting-movement.service";
import notify from "devextreme/ui/notify";
import { ThirdPartiesService } from "../../../../core/general/_services/third-parties.service";
import { ThirdPartie } from "../../../../core/general/_models/third-partie.model";
import { BusinessUnitService } from "../../../../core/general/_services/business-unit.service";
import { BusinessUnit } from "../../../../core/general/_models/business-unit.model";

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
	thirdpartiesList: ThirdPartie[] = [];
	unitBusiness: BusinessUnit[] = [];
	loadIndicatorVisible = false;
	isPossibleApply = false;
	costCenterList: CostCenter[] = [];
	editing: {
		allowUpdating: true; // Enables editing
		allowAdding: true; // Enables insertion
		allowDeleting: true; // Enables removing
	};

	token: any;

	constructor(
		private _business: BusinessService,
		private _branch: BranchOfficeService,
		private _accounting: ContabilityAccouintingService,
		private _movement: AccountingMovementService,
		private _documents: DocumentService,
		private _costcenter: CostCenterService,
		private _thirdparties: ThirdPartiesService,
		private _businessUnit: BusinessUnitService
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

	loadAccountings(code: any) {
		console.log(this.movement);
		this._accounting.GetAllAccouintings(code).subscribe((data) => {
			if (data.ObjTransaction) {
				this.contabilityAccountingsList = data.ObjTransaction;
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
	onValueChanged(event: any) {
		this.movement.Empr_Codigo = event.value;
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
				console.log(data.ObjTransaction);
				this.unitBusiness = data.ObjTransaction;
			}
		});
	}

	save(event) {
		debugger;
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
