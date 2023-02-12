import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsChannelChangeReportFilterComponent } from './sms-channel-change-report-filter.component';

describe('SmsChannelChangeReportFilterComponent', () => {
  let component: SmsChannelChangeReportFilterComponent;
  let fixture: ComponentFixture<SmsChannelChangeReportFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsChannelChangeReportFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsChannelChangeReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
