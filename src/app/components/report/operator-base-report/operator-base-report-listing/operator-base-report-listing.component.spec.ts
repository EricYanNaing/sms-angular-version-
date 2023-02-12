import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorBaseReportListingComponent } from './operator-base-report-listing.component';

describe('OperatorBaseReportListingComponent', () => {
  let component: OperatorBaseReportListingComponent;
  let fixture: ComponentFixture<OperatorBaseReportListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorBaseReportListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorBaseReportListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
