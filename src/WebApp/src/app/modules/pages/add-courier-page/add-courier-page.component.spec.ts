import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourierPageComponent } from './add-courier-page.component';

describe('AddCourierPageComponent', () => {
  let component: AddCourierPageComponent;
  let fixture: ComponentFixture<AddCourierPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourierPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
