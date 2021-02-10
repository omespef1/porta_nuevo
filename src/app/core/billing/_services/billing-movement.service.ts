import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Transaction, TransactionSimple } from '../../auth/_models/transaction.model';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../assets/config/appplication';
import { map } from "rxjs/operators";
// import { BillingMovementGet } from "../_models/accounting-movement.model";
const API_MOVEMENT_BILLING_URL = "api/Fact_Movfac";
@Injectable({
  providedIn: 'root'
})
export class BillingMovementService {
 applicated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient) { }



  Save(obj:any): Observable<Transaction<any>> {
    return this.http.post<Transaction<any>>(`${apiUrl}${API_MOVEMENT_BILLING_URL}`,obj);
}

apply(obj:any): Observable<TransactionSimple> {
  return this.http.post<TransactionSimple>(`${apiUrl}${API_MOVEMENT_BILLING_URL}/apply`,{'id': obj}).pipe(map(resp=>{
    if(resp.Retorno==0){
      this.applicated.next(true);
    }
    return resp;
  }))
}


// GetAllAcoountingMovements(): Observable<Transaction<BillingMovementGet[]>> {
//   return this.http.get<Transaction<BillingMovementGet[]>>(`${apiUrl}${API_MOVEMENT_BILLING_URL}`);
// }

}
