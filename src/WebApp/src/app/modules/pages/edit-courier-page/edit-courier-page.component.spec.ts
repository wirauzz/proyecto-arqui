import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourierPageComponent } from './edit-courier-page.component';

describe('EditCourierPageComponent', () => {
  let component: EditCourierPageComponent;
  let fixture: ComponentFixture<EditCourierPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCourierPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
