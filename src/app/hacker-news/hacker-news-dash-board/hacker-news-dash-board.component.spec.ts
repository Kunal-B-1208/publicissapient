import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerNewsDashBoardComponent } from './hacker-news-dash-board.component';

describe('HackerNewsDashBoardComponent', () => {
  let component: HackerNewsDashBoardComponent;
  let fixture: ComponentFixture<HackerNewsDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerNewsDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerNewsDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
