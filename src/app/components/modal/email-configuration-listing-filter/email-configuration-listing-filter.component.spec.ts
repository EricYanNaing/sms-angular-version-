import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConfigurationListingFilterComponent } from './email-configuration-listing-filter.component';

describe('EmailConfigurationListingFilterComponent', () => {
  let component: EmailConfigurationListingFilterComponent;
  let fixture: ComponentFixture<EmailConfigurationListingFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailConfigurationListingFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailConfigurationListingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
