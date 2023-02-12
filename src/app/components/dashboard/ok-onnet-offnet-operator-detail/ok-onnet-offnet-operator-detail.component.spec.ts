import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkOnnetOffnetOperatorDetailComponent } from './ok-onnet-offnet-operator-detail.component';

describe('OkOnnetOffnetOperatorDetailComponent', () => {
  let component: OkOnnetOffnetOperatorDetailComponent;
  let fixture: ComponentFixture<OkOnnetOffnetOperatorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkOnnetOffnetOperatorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OkOnnetOffnetOperatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
