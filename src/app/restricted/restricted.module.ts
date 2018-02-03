import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictedRoutingModule } from './restricted.routing.module';
import { RestrictedComponent } from './restricted.component';

@NgModule({
  imports: [
    CommonModule,
    RestrictedRoutingModule
  ],
  declarations: [
    RestrictedComponent
  ]
})
export class RestrictedModule { }
