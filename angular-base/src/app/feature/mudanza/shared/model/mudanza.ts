export class Mudanza {
	id: number;
	placa: string;
	fechaInicial: Date;
	fechaFinal: Date;
	direccionInicial: string;
	direccionFinal: string;
	tarifaBase: number;
	recargoDominical: number;
	recargoFestivo: number;
	recargoNocturno: number;

	constructor(id: number, fechaInicial: Date, fechaFinal: Date,  placa: string,
		direccionInicial: string, direccionFinal: string,
		tarifaBase: number, recargoNocturno:number, recargoDominical: number, recargoFestivo: number ) {
		this.id = id;
		this.placa = placa;
		this.fechaInicial = fechaInicial;
		this.fechaFinal = fechaFinal;
		this.direccionInicial = direccionInicial;
		this.direccionFinal = direccionFinal;
		this.tarifaBase = tarifaBase;
		this.recargoNocturno = recargoNocturno;
		this.recargoDominical = recargoDominical;
		this.recargoFestivo = recargoFestivo;
		
	}
}