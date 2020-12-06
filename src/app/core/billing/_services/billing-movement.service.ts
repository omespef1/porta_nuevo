import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Transaction, TransactionSimple } from '../../auth/_models/transaction.model';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../assets/config/appplication';
// import { BillingMovementGet } from "../_models/accounting-movement.model";
const API_MOVEMENT_BILLING_URL = "api/Fact_Movfac";
@Injectable({
  providedIn: 'root'
})
export class BillingMovementService {

  constructor(private http:HttpClient) { }



  Save(obj:any): Observable<Transaction<any>> {
    return this.http.post<Transaction<any>>(`${apiUrl}${API_MOVEMENT_BILLING_URL}`,obj);
}

apply(obj:any): Observable<TransactionSimple> {
  return this.http.post<TransactionSimple>(`${apiUrl}${API_MOVEMENT_BILLING_URL}/apply`,obj);
}


// GetAllAcoountingMovements(): Observable<Transaction<BillingMovementGet[]>> {
//   return this.http.get<Transaction<BillingMovementGet[]>>(`${apiUrl}${API_MOVEMENT_BILLING_URL}`);
// }

}
