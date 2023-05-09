import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { EnergyReading } from "../models/data.model";
import { getReadings } from "../utils/reading";
import { WidgetConfiguration } from "../models/widget-configuration.model";
import { COST_PER_UNIT, FOOTPRINT } from "../constants/constants";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor() {}

  async getWidgets() {
    const readings = await getReadings(720);

    return [
      new WidgetConfiguration({
        header: "COST",
        value: this.getTotalCost(readings),
        unit: "$",
      }),
      new WidgetConfiguration({
        header: "CONSUMPTION",
        value: this.getTotalConsumption(readings),
        unit: "kWh",
      }),
      new WidgetConfiguration({
        header: "FOOTPRINT",
        value: this.getTotalFootprint(readings),
        unit: "tonnes",
      }),
    ];
  }

  private getTotalCost(readings: any[]): number {
    return this.getTotalConsumption(readings) * COST_PER_UNIT;
  }

  private getTotalConsumption(readings: any[]): number {
    return readings.reduce((totalReading, next) => {
      return (totalReading += next.value);
    }, 0);
  }

  private getTotalFootprint(readings: any[]): number {
    return this.getTotalConsumption(readings) * FOOTPRINT;
  }
}
