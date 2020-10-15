import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FurgonComponent } from './components/furgon/furgon.component';
import { ListarFurgonComponent } from './components/listar-furgon/listar-furgon.component';


const routes: Routes = [
  {
    path: '',
    component: FurgonComponent,
    children: [
    {
        path: 'listar',
        component: ListarFurgonComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FurgonRoutingModule { }
