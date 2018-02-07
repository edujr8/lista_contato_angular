
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './login/login.module';
import { RestrictedModule } from './restricted/restricted.module';
import { AuthService } from './guard/auth.service';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [

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
    RestrictedModule

  ],

  providers: [
    AuthService,
    AuthGuard
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
