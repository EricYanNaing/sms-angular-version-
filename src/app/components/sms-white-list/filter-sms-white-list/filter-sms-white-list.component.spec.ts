import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSmsWhiteListComponent } from './filter-sms-white-list.component';

describe('FilterSmsWhiteListComponent', () => {
  let component: FilterSmsWhiteListComponent;
  let fixture: ComponentFixture<FilterSmsWhiteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSmsWhiteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSmsWhiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
