import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

//primero se crea una constante cabecera solo para indicar que todos los _headers_ serán contenido json.
const cabecera = {headers : new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  //esto es una cadena que contiene la ruta del servicio.
  // &#39 es apóstrofe.
  productoURL = 'http://localhost:8080/api/productos/'

  // algo acá se está rompiendo. el original luego de productos/ tiene &#39;;. si le pongo eso no habilita la CORS.
  //pero si no se lo pongo no sale nada.




  //esto sería la inyección de dependencias.  un objeto de la clase HttpClient, que es la que 
  // implementa los métodos CRUD
  constructor(private httpClient: HttpClient) { }

//todos los métodos devuelven un objeto del tipo observable. en "lista" es un observable tipo
//array de productos. En detalle es un observable de tipo producto. Esto se corresponde con el servicio
// REST implementado en Sping. Allí el método lista() devuelve un objeto ResponseBody(List(Producto)) y 
// el método detalle  devuelve un objeto ResponseBody(Producto)

//en los casos de crear, actualizar y borrar, en el REST se devuelve un objeto ResponseBody(?) genérico.
// por eso los observables son del tipo any.

  public lista(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.productoURL + 'lista', cabecera);
  }


  // la tilde invertida es para pasar parámetro (el id) que en el controlador de spring boot es el @PathVariable
  public detalle(id:number): Observable<Producto> {
    return this.httpClient.get<Producto>(this.productoURL + `detalle/${id}`, cabecera);
  }

  public crear(producto: Producto): Observable<any> {
    return this.httpClient.post<any>(this.productoURL + 'nuevo', producto, cabecera);
  }

  public editar(producto: Producto, id: number): Observable<any> {
    return this.httpClient.put<any>(this.productoURL + `actualizar/${id}`,producto, cabecera);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productoURL + `borrar/${id}`, cabecera);
  }



}
