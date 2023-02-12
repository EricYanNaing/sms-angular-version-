import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIndividualEmailComponent } from './add-individual-email.component';

describe('AddIndividualEmailComponent', () => {
  let component: AddIndividualEmailComponent;
  let fixture: ComponentFixture<AddIndividualEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIndividualEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIndividualEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
