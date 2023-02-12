import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleViewDetailComponent } from './schedule-view-detail.component';

describe('ScheduleViewDetailComponent', () => {
  let component: ScheduleViewDetailComponent;
  let fixture: ComponentFixture<ScheduleViewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleViewDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
