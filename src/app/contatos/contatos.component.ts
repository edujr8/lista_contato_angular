import { ContatosService } from './contatos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  contatos: any = [];

  constructor(private contatosService: ContatosService) { }

  ngOnInit() {
    this.contatos = this.contatosService.getContatos();
  }

}
