import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCostAmountCompanyBaseComponent } from './share-cost-amount-company-base.component';

describe('ShareCostAmountCompanyBaseComponent', () => {
  let component: ShareCostAmountCompanyBaseComponent;
  let fixture: ComponentFixture<ShareCostAmountCompanyBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareCostAmountCompanyBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareCostAmountCompanyBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
