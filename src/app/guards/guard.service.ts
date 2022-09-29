import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  realRol: string;

//se asigna por defecto el rol 'user' por medio de la variable realRol.

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //hubo que cambiar .expectedRol por la versión con corchetes por versión moderna de angular.
    const expectedRol = route.data['expectedRol'];
    const roles = this.tokenService.getAuthorities();
    this.realRol = 'user';
    roles.forEach(rol => {
//por medio del tokenService se comprueba si el usuario es el admin, en cuyo caso se cambia el realRol
      if (rol ==='ROLE_ADMIN') {
        this.realRol = 'admin';
      }
    });
//si no hay token o bien el expectedRol (que es un array) no contiene al realROl, se redirige al home.
    if (!this.tokenService.getToken() || expectedRol.indexOf(this.realRol) === -1) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  constructor(private tokenService: TokenService, private router: Router) { }
}
