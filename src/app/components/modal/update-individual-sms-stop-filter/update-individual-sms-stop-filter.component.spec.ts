import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIndividualSmsStopFilterComponent } from './update-individual-sms-stop-filter.component';

describe('UpdateIndividualSmsStopFilterComponent', () => {
  let component: UpdateIndividualSmsStopFilterComponent;
  let fixture: ComponentFixture<UpdateIndividualSmsStopFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIndividualSmsStopFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIndividualSmsStopFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
