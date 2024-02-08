import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};


  public ngOnInit(): void {
    HC_exporting(this.Highcharts);
    this.chartOptions = this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderwidth: 0,
        margin: [2, 2, 2, 2],
        height: 60
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        outside: true
      },
      legend: {
        enabled: false
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      series: [
        {
          data: [77, 78, 39, 66]
        }
      ]
    };
  }
}
