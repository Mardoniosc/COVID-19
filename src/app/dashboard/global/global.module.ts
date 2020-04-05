import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    RouterModule
  ]
})
export class GlobalModule { }
