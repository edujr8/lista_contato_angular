import { AuthChildrenGuard } from './guard/auth.children';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';
import { CookieModule } from 'ngx-cookie'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './login/login.module';
import { RestrictedModule } from './restricted/restricted.module';
import { AuthService } from './guard/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { UsuariosModule } from './restricted/usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [

    CookieModule.forRoot(),

    /* Módulos do Angular */
    BrowserModule,
    RouterModule,
    FormsModule,

    /* Módulos de Terceiros */
    MaterializeModule,

    /* Módulos de Rotas */
    AppRoutingModule,

    /* Módulos da Minha Aplicação */
    LoginModule,
    RestrictedModule,
    UsuariosModule
  ],

  providers: [
    AuthService,
    AuthGuard,
    AuthChildrenGuard
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
