import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierItemComponent } from './courier-item.component';

describe('CourierItemComponent', () => {
  let component: CourierItemComponent;
  let fixture: ComponentFixture<CourierItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
