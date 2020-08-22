import { Injectable } from '@angular/core';
import { ThirdPartie } from "../_models/third-partie.model";
import { Observable } from "rxjs";
import { Transaction, TransactionSimple } from "../../auth/_models/transaction.model";
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../assets/config/appplication';



const API_THIRD_PARTIE_URL = "api/Gene_Tercer"
@Injectable({
  providedIn: 'root'
})
export class ThirdPartiesService {

  constructor(private http:HttpClient) { }


  GetAllThirdPartie(): Observable<Transaction<ThirdPartie[]>> {
    return this.http.get<Transaction<ThirdPartie[]>>(`${apiUrl}${API_THIRD_PARTIE_URL}`);
}
addThirdPartie(thirdPartie: ThirdPartie): Observable<TransactionSimple>{
  return this.http.post<TransactionSimple>(`${apiUrl}${API_THIRD_PARTIE_URL}`,thirdPartie);
}
updateThirdPartie(thirdPartie: ThirdPartie): Observable<TransactionSimple>{
  console.log(thirdPartie);
  return this.http.post<TransactionSimple>(`${apiUrl}${API_THIRD_PARTIE_URL}/Update`,thirdPartie);
}
}
