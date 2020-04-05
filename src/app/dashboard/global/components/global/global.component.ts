import { Component, OnInit, ɵConsole } from '@angular/core';
import { CovidService } from '../../../../shared/services'
import { Global, Pais } from '../../../../shared/model'


@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  global = {} as Global

  constructor(private covidService: CovidService) { }

  ngOnInit() {
    this.carregaDadosGlobal()
  }

  carregaDadosGlobal(){
    this.covidService.mundo()
      .subscribe(
        data => {
          this.global = data
          return this.global
        },
        err => console.log(err)

      )
  }

}
