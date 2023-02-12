import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmailConfigurationDetailComponent } from './edit-email-configuration-detail.component';

describe('EditEmailConfigurationDetailComponent', () => {
  let component: EditEmailConfigurationDetailComponent;
  let fixture: ComponentFixture<EditEmailConfigurationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmailConfigurationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmailConfigurationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
