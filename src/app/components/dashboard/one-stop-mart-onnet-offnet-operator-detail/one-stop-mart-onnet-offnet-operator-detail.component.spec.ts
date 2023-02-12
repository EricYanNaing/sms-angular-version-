import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneStopMartOnnetOffnetOperatorDetailComponent } from './one-stop-mart-onnet-offnet-operator-detail.component';

describe('OneStopMartOnnetOffnetOperatorDetailComponent', () => {
  let component: OneStopMartOnnetOffnetOperatorDetailComponent;
  let fixture: ComponentFixture<OneStopMartOnnetOffnetOperatorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneStopMartOnnetOffnetOperatorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneStopMartOnnetOffnetOperatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
