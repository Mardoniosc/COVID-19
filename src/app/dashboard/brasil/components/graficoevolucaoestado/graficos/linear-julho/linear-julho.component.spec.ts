import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearJulhoComponent } from './linear-julho.component';

describe('LinearJulhoComponent', () => {
  let component: LinearJulhoComponent;
  let fixture: ComponentFixture<LinearJulhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearJulhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearJulhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
