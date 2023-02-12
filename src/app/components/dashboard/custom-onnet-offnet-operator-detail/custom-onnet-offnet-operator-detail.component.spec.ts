import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOnnetOffnetOperatorDetailComponent } from './custom-onnet-offnet-operator-detail.component';

describe('CustomOnnetOffnetOperatorDetailComponent', () => {
  let component: CustomOnnetOffnetOperatorDetailComponent;
  let fixture: ComponentFixture<CustomOnnetOffnetOperatorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomOnnetOffnetOperatorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomOnnetOffnetOperatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
