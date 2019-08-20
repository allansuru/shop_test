import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule
} from "@angular/material";
import { FormComponent } from "./form.component";

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormComponent]
})
export class FormModule {}
