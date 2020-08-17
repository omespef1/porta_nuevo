import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Transaction, TransactionSimple } from "../../auth/_models/transaction.model";
import { BranchOffice } from "../_models/branch-office.model";
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../assets/config/appplication';
const API_BRANCH_OFFICE_URL = "api/Gene_Sucurs"
@Injectable({
  providedIn: 'root'
})
export class BranchOfficeService {

  constructor(private http:HttpClient) { }


  GetAllBranchOffice(): Observable<Transaction<BranchOffice[]>> {
    return this.http.get<Transaction<BranchOffice[]>>(`${apiUrl}${API_BRANCH_OFFICE_URL}`);
}
addBranchOffice(branchOffice: BranchOffice): Observable<TransactionSimple>{
  return this.http.post<TransactionSimple>(`${apiUrl}${API_BRANCH_OFFICE_URL}`,branchOffice);
}
updateBranchOffice(branchOffice: BranchOffice): Observable<TransactionSimple>{
  return this.http.post<TransactionSimple>(`${apiUrl}${API_BRANCH_OFFICE_URL}/Update`,branchOffice);
}
}
