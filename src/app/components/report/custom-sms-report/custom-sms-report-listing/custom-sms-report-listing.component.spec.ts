import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSmsReportListingComponent } from './custom-sms-report-listing.component';

describe('CustomSmsReportListingComponent', () => {
  let component: CustomSmsReportListingComponent;
  let fixture: ComponentFixture<CustomSmsReportListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSmsReportListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSmsReportListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
