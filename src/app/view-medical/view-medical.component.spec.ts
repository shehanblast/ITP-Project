import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicalComponent } from './view-medical.component';

describe('ViewMedicalComponent', () => {
  let component: ViewMedicalComponent;
  let fixture: ComponentFixture<ViewMedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMedicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
