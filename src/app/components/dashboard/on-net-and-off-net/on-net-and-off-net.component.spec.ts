import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnNetAndOffNetComponent } from './on-net-and-off-net.component';

describe('OnNetAndOffNetComponent', () => {
  let component: OnNetAndOffNetComponent;
  let fixture: ComponentFixture<OnNetAndOffNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnNetAndOffNetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnNetAndOffNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
