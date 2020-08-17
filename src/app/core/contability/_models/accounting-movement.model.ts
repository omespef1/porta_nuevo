export class AccountingMoveement {
    movc_Consec: number;
    Empr_Codigo:number;
    Docu_Consec:number;
    Movc_Numero:number;
    Movc_Fechas:Date;
    Movc_Fecnum:number;
    Movc_Anonum:number;
    Movc_Mesnum:number;
    Movc_Dianum:number;
    Movc_Descri:string;
    Sucu_Consec:number;
    Movc_Refere:string;
    Movc_Estado:string;
   Movements:AccountingMovementDetail[];
   constructor(){
       this.Movc_Fechas = new Date();
       this.Movements =[];
   }

}

export class AccountingMovementDetail {


    Movc_Consec:number;
    Empr_Codigo:number;
    Dmco_Consec:number;
    Cuen_Consec:number;
    Dmco_Descri:string;
    Dmco_Refere:string;
    Dmco_Valdeb:number;
    Dmco_Valcre:number;
    Dmco_Valbas:number;
    Dmco_Porbas:number;
    Cenc_Consec:number;
    Unin_Consec:number;
    Terc_Consec:number;

}