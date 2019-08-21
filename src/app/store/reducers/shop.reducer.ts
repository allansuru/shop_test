import { CreditCard, Payment } from "src/app/models/credit-card";
import * as fromShop from "../actions/shop.action";

export interface ShopState {
  creditCard: CreditCard;
  payment: Payment[];
  loaded: boolean;
  loading: boolean;
}

export const InitialState: ShopState = {
  creditCard: null,
  payment: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = InitialState,
  action: fromShop.ShopActions
): ShopState {
  switch (action.type) {
    case fromShop.GET_PAYMENT: {
      return {
        ...state,
        loading: true
      };
    }

    case fromShop.CREATE_CREDIT_CARD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case fromShop.GET_PAYMENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        payment: action.payload
      };
    }

    case fromShop.CREATE_CREDIT_CARD: {
      return {
        ...state,
        loading: true,
        creditCard: state.creditCard
      };
    }

    case fromShop.CREATE_CREDIT_CARD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case fromShop.CREATE_CREDIT_CARD_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        creditCard: action.payload
      };
    }
  }
}
