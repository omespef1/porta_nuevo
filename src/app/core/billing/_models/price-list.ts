import { extend } from "chartist";

export class PriceList {

    Lisp_Consec:any;
    Empr_Codigo:any;
    Lisp_Codigo:number;
    Lisp_Nombre:string;
    Sucu_Consec:any;
    Lisp_Estado:string;
}
export class PriceListDetail {

    Dlis_Consec:any;
    Lisp_Consec:any;
    Prod_Consec:number;
    Dlis_Valor:string;
    Dlis_Valimp:any;
    Dlis_Estado:string;
}


export class PriceListDetailProd extends PriceListDetail {

    Prod_Nombre:string;
}