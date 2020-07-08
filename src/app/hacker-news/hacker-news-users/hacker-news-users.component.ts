import { Component, OnInit, OnDestroy } from '@angular/core';
import { HackerNewsService } from 'src/app/services/hacker-news.service';
import { UserDetails } from 'src/app/models/story.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hacker-news-users',
  templateUrl: './hacker-news-users.component.html',
  styleUrls: ['./hacker-news-users.component.css']
})
export class HackerNewsUsersComponent implements OnInit,OnDestroy {

  userDetails: UserDetails = new UserDetails();

  constructor(private service: HackerNewsService,
    private route: ActivatedRoute) { }

    private sub:any;

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      var user = params['id']; 
      this.loadUserDetails(user);
      
   });
  }

  loadUserDetails(user){
    this.sub =this.service.getUserDetails(user).subscribe(x => {
      this.userDetails = x;
    });
  }



}
