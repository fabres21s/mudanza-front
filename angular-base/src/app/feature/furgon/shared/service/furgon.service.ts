import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import {Furgon} from '../model/furgon';


@Injectable()
export class FurgonService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Furgon[]>(`${environment.endpoint}/furgones`, this.http.optsName('consultar furgones'));
  }


}
