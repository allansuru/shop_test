import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-dialog-ok",
  templateUrl: "./dialog-ok.component.html",
  styleUrls: ["./dialog-ok.component.scss"]
})
export class DialogOkComponent {
  constructor(public dialogRef: MatDialogRef<DialogOkComponent>) {}

  public onNoClick = (): void => this.dialogRef.close();
  public onSave = (): void => this.dialogRef.close("save");
}
