import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomViewDetailFilterComponent } from './custom-view-detail-filter.component';

describe('CustomViewDetailFilterComponent', () => {
  let component: CustomViewDetailFilterComponent;
  let fixture: ComponentFixture<CustomViewDetailFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomViewDetailFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomViewDetailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
