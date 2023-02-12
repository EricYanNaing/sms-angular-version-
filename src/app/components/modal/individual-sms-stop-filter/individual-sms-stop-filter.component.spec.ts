import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualSmsStopFilterComponent } from './individual-sms-stop-filter.component';

describe('IndividualSmsStopFilterComponent', () => {
  let component: IndividualSmsStopFilterComponent;
  let fixture: ComponentFixture<IndividualSmsStopFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualSmsStopFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualSmsStopFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
