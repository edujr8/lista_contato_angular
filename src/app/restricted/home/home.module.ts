
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Rotas */
import { HomeRoutingModule } from './home.routing.module';

/* Serviços */

/* Componentes */
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [

  ]
})
export class HomeModule { }
