
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Rotas */
import { UsuariosRoutingModule } from './usuarios.routing.module';

/* Serviços */
import { UsuariosService } from './usuarios.service';

/* Componentes */
import { UsuariosComponent } from './usuarios.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ],
  declarations: [
    UsuariosComponent,
    UsuarioDetalheComponent
  ],
  providers: [
    UsuariosService
  ]
})
export class UsuariosModule { }
