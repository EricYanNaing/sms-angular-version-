import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsChannelListingComponent } from './sms-channel-listing.component';

describe('SmsChannelListingComponent', () => {
  let component: SmsChannelListingComponent;
  let fixture: ComponentFixture<SmsChannelListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsChannelListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsChannelListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
