
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestrictedComponent } from './restricted.component';

const restrictedRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: RestrictedComponent,
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'contatos',
    component: RestrictedComponent,
    loadChildren: './contatos/contatos.module#ContatosModule'
  },
  {
    path: 'usuarios',
    component: RestrictedComponent,
    loadChildren: './usuarios/usuarios.module#UsuariosModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(restrictedRoutes)],
  exports: [RouterModule]
})
export class RestrictedRoutingModule { }
