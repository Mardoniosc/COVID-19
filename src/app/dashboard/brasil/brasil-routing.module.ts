import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import {
  BrasilComponent,
  BrasildashComponent,
  BrasilDatasComponent,
  BrasilEstadoComponent,
  BrasilEstadosComponent
} from './components'

export const routesBrasil: Routes = [
  {
    path: 'brasil',
    component: BrasilComponent,
    children: [
      { path: '', component: BrasildashComponent },
      { path: 'estados', component: BrasilEstadosComponent },
      { path: 'estados/:uf', component: BrasilEstadoComponent },
      { path: 'data', component: BrasilDatasComponent }

    ]
  }
]
@NgModule({
  imports: [ RouterModule.forChild(routesBrasil) ],
  exports: [ RouterModule ]
})
export class BrasilRoutingModule {
}
