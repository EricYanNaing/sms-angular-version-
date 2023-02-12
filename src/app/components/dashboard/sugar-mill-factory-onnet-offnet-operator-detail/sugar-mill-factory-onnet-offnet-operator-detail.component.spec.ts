import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarMillFactoryOnnetOffnetOperatorDetailComponent } from './sugar-mill-factory-onnet-offnet-operator-detail.component';

describe('SugarMillFactoryOnnetOffnetOperatorDetailComponent', () => {
  let component: SugarMillFactoryOnnetOffnetOperatorDetailComponent;
  let fixture: ComponentFixture<SugarMillFactoryOnnetOffnetOperatorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugarMillFactoryOnnetOffnetOperatorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarMillFactoryOnnetOffnetOperatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
