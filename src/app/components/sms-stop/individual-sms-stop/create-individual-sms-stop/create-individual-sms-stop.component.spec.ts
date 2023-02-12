import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIndividualSmsStopComponent } from './create-individual-sms-stop.component';

describe('CreateIndividualSmsStopComponent', () => {
  let component: CreateIndividualSmsStopComponent;
  let fixture: ComponentFixture<CreateIndividualSmsStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIndividualSmsStopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIndividualSmsStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
