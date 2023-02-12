import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualEmailListingFilterComponent } from './individual-email-listing-filter.component';

describe('IndividualEmailListingFilterComponent', () => {
  let component: IndividualEmailListingFilterComponent;
  let fixture: ComponentFixture<IndividualEmailListingFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualEmailListingFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEmailListingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
