import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pagination } from 'src/app/models/story.model';

@Component({
  selector: 'app-hacker-news-pagination',
  templateUrl: './hacker-news-pagination.component.html'
})
export class HackerNewsPaginationComponent implements OnInit {

  
  @Input() pagination :Pagination;
  @Output() changePage: EventEmitter<number>;
  IsPrevDisable :boolean = true;
  IsNextDisable :boolean = false;
  pageNumber:number =1;
  constructor() { 
    this.changePage =new EventEmitter<number>();
  }

  ngOnInit(): void {

  }

  getPrev() {
    if (this.pageNumber == 1) {
      this.IsPrevDisable = true;
    }
    else {
      
      this.IsPrevDisable = false;

      this.pageNumber -= 1;

      if (this.pageNumber == 1) {
        this.IsPrevDisable = true;
      }

    }
  }

  getNext() {

    if (this.pagination.nbPages == this.pageNumber) {
      this.IsNextDisable = true;
    }
    else {
      this.IsNextDisable = false;
      this.IsPrevDisable = false;
      this.pageNumber += 1;
    }

  }

  Navigate(type){
    debugger;
    if(type=='Prev'){
      this.getPrev();
    }
    else if(type=='Next'){
      this.getNext();
    }
    this.changePage.emit(this.pageNumber);
  }

}
