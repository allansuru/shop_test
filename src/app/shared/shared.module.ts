import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavigatorComponent } from "./navigator/navigator.component";
import { CreditCardComponent } from "./credit-card/credit-card.component";

import { UtilitiesService } from "../services/utilities.service";

@NgModule({
  declarations: [NavigatorComponent, CreditCardComponent, CreditCardComponent],
  providers: [UtilitiesService],
  imports: [CommonModule],
  exports: [NavigatorComponent, CreditCardComponent]
})
export class SharedModule {}
