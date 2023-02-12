import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSmsReportFilterComponent } from './custom-sms-report-filter.component';

describe('CustomSmsReportFilterComponent', () => {
  let component: CustomSmsReportFilterComponent;
  let fixture: ComponentFixture<CustomSmsReportFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSmsReportFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSmsReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
