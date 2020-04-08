import { Component, OnInit } from '@angular/core';

import { BrasilCovidService } from 'src/app/shared/services'
import { Estado } from 'src/app/shared/model'



@Component({
  selector: 'app-brasil-estados',
  templateUrl: './brasil-estados.component.html',
  styleUrls: ['./brasil-estados.component.css']
})
export class BrasilEstadosComponent implements OnInit {

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
          return data
        },
        err => console.log(err)
      )
  }

}
