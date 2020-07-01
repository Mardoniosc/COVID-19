import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearJunhoComponent } from './linear-junho.component';

describe('LinearJunhoComponent', () => {
  let component: LinearJunhoComponent;
  let fixture: ComponentFixture<LinearJunhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearJunhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearJunhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
