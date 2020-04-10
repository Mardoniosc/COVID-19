import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/shared/model';
import { CovidService } from 'src/app/shared/services';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css','../../style.global.css']
})
export class PaisesComponent implements OnInit {

  paisesAll: Pais[]
  paisesFiltrados: Pais[]

  constructor(
    private snakerBar: MatSnackBar,
    private covidService: CovidService
    ) { }

  ngOnInit() {
    this.carregaTodosOsPaises()
  }

  carregaTodosOsPaises(){
    this.covidService.paises()
      .subscribe(
        data => {
          this.paisesAll = data
          this.paisesFiltrados = this.paisesAll
          return data
        },
        err => {
          let msg: "Erro ao tentar buscar os paises na api"
          this.snakerBar.open( msg, 'info', { duration: 5000 })
        }
      )
  }

  pesquisa(pesquisa: string){
    this.paisesFiltrados = this.paisesAll.filter(
      item => item.country.trim().toLowerCase().includes(pesquisa.trim().toLowerCase())
    )
  }

}
