import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent } from './usuarios.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';

const usuariosRoutes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  },
  {
    path: 'novo',
    component: UsuarioDetalheComponent
  },
  {
    path: 'editar/:id',
    component: UsuarioDetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(usuariosRoutes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
