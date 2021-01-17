import { Injectable } from '@angular/core';
import { Product } from "../models/product.model";
import { Observable } from "rxjs";
import { Transaction, TransactionSimple } from "../../auth/_models/transaction.model";

import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../assets/config/appplication';


const API_PRODUCT_URL= "api/Inve_Product"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  GetAllProduct(): Observable<Transaction<Product[]>> {
    return this.http.get<Transaction<Product[]>>(`${apiUrl}${API_PRODUCT_URL}`);
}

addProduct(product: Product): Observable<TransactionSimple>{
  return this.http.post<TransactionSimple>(`${apiUrl}${API_PRODUCT_URL}`,product);
}
updateProduct(product: Product): Observable<TransactionSimple>{
  return this.http.post<TransactionSimple>(`${apiUrl}${API_PRODUCT_URL}/Update`,product);
}
}
