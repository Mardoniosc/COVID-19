import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearMaioComponent } from './linear-maio.component';

describe('LinearMaioComponent', () => {
  let component: LinearMaioComponent;
  let fixture: ComponentFixture<LinearMaioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearMaioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearMaioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
