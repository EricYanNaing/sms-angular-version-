import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBaseReportListingComponent } from './company-base-report-listing.component';

describe('CompanyBaseReportListingComponent', () => {
  let component: CompanyBaseReportListingComponent;
  let fixture: ComponentFixture<CompanyBaseReportListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBaseReportListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBaseReportListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
