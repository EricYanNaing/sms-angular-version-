import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSmsBulkFileViewDetailComponent } from './other-sms-bulk-file-view-detail.component';

describe('OtherSmsBulkFileViewDetailComponent', () => {
  let component: OtherSmsBulkFileViewDetailComponent;
  let fixture: ComponentFixture<OtherSmsBulkFileViewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherSmsBulkFileViewDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSmsBulkFileViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
