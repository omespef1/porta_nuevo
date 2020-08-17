import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Transaction } from "../../auth/_models/transaction.model";
import { HttpClient } from '@angular/common/http';
import { DocumentAccounting } from "../_models/document.model";
import { apiUrl } from '../../../../assets/config/appplication';
const API_DOCUMENT_ACCOUNTING_URL = "api/Gene_Docume"
@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http:HttpClient) { }


  GetDocumentAccounting(code:any): Observable<Transaction<DocumentAccounting[]>> {
    return this.http.get<Transaction<DocumentAccounting[]>>(`${apiUrl}${API_DOCUMENT_ACCOUNTING_URL}?Empr_Codigo=${code}`);
}
}
