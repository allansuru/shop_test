import { ActionReducerMap, State } from "@ngrx/store";

import * as fromShop from "./shop.reducer";

export const reducers: ActionReducerMap<any> = {
  shopReducer: fromShop.reducer
};
