import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OredooOffnetPieChartComponent } from './oredoo-offnet-pie-chart.component';

describe('OredooOffnetPieChartComponent', () => {
  let component: OredooOffnetPieChartComponent;
  let fixture: ComponentFixture<OredooOffnetPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OredooOffnetPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OredooOffnetPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
