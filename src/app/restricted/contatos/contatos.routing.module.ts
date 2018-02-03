
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatosComponent } from './contatos.component';
import { ContatoDetalheComponent } from './contato-detalhe/contato-detalhe.component';

const contatosRoutes: Routes = [
  {
    path: '',
    component: ContatosComponent
  },
  {
    path: 'novo',
    component: ContatoDetalheComponent
  },
  {
    path: 'editar/:id',
    component: ContatoDetalheComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(contatosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContatosRoutingModule { }
