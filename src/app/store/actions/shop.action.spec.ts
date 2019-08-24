import * as fromShop from "./shop.action";
import { CreditCard } from "src/app/models/credit-card";

describe("Shop Actions", () => {
  describe("GetPayment Actions", () => {
    describe("GetPayment", () => {
      it("should create an action", () => {
        const action = new fromShop.GetPayment();

        expect({ ...action }).toEqual({
          type: fromShop.GET_PAYMENT
        });
      });
    });

    describe("GetPaymentFail", () => {
      it("should create an action", () => {
        const payload = { message: "Load Error" };
        const action = new fromShop.GetPaymentFail(payload);

        expect({ ...action }).toEqual({
          type: fromShop.GET_PAYMENT_FAIL,
          payload
        });
      });
    });
    describe("GetPaymentSuccess", () => {
      it("should create an action", () => {
        const payload = [
          {
            id: 0,
            value: "12x R$1.000,00 sem juros"
          },
          {
            id: 1,
            value: "6x R$500,00 sem juros"
          }
        ];
        const action = new fromShop.GetPaymentSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromShop.GET_PAYMENT_SUCCESS,
          payload
        });
      });
    });
  });

  describe("CreateCreditCard Actions", () => {
    describe("CreateCreditCard", () => {
      it("should create an action", () => {
        const payload: any = {
          numCard: "5129 3383 7508 1683",
          name: "Maria Rocha",
          validate: "23/08",
          cvv: 331,
          payment: 1,
          id: 1
        };
        const action = new fromShop.CreateCreditCard(payload);

        expect({ ...action }).toEqual({
          type: fromShop.CREATE_CREDIT_CARD,
          payload
        });
      });
    });
    describe("CreateCreditCardFail", () => {
      it("should create an action", () => {
        const payload = { message: "Create Error" };
        const action = new fromShop.CreateCreditCardFail(payload);

        expect({ ...action }).toEqual({
          type: fromShop.CREATE_CREDIT_CARD_FAIL,
          payload
        });
      });
    });
    describe("CreateCreditCardSuccess", () => {
      it("should create an action", () => {
        const payload: any = {
          numCard: "5129 3383 7508 1683",
          name: "Maria Rocha",
          validate: "23/08",
          cvv: 331,
          payment: 1,
          id: 1
        };
        const action = new fromShop.CreateCreditCardSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromShop.CREATE_CREDIT_CARD_SUCCESS,
          payload
        });
      });
    });
  });
});
