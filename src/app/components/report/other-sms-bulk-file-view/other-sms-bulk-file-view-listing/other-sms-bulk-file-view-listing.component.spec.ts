import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSmsBulkFileViewListingComponent } from './other-sms-bulk-file-view-listing.component';

describe('OtherSmsBulkFileViewListingComponent', () => {
  let component: OtherSmsBulkFileViewListingComponent;
  let fixture: ComponentFixture<OtherSmsBulkFileViewListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherSmsBulkFileViewListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSmsBulkFileViewListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
