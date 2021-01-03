import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryManagmentPageComponent } from './delivery-managment-page.component';

describe('DeliveryManagmentPageComponent', () => {
  let component: DeliveryManagmentPageComponent;
  let fixture: ComponentFixture<DeliveryManagmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryManagmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryManagmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
