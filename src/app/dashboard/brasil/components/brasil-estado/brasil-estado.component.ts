import { Component, OnInit } from '@angular/core';

import { BrasilCovidService } from 'src/app/shared/services'
import { Estado } from 'src/app/shared/model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brasil-estado',
  templateUrl: './brasil-estado.component.html',
  styleUrls: ['./brasil-estado.component.css','../../brasil.style.css']
})
export class BrasilEstadoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private brasilService: BrasilCovidService
    ) { }

  estado = {} as Estado
  ufNome: string
  dataAtualizada: string
  ngOnInit() {
    this.ufNome = this.route.snapshot.paramMap.get('uf');
    this.carregaDadosBrasil()
  }

  formataData(data: string){
    let dia = data.slice(8, 10);
    let mes = data.slice(5, 7);
    let ano = data.slice(0, 4);
    let hora = data.slice(11, 13);
    hora = (parseInt(hora) - 3).toString();
    let minutos_segundos = data.slice(13, 19);
    data = (dia+'/'+mes+'/'+ano+ ' '+ hora + minutos_segundos)
    this.dataAtualizada = data
  }

  carregaDadosBrasil(){
    this.brasilService.estado(this.ufNome)
      .subscribe(
        data => {
          this.estado = data
          this.formataData((this.estado.datetime).toLocaleString())
          return data
        },
        err => console.log(err)
      )
  }
}
