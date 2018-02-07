
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../guard/auth.service';
import { Usuario } from '../class/usuario.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  private alertView: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  realizarLogin() {
    if (!this.authService.autenticarUsuario(this.usuario)) {

      this.alertView = true;

    }
  }

}
