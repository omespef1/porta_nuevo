import { Injectable } from '@angular/core';
import { Transaction } from "../../auth/_models/transaction.model";
import { Business } from "../models/business.modeL";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
const API_BRANCH_OFFICE_URL = "api/Segu_Empres"
import { apiUrl } from '../../../../assets/config/appplication'
@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }

  GetAllBusiness(): Observable<Transaction<Business[]>> {
    return this.http.get<Transaction<Business[]>>(`${apiUrl}${API_BRANCH_OFFICE_URL}`);
}
}
