import { Injectable } from '@angular/core';
import { MeasurentUnity } from "../models/measurent-unity.model";
import { Observable } from "rxjs";
import { Transaction, TransactionSimple } from "../../auth/_models/transaction.model";

import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../assets/config/appplication';


const API_MeasurentUnity_URL= "api/Inve_Unidad"
@Injectable({
  providedIn: 'root'
})
export class MeasurentUnityService {

  constructor(private http:HttpClient) { }


  GetAllMeasurentUnity(): Observable<Transaction<MeasurentUnity[]>> {
    return this.http.get<Transaction<MeasurentUnity[]>>(`${apiUrl}${API_MeasurentUnity_URL}`);
}
addMeasurentUnity(unity: MeasurentUnity): Observable<TransactionSimple>{
  return this.http.post<TransactionSimple>(`${apiUrl}${API_MeasurentUnity_URL}`,unity);
}
updateMeasurentUnity(unity: MeasurentUnity): Observable<TransactionSimple>{
  return this.http.post<TransactionSimple>(`${apiUrl}${API_MeasurentUnity_URL}/Update`,unity);
}
}
