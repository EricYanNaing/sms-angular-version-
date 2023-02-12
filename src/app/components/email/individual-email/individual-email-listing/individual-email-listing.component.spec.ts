import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualEmailListingComponent } from './individual-email-listing.component';

describe('IndividualEmailListingComponent', () => {
  let component: IndividualEmailListingComponent;
  let fixture: ComponentFixture<IndividualEmailListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualEmailListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEmailListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
