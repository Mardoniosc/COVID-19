import { Component, OnInit } from '@angular/core';

import { BrasilCovidService } from 'src/app/shared/services'
import { Estado } from 'src/app/shared/model'

@Component({
  selector: 'app-brasil-estados',
  templateUrl: './brasil-estados.component.html',
  styleUrls: ['./brasil-estados.component.css','../../brasil.style.css']
})
export class BrasilEstadosComponent implements OnInit {

  estadosFiltrados: Estado[]
  estados: Estado[]

  constructor(private brasilService: BrasilCovidService) { }

  ngOnInit() {
    this.carregaEstados()
  }

  carregaEstados(){
    this.brasilService.estadosAll()
      .subscribe(
        data => {
          this.estados = data.data
          this.estadosFiltrados = this.estados
          return data
        },
        err => console.log(err)
      )
  }

  pesquisa(estado: string){
    this.estadosFiltrados = this.estados.filter(
      x => x.state.trim().toLowerCase().includes(estado.trim().toLowerCase())
    )
    console.log(estado)
  }

}
