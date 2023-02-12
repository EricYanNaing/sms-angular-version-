import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomViewDetailActionComponent } from './custom-view-detail-action.component';

describe('CustomViewDetailActionComponent', () => {
  let component: CustomViewDetailActionComponent;
  let fixture: ComponentFixture<CustomViewDetailActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomViewDetailActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomViewDetailActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
