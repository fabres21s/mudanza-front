import { Component, OnInit } from '@angular/core';
import { FurgonService } from '../../shared/service/furgon.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 7;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 7;

@Component({
  selector: 'app-crear-furgon',
  templateUrl: './crear-furgon.component.html',
  styleUrls: ['./crear-furgon.component.css']
})
export class CrearFurgonComponent implements OnInit {
  furgonForm: FormGroup;
  constructor(protected furgonService: FurgonService,
    private _router: Router) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  crear() {
   this.furgonService.guardar(this.furgonForm.value).subscribe(
				response => {
          console.log(response.valor);
					if(response.valor > 0){
						this._router.navigate(['/furgon/listar']);
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

  private construirFormularioProducto() {
    this.furgonForm = new FormGroup({
      placa: new FormControl('sdfgsdghsd', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    });
  }

}
