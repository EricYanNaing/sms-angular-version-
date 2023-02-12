import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSmsPriceListingComponent } from './set-sms-price-listing.component';

describe('SetSmsPriceListingComponent', () => {
  let component: SetSmsPriceListingComponent;
  let fixture: ComponentFixture<SetSmsPriceListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetSmsPriceListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSmsPriceListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
