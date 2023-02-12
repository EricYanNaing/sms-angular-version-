import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmailConfigurationDetailComponent } from './add-email-configuration-detail.component';

describe('AddEmailConfigurationDetailComponent', () => {
  let component: AddEmailConfigurationDetailComponent;
  let fixture: ComponentFixture<AddEmailConfigurationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmailConfigurationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmailConfigurationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
