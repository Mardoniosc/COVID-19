import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoevolucaoestadoComponent } from './graficoevolucaoestado.component';

describe('GraficoevolucaoestadoComponent', () => {
  let component: GraficoevolucaoestadoComponent;
  let fixture: ComponentFixture<GraficoevolucaoestadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoevolucaoestadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoevolucaoestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
