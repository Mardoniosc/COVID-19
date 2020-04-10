import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-brasil-datas',
  templateUrl: './brasil-datas.component.html',
  styleUrls: ['./brasil-datas.component.css']
})
export class BrasilDatasComponent implements OnInit {

  casos = [1,2,3,4,5,5]

  constructor(

  ) { }

  ngOnInit() {

  }
  addEvent(event: MatDatepickerInputEvent<Date>) {
    let data = JSON.stringify(event.value)
    console.log(data)
    data = data.slice(1, 11);
    data = data.replace('-', '')
    data = data.replace('-', '')
    console.log(data)
  }

}
