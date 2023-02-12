import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleViewDetailFilterComponent } from './schedule-view-detail-filter.component';

describe('ScheduleViewDetailFilterComponent', () => {
  let component: ScheduleViewDetailFilterComponent;
  let fixture: ComponentFixture<ScheduleViewDetailFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleViewDetailFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleViewDetailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
