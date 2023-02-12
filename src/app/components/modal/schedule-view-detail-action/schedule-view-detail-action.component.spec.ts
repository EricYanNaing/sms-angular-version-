import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleViewDetailActionComponent } from './schedule-view-detail-action.component';

describe('ScheduleViewDetailActionComponent', () => {
  let component: ScheduleViewDetailActionComponent;
  let fixture: ComponentFixture<ScheduleViewDetailActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleViewDetailActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleViewDetailActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
