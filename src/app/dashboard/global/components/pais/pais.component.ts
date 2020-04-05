import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { CovidService } from 'src/app/shared/services';
import { Pais } from 'src/app/shared/model';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  pais = {} as Pais
  paisNome: string
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private covidService: CovidService
  ) { }

  ngOnInit() {
    this.paisNome = this.route.snapshot.paramMap.get('pais')
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
