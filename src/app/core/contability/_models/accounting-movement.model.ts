export class AccountingMoveement {
    movc_Consec: any;
    Empr_Codigo:any;
    Docu_Consec:any;
    Movc_Numero:number;
    Movc_Fechas:Date;
    Movc_Fecnum:number;
    Movc_Anonum:number;
    Movc_Mesnum:number;
    Movc_Dianum:number;
    Movc_Descri:string;
    Sucu_Consec:any;
    Movc_Refere:string;
    Movc_Estado:string;
   Movements:AccountingMovementDetail[];
   constructor(){
       this.Movc_Fechas = new Date();
       this.Movements =[];
   }

}

export class AccountingMovementDetail {


    Movc_Consec:any;
    Empr_Codigo:any;
    Dmco_Consec:any;
    Cuen_Consec:any;
    Dmco_Descri:string;
    Dmco_Refere:string;
    Dmco_Valdeb:number;
    Dmco_Valcre:number;
    Dmco_Valbas:number;
    Dmco_Porbas:number;
    Cenc_Consec:any;
    Unin_Consec:any;
    Terc_Consec:any;

}