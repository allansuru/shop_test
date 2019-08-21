import { Component, OnInit, OnDestroy } from "@angular/core";
import { CreditCard } from "src/app/models/credit-card";
import { Subscription } from "rxjs";
import { Store, select } from "@ngrx/store";
import { ShopState } from "src/app/store/reducers/shop.reducer";
import { selectCreditCard } from "src/app/store/selectors/shop.selectors";

@Component({
  selector: "app-credit-card",
  templateUrl: "./credit-card.component.html",
  styleUrls: ["./credit-card.component.scss"]
})
export class CreditCardComponent implements OnInit, OnDestroy {
  public creditCard: CreditCard = {
    name: "NOME DO TITULAR",
    cvv: 0,
    numCard: "**** **** **** *",
    validate: "00/00"
  };

  public subscription: Subscription;
  public getNewCreditCard$ = this.store.pipe(
    select<ShopState, any, CreditCard>(selectCreditCard)
  );

  constructor(public store: Store<ShopState>) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.getNewCreditCard();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getNewCreditCard = () =>
    this.subscription.add(
      this.getNewCreditCard$.subscribe((card: CreditCard) => {
        if (card) {
          this.creditCard = card;
        }
      })
    );
}
