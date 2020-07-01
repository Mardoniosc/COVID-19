import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearJaneiroComponent } from './linear-janeiro.component';

describe('LinearJaneiroComponent', () => {
  let component: LinearJaneiroComponent;
  let fixture: ComponentFixture<LinearJaneiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearJaneiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearJaneiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
