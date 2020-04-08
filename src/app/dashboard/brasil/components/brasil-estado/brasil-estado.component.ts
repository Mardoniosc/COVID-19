import { Component, OnInit } from '@angular/core';

import { BrasilCovidService } from 'src/app/shared/services'

@Component({
  selector: 'app-brasil-estado',
  templateUrl: './brasil-estado.component.html',
  styleUrls: ['./brasil-estado.component.css']
})
export class BrasilEstadoComponent implements OnInit {

  constructor(private brasilService: BrasilCovidService) { }

  ngOnInit() {
    this.carregaDadosBrasil()
  }

  carregaDadosBrasil(){
    console.log('Carregou')
  }
}
