import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnNetOffNetComparisonComponent } from './on-net-off-net-comparison.component';

describe('OnNetOffNetComparisonComponent', () => {
  let component: OnNetOffNetComparisonComponent;
  let fixture: ComponentFixture<OnNetOffNetComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnNetOffNetComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnNetOffNetComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
