import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffNetReportListingComponent } from './off-net-report-listing.component';

describe('OffNetReportListingComponent', () => {
  let component: OffNetReportListingComponent;
  let fixture: ComponentFixture<OffNetReportListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffNetReportListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffNetReportListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
