import { Injectable } from '@angular/core';
import { Product } from "../models/product.model";
import { Observable } from "rxjs";
import { Transaction } from "../../auth/_models/transaction.model";

import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../assets/config/appplication';


const API_PRODUCT_URL= "api/Products"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  GetAllProduct(empr_codigo:any): Observable<Transaction<Product[]>> {
    return this.http.get<Transaction<Product[]>>(`${apiUrl}${API_PRODUCT_URL}?empr_codigo=${empr_codigo}`);
}
}
