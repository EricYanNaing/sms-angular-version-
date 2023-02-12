import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnNetOffNetComparisonChartFilterComponent } from './on-net-off-net-comparison-chart-filter.component';

describe('OnNetOffNetComparisonChartFilterComponent', () => {
  let component: OnNetOffNetComparisonChartFilterComponent;
  let fixture: ComponentFixture<OnNetOffNetComparisonChartFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnNetOffNetComparisonChartFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnNetOffNetComparisonChartFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
