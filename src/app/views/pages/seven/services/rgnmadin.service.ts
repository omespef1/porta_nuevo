// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RxJS
import { Observable, forkJoin, of } from 'rxjs';

import { Gn_Madi } from '../gn/gn_madin/models/FormData';


const API_CUSTOMERS_URL = 'api/customers';

@Injectable({
  providedIn: 'root'
})
export class RgnmadinService {

  constructor(private http: HttpClient) { }



  getGnMadinkByProcodi(pro_codi:string, emp_codi:number): Observable<Gn_Madi> {
		return this.http.get<Gn_Madi>(`http://localhost/rgnmadin/api/gnmadin?pro_codi=${pro_codi}&emp_codi=${emp_codi}`);
	}
}
