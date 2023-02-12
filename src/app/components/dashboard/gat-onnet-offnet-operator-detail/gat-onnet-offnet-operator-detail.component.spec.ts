import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatOnnetOffnetOperatorDetailComponent } from './gat-onnet-offnet-operator-detail.component';

describe('GatOnnetOffnetOperatorDetailComponent', () => {
  let component: GatOnnetOffnetOperatorDetailComponent;
  let fixture: ComponentFixture<GatOnnetOffnetOperatorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatOnnetOffnetOperatorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatOnnetOffnetOperatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
