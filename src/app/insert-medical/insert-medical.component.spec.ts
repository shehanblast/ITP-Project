import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMedicalComponent } from './insert-medical.component';

describe('InsertMedicalComponent', () => {
  let component: InsertMedicalComponent;
  let fixture: ComponentFixture<InsertMedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertMedicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
