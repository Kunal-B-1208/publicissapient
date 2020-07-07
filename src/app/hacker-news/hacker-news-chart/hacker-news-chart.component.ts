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
import { StoryOutput, StoryDetails, DataSender } from 'src/app/models/story.model';
import { BehaviorSubject } from 'rxjs';
import { DataPassingService } from 'src/app/services/dataPassing.service';
import { StoryType } from 'src/app/enums/data.enums';

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
export class HackerNewsChartComponent implements OnInit  {

  data : StoryDetails[];
  

  public chartOptions: ChartOptions;
  constructor(private dataService : DataPassingService) {
    this.data = [];
  }
  
  ngOnInit(): void {

    this.loadChart();
    
    this.dataService.currentMessage.subscribe(message => {
       if(message != null){
         this.dataProcessor(message);
        }
    })
    
  }
  
  dataProcessor(message : DataSender){
    
    switch(message.typeOfData){
      case StoryType.Update:

        var x = <StoryDetails>message.data;
        var story = this.data.find(x=> x.objectID== x.objectID);
        if(story != null && story != undefined){
            story = x;
            this.loadChartData();
        }

        break;
      case StoryType.Collecion:
        this.data = <StoryDetails[]>message.data;
        this.loadCategory();
        this.loadChartData();
        break;
      case StoryType.Hide:
        var x = <StoryDetails>message.data;
        this.data.splice(this.data.indexOf(x),1);
        this.loadCategory();
        this.loadChartData();
        break;
        default:
          break
    }

  }

  loadChartData(){
    
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
