export class CONT_MOVCON {
    MOVC_CONSEC: number;
    EMPR_CODIGO:number;
    DOCU_CONSEC:number;
    MOVC_NUMERO:number;
    MOVC_FECHAS:Date;
    MOVC_FECNUM:number;
    MOVC_ANONUM:number;
    MOVC_MESNUM:number;
    MOVC_DIANUM:number;
    MOVC_DESCRI:string;
    SUCU_CONSEC:number;
    MOVC_REFERE:string;
    MOVC_ESTADO:string;
   detalle:any[];
   constructor(){
       this.MOVC_FECHAS = new Date();
       this.detalle =[];
   }

}

export class CONT_DMCONT {

    MOVC_CONSEC:number;
    EMPR_CODIGO:number;
    DMCO_CONSEC:number;
    CUEN_CONSEC:number;
    DMCO_DESCRI:string;
    MMCO_REFERE:string;
    DMCO_VALDEB:number;
    DMCO_VALCRE:number;
    DMCO_VALBAS:number;
    DMCO_PORBAS:number;
    CENC_CONSEC:number;
    UNIN_CONSEC:number;
    TERC_CONSEC:number;

}