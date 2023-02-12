import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnNetReportFilterComponent } from './on-net-report-filter.component';

describe('OnNetReportFilterComponent', () => {
  let component: OnNetReportFilterComponent;
  let fixture: ComponentFixture<OnNetReportFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnNetReportFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnNetReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
