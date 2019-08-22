import { Component, OnInit, OnDestroy } from "@angular/core";
import { CreditCard } from "src/app/models/credit-card";
import { Subscription } from "rxjs";
import { Store, select } from "@ngrx/store";
import { ShopState } from "src/app/store/reducers/shop.reducer";
import {
  selectCreditCard,
  selectCardFake
} from "src/app/store/selectors/shop.selectors";
import { parseToDayAndMoth } from "src/app/helpers";

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

  public getValuesToFakeCard$ = this.store.pipe(
    select<ShopState, any, CreditCard>(selectCardFake)
  );

  constructor(public store: Store<ShopState>) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.getValuesFromForm();
    this.getNewCreditCard();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getValuesFromForm = () => {
    this.subscription.add(
      this.getValuesToFakeCard$.subscribe((card: CreditCard) => {
        if (card && card.validate) {
          const formatValidate = parseToDayAndMoth(card.validate);
          return this.setCreditCard({
            ...card,
            validate: formatValidate
          });
        }
        this.setCreditCard({
          ...card
        });
      })
    );
  };

  private getNewCreditCard = () =>
    this.subscription.add(
      this.getNewCreditCard$.subscribe((card: CreditCard) => {
        this.setCreditCard(card);
      })
    );

  private setCreditCard = (card: CreditCard) => {
    if (card) this.creditCard = card;
  };
}
