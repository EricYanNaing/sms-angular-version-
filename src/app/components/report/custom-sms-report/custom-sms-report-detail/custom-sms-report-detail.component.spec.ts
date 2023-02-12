import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSmsReportDetailComponent } from './custom-sms-report-detail.component';

describe('CustomSmsReportDetailComponent', () => {
  let component: CustomSmsReportDetailComponent;
  let fixture: ComponentFixture<CustomSmsReportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSmsReportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSmsReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
