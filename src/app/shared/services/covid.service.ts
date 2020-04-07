import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment as env } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  private readonly PATHALL: string = '/all'
  private readonly PATHPAISES: string = '/countries/'

  constructor(private http: HttpClient) { }

  mundo(): Observable<any> {
    return this.http.get(env.baseUrl + this.PATHALL)

  }

  pais(pais: String): Observable<any> {
    return this.http.get(env.baseUrl + this.PATHPAISES + pais)
  }

  paises(): Observable<any> {
    return this.http.get(env.baseUrl + this.PATHPAISES)
  }


}
