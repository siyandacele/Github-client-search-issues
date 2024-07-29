import { Component, inject, Input, OnInit } from '@angular/core';
import { Repository } from '../../models/repository';
import { ChartOptions } from 'chart.js';
import { GithubRepositoriesStore } from '../../store/github.store';

@Component({
  selector: 'cci-github-repository-chart',
  templateUrl: './github-repository-chart.component.html',
})
export class GithubRepositoryChartComponent {
  readonly store = inject(GithubRepositoriesStore);
  // Pie
  public pieChartLabels = ['Open issues', 'Close issues'];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {}
}
