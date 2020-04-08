import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasilEstadosComponent } from './brasil-estados.component';

describe('BrasilEstadosComponent', () => {
  let component: BrasilEstadosComponent;
  let fixture: ComponentFixture<BrasilEstadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrasilEstadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasilEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
