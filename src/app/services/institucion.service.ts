import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Institucion } from '../models/institucion';

const cabecera = {headers : new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class InstitucionService {


  //institucionURL = 'http://localhost:8080/api/institucion/'
  institucionURL = 'https://fspf.herokuapp.com/api/institucion/'
  

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Institucion[]> {
    return this.httpClient.get<Institucion[]>(this.institucionURL + 'lista', cabecera);
  }

  public listaporid(id:number): Observable<Institucion[]> {
    return this.httpClient.get<Institucion[]>(this.institucionURL + `listaporid/${id}`, cabecera);
  }

  public detalle(id:number): Observable<Institucion> {
    return this.httpClient.get<Institucion>(this.institucionURL + `detalle/${id}`, cabecera);
  }

  public crear(institucion: Institucion): Observable<any> {
    return this.httpClient.post<any>(this.institucionURL + 'nuevo', institucion, cabecera);
  }

  public editar(institucion: Institucion, id: number): Observable<any> {
    return this.httpClient.put<any>(this.institucionURL + `actualizar/${id}`,institucion, cabecera);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.institucionURL + `borrar/${id}`, cabecera);
  }



}
