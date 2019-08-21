import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule
} from "@angular/material";
import { FormComponent } from "./form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormComponent]
})
export class FormModule {}
