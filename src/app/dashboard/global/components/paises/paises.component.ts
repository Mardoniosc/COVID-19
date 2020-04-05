import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/shared/model';
import { CovidService } from 'src/app/shared/services';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paisesAll: Pais[]

  constructor(private covidService: CovidService) { }

  ngOnInit() {
    this.carregaTodosOsPaises()
  }

  carregaTodosOsPaises(){
    this.covidService.paises()
      .subscribe(
        data => this.paisesAll = data,
        err => console.log(err)
      )
  }

}
