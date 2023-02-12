import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnNetChartFilterComponent } from './on-net-chart-filter.component';

describe('OnNetChartFilterComponent', () => {
  let component: OnNetChartFilterComponent;
  let fixture: ComponentFixture<OnNetChartFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnNetChartFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnNetChartFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
