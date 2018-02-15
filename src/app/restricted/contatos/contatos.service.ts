import { Injectable } from '@angular/core';
import { Contato } from '../../class/contato.class';

@Injectable()
export class ContatosService {

  private contato: Contato;

  getContatos() {
    return [
      {
        id: 1,
        nome: 'Teste Contato 1',
        email: 'contato1@email.com',
        telefone: '11988887777',
        operadora: 'Vivo',
        cidade: 'São Paulo',
        estado: 'SP',
        data_nascimento: '1999-12-01'
      },
      {
        id: 2,
        nome: 'Teste Contato 2',
        email: 'contato2@email.com',
        telefone: '11977774444',
        operadora: 'Tim',
        cidade: 'São Paulo',
        estado: 'SP',
        data_nascimento: '1944-02-09'
      }
    ]
  }

  getContato(id) {

    let contatos = this.getContatos();

    for(let i=0; i < contatos.length; i++) {

      if(contatos[i]['id'] == id) {
        this.contato  = contatos[i];
      }

    }

    return this.contato;
  }

}
