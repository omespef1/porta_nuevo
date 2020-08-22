import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Transaction } from "../../auth/_models/transaction.model";
import { HttpClient } from '@angular/common/http';
import { BusinessUnit } from "../_models/business-unit.model";
import { apiUrl } from '../../../../assets/config/appplication';


const API_THIRD_PARTIE_URL = "api/Gene_Unineg"
@Injectable({
  providedIn: 'root'
})
export class BusinessUnitService {

  constructor(private http: HttpClient) { }


  GetAllBusinessUnit(): Observable<Transaction<BusinessUnit[]>> {
    return this.http.get<Transaction<BusinessUnit[]>>(`${apiUrl}${API_THIRD_PARTIE_URL}`);
}
}
