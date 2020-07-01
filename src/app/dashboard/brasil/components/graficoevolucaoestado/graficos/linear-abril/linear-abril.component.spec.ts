import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearAbrilComponent } from './linear-abril.component';

describe('LinearAbrilComponent', () => {
  let component: LinearAbrilComponent;
  let fixture: ComponentFixture<LinearAbrilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearAbrilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearAbrilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
