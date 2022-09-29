import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../models/login-usuario';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

form: any = {};
usuario: LoginUsuario;
isLogged = false;
isLoginFail = false;
roles: string[] = [];
errorMsg = '';


  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) { }

//en el inicio se comprueba con tokenservice si hay almacenado algún token en la sesión
// si lo hay, el usuario está logueado.
//la variable usuario se inicializa con los valores del formulario al hacer login
//si las credenciales son correctas, por medio de authservice se obtienen los valores del token
// que devuelve el REST. el tokenservice almacena esos valores en la sesiñón. El router redirige al home.

//islogged y isloginfail son booleanos para presentar el formulario y / o el mensaje de error.

  ngOnInit() {
  
  if (this.tokenService.getToken()){
    this.isLogged = true;
    this.isLoginFail = false;
    this.roles = this.tokenService.getAuthorities();
 
  }
}

onLogin(): void {
  this.usuario = new LoginUsuario(this.form.nombreUsuario, this.form.password);

  this.authService.login(this.usuario).subscribe(data => {
    this.tokenService.setToken(data.token);
    this.tokenService.setUserName(data.nombreUsuario);
    this.tokenService.setAuthorities(data.authorities);

    this.isLogged = true;
    this.isLoginFail = false;
    this.roles = this.tokenService.getAuthorities();
    window.location.reload();
  },
  (err: any) => {
    this.isLogged = false;
    this.isLoginFail = true;
    this.errorMsg = err.error.message;
    }
  );
}

}
