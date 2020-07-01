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


@NgModule({
  declarations: [
    BrasildashComponent,
    BrasilComponent,
    BrasilEstadosComponent,
    BrasilDatasComponent,
    BrasilEstadoComponent,
    GraficoevolucaoestadoComponent,
    LinearComponent
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
