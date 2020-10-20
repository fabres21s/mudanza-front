import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { Mudanza } from '@mudanza/shared/model/mudanza'; 
import { MudanzaService } from '@mudanza/shared/service/mudanza.service';

@Component({
  selector: 'app-listar-mudanza',
  templateUrl: './listar-mudanza.component.html',
  styleUrls: ['./listar-mudanza.component.css']
})
export class ListarMudanzaComponent implements OnInit {
  public listaMudanzas: Observable<Mudanza[]>;

  constructor(protected mudanzaService: MudanzaService) { }

  ngOnInit() {
    this.listaMudanzas = this.mudanzaService.consultar();
  }

}
