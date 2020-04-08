import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared'

import {
  BrasildashComponent,
  BrasilComponent,
  BrasilDatasComponent,
  BrasilEstadoComponent,
  BrasilEstadosComponent
} from './components';
import { RouterModule } from '@angular/router';

import {
  MatCardModule,
  MatAutocompleteModule,
  MatInputModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatGridListModule,
} from '@angular/material'


@NgModule({
  declarations: [
    BrasildashComponent,
    BrasilComponent,
    BrasilEstadosComponent,
    BrasilDatasComponent,
    BrasilEstadoComponent
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
    MatGridListModule,
  ]
})
export class BrasilModule { }
