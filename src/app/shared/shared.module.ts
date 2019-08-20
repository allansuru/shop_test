import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavigatorComponent } from "./navigator/navigator.component";
import { CreditCardComponent } from "./credit-card/credit-card.component";

@NgModule({
  declarations: [NavigatorComponent, CreditCardComponent, CreditCardComponent],
  imports: [CommonModule],
  exports: [NavigatorComponent, CreditCardComponent]
})
export class SharedModule {}
