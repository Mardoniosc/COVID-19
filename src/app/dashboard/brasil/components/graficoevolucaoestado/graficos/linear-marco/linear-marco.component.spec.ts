import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearMarcoComponent } from './linear-marco.component';

describe('LinearMarcoComponent', () => {
  let component: LinearMarcoComponent;
  let fixture: ComponentFixture<LinearMarcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearMarcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearMarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
