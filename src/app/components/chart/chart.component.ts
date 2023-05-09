import { Component, Input, OnInit } from '@angular/core';
import { EnergyReading } from 'src/app/shared/models/data.model';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chart: any;
  @Input() chartData: EnergyReading[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  

}
