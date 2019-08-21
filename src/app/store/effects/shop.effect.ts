import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, catchError, switchMap } from "rxjs/operators";
import { ShopService } from "src/app/services/shop.service";

import * as fromShop from "../actions/shop.action";

@Injectable()
export class ShopEffects {
  constructor(private actions$: Actions, private shopService: ShopService) {}

  @Effect()
  loadPayment = this.actions$.pipe(
    ofType(fromShop.GET_PAYMENT),
    switchMap(() => {
      return this.shopService.getPaymentsParceling().pipe(
        map(payments => new fromShop.GetPaymentSuccess(payments)),
        catchError(error => of(new fromShop.GetPaymentFail(error)))
      );
    })
  );

  @Effect()
  createCreditCard = this.actions$.pipe(
    ofType(fromShop.CREATE_CREDIT_CARD),
    switchMap(payload => {
      return this.shopService.saveCreditCard(payload).pipe(
        map(
          newCreditCard => new fromShop.CreateCreditCardSuccess(newCreditCard)
        ),
        catchError(error => of(new fromShop.CreateCreditCardFail(error)))
      );
    })
  );
}
