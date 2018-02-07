
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestrictedComponent } from './restricted.component';
import { AuthGuard } from './../guard/auth.guard';

const restrictedRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: RestrictedComponent,
    loadChildren: './home/home.module#HomeModule',
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'contatos',
    component: RestrictedComponent,
    loadChildren: './contatos/contatos.module#ContatosModule',
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'usuarios',
    component: RestrictedComponent,
    loadChildren: './usuarios/usuarios.module#UsuariosModule',
    canActivate: [
      AuthGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(restrictedRoutes)],
  exports: [RouterModule]
})
export class RestrictedRoutingModule { }
