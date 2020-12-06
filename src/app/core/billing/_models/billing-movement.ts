export class BillingMovement {
    Movf_Consec:any;
    Empr_Codigo:any;
    Docu_Consec:any;
    Movf_Numero:number;
    Movf_Fechas:Date;
    Movf_Fecnum:number;
    Movf_Anonum:number;
    Movf_Mesnum:number;
    Movf_Dianum:number;
    Movf_Fecven:Date;
    Sucu_Consec:any;
    Movf_Descri:string;
    Terc_Consec:any;
    Movf_Refere:string;
    Bode_Consec:any;
    Lisp_Consec:any;
    Cenc_Consec:any;
    Unin_Consec:any;
    Movf_Valsub:any;
    Movf_Valtim:number;
    Movf_Valtot:number;
    Movi_Consec:any;
    Movc_Consec:any;
    Movf_Estado:string;
    Movements:DetailBillingMovement[]=[]
}


export class DetailBillingMovement {
    Dmfa_Consec:any;
    Empr_Codigo:any;
    Movf_Consec:any;
    Prod_Consec:any;
    Dmfa_Descri:string;
    Dmfa_Cantid:number;
    Dmfa_Valmov:number;
    Dmfa_Valimp:number;
    Dmfa_Valtot:number;
    Dmfa_Nolote:number;
    Dmfa_Feclot:Date;
    Dmfa_Feclnu:number;
    
}

