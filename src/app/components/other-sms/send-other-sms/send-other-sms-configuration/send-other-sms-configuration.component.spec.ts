import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOtherSmsConfigurationComponent } from './send-other-sms-configuration.component';

describe('SendOtherSmsConfigurationComponent', () => {
  let component: SendOtherSmsConfigurationComponent;
  let fixture: ComponentFixture<SendOtherSmsConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendOtherSmsConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendOtherSmsConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
