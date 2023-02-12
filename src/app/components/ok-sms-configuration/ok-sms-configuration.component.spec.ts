import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkSmsConfigurationComponent } from './ok-sms-configuration.component';

describe('OkSmsConfigurationComponent', () => {
  let component: OkSmsConfigurationComponent;
  let fixture: ComponentFixture<OkSmsConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkSmsConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OkSmsConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
