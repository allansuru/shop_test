import { Component, OnInit, OnDestroy } from "@angular/core";
import { Payment, CreditCard } from "src/app/models/credit-card";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Store, select } from "@ngrx/store";
import { ShopState } from "src/app/store/reducers/shop.reducer";
import { selectPayment } from "src/app/store/selectors/shop.selectors";
import { Subscription } from "rxjs";
import { GetPayment, CreateCreditCard } from "src/app/store";

import * as _moment from "moment";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from "@angular/material/core";

import { Moment } from "moment";
import { MatDatepicker } from "@angular/material";
import { parseToDayAndMoth } from "src/app/helpers";
const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: "MM/YYYY"
  },
  display: {
    dateInput: "MM/YYYY",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class FormComponent implements OnInit, OnDestroy {
  date = new FormControl(moment());

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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public saveCardCredit = (newCreditCard: CreditCard) => {
    if (this.formCreditCard.valid) {
      const formatValidate = parseToDayAndMoth(newCreditCard.validate);
      this.store.dispatch(
        new CreateCreditCard({
          ...newCreditCard,
          validate: formatValidate
        })
      );
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
