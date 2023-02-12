import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualEmailDetailSingleComponent } from './individual-email-detail-single.component';

describe('IndividualEmailDetailSingleComponent', () => {
  let component: IndividualEmailDetailSingleComponent;
  let fixture: ComponentFixture<IndividualEmailDetailSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualEmailDetailSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEmailDetailSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
