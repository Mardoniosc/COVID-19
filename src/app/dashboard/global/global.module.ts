import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared'

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
    RouterModule
  ]
})
export class GlobalModule { }
