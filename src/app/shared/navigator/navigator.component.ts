import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { ShopState } from "src/app/store/reducers/shop.reducer";
import { selectFinish } from "src/app/store/selectors/shop.selectors";

@Component({
  selector: "app-navigator",
  templateUrl: "./navigator.component.html",
  styleUrls: ["./navigator.component.scss"]
})
export class NavigatorComponent {
  public isFinish: boolean = false;

  constructor(public store: Store<ShopState>) {}

  public getNavigatorStatus$ = this.store
    .pipe(select<ShopState, any, boolean>(selectFinish))
    .subscribe(isFinish => (this.isFinish = isFinish));
}
