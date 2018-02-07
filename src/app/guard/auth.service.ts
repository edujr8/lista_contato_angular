
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './../class/usuario.class';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  autenticarUsuario(usuario: Usuario) {

    if (usuario.email === 'teste@email.com' && usuario.senha === '1234') {

      this.usuarioAutenticado = true;

      this.router.navigate(['/home']);

    } else {

      this.usuarioAutenticado = false;
    }

  }

  validaAutenticacao() {
    return this.usuarioAutenticado;
  }

}
