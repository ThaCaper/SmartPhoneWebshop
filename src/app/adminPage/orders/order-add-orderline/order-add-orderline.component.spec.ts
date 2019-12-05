import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAddOrderlineComponent } from './order-add-orderline.component';

describe('OrderAddOrderlineComponent', () => {
  let component: OrderAddOrderlineComponent;
  let fixture: ComponentFixture<OrderAddOrderlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderAddOrderlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAddOrderlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
