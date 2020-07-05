import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StoryDetails, StoryOutput} from 'src/app/models/story.model';
@Injectable({
  providedIn: 'root',
})
export class HackerNewsService {
 
   private apiUrl: string= 'http://hn.algolia.com/api/v1/';
   private getStoryUrl: string = 'search?tags=story&page=#pageNum&hitsPerPage=#pageSize';
   private getCommentUrl:string ='search?tags=comment,story_#story&page=#pageNum&hitsPerPage=#pageSize'

    constructor(private httpClient : HttpClient)
    {
        
    }

    public getStory(pageNum : number, pageSize : number)
    {
        var url = this.apiUrl + this.getStoryUrl
        .replace("#pageNum",pageNum.toString())
        .replace("#pageSize",pageSize.toString());
        return this.httpClient.get<StoryOutput>(url);
    }

}