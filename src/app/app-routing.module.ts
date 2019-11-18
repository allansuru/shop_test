import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./containers/users/users.component";
import { FormComponent } from "./containers/form/form.component";
import { ChartsComponent } from "./containers/reports/charts/charts.component";

const routes: Routes = [
  { path: "users/add", component: UsersComponent },
  { path: "card/add", component: FormComponent },
  {
    path: "report",
    children: [
      {
        path: "chart",
        component: ChartsComponent,
        loadChildren: "./containers/reports/reports.module#ReportsModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
