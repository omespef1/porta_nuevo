import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Transaction, TransactionSimple } from '../../auth/_models/transaction.model';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../assets/config/appplication';
const API_MOVEMENT_ACCOUNTING_URL = "api/Cont_Mvon";
@Injectable({
  providedIn: 'root'
})
export class AccountingMovementService {

  constructor(private http:HttpClient) { }



  Save(obj:any): Observable<Transaction<any>> {
    return this.http.post<Transaction<any>>(`${apiUrl}${API_MOVEMENT_ACCOUNTING_URL}`,obj);
}

apply(obj:any): Observable<TransactionSimple> {
  return this.http.post<TransactionSimple>(`${apiUrl}${API_MOVEMENT_ACCOUNTING_URL}/apply`,obj);
}


}
