import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorBaseReportFilterComponent } from './operator-base-report-filter.component';

describe('OperatorBaseReportFilterComponent', () => {
  let component: OperatorBaseReportFilterComponent;
  let fixture: ComponentFixture<OperatorBaseReportFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorBaseReportFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorBaseReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
