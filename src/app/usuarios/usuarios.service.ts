import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {

  getUsuarios(){
    return [
      {
        id: 1,
        nome: 'Admin',
        email: 'admin@email.com',
        tipo: 1,
      },
      {
        id: 2,
        nome: 'Visitante',
        email: 'guest@email.com',
        tipo: 2,
      }
    ]
  }

  constructor() { }

}
