import { Component, OnInit } from "@angular/core";
import { Payment, CreditCard } from "src/app/models/credit-card";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, select } from "@ngrx/store";
import { ShopState } from "src/app/store/reducers/shop.reducer";
import { selectPayment } from "src/app/store/selectors/shop.selectors";
import { Subscription } from "rxjs";
import { GetPayment, CreateCreditCard } from "src/app/store";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  public listPayments: Payment[];
  public subscription: Subscription;
  public formCreditCard: FormGroup;
  public getPaymentSelector$ = this.store.pipe(
    select<ShopState, any, Payment[]>(selectPayment)
  );

  constructor(
    private formBuilder: FormBuilder,
    public store: Store<ShopState>
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.setValidators();
    this.store.dispatch(new GetPayment());
    this.selectPayments();
  }

  public saveCardCredit = (newCreditCard: CreditCard) => {
    if (this.formCreditCard.valid) {
      this.store.dispatch(new CreateCreditCard(newCreditCard));
    }
  };

  private selectPayments = () =>
    this.subscription.add(
      this.getPaymentSelector$.subscribe(item => (this.listPayments = item))
    );

  private setValidators = () =>
    (this.formCreditCard = this.formBuilder.group({
      numCard: ["", [Validators.required]],
      name: ["", [Validators.required]],
      validate: ["", [Validators.required]],
      cvv: ["", [Validators.required]],
      payment: ["", Validators.required]
    }));
}
