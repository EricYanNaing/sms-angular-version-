import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAttachmentModalComponent } from './email-attachment-modal.component';

describe('EmailAttachmentModalComponent', () => {
  let component: EmailAttachmentModalComponent;
  let fixture: ComponentFixture<EmailAttachmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailAttachmentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAttachmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
