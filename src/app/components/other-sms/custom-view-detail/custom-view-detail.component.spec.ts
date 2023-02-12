import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomViewDetailComponent } from './custom-view-detail.component';

describe('CustomViewDetailComponent', () => {
  let component: CustomViewDetailComponent;
  let fixture: ComponentFixture<CustomViewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomViewDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
