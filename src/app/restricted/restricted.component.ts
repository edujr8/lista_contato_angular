
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-restricted',
  templateUrl: './restricted.component.html',
  styleUrls: ['./restricted.component.css']
})
export class RestrictedComponent implements OnInit {

  constructor(
    private cookieModule: CookieService,
    private router: Router
  ) { }

  private usuario: any;

  ngOnInit() {

    this.usuario = this.cookieModule.getObject('usuario');
        
  }

  logOut() {
    this.cookieModule.removeAll();

    this.router.navigate(['/login']);
  }

}
