export class InvetaryMovement {
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
