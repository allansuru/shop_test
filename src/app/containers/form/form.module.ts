import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule
} from "@angular/material";
import { FormComponent } from "./form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DialogOkComponent } from "./dialog-ok/dialog-ok.component";

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
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [MatDatepickerModule],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormComponent],
  entryComponents: [DialogOkComponent]
})
export class FormModule {}
