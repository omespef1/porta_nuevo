import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { Transaction, TransactionSimple } from "../../auth/_models/transaction.model";

import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../assets/config/appplication';
import { TypeProduct } from '../models/type-product';


const API_TypeProduct_URL= "api/Inve_Tiprod"
@Injectable({
  providedIn: 'root'
})
export class TypeProductService {

  constructor(private http:HttpClient) { }


GetAllTypeProduct(): Observable<Transaction<TypeProduct[]>> {
    return this.http.get<Transaction<TypeProduct[]>>(`${apiUrl}${API_TypeProduct_URL}`);
}
addTypeProduct(typeProduct: TypeProduct): Observable<TransactionSimple>{
  return this.http.post<TransactionSimple>(`${apiUrl}${API_TypeProduct_URL}`,typeProduct);
}
updateTypeProduct(typeProduct: TypeProduct): Observable<TransactionSimple>{
  return this.http.post<TransactionSimple>(`${apiUrl}${API_TypeProduct_URL}/Update`,typeProduct);
}
}
