import { Component } from '@angular/core';
import { BarChartComponent } from '../../default/bar-chart/bar-chart.component';
import { BajajChartComponent } from '../../default/bajaj-chart/bajaj-chart.component';
import { ChartDataMonthComponent } from '../../default/chart-data-month/chart-data-month.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BajajChartComponent, BarChartComponent, ChartDataMonthComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
