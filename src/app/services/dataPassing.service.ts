import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StoryType} from 'src/app/enums/data.enums';
import { DataSender } from '../models/story.model';

@Injectable({
    providedIn: 'root'
  })

  export class DataPassingService{

    private messageSource = new BehaviorSubject<DataSender>(null);
    currentMessage = this.messageSource.asObservable();

    constructor() { }

  changeMessage(message: DataSender) {
    this.messageSource.next(message)
  }

  }   

