import { Injectable } from '@angular/core';

@Injectable()
export class ContatosService {

  getContatos() {
    return [
      {
        id: 1,
        nome: 'Teste Contato 1',
        email: 'contato1@email.com',
        telefone: '11988887777',
        operadora: '1',
        cidade: 'São Paulo',
        estado: 'SP',
        data_nascimento: '1999-12-01'
      },
      {
        id: 2,
        nome: 'Teste Contato 2',
        email: 'contato2@email.com',
        telefone: '11977774444',
        operadora: '2',
        cidade: 'São Paulo',
        estado: 'SP',
        data_nascimento: '1944-02-09'
      }
    ]
  }

  constructor() { }

}
