import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";
import "rxjs/add/observable/throw";
import { Payment, CreditCard } from "../models/credit-card";

const API_MOCK = "http://localhost:3000";

@Injectable()
export class ShopService {
  constructor(private http: HttpClient) {}

  getPaymentsParceling(): Observable<Payment[]> {
    return this.http
      .get<Payment[]>(`${API_MOCK}/payment`)
      .pipe(catchError((error: any) => Observable.throwError(error.json())));
  }

  saveCreditCard(payload: CreditCard): Observable<CreditCard> {
    return this.http
      .post<CreditCard>(`${API_MOCK}/creditCard`, payload)
      .pipe(catchError((error: any) => Observable.throwError(error.json())));
  }
}
