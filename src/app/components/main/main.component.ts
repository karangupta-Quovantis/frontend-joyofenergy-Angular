import { Component, OnInit } from "@angular/core";
import { EnergyReading } from "src/app/shared/models/data.model";
import { DataService } from "src/app/shared/services/data.service";
import { renderChart } from "../../shared/utils/chart";
import {
  groupByDay,
  sortByTime,
  getReadings,
} from "../../shared/utils/reading";
import { WidgetConfiguration } from "src/app/shared/models/widget-configuration.model";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  chartData: EnergyReading[] = [];
  widgets: WidgetConfiguration[] = [];

  constructor(private dataService: DataService) {
    this.createChart();
  }

  ngOnInit(): void {
     this.getWidgets();
  }
 
  async getWidgets() {
    this.widgets = await this.dataService.getWidgets();
  }

  async createChart() {
    const readings = await getReadings();
    const containerId = "chart";
    this.chartData = readings;
    renderChart(containerId, sortByTime(groupByDay(readings)).slice(-30));
  }
}
