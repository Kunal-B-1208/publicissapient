import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerNewsChartComponent } from './hacker-news-chart.component';

describe('HackerNewsChartComponent', () => {
  let component: HackerNewsChartComponent;
  let fixture: ComponentFixture<HackerNewsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerNewsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerNewsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
