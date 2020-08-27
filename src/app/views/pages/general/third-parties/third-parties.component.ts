import { Component, OnInit } from "@angular/core";

import notify from "devextreme/ui/notify";
import { ThirdPartiesService } from "../../../../core/general/_services/third-parties.service";
import { BusinessService } from "../../../../core/security/_services/business.service";
import { ThirdPartie } from "../../../../core/general/_models/third-partie.model";
import { Business } from "../../../../core/security/models/business.model";
import { HttpClient } from "@angular/common/http";

@Component({
	selector: "kt-third-parties",
	templateUrl: "./third-parties.component.html",
	styleUrls: ["./third-parties.component.scss"],
})
export class ThirdPartiesComponent implements OnInit {
	thirdPartieData: ThirdPartie[] = [];
	businessData: Business[] = [];
	successMessage: string = null;
	typeDocuments: any = [
		{ code: "CC", text: "Cédula de Ciudadanía" },
		{ code: "CE", text: "Cédula de Extranjería" },
		{ code: "PA", text: "Pasaporte" },
		{ code: "RC", text: "Registro Civil" },
		{ code: "TI", text: "Tarjeta de Identidad" },
		{ code: "NT", text: "Nit" }
	];
	loading = false;
	editing: {
		allowUpdating: true; // Enables editing
		allowAdding: true; // Enables insertion
		allowDeleting: true; // Enables removing
	};

	constructor(
		private _thirdPartie: ThirdPartiesService,
		private _business: BusinessService,
		private httpClient: HttpClient
	) {
		this.GetAllBusiness();
	}

	ngOnInit() {
		this.GetAllThirdPartie();
	}

	GetAllThirdPartie() {
		this.loading = true;
		this._thirdPartie.GetAllThirdPartie().subscribe((data) => {
			this.loading = false;
			console.log(data);
			if (data.ObjTransaction) {
				console.log(data);
				this.thirdPartieData = data.ObjTransaction;
			}
		});
	}
    asyncValidation(params) {
        return this.httpClient.post("https://js.devexpress.com/Demos/Mvc/RemoteValidation/CheckUniqueEmailAddress", {            
                id: params.data.ID,
                email: params.value                       
            }, {
                responseType: "json"
            }).toPromise();
    }
	async GetAllBusiness() {
		this._business.GetAllBusiness().subscribe((data) => {
			if (data.ObjTransaction) {
				console.log(data);
				this.businessData = data.ObjTransaction;
			}
		});
	}

	updateThirdPartie(log: any) {
		console.log(log.key);
		this._thirdPartie.updateThirdPartie(log.key).subscribe((resp) => {
			if (resp.Retorno == 1) {
				console.log("respuesta obtenida");
				notify("Actualizado!", "success", 3000);
			}
		});
	}

	addThirdPartie(log: any) {
		this._thirdPartie.addThirdPartie(log.key).subscribe((resp) => {
			console.log(resp);
			if (resp.Retorno == -1) {
				console.log("actualizado");
				notify("Tercero creado!", "success", 3000);
			}
		});
	}
}
