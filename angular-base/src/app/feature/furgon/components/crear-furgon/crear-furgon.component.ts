import { Component, OnInit } from '@angular/core';
import { FurgonService } from '../../shared/service/furgon.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 7;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 7;

@Component({
  selector: 'app-crear-furgon',
  templateUrl: './crear-furgon.component.html',
  styleUrls: ['./crear-furgon.component.css']
})
export class CrearFurgonComponent implements OnInit {
  furgonForm: FormGroup;
  constructor(protected furgonService: FurgonService) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  crear() {
    //console.log(this.furgonService.guardar(this.furgonForm.value));
   this.furgonService.guardar(this.furgonForm.value).subscribe(
				response => {
					if(response.code == 200){
						//this._router.navigate(['/productos']);
					}else{
						console.log(response);
					}
				},
				error => {
					console.log(<any>error);
				}
			);;
  }

  private construirFormularioProducto() {
    this.furgonForm = new FormGroup({
      placa: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    });
  }

}
