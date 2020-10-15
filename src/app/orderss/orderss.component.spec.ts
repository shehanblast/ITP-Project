import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderssComponent } from './orderss.component';

describe('OrderssComponent', () => {
  let component: OrderssComponent;
  let fixture: ComponentFixture<OrderssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
