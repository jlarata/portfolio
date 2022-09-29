import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaInterceptorService implements HttpInterceptor {

//comprprueba la existencia de un token. en caso afirmativo
//lo añade al request, obteniendo el original y clonándolo con los headers correspondientes.

//recordatorio: para exportar el interceptor hay que añadirlo en los _providers_ de app.module.ts

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let autReq = req;
    const token = this.tokenService.getToken();
    if (token != null) {
      autReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token)});
    }
    return next.handle(autReq);
  }

  constructor(private tokenService: TokenService) { }
}

export const PersonaInterceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: PersonaInterceptorService, multi: true}]