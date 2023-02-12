import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsWhiteListListingComponent } from './sms-white-list-listing.component';

describe('SmsWhiteListListingComponent', () => {
  let component: SmsWhiteListListingComponent;
  let fixture: ComponentFixture<SmsWhiteListListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsWhiteListListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsWhiteListListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
