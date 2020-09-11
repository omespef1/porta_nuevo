import { Injectable } from '@angular/core';
import { Cellar } from "../models/cellar.model";
import { Observable } from "rxjs";
import { Transaction } from "../../auth/_models/transaction.model";
import { apiUrl } from '../../../../assets/config/appplication';
import { HttpClient } from '@angular/common/http';


const API_CELLAR_URL= "api/Cellars"
@Injectable({
  providedIn: 'root'
})
export class CellarService {

  constructor(private http:HttpClient) { }


  GetAllCellar(empr_codigo:any): Observable<Transaction<Cellar[]>> {
    return this.http.get<Transaction<Cellar[]>>(`${apiUrl}${API_CELLAR_URL}?empr_codigo=${empr_codigo}`);
}
}
