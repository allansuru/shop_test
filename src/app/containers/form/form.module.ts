import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
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
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [MatDatepickerModule],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormComponent]
})
export class FormModule {}
