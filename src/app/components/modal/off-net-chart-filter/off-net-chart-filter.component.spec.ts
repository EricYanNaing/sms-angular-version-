import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffNetChartFilterComponent } from './off-net-chart-filter.component';

describe('OffNetChartFilterComponent', () => {
  let component: OffNetChartFilterComponent;
  let fixture: ComponentFixture<OffNetChartFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffNetChartFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffNetChartFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
