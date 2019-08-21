import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavigatorComponent } from "./navigator/navigator.component";
import { CreditCardComponent } from "./credit-card/credit-card.component";
import { FormatCardNumberPipe } from "../pipes/formatCardNumber";

@NgModule({
  declarations: [
    NavigatorComponent,
    CreditCardComponent,
    CreditCardComponent,
    FormatCardNumberPipe
  ],
  imports: [CommonModule],
  exports: [NavigatorComponent, CreditCardComponent, FormatCardNumberPipe]
})
export class SharedModule {}
