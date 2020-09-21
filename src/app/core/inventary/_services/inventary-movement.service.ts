import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Transaction, TransactionSimple } from "../../auth/_models/transaction.model";

import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../assets/config/appplication';
import { InventaryMovementGet } from "../models/inventary-movement.model";
const API_MOVEMENT_INVENTARY_URL = "api/Inve_Movinv";
@Injectable({
  providedIn: 'root'
})
export class InventaryMovementService {
constructor(private http:HttpClient){

}
  
  Save(obj:any): Observable<Transaction<any>> {
    return this.http.post<Transaction<any>>(`${apiUrl}${API_MOVEMENT_INVENTARY_URL}`,obj);
}

apply(obj:any): Observable<TransactionSimple> {
  return this.http.post<TransactionSimple>(`${apiUrl}${API_MOVEMENT_INVENTARY_URL}/apply`,obj);
}


GetAllInventaryMovements(): Observable<Transaction<InventaryMovementGet[]>> {
  return this.http.get<Transaction<InventaryMovementGet[]>>(`${apiUrl}${API_MOVEMENT_INVENTARY_URL}`);
}
}
