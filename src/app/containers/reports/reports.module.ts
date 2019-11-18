import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReportsRoutingModule } from "./reports-routing.module";
import { ChartsComponent } from "./charts/charts.component";
import { DxButtonModule, DxChartModule } from "devextreme-angular";
import { ReportService } from "./services/report.service";

@NgModule({
  declarations: [ChartsComponent],
  imports: [CommonModule, ReportsRoutingModule, DxButtonModule, DxChartModule],
  providers: [ReportService]
})
export class ReportsModule {}
