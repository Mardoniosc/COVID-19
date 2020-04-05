import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {  GlobalComponent,
          IndexGlobalComponent,
          PaisesComponent,
          PaisComponent
} from './components'

export const routes: Routes = [
  {
    path: 'dashboard',
    component: IndexGlobalComponent,
    children: [
      { path: '', component: GlobalComponent },
      { path: 'paises', component: PaisesComponent },
      { path: 'paises/:pais', component: PaisComponent },

    ]
  },

  { path: '**', component: GlobalComponent }


]


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class GlobalRoutingModule {
}
