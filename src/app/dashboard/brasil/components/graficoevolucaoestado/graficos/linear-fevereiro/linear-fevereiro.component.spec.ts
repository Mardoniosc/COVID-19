import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearFevereiroComponent } from './linear-fevereiro.component';

describe('LinearFevereiroComponent', () => {
  let component: LinearFevereiroComponent;
  let fixture: ComponentFixture<LinearFevereiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearFevereiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearFevereiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
