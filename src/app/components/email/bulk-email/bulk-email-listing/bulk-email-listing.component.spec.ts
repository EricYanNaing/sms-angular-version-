import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkEmailListingComponent } from './bulk-email-listing.component';

describe('BulkEmailListingComponent', () => {
  let component: BulkEmailListingComponent;
  let fixture: ComponentFixture<BulkEmailListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkEmailListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkEmailListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
