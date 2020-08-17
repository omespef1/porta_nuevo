import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Transaction } from "../../auth/_models/transaction.model";
import { ContabilityAccounting } from '../_models/contability-accounting.model';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../assets/config/appplication';

const API_CONTABILITY_ACCOUNTING_URL = "api/Cont_Cuenta"
@Injectable({
  providedIn: 'root'
})
export class ContabilityAccouintingService {

  constructor(private http:HttpClient) { }


  GetAllAccouintings(code:any): Observable<Transaction<ContabilityAccounting[]>> {
    return this.http.get<Transaction<ContabilityAccounting[]>>(`${apiUrl}${API_CONTABILITY_ACCOUNTING_URL}?Empr_Codigo=${code}`);
}
}
