import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

import { BrasilCovidService } from 'src/app/shared/services'
import { Estado } from 'src/app/shared/model';

@Component({
  selector: 'app-brasil-datas',
  templateUrl: './brasil-datas.component.html',
  styleUrls: ['./brasil-datas.component.css', '../../brasil.style.css']
})
export class BrasilDatasComponent implements OnInit {

  estados: Estado[]

  constructor(
    private brasiCovidService: BrasilCovidService,
  ) { }

  ngOnInit() {

  }
  addEvent(event: MatDatepickerInputEvent<Date>) {
    let data = JSON.stringify(event.value)
    data = data.slice(1, 11);
    data = data.replace('-', '')
    data = data.replace('-', '')
    this.carragardados(data)
  }

  carragardados(data: string){
    console.log(data);
    this.brasiCovidService.casosPorData(data)
      .subscribe(
        data => {
          this.estados = data.data
          return data
        },
        err => console.log(err)
      )
  }

}
