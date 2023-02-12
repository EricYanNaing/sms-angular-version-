import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffNetReportFilterComponent } from './off-net-report-filter.component';

describe('OffNetReportFilterComponent', () => {
  let component: OffNetReportFilterComponent;
  let fixture: ComponentFixture<OffNetReportFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffNetReportFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffNetReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
