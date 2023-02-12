import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsChannelChangeListingComponent } from './sms-channel-change-listing.component';

describe('SmsChannelChangeListingComponent', () => {
  let component: SmsChannelChangeListingComponent;
  let fixture: ComponentFixture<SmsChannelChangeListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsChannelChangeListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsChannelChangeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
