import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Transaction, TransactionSimple } from "../../auth/_models/transaction.model";
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../assets/config/appplication';
import { PriceList } from "../_models/price-list";
const API_PRICE_LIST_URL = "api/Fact_Lispre"
@Injectable({
  providedIn: 'root'
})
export class BillingPriceListService {

  constructor(private http:HttpClient) { }


  GetAllPriceList(): Observable<Transaction<PriceList[]>> {
    return this.http.get<Transaction<PriceList[]>>(`${apiUrl}${API_PRICE_LIST_URL}`);
}
GetAllPriceListActive(): Observable<Transaction<PriceList[]>> {
  return this.http.get<Transaction<PriceList[]>>(`${apiUrl}${API_PRICE_LIST_URL}/active`);
}
addPriceList(priceList: PriceList): Observable<TransactionSimple>{
  return this.http.post<TransactionSimple>(`${apiUrl}${API_PRICE_LIST_URL}`,priceList);
}
updatePriceList(priceList: PriceList): Observable<TransactionSimple>{
  return this.http.post<TransactionSimple>(`${apiUrl}${API_PRICE_LIST_URL}/Update`,priceList);
}
}
