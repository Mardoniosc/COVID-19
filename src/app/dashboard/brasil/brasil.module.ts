import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '../../shared'

import {
  BrasildashComponent,
  BrasilComponent,
  BrasilDatasComponent,
  BrasilEstadoComponent,
  BrasilEstadosComponent,
  GraficoevolucaoestadoComponent,
  LinearComponent
} from './components';
import { RouterModule } from '@angular/router';

import {
  MatCardModule,
  MatAutocompleteModule,
  MatInputModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatGridListModule,
  MatDatepickerModule,
  MatButtonModule,
  MatNativeDateModule,
} from '@angular/material'

import {
  MatMomentDateModule,
} from "@angular/material-moment-adapter";
import { LinearMaioComponent } from './components/graficoevolucaoestado/graficos/linear-maio/linear-maio.component';
import { LinearFevereiroComponent } from './components/graficoevolucaoestado/graficos/linear-fevereiro/linear-fevereiro.component';
import { LinearJaneiroComponent } from './components/graficoevolucaoestado/graficos/linear-janeiro/linear-janeiro.component';
import { LinearMarcoComponent } from './components/graficoevolucaoestado/graficos/linear-marco/linear-marco.component';
import { LinearAbrilComponent } from './components/graficoevolucaoestado/graficos/linear-abril/linear-abril.component';
import { LinearJunhoComponent } from './components/graficoevolucaoestado/graficos/linear-junho/linear-junho.component';
import { LinearJulhoComponent } from './components/graficoevolucaoestado/graficos/linear-julho/linear-julho.component';


@NgModule({
  declarations: [
    BrasildashComponent,
    BrasilComponent,
    BrasilEstadosComponent,
    BrasilDatasComponent,
    BrasilEstadoComponent,
    GraficoevolucaoestadoComponent,
    LinearComponent,
    LinearMaioComponent,
    LinearFevereiroComponent,
    LinearJaneiroComponent,
    LinearMarcoComponent,
    LinearAbrilComponent,
    LinearJunhoComponent,
    LinearJulhoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule,
    ChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,

  ]
})
export class BrasilModule { }
