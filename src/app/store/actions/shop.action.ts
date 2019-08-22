import { Action } from "@ngrx/store";
import { CreditCard, Payment } from "src/app/models/credit-card";

export const CREATE_CREDIT_CARD = "[CREDIT-CARD] Create credit-card";
export const CREATE_CREDIT_CARD_FAIL = "[CREDIT-CARD] Create credit-card Fail";
export const CREATE_CREDIT_CARD_SUCCESS =
  "[CREDIT-CARD] Create credit-card Success";

export const GET_PAYMENT = "[PAYMENT] Get payment";
export const GET_PAYMENT_FAIL = "[PAYMENT] Get payment Fail";
export const GET_PAYMENT_SUCCESS = "[PAYMENT] Get payment Fail";

export const SHOW_VALUES_CARD = "[VALUES CARD] Show values at card";

export class CreateCreditCard implements Action {
  readonly type = CREATE_CREDIT_CARD;
  constructor(public payload: CreditCard) {}
}

export class CreateCreditCardFail implements Action {
  readonly type = CREATE_CREDIT_CARD_FAIL;

  constructor(public payload: any) {}
}

export class CreateCreditCardSuccess implements Action {
  readonly type = CREATE_CREDIT_CARD_SUCCESS;

  constructor(public payload: CreditCard) {}
}

export class GetPayment implements Action {
  readonly type = GET_PAYMENT;
}

export class GetPaymentFail implements Action {
  readonly type = GET_PAYMENT_FAIL;

  constructor(public payload: any) {}
}

export class GetPaymentSuccess implements Action {
  readonly type = GET_PAYMENT_SUCCESS;

  constructor(public payload: Payment[]) {}
}

export class ShowValuesInCard implements Action {
  readonly type = SHOW_VALUES_CARD;

  constructor(public payload: CreditCard) {}
}

export type ShopActions =
  | CreateCreditCard
  | CreateCreditCardFail
  | CreateCreditCardSuccess
  | GetPayment
  | GetPaymentFail
  | GetPaymentSuccess
  | ShowValuesInCard;
