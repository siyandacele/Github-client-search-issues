import { Component, Input, OnInit } from '@angular/core';
import { Repository } from '../../models/repository';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'cci-github-repository-chart',
  templateUrl: './github-repository-chart.component.html',
})
export class GithubRepositoryChartComponent {
    // Pie
    public pieChartOptions: ChartOptions<'pie'> = {
      responsive: true,

        plugins: {
          legend: {
            position: 'bottom'
          },
          title:{
            display: true,
            text: "Bootstrap Github issues"
        }
        }

    };
    public pieChartLabels = ['Open issues', 'Close issues' ];

    public pieChartDatasets = [ {
      label: 'Github Issues',
      data: [ 300, 500 ],
      backgroundColor: ["#a30026", "#016b11"]
    }];
    public pieChartLegend = true;
    public pieChartPlugins = [];

    constructor() {
    }
}
