import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from 'src/app/services/hacker-news.service';
import { StoryDetails, Pagination } from 'src/app/models/story.model';
import { Subject } from 'rxjs';
import { DataPassingService } from 'src/app/services/dataPassing.service';

@Component({
  selector: 'app-hacker-news-dash-board',
  templateUrl: './hacker-news-dash-board.component.html',
  styleUrls: ['./hacker-news-dash-board.component.css']
})
export class HackerNewsDashBoardComponent implements OnInit {

  stories : StoryDetails[]= [];
  
  pageNumber :number = 1;
  private pageSize : number = 10;
  private pagination : Pagination = new Pagination();
  IsPrevDisable= true;
  IsNextDisable= false;
  
  constructor(private service : HackerNewsService, private dataService : DataPassingService) { 
    
  }

  ngOnInit(): void {
    this.getAllStories();
  }

  getAllStories()
  {
    
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

    if(this.pageNumber ==1){
      this.IsPrevDisable = true;
    }

  }
    this.getAllStories();
  }
  getNext(){
    
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

  UpVote(id : string){
    debugger;

    this.service.saveVotesData(id,1);
    var story= this.getStoryById(id);
    if(story != null && story != undefined){
      story.points += 1;
      
      //this.updatedStory = story;
      this.dataService.changeMessage(story);
    }

  }

  Hide(id:StoryDetails){
    
      this.service.HideStory(id.objectID);
      this.stories.splice(this.stories.indexOf(id),1);
  }

  getStoryById(id:string){
    return this.stories.find(x=> x.objectID == id)
  }

}
