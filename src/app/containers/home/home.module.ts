import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigatorComponent } from "../../shared/navigator/navigator.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [NavigatorComponent],
  imports: [CommonModule, SharedModule]
})
export class HomeModule {}
