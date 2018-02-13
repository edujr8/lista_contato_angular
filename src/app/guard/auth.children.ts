
import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CookieService } from 'ngx-cookie';

import { AuthService } from './auth.service';

@Injectable()
export class AuthChildrenGuard implements CanActivateChild {

    constructor(
        private cookieModule: CookieService,
        private authService: AuthService,
        private router: Router
    ) { }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {


        console.log('guarda filha')

        /*
        * Valida se existe algum cookie para o usuario
        */
        /*  if(this.cookieModule.getObject('usuario')) {
            return true;
          }
      
          this.router.navigate(['/login'])*/

        return true;

    }

}
