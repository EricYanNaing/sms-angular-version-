import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarMillFactoryConfigurationComponent } from './sugar-mill-factory-configuration.component';

describe('SugarMillFactoryConfigurationComponent', () => {
  let component: SugarMillFactoryConfigurationComponent;
  let fixture: ComponentFixture<SugarMillFactoryConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugarMillFactoryConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarMillFactoryConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
