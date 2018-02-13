
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CookieService } from 'ngx-cookie';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private cookieModule: CookieService,
    private authService: AuthService, 
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    /*
    * Valida se existe algum cookie para o usuario
    */
    if(this.cookieModule.getObject('usuario')) {
      return true;
    }

    this.router.navigate(['/login'])

    return false;

  }

}
