import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasilEstadoComponent } from './brasil-estado.component';

describe('BrasilEstadoComponent', () => {
  let component: BrasilEstadoComponent;
  let fixture: ComponentFixture<BrasilEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrasilEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasilEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
