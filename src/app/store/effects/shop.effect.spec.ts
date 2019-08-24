import { HttpClientTestingModule } from "@angular/common/http/testing";
import { hot, cold } from "jasmine-marbles";
import { Actions } from "@ngrx/effects";
import { empty, Observable, of } from "rxjs";
import { ShopService } from "src/app/services/shop.service";
import * as fromEffects from "./shop.effect";
import * as fromActions from "../actions/shop.action";

import { TestBed } from "@angular/core/testing";

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe("ShopEffects", () => {
  let actions$: TestActions;
  let service: ShopService;
  let effects: fromEffects.ShopEffects;

  const creditCard: any = {
    numCard: "5129 3383 7508 1683",
    name: "Maria Rocha",
    validate: "23/08",
    cvv: 331,
    payment: 1,
    id: 1
  };

  const paymentForm = [
    {
      id: 0,
      value: "12x R$1.000,00 sem juros"
    },
    {
      id: 1,
      value: "6x R$500,00 sem juros"
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ShopService,
        fromEffects.ShopEffects,
        { provide: Actions, useFactory: getActions }
      ]
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(ShopService);
    effects = TestBed.get(fromEffects.ShopEffects);

    spyOn(service, "getPaymentsParceling").and.returnValue(of(paymentForm));
    spyOn(service, "saveCreditCard").and.returnValue(of(creditCard));
  });

  describe("getPayment$", () => {
    it("should return a collection from Payment", () => {
      const action = new fromActions.GetPayment();
      const completion = new fromActions.GetPaymentSuccess(paymentForm);

      actions$.stream = hot("-a", { a: action });
      const expected = cold("-b", { b: completion });

      expect(effects.loadPayment$).toBeObservable(expected);
    });
  });

  describe("createCreditCard$", () => {
    it("should save a credit card", () => {
      const action = new fromActions.CreateCreditCard(creditCard);
      const completion = new fromActions.CreateCreditCardSuccess(creditCard);

      actions$.stream = hot("-a", { a: action });
      const expected = cold("-c", { c: completion });

      expect(effects.createCreditCard$).toBeObservable(expected);
    });
  });
});
