import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualSmsStopListingComponent } from './individual-sms-stop-listing.component';

describe('IndividualSmsStopListingComponent', () => {
  let component: IndividualSmsStopListingComponent;
  let fixture: ComponentFixture<IndividualSmsStopListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualSmsStopListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualSmsStopListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
