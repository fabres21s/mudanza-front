import { NgModule } from '@angular/core';

import { FurgonRoutingModule } from './furgon-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ListarFurgonComponent } from './components/listar-furgon/listar-furgon.component';
import { FurgonService } from './shared/service/furgon.service';
import { FurgonComponent } from './components/furgon/furgon.component';

@NgModule({
	declarations: [
		ListarFurgonComponent,
		FurgonComponent
	],
	imports: [
    FurgonRoutingModule,
    SharedModule
  ],
  providers: [FurgonService]
})

export class FurgonModule{}