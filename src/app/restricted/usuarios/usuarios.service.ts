import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {

  getUsuarios(){
    return [
      {
        id: 1,
        nome: 'Admin',
        email: 'admin@email.com',
        senha: '123456',
        tipo: 1,
        modules: [
          {
            id: 1,
            nome: 'Contatos',
            link: '/contatos',
            icon: 'contacts'
          },
          {
            id: 2,
            nome: 'Usuários',
            link: '/usuarios',
            icon: 'account_box'
          }
        ]
      },
      {
        id: 2,
        nome: 'Visitante',
        email: 'guest@email.com',
        senha: '123456',
        tipo: 2,
        modules: [
          {
            id: 1,
            nome: 'Contatos',
            link: '/contatos',
            icon: 'contacts'
          }
        ]
      }
    ]
  }

  constructor() { }

}
