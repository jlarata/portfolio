import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

//primero se crea una constante cabecera solo para indicar que todos los _headers_ serán contenido json.
const cabecera = {headers : new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class PersonaService {


  //esto es una cadena que contiene la ruta del servicio.
  // &#39 es apóstrofe.
  personaURL = 'http://localhost:8080/api/personas/'

  // algo acá se está rompiendo. el original luego de productos/ tiene &#39;;. si le pongo eso no habilita la CORS.
  //pero si no se lo pongo no sale nada.


  //esto sería la inyección de dependencias.  un objeto de la clase HttpClient, que es la que 
  // implementa los métodos CRUD
  constructor(private httpClient: HttpClient) { }

//todos los métodos devuelven un objeto del tipo observable. en "lista" es un observable tipo
//array de personas. En detalle es un observable de tipo persona. Esto se corresponde con el servicio
// REST implementado en Spring. Allí el método lista() devuelve un objeto ResponseBody(List(Persona)) y 
// el método detalle  devuelve un objeto ResponseBody(Persona)

//en los casos de crear, actualizar y borrar, en el REST se devuelve un objeto ResponseBody(?) genérico.
// por eso los observables son del tipo any.

  public lista(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.personaURL + 'lista', cabecera);
  }

  // la tilde invertida es para pasar parámetro (el id) que en el controlador de spring boot es el @PathVariable
  public detalle(id:number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.personaURL + `detalle/${id}`, cabecera);
  }

  public crear(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.personaURL + 'nuevo', persona, cabecera);
  }

  public editar(persona: Persona, id: number): Observable<any> {
    return this.httpClient.put<any>(this.personaURL + `actualizar/${id}`,persona, cabecera);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.personaURL + `borrar/${id}`, cabecera);
  }



}
