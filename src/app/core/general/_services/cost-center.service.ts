import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Transaction } from "../../auth/_models/transaction.model";
import { CostCenter } from "../_models/cost-center.model";
import { apiUrl } from '../../../../assets/config/appplication';
import { HttpClient } from '@angular/common/http';
const API_COST_CENTER_URL ="api/Gene_Cencos"

@Injectable({
  providedIn: 'root'
})
export class CostCenterService {

  constructor(private http:HttpClient) { }


  GetAllCostCenter(code:any): Observable<Transaction<CostCenter[]>> {
    return this.http.get<Transaction<CostCenter[]>>(`${apiUrl}${API_COST_CENTER_URL}?Empr_Codigo=${code}`);
}
}
