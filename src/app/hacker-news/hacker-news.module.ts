import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackerNewsDashBoardComponent } from './hacker-news-dash-board/hacker-news-dash-board.component';
import {GetHostFromUrl} from 'src/app/hacker-news/pipes/hostFromUrl.pipe'
import {GetHoursFromDate} from 'src/app/hacker-news/pipes/getHoursFromDate.pipe'


@NgModule({
  declarations: [HackerNewsDashBoardComponent, GetHostFromUrl, GetHoursFromDate],
  imports: [
    CommonModule,
    
  ],
  exports:[HackerNewsDashBoardComponent]
})
export class HackerNewsModule { }
