import * as fromShop from "./shop.reducer";
import * as fromActions from "../actions/shop.action";
import { Payment, CreditCard } from "src/app/models/credit-card";

describe("ShopReducer", () => {
  describe("GET_PAYMENT action", () => {
    it("should set loading to true", () => {
      const { InitialState } = fromShop;
      const action = new fromActions.GetPayment();
      const state = fromShop.reducer(InitialState, action);

      expect(state.loading).toEqual(true);
      expect(state.loaded).toEqual(false);
      expect(state.payment).toEqual([]);
    });
  });

  describe("GET_PAYMENT_SUCCESS action", () => {
    it("should populate the toppings array", () => {
      const payments: Payment[] = [
        {
          id: 0,
          value: "12x R$1.000,00 sem juros"
        },
        {
          id: 1,
          value: "6x R$500,00 sem juros"
        }
      ];

      const { InitialState } = fromShop;
      const action = new fromActions.GetPaymentSuccess(payments);
      const state = fromShop.reducer(InitialState, action);

      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
      expect(state.payment).toEqual(payments);
    });
  });

  describe("CREATE_CREDIT_CARD_SUCCESS action", () => {
    it("should add new creditCard", () => {
      const creditCard: any = {
        numCard: "5129 3383 7508 1683",
        name: "Maria Rocha",
        validate: "23/08",
        cvv: 331,
        payment: 1,
        id: 1
      };

      const { InitialState } = fromShop;
      const action = new fromActions.CreateCreditCardSuccess(creditCard);
      const state = fromShop.reducer(InitialState, action);

      expect(creditCard).toEqual(creditCard);
    });
  });
});
