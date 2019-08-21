import { ActionReducerMap } from "@ngrx/store";
import { ShopState } from "./shop.reducer";

import * as fromShop from "./shop.reducer";
export interface State {
  shop: ShopState;
}

export const reducers: ActionReducerMap<State> = {
  shop: fromShop.reducer
};
