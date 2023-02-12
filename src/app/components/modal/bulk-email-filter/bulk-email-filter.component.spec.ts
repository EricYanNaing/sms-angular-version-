import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkEmailFilterComponent } from './bulk-email-filter.component';

describe('BulkEmailFilterComponent', () => {
  let component: BulkEmailFilterComponent;
  let fixture: ComponentFixture<BulkEmailFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkEmailFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkEmailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
