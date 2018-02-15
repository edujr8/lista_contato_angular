import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Rotas */
import { ContatosRoutingModule } from './contatos.routing.module';

/* Serviços */
import { ContatosService } from './contatos.service';

/* Componentes */
import { ContatosComponent } from './contatos.component';
import { ContatoDetalheComponent } from './contato-detalhe/contato-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    ContatosRoutingModule,
    FormsModule
  ],
  declarations: [
    ContatosComponent,
    ContatoDetalheComponent
  ],
  providers: [
    ContatosService
  ]
})
export class ContatosModule { }
