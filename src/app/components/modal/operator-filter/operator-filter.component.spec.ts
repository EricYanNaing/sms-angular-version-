import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorFilterComponent } from './operator-filter.component';

describe('OperatorFilterComponent', () => {
  let component: OperatorFilterComponent;
  let fixture: ComponentFixture<OperatorFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
