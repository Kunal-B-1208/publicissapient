import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from 'src/app/services/hacker-news.service';
import { StoryDetails, Pagination } from 'src/app/models/story.model';

@Component({
  selector: 'app-hacker-news-dash-board',
  templateUrl: './hacker-news-dash-board.component.html',
  styleUrls: ['./hacker-news-dash-board.component.css']
})
export class HackerNewsDashBoardComponent implements OnInit {

  stories : StoryDetails[]= [];
  private pageNumber :number = 1;
  private pageSize : number = 10;
  private pagination : Pagination = new Pagination();
  IsPrevDisable= true;
  IsNextDisable= false;

  constructor(private service : HackerNewsService) { 
    
  }

  ngOnInit(): void {
    this.getAllStories();
  }

  getAllStories()
  {
    debugger;
    this.service.getStory(this.pageNumber,this.pageSize).subscribe(x => 
      {
        this.stories =[];
        this.stories = x.hits;
        this.pagination.page = x.page;
        this.pagination.nbPages = x.nbPages;
        this.pagination.hitsPerPage = x.hitsPerPage;

      });
  }

  getPrev(){
   if(this.pageNumber ==1){
    this.IsPrevDisable = true;
  }
  else{
    this.IsPrevDisable = false;
    this.pageNumber -= 1;
  }
    this.getAllStories();
  }
  getNext(){
    debugger;
        if(this.pagination.nbPages == this.pageNumber){
            this.IsNextDisable = true;
        }
        else{
          this.IsNextDisable = false;
          this.IsPrevDisable = false;
          this.pageNumber += 1;
        }
        this.getAllStories();

  }

}
