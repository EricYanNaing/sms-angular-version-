import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCostAmountCompanyBaseChartFilterComponent } from './share-cost-amount-company-base-chart-filter.component';

describe('ShareCostAmountCompanyBaseChartFilterComponent', () => {
  let component: ShareCostAmountCompanyBaseChartFilterComponent;
  let fixture: ComponentFixture<ShareCostAmountCompanyBaseChartFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareCostAmountCompanyBaseChartFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareCostAmountCompanyBaseChartFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
