import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBulkEmailDetailComponent } from './add-bulk-email-detail.component';

describe('AddBulkEmailDetailComponent', () => {
  let component: AddBulkEmailDetailComponent;
  let fixture: ComponentFixture<AddBulkEmailDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBulkEmailDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBulkEmailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
