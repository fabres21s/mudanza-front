import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MudanzaComponent } from './components/mudanza/mudanza.component';
import { ListarMudanzaComponent } from './components/listar-mudanza/listar-mudanza.component';
import { CrearMudanzaComponent } from './components/crear-mudanza/crear-mudanza.component';


const routes: Routes = [
  {
    path: '',
    component: MudanzaComponent,
    children: [
      {
        path: 'crear',
        component: CrearMudanzaComponent
      },
      {
        path: 'listar',
        component: ListarMudanzaComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MudanzaRoutingModule { }
