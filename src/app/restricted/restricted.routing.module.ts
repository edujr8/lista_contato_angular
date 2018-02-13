
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestrictedComponent } from './restricted.component';
import { AuthGuard } from './../guard/auth.guard';
import { AuthChildrenGuard } from './../guard/auth.children';

const restrictedRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [
      AuthGuard
    ]
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
    ],
    canActivateChild: [
      AuthChildrenGuard
    ]
  },
  {
    path: 'usuarios',
    component: RestrictedComponent,
    loadChildren: './usuarios/usuarios.module#UsuariosModule',
    canActivate: [
      AuthGuard
    ],
    canActivateChild: [
      AuthChildrenGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(restrictedRoutes)],
  exports: [RouterModule]
})
export class RestrictedRoutingModule { }
