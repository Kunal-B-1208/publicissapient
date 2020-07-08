import { Component, OnInit, OnDestroy } from '@angular/core';
import { HackerNewsService } from 'src/app/services/hacker-news.service';
import { Pagination, CommentDetails } from 'src/app/models/story.model';
import { ActivatedRoute } from '@angular/router';
import { serializeNodes } from '@angular/compiler/src/i18n/digest';

@Component({
  selector: 'app-hacker-news-comments',
  templateUrl: './hacker-news-comments.component.html',
  styleUrls: ['./hacker-news-comments.component.css']
})
export class HackerNewsCommentsComponent implements OnInit,OnDestroy {

  private sub: any;
  private story:string;
  pagination: Pagination;
  commnets: CommentDetails[];
  story_title:string;
  constructor(private service: HackerNewsService,
    private route: ActivatedRoute) {
    this.pagination = new Pagination();
    this.pagination.page = 1;
    this.pagination.hitsPerPage = 5;
    this.commnets = [];
    this.story_title="";

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      var story = params['story'];
      this.story = story;
      this.loadComments();
    });
  }

  loadComments() {
    this.sub = this.service.getCommentsByStory(this.story, this.pagination.page,
      this.pagination.hitsPerPage).subscribe(x => {
        this.commnets = x.hits;
        this.story_title =this.commnets[0].story_title;
        this.pagination.hitsPerPage = x.hitsPerPage;
        this.pagination.nbPages = x.nbPages;
        this.pagination.page = x.page;
      });
  }

  navigatePage(page:number){
    debugger;
    this.pagination.page = page;
    this.loadComments();
  }


}
