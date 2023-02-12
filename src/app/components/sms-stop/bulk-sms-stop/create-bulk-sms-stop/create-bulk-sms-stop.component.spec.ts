import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBulkSmsStopComponent } from './create-bulk-sms-stop.component';

describe('CreateBulkSmsStopComponent', () => {
  let component: CreateBulkSmsStopComponent;
  let fixture: ComponentFixture<CreateBulkSmsStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBulkSmsStopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBulkSmsStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
