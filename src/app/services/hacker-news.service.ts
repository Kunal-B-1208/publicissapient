import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StoryDetails, StoryOutput, UserDetails, CommentDetails, CommentOutput} from 'src/app/models/story.model';

import { throwError, forkJoin, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class HackerNewsService {
 
   private apiUrl: string= 'https://hn.algolia.com/api/v1/';
   private getStoryUrl: string = 'search?tags=story&page=#pageNum&hitsPerPage=#pageSize';
   private getCommentUrl:string ='search?tags=comment,story_#story&page=#pageNum&hitsPerPage=#pageSize'
   private getUserUrl:string= 'users/';
   private mapData : Map<string,number>;
   private hiddenStories: string[];

    constructor(private httpClient : HttpClient)
    {
      this.mapData = this.getVoteDataFromStorage();
      this.hiddenStories = this.getHiddenStoriesFromStorage();
      if(this.hiddenStories == null){
        this.hiddenStories = [];
      }
    }

    public getStory(pageNum : number, pageSize : number)
    {
     
        var url = this.apiUrl + this.getStoryUrl
        .replace("#pageNum",pageNum.toString())
        .replace("#pageSize",pageSize.toString());

        var storyData = this.httpClient.get<StoryOutput>(url);
        var voteData = this.getVoteDetails();
        var hiddenStory = this.getHiddenStories();

        return  forkJoin(storyData,voteData,hiddenStory);
    }

    public saveVotesData(storyId: string, voteCount : number){
      
      if(this.mapData != null && this.mapData != undefined){
        this.setVoteCount(storyId);
      }
      else{
         this.mapData = this.getVoteDataFromStorage();
         this.setVoteCount(storyId);
      }

      this.saveDataIntoLocal('UpVotes',JSON.stringify(Array.from(this.mapData.entries())))
    }

    private setVoteCount(storyId :string){

        var val = this.getVoteCount(storyId);
        val += 1;
        this.mapData.set(storyId,val);
    }

    private getVoteCount(storyId:string){

      var val = this.mapData.get(storyId);
        if(isNaN(val)){
          val= 0;
        }
        return val;
    }

    private getVoteDetails(): Observable<Map<string,number>>{
      return of(this.mapData);
    }

    private getHiddenStories() :Observable<string[]>{
      return of(this.hiddenStories);
    }


    private getVoteDataFromStorage(){
      
      var voteDetails= window.localStorage.getItem('UpVotes');
      var map = new Map<string,number>();

      if(voteDetails != null && voteDetails != undefined){
        map = new Map(JSON.parse(voteDetails));
      }
      return map;
    }

    private getHiddenStoriesFromStorage(){
      var data = window.localStorage.getItem('HiddenStories');
      if(data != null && data != undefined && data != ""){
          return JSON.parse(data);
      }
      return null;
    }

    public HideStory(storyId :string){
      
      if(this.hiddenStories == null || this.hiddenStories == undefined){
        this.hiddenStories = this.getHiddenStoriesFromStorage();
      }

      if(this.hiddenStories.indexOf(storyId) == -1){
        this.hiddenStories.push(storyId);
      }

      this.saveDataIntoLocal('HiddenStories',  JSON.stringify(this.hiddenStories));
    }

    private saveDataIntoLocal(key :string , value :string){
        window.localStorage.setItem(key,value);
    }

    public getUserDetails(user:string){
      var url = this.apiUrl + this.getUserUrl + user;
      return this.httpClient.get<UserDetails>(url);
    }

    public getCommentsByStory(story:string, pageNum : number, pageSize : number){
      var url = this.apiUrl + this.getCommentUrl
      .replace("#pageNum",pageNum.toString())
      .replace("#pageSize",pageSize.toString())
      .replace("#story",story.toString());

      return this.httpClient.get<CommentOutput>(url);

    }


}