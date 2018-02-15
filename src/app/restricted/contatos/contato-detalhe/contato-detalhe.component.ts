
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { ContatosService } from './../contatos.service';

@Component({
  selector: 'app-contato-detalhe',
  templateUrl: './contato-detalhe.component.html',
  styleUrls: ['./contato-detalhe.component.css']
})
export class ContatoDetalheComponent implements OnInit, OnDestroy {

  contato: any = {};
  inscricao: Subscription;
  headerTitle: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contatosService: ContatosService
  ) { }

  ngOnInit() {

    this.inscricao = this.activatedRoute.params.subscribe(
      (params: any) => {
        
        if (params['id']) {

          this.headerTitle = "Editar Usuário";
          this.contato = this.contatosService.getContato(params['id']);

        } else {

          this.headerTitle = "Novo Usuário";

        }
      }
    );

  }

  ngOnDestroy() {

    this.inscricao.unsubscribe();
  }
}
