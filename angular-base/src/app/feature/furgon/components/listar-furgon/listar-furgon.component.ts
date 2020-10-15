import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Furgon } from '@furgon/shared/model/furgon'; 
import { FurgonService } from '@furgon/shared/service/furgon.service';

@Component({
  selector: 'app-listar-furgon',
  templateUrl: './listar-furgon.component.html',
  styleUrls: ['./listar-furgon.component.css']
})
export class ListarFurgonComponent implements OnInit {
  public listaFurgones: Observable<Furgon[]>;

  constructor(protected furgonService: FurgonService) { }

  ngOnInit() {
    this.listaFurgones = this.furgonService.consultar();
  }

}
