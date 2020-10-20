import { NgModule } from '@angular/core';

import { MudanzaRoutingModule } from './mudanza-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ListarMudanzaComponent } from './components/listar-mudanza/listar-mudanza.component';
import { CrearMudanzaComponent } from './components/crear-mudanza/crear-mudanza.component';
import { MudanzaService } from './shared/service/mudanza.service';
import { MudanzaComponent } from './components/mudanza/mudanza.component';

@NgModule({
	declarations: [
		ListarMudanzaComponent,
		MudanzaComponent,
		CrearMudanzaComponent
	],
	imports: [
    MudanzaRoutingModule,
    SharedModule
  ],
  providers: [MudanzaService]
})

export class MudanzaModule{}