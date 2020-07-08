import { Component, OnInit, OnDestroy } from '@angular/core';
import { HackerNewsService } from 'src/app/services/hacker-news.service';
import { StoryDetails, Pagination, DataSender } from 'src/app/models/story.model';
import { Subject } from 'rxjs';
import { DataPassingService } from 'src/app/services/dataPassing.service';
import { StoryType } from 'src/app/enums/data.enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hacker-news-dash-board',
  templateUrl: './hacker-news-dash-board.component.html',
  styleUrls: ['./hacker-news-dash-board.component.css']
})
export class HackerNewsDashBoardComponent implements OnInit,OnDestroy {

  stories: StoryDetails[] = [];

  private pageNumber: number = 1;
  private pageSize: number = 10;
  pagination: Pagination = new Pagination();
  IsPrevDisable = true;
  IsNextDisable = false;
  private dataSender: DataSender;

  private storySub:any;

  constructor(private service: HackerNewsService, 
    private dataService: DataPassingService,
    private router: Router) {
    this.dataSender = new DataSender();
  }

  ngOnDestroy(): void {
    this.storySub.unsubscribe();
  }

  ngOnInit(): void {
    this.getAllStories();
  }

  getAllStories() {

    this.storySub =this.service.getStory(this.pageNumber, this.pageSize).subscribe(x => {
      
      var storyOutput = x[0];
      var voteData = x[1];
      var hiddenStories = x[2];
      this.stories = [];
      this.stories = storyOutput.hits;

      this.pagination.page = storyOutput.page;
      this.pagination.nbPages = storyOutput.nbPages;
      this.pagination.hitsPerPage = storyOutput.hitsPerPage;

      this.stories.map(x => {
        var val = voteData.get(x.objectID);
        if (isNaN(val)) {
          val = 0;
        }
        x.points += val;
        return !hiddenStories.includes(x.objectID);
      });

      this.updateSourceCollection();

    });
  }

  updateSourceCollection(){
    
    this.dataSender.data = this.stories;
    this.dataSender.typeOfData = StoryType.Collecion;
    this.dataService.changeMessage(this.dataSender);

  }

  navigatePage(page:number){
    debugger;
    this.pageNumber = page;
    this.getAllStories();
  }


  UpVote(id: string) {


    this.service.saveVotesData(id, 1);
    var story = this.getStoryById(id);
    if (story != null && story != undefined) {
      story.points += 1;

      //this.updatedStory = story;
      this.dataSender.data = story;
      this.dataSender.typeOfData = StoryType.Update;
      this.dataService.changeMessage(this.dataSender);
    }

  }

  Hide(story: StoryDetails) {

    this.service.HideStory(story.objectID);
    this.stories.splice(this.stories.indexOf(story), 1);

    this.dataSender.data = story;
    this.dataSender.typeOfData = StoryType.Hide;
    this.dataService.changeMessage(this.dataSender);
  }

  getStoryById(id: string) {
    return this.stories.find(x => x.objectID == id)
  }

  getUserDetails(user){
    
    this.router.navigate(['/user',user],{ skipLocationChange: true })
  }

  getStoryCommnets(story){
    this.router.navigate(['/comments',story])
  }


}
