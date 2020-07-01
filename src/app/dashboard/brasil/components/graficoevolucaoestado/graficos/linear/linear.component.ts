import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BrasilCovidService } from 'src/app/shared/services';
import { Estado } from 'src/app/shared/model';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface DadosGrafico{
  data: number[],
  label: string
}

@Component({
  selector: 'app-linear',
  templateUrl: './linear.component.html',
  styleUrls: ['./linear.component.css']
})
export class LinearComponent implements OnInit {
  //dados grafico
  dados = {} as DadosGrafico;
  data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  labels = [];
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions;
  lineChartColors: Color[];
  lineChartLegend;
  lineChartPlugins = [];
  lineChartType;

  // estaods
  estados: Estado[]
  ufNome: string


  constructor(
    private brasiCovidService: BrasilCovidService,
    private route: ActivatedRoute,

    ) { }


  ngOnInit(): void {
    this.ufNome = this.route.snapshot.paramMap.get('uf');
    this.carregaDadosGrafico();
  }

  carragardados(dataDia: string, index: number){
    this.brasiCovidService.casosPorData(dataDia)
      .subscribe(
        data => {

          if(data.data.length < 1){
            this.carragardadosSeFalhar(dataDia, index)
          }
          data.data.forEach(estado => {
            if(estado.uf === this.ufNome){
              this.data[index] = estado.cases;
            }
          });
          return data
        },
        err => console.log(err),
      )
  }

  carragardadosSeFalhar(dataDia: string, index: number){
    this.brasiCovidService.casosPorData(dataDia)
      .subscribe(
        data => {
          data.data.forEach(estado => {
            console.log(estado);
            console.log(this.ufNome);
            if(estado.uf === this.ufNome){
              console.log(index + 'Index ' + estado.cases)
              this.data[index] = estado.cases;
            }
          });
          return data
        },
        err => console.log(err),
      )
  }

  carregaDadosGrafico(): void {
    var now = new Date();
    var daysOfYear = [];
    for (var d = new Date(2020, 5, 1); d <= now; d.setDate(d.getDate() + 1)) {

        if(d.getMonth() === 5){
          this.labels.push(d.getDate().toString())
          this.carragardados(formatDate(new Date(d), 'yMMdd', 'en'), d.getDate());
        } else {
          break;
        }
        daysOfYear.push(new Date(d));
    }
    this.dados.data = this.data;
    this.dados.label = 'JUNHO DE 2020'
    this.lineChartData = [
      this.dados,
    ];

    this.lineChartLabels = this.labels;

    this.lineChartOptions = {
      responsive: true,
    };

    this.lineChartColors = [
      {
        borderColor: 'black',
        backgroundColor: 'rgba(150,200,0,0.28)',
      },
    ];

    this.lineChartLegend = true;

    this.lineChartPlugins = [];

    this.lineChartType = 'line';


  }
}
