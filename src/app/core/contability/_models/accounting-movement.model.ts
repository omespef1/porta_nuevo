export class AccountingMoveement {
	movc_Consec: any;
	Empr_Codigo: any;
	Docu_Consec: any;
	Movc_Numero: number;
	Movc_Fechas: Date;
	Movc_Fecnum: number;
	Movc_Anonum: number;
	Movc_Mesnum: number;
	Movc_Dianum: number;
	Movc_Descri: string;
	Sucu_Consec: any;
	Movc_Refere: string;
	Movc_Estado: string;
	Movements: AccountingMovementDetail[];
	constructor() {
		this.Movc_Fechas = new Date();
		this.Movements = [];
	}
}

export class AccountingMovementDetail {
	Movc_Consec: any;
	Empr_Codigo: any;
	Dmco_Consec: any;
	Cuen_Consec: any;
	Dmco_Descri: string;
	Dmco_Refere: string;
	Dmco_Valdeb: number;
	Dmco_Valcre: number;
	Dmco_Valbas: number;
	Dmco_Porbas: number;
	Cenc_Consec: any;
	Unin_Consec: any;
	Terc_Consec: any;
}

export class AccountingMovementGet {
	movc_consec: any;
	movc_numero: number;
	movc_fechas: Date;
	movc_descri: string;
	movc_refere: string;
	movc_estado: string;
	empr_codigo: any;
	empr_nombre: string;
	details: AccountingMovementDetailGet[];
}

export class AccountingMovementDetailGet {
	docu_codigo: any;
	docu_nombre: string;
	sucu_codigo: any;
	sucu_nombre: string;
	dmco_consec: any;
	dmco_descri: string;
	mmco_refere: string;
	dmco_valdeb: number;
	dmco_valcre: number;
	dmco_valbas: number;
	dmco_porbas: number;
	cuen_codigo: any;
	cuen_nombre: string;
	terc_codigo: any;
	terc_nombre: string;
	cenc_codigo: any;
	cenc_nombre: string;
	unin_codigo: any;
	unin_nombre: string;
}
