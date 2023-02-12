import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBulkSmsStopFilterComponent } from './update-bulk-sms-stop-filter.component';

describe('UpdateBulkSmsStopFilterComponent', () => {
  let component: UpdateBulkSmsStopFilterComponent;
  let fixture: ComponentFixture<UpdateBulkSmsStopFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBulkSmsStopFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBulkSmsStopFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
