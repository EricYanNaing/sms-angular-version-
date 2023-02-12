import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorBaseReportDetailComponent } from './operator-base-report-detail.component';

describe('OperatorBaseReportDetailComponent', () => {
  let component: OperatorBaseReportDetailComponent;
  let fixture: ComponentFixture<OperatorBaseReportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorBaseReportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorBaseReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
