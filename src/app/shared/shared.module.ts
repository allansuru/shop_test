import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavigatorComponent } from "./navigator/navigator.component";

@NgModule({
  declarations: [NavigatorComponent],
  imports: [CommonModule],
  exports: [NavigatorComponent]
})
export class SharedModule {}
