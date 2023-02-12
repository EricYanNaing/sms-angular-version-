import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBaseReportDetailComponent } from './company-base-report-detail.component';

describe('CompanyBaseReportDetailComponent', () => {
  let component: CompanyBaseReportDetailComponent;
  let fixture: ComponentFixture<CompanyBaseReportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBaseReportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBaseReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
