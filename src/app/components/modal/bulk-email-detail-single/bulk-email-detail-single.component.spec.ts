import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkEmailDetailSingleComponent } from './bulk-email-detail-single.component';

describe('BulkEmailDetailSingleComponent', () => {
  let component: BulkEmailDetailSingleComponent;
  let fixture: ComponentFixture<BulkEmailDetailSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkEmailDetailSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkEmailDetailSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
