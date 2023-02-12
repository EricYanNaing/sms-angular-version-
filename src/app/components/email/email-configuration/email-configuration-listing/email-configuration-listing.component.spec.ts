import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConfigurationListingComponent } from './email-configuration-listing.component';

describe('EmailConfigurationListingComponent', () => {
  let component: EmailConfigurationListingComponent;
  let fixture: ComponentFixture<EmailConfigurationListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailConfigurationListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailConfigurationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
