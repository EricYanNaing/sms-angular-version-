import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnNetReportDetailComponent } from './on-net-report-detail.component';

describe('OnNetReportDetailComponent', () => {
  let component: OnNetReportDetailComponent;
  let fixture: ComponentFixture<OnNetReportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnNetReportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnNetReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
