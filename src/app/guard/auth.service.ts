
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie';

import { Usuario } from './../class/usuario.class';
import { UsuariosService } from '../restricted/usuarios/usuarios.service';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(
    private cookieService: CookieService,
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  autenticarUsuario(usuario: Usuario) {

    let
      ret = false,
      listaUsuarios = this.usuariosService.getUsuarios();

    for (let i = 0; i < listaUsuarios.length; i++) {

      /*
      * Valida se o usuario informado exite
      */
      if (listaUsuarios[i].email == usuario.email && listaUsuarios[i].senha == usuario.senha) {

        /*
        * Se localizar o usuario cria um cookie para ele
        */
        this.cookieService.putObject('usuario', listaUsuarios[i]);

        this.router.navigate(['/home']);

        ret = true;

      } else {

        ret = false;
      }
    }

    return ret;

  }
}
