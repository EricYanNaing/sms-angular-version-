import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkSmsStopListingComponent } from './bulk-sms-stop-listing.component';

describe('BulkSmsStopListingComponent', () => {
  let component: BulkSmsStopListingComponent;
  let fixture: ComponentFixture<BulkSmsStopListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkSmsStopListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkSmsStopListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
