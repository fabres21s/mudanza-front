import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import {Mudanza} from '../model/mudanza';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MudanzaService {

  constructor(protected http: HttpService, protected httpClient: HttpClient) {}

  public consultar() {
    return this.http.doGet<Mudanza[]>(`${environment.endpoint}/mudanzas`, this.http.optsName('consultar mudanzas'));
  }

  public guardar(mudanza: Mudanza) {
    return this.http.doPost<Mudanza, boolean>(`${environment.endpoint}/mudanzas`, mudanza,
                                                this.http.optsName('crear mudanzas'));
  }


//   public guardar2(furgon: Furgon) {
//     return this.httpClient.post<any>(`${environment.endpoint}/furgones`, furgon);
//   }
}
