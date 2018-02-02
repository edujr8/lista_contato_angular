
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ContatosComponent } from './contatos/contatos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { UsuariosService } from './usuarios/usuarios.service';
import { ContatosService } from './contatos/contatos.service';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ContatosComponent,
    LoginComponent,
    HomeComponent    
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    routing
  ],
  providers: [
    UsuariosService,
    ContatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
