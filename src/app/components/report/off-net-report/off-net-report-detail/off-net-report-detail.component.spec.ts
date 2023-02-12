import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffNetReportDetailComponent } from './off-net-report-detail.component';

describe('OffNetReportDetailComponent', () => {
  let component: OffNetReportDetailComponent;
  let fixture: ComponentFixture<OffNetReportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffNetReportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffNetReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
