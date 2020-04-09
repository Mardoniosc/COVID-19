import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/shared/model';
import { ActivatedRoute } from '@angular/router';
import { CovidService } from 'src/app/shared/services';

@Component({
  selector: 'app-brasildash',
  templateUrl: './brasildash.component.html',
  styleUrls: ['./brasildash.component.css']
})
export class BrasildashComponent implements OnInit {

  pais = {} as Pais
  paisNome: string
  constructor(
    private route: ActivatedRoute,
    private covidService: CovidService
  ) { }

  ngOnInit() {
    this.paisNome = 'Brazil'
    this.carregaDadosPais()
  }

  carregaDadosPais(){
    this.covidService.pais(this.paisNome)
      .subscribe(
        data => {
          this.pais = data
          console.log(this.pais)
          return data
        },
        err => console.log(err)
      )
  }
}
