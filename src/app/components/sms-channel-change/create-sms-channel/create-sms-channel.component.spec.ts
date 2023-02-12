import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSmsChannelComponent } from './create-sms-channel.component';

describe('CreateSmsChannelComponent', () => {
  let component: CreateSmsChannelComponent;
  let fixture: ComponentFixture<CreateSmsChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSmsChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSmsChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
