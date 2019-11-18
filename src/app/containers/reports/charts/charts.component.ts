import { Component } from "@angular/core";

import {
  ReportService,
  ComplaintsWithPercent
} from "../services/report.service";

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.scss"]
})
export class ChartsComponent {
  dataSource: ComplaintsWithPercent[];

  constructor(reportService: ReportService) {
    this.dataSource = reportService.getComplaintsData();
  }

  public customizeTooltip = (info: any) => {
    return {
      html:
        "<div><div class='tooltip-header'>" +
        info.argumentText +
        "</div>" +
        "<div class='tooltip-body'><div class='series-name'>" +
        info.points[0].seriesName +
        ": </div><div class='value-text'>" +
        info.points[0].valueText +
        "</div><div class='series-name'>" +
        info.points[1].seriesName +
        ": </div><div class='value-text'>" +
        info.points[1].valueText +
        "% </div></div></div>"
    };
  };

  public customizeLabelText = (info: any) => info.valueText + "%";
}
