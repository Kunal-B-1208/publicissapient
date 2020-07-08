import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackerNewsDashBoardComponent } from './hacker-news-dash-board/hacker-news-dash-board.component';
import {GetHostFromUrl} from 'src/app/hacker-news/pipes/hostFromUrl.pipe'
import {GetHoursFromDate} from 'src/app/hacker-news/pipes/hoursFromDate.pipe'
import {NgApexchartsModule} from 'node_modules/ng-apexcharts';
import {HackerNewsChartComponent} from './hacker-news-chart/hacker-news-chart.component';
import {HackerNewsRoutingModule} from 'src/app/hacker-news/hacker-news-routing-module';
import { HackerNewsUsersComponent } from './hacker-news-users/hacker-news-users.component';
import { from } from 'rxjs';
import { HackerNewsCommentsComponent } from './hacker-news-comments/hacker-news-comments.component';
import { HackerNewsPaginationComponent } from './hacker-news-pagination/hacker-news-pagination.component';
@NgModule({
  declarations: [HackerNewsDashBoardComponent, GetHostFromUrl, GetHoursFromDate,HackerNewsChartComponent, HackerNewsUsersComponent, HackerNewsCommentsComponent, HackerNewsPaginationComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    HackerNewsRoutingModule
  ],
  exports:[HackerNewsDashBoardComponent]
})
export class HackerNewsModule { }
