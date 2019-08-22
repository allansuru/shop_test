import { createSelector, createFeatureSelector } from "@ngrx/store";
import { ShopState } from "../reducers/shop.reducer";

export const getShopState = createFeatureSelector<ShopState>("shop");

export const selectShop = createSelector(
  getShopState,
  selectedState => selectedState
);

export const selectPayment = createSelector(
  selectShop,
  selectedState => selectedState.payment
);

export const selectCreditCard = createSelector(
  selectShop,
  selectedState => selectedState && selectedState.creditCard
);

export const selectCardFake = createSelector(
  selectShop,
  selectedState => selectedState && selectedState.creditCardFake
);

export const selectFinish = createSelector(
  selectShop,
  selectedState => selectedState && selectedState.finishProcess
);
