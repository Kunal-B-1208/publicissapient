import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HackerNewsDashBoardComponent} from './hacker-news-dash-board/hacker-news-dash-board.component';
import { HackerNewsUsersComponent } from './hacker-news-users/hacker-news-users.component';
import { HackerNewsCommentsComponent } from './hacker-news-comments/hacker-news-comments.component';

const routes: Routes = [
  {
    path: '',redirectTo:'home',pathMatch:'full'
  },
  {
    path: 'home',
    component: HackerNewsDashBoardComponent
  },
  {
    path: 'user/:id',
    component: HackerNewsUsersComponent
  },
  {
    path: 'comments/:story',
    component: HackerNewsCommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HackerNewsRoutingModule { }