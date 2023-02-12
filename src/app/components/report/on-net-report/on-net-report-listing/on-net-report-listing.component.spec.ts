import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnNetReportListingComponent } from './on-net-report-listing.component';

describe('OnNetReportListingComponent', () => {
  let component: OnNetReportListingComponent;
  let fixture: ComponentFixture<OnNetReportListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnNetReportListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnNetReportListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
