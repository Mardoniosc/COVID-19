import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment as env } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BrasilCovidService {

  private readonly PATHBRASILDATA: string = '/brazil/'
  private readonly PATHBRASILESTADO: string = '/brazil/uf/'

  constructor(private http: HttpClient) { }

  estadosAll(): Observable<any> {
    return this.http.get(env.baseUrlBrasil)
  }

  estado(estado: string): Observable<any> {
    return this.http.get(env.baseUrlBrasil + this.PATHBRASILESTADO + estado)
  }

  casosPorData(data: string): Observable<any> {
    return this.http.get(env.baseUrlBrasil + this.PATHBRASILDATA + data)
  }

}
