import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgmOffnetChartComponent } from './cgm-offnet-chart.component';

describe('CgmOffnetChartComponent', () => {
  let component: CgmOffnetChartComponent;
  let fixture: ComponentFixture<CgmOffnetChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgmOffnetChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgmOffnetChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
