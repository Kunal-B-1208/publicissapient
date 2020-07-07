import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackerNewsDashBoardComponent } from './hacker-news-dash-board/hacker-news-dash-board.component';
import {GetHostFromUrl} from 'src/app/hacker-news/pipes/hostFromUrl.pipe'
import {GetHoursFromDate} from 'src/app/hacker-news/pipes/hoursFromDate.pipe'
import {NgApexchartsModule} from 'node_modules/ng-apexcharts';
import {HackerNewsChartComponent} from './hacker-news-chart/hacker-news-chart.component';
@NgModule({
  declarations: [HackerNewsDashBoardComponent, GetHostFromUrl, GetHoursFromDate,HackerNewsChartComponent],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  exports:[HackerNewsDashBoardComponent]
})
export class HackerNewsModule { }
