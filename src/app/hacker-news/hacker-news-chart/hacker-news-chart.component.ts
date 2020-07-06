import { Component, OnInit ,ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexDataLabels,
  ApexMarkers,
  ApexGrid,
  ApexLegend,
  ApexStroke,
  
} from "ng-apexcharts";
import { StoryOutput, StoryDetails } from 'src/app/models/story.model';
import { BehaviorSubject } from 'rxjs';
import { DataPassingService } from 'src/app/services/dataPassing.service';

interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  stroke:ApexStroke;
  title: ApexTitleSubtitle;


};

@Component({
  selector: 'app-hacker-news-chart',
  templateUrl: './hacker-news-chart.component.html',
  styleUrls: ['./hacker-news-chart.component.css']
})
export class HackerNewsChartComponent implements OnInit ,OnChanges {

  
  private _storyDetail = new BehaviorSubject<StoryDetails[]>([]);

  private data : StoryDetails[]= [];
  @Input()  set storyDetail(value){
    this._storyDetail.next(value);
  }
  get storyDetail() {
    return this._storyDetail.getValue();
  }

  public chartOptions: ChartOptions;
  constructor(private dataService : DataPassingService) {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    if(changes['updatedStory']){
      console.log(changes['updatedStory'].currentValue);
    }
  }

  ngOnInit(): void {
    this.loadChart();

    this._storyDetail.subscribe(x => {
      this.data = x;
      this.loadCategory();
      this.loadChartData();
    });


    this.dataService.currentMessage.subscribe(message => {
        debugger;  
      var x = <StoryDetails>message;
        var story = this.data.find(x=> x.objectID== x.objectID);
        if(story != null && story != undefined){
          story = x;
          this.loadChartData();
        }
    })
    
  }
  
  loadChartData(){
    debugger;
    this.chartOptions.series = [{
      data: this.data.map(a=> a.points)
    }];
    
  }

  loadCategory(){
    this.chartOptions.xaxis = {
      categories:this.data.map(a=> a.objectID)
    };
  }


  loadChart(){

    this.chartOptions = {
      series: [
        {
          name: "votes-story",
          data: []
        },
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Hacker-News-Chart",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: [],
        title: {
          text: "Id"
        }
      },
      yaxis: {
        title: {
          text: "Votes"
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };  

   
  }
}
