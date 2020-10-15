import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllmedicalComponent } from './view-allmedical.component';

describe('ViewAllmedicalComponent', () => {
  let component: ViewAllmedicalComponent;
  let fixture: ComponentFixture<ViewAllmedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllmedicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllmedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
