export class InvetaryMovement {
	constructor() {
		this.movements = [];
	}
	movi_consec: any;
	empr_codigo: any;
	docu_consec: any;
	movi_numero: number;
	movi_fechas: Date;
	movi_fecnum: number;
	movi_anonum: number;
	movi_mesnum: number;
	movi_dianum: number;
	sucu_consec: any;
	movi_descri: string;
	terc_consec: any;
	movi_refere: string;
	movi_clamov: string;
	bode_consec: any;
	cenc_consec: any;
	unin_consec: any;
	movi_estado: string;
	audi_estadi: string;
	audi_usuari: string;
	audi_afecha: Date;
	movements: InvetaryMovementDetail[];
}

export class InvetaryMovementDetail {
	dmin_consec: any;
	empr_codigo: any;
	movi_consec: any;
	prod_consec: any;
	dmin_descri: string;
	dmin_cantid: number;
	dmin_valmov: number;
	dmin_valimp: number;
	dmin_valtot: number;
	dmin_nolote: number;
	dmin_feclot: Date;
	dmin_feclnu: number;
	audi_estadi: string;
	audi_usuari: string;
	audi_afecha: Date;
}
export class InventaryMovementGet {
empr_nombre:string;
movi_consec:any;
empr_codigo:any;
movi_numero:string;
movi_fechas:Date;
movi_descri:string;
movi_refere:string;
movi_clamov:string;
movi_estado:string;    
bode_consec:any;
bode_nombre:string;
unin_consec:any;
unin_nombre:string;
terc_consec:any;
terc_nombre:string;
sucu_consec:any;
sucu_nombre:string;
docu_consec:any;
docu_nombre:string;
cenc_consec:any;
cenc_nombre:string;
	details: InventaryMovementDetailGet;
}
export class InventaryMovementDetailGet {
	prod_consec:any;
	prod_nombre: string;
	dmin_descri: string;
	dmin_cantid: number;
	dmin_valmov: number;
	dmin_valimp: number;
	dmin_valtot: number;
	dmin_nolote: number;
	dmin_feclot: Date;
}
