import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidService } from './services'
import { RouterModule } from '@angular/router'

import { FooterComponent, HeaderComponent } from './components'

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  providers: [ CovidService ]
})
export class SharedModule { }
