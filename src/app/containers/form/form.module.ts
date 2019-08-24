import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatTooltipModule
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
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [MatDatepickerModule],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormComponent],
  entryComponents: [DialogOkComponent]
})
export class FormModule {}
