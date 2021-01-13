import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddOrderComponent } from './customer-add-order.component';

describe('CustomerAddOrderComponent', () => {
  let component: CustomerAddOrderComponent;
  let fixture: ComponentFixture<CustomerAddOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
