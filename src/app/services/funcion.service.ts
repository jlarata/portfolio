import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcion } from '../models/funcion';

const cabecera = {headers : new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class FuncionService {


  funcionURL = 'http://localhost:8080/api/funcion/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Funcion[]> {
    return this.httpClient.get<Funcion[]>(this.funcionURL + 'lista', cabecera);
  }

  public listaporid(id:number): Observable<Funcion[]> {
    return this.httpClient.get<Funcion[]>(this.funcionURL + `listaporid/${id}`, cabecera);
  }

  public detalle(id:number): Observable<Funcion> {
    return this.httpClient.get<Funcion>(this.funcionURL + `detalle/${id}`, cabecera);
  }

  public crear(funcion: Funcion): Observable<any> {
    return this.httpClient.post<any>(this.funcionURL + 'nuevo', funcion, cabecera);
  }

  public editar(funcion: Funcion, id: number): Observable<any> {
    return this.httpClient.put<any>(this.funcionURL + `actualizar/${id}`,funcion, cabecera);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.funcionURL + `borrar/${id}`, cabecera);
  }



}
