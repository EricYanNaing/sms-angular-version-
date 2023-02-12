import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBaseReportFilterComponent } from './company-base-report-filter.component';

describe('CompanyBaseReportFilterComponent', () => {
  let component: CompanyBaseReportFilterComponent;
  let fixture: ComponentFixture<CompanyBaseReportFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBaseReportFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBaseReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
