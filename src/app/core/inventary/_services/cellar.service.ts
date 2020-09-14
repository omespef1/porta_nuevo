import { Injectable } from '@angular/core';
import { Cellar } from "../models/cellar.model";
import { Observable } from "rxjs";
import { Transaction, TransactionSimple } from "../../auth/_models/transaction.model";
import { apiUrl } from '../../../../assets/config/appplication';
import { HttpClient } from '@angular/common/http';


const API_CELLAR_URL= "api/Inve_bodega"
@Injectable({
  providedIn: 'root'
})
export class CellarService {

  constructor(private http:HttpClient) { }


GetAllCellar(): Observable<Transaction<Cellar[]>> {
    return this.http.get<Transaction<Cellar[]>>(`${apiUrl}${API_CELLAR_URL}`);
}

addCellar(cellar: Cellar): Observable<TransactionSimple>{
  return this.http.post<TransactionSimple>(`${apiUrl}${API_CELLAR_URL}`,cellar);
}
updateCellar(cellar: Cellar): Observable<TransactionSimple>{
  return this.http.post<TransactionSimple>(`${apiUrl}${API_CELLAR_URL}/Update`,cellar);
}
}
