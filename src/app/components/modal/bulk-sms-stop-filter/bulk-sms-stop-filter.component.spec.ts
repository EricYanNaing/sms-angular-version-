import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkSmsStopFilterComponent } from './bulk-sms-stop-filter.component';

describe('BulkSmsStopFilterComponent', () => {
  let component: BulkSmsStopFilterComponent;
  let fixture: ComponentFixture<BulkSmsStopFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkSmsStopFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkSmsStopFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
