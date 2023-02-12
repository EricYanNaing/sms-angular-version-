import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkTaxiOnnetOffnetOperatorDetailComponent } from './ok-taxi-onnet-offnet-operator-detail.component';

describe('OkTaxiOnnetOffnetOperatorDetailComponent', () => {
  let component: OkTaxiOnnetOffnetOperatorDetailComponent;
  let fixture: ComponentFixture<OkTaxiOnnetOffnetOperatorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkTaxiOnnetOffnetOperatorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OkTaxiOnnetOffnetOperatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
