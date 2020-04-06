import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { GlobalModule, GlobalRoutingModule } from './dashboard'

import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './shared'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    GlobalModule,
    GlobalRoutingModule,
    SharedModule,

    AppRoutingModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
