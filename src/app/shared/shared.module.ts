import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidService, BrasilCovidService } from './services'
import { RouterModule } from '@angular/router'
import {
  MatMenuModule,
  MatButtonModule

} from '@angular/material';
import { FooterComponent, HeaderComponent } from './components'

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  providers: [ CovidService, BrasilCovidService ]
})
export class SharedModule { }
