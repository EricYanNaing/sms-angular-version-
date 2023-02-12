import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgmOnnetOffnetOperatorDetailComponent } from './cgm-onnet-offnet-operator-detail.component';

describe('CgmOnnetOffnetOperatorDetailComponent', () => {
  let component: CgmOnnetOffnetOperatorDetailComponent;
  let fixture: ComponentFixture<CgmOnnetOffnetOperatorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgmOnnetOffnetOperatorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgmOnnetOffnetOperatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
