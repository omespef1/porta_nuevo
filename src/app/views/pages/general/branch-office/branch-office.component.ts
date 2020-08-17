import { Component, OnInit } from "@angular/core";
import { BranchOffice } from "../../../../core/general/_models/branch-office.model";
import { BranchOfficeService } from "../../../../core/general/_services/branch-office.service";
import { BusinessService } from "../../../../core/security/_services/business.service";
import { Business } from "../../../../core/security/models/business.model";
import { Transaction } from "../../../../core/auth/_models/transaction.model";

@Component({
	selector: "kt-branch-office",
	templateUrl: "./branch-office.component.html",
	styleUrls: ["./branch-office.component.scss"],
})
export class BranchOfficeComponent implements OnInit {
	data: BranchOffice[] = [];
	businessData: Business[] = [];
	successMessage: string=null;
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
		private _branchOffice: BranchOfficeService,
		private _business: BusinessService
	) {
    this.GetAllBusiness();
  }

	ngOnInit() {
		
		this.GetAllBranchOffice();
	}

	GetAllBranchOffice() {
		this._branchOffice.GetAllBranchOffice().subscribe((data) => {
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

	updateBranchOffice(log: any) {
		console.log(log.key);
		this._branchOffice.updateBranchOffice(log.key).subscribe((resp) => {
			if (resp.Retorno == 1) {
        console.log('respuesta obtenida');
        this.successMessage = "Datos actualizados";		
        setTimeout(() => {
          this.successMessage=null;
        }, 3000);	
			}
		});
	}

	addBranchOffice(log: any) {
		this._branchOffice.addBranchOffice(log.key).subscribe((resp) => {
			if (resp.Retorno == 0) {
				console.log("actualizado");
			}
		});
	}
}
