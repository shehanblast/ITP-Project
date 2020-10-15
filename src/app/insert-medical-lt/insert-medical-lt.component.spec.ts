import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMedicalLtComponent } from './insert-medical-lt.component';

describe('InsertMedicalLtComponent', () => {
  let component: InsertMedicalLtComponent;
  let fixture: ComponentFixture<InsertMedicalLtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertMedicalLtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMedicalLtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
