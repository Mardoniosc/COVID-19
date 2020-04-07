import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {
  MatCardModule,
  MatAutocompleteModule,
  MatInputModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatGridListModule,
} from '@angular/material'

import {  GlobalComponent,
          IndexGlobalComponent,
          PaisComponent,
          PaisesComponent
} from './components';

@NgModule({
  declarations: [
    GlobalComponent,
    IndexGlobalComponent,
    PaisesComponent,
    PaisComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ]
})
export class GlobalModule { }
