import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import {Furgon} from '../model/furgon';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class FurgonService {

  constructor(protected http: HttpService, protected httpClient: HttpClient) {}

  public consultar() {
    return this.http.doGet<Furgon[]>(`${environment.endpoint}/furgones`, this.http.optsName('consultar furgones'));
  }

  public guardar2(furgon: Furgon) {
    return this.http.doPost<Furgon, boolean>(`${environment.endpoint}/furgones`, furgon,
                                                this.http.optsName('crear productos'));
  }


  public guardar(furgon: Furgon) {
    return this.httpClient.post<any>(`${environment.endpoint}/furgones`, furgon);
  }
}
