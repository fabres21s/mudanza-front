import { Component, OnInit } from '@angular/core';
import { MudanzaService } from '../../shared/service/mudanza.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Furgon } from '@furgon/shared/model/furgon'; 
import { FurgonService } from '@furgon/shared/service/furgon.service';
import { Router } from '@angular/router';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 10;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-mudanza',
  templateUrl: './crear-mudanza.component.html',
  styleUrls: ['./crear-mudanza.component.css']
})
export class CrearMudanzaComponent implements OnInit {
  mudanzaForm: FormGroup;
  horarios: any;
   public listaFurgones: any;

  constructor(protected mudanzaService: MudanzaService, protected furgonService: FurgonService,  private _router: Router
   ) { }

  ngOnInit() {
    this.construirFormularioProducto();
    this.cargarHorarios();
  }

  private cargarHorarios() {
     this.horarios = [
    {hora: '02:00 - 06:00', id: 1},
    {hora: '08:00 - 12:00', id: 2},
    {hora: '14:00 - 18:00', id: 3},
    {hora: '19:00 - 23:00', id: 4},
  ];
  }

  crear() {
   this.mudanzaService.guardar(this.mudanzaForm.value).subscribe(
				response => {
          console.log(response['valor']);
					if(response['valor'] > 0){
						this._router.navigate(['/mudanza/listar']);
					}else{
						console.log(response);
					}
				},
				error => {
          console.log('se generó un error');
					console.log(<any>error);
				}
			);
  }

  consultarDisponibles() {
    this.listaFurgones = this.furgonService.consultarDisponibles(this.mudanzaForm.value.tarifaHorarioId, this.mudanzaForm.value.fecha);
  }

  private construirFormularioProducto() {
    this.mudanzaForm = new FormGroup({
      direccionInicial: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      direccionFinal: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      fecha: new FormControl(''),
      tarifaHorarioId: new FormControl(),
      furgonId: new FormControl()
    });
  }

}

