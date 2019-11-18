import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  constructor() {}

  @Output() save = new EventEmitter();

  ngOnInit() {}

  public handleSave = () => this.save.emit("save");
}
