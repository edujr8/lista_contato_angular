
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './login/login.module';
import { RestrictedModule } from './restricted/restricted.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [

    /* Módulos do Angular */
    BrowserModule,
    RouterModule,

    /* Módulos de Terceiros */
    MaterializeModule,

    /* Módulos de Rotas */
    AppRoutingModule,

    /* Módulos da Minha Aplicação */
    LoginModule,
    RestrictedModule

  ],

  providers: [
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
