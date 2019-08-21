import { Component, OnInit, OnDestroy } from "@angular/core";
import { Payment, CreditCard } from "src/app/models/credit-card";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl
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

import { parseToDayAndMoth } from "src/app/helpers";
import { UtilitiesService } from "src/app/services/utilities.service";
import { MatDialog } from "@angular/material";
import { DialogOkComponent } from "./dialog-ok/dialog-ok.component";

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
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class FormComponent implements OnInit, OnDestroy {
  public listPayments: Payment[];
  public save: boolean = false;
  public subscription: Subscription;
  public formCreditCard: FormGroup;
  public getPaymentSelector$ = this.store.pipe(
    select<ShopState, any, Payment[]>(selectPayment)
  );

  constructor(
    private formBuilder: FormBuilder,
    public store: Store<ShopState>,
    private utilitiesService: UtilitiesService,
    public dialog: MatDialog
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
      this.openDialog(newCreditCard);
    }
  };

  get numCard(): AbstractControl {
    return this.formCreditCard.get("numCard");
  }

  public formatNumCard = (value: string) => {
    let isValid = false;
    const regex = /^[0-9\s]*$/;
    isValid = regex.test(value);
    if (value && isValid)
      return this.numCard.setValue(
        this.utilitiesService.formatNumber(this.formCreditCard.value.numCard)
      );
    this.numCard.setValue(value.substring(0, value.length - 1));
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

  openDialog(newCreditCard: CreditCard): void {
    const dialogRef = this.dialog.open(DialogOkComponent, {
      width: "250px"
    });

    dialogRef.afterClosed().subscribe(save => {
      debugger;
      if (save) {
        const formatValidate = parseToDayAndMoth(newCreditCard.validate);
        this.save = true;
        this.store.dispatch(
          new CreateCreditCard({
            ...newCreditCard,
            validate: formatValidate
          })
        );
      }
    });
  }
}
