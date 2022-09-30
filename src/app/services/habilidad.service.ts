import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from '../models/habilidad';

const cabecera = {headers : new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {


  //habilidadURL = 'http://localhost:8080/api/habilidad/'
  habilidadURL = 'httpshttps://fspf.herokuapp.com/api/habilidad/'
  

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.habilidadURL + 'lista', cabecera);
  }

  public listaporid(id:number): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.habilidadURL + `listaporid/${id}`, cabecera);
  }

  public detalle(id:number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.habilidadURL + `detalle/${id}`, cabecera);
  }

  public crear(habilidad: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.habilidadURL + 'nuevo', habilidad, cabecera);
  }

  public editar(habilidad: Habilidad, id: number): Observable<any> {
    return this.httpClient.put<any>(this.habilidadURL + `actualizar/${id}`,habilidad, cabecera);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.habilidadURL + `borrar/${id}`, cabecera);
  }



}
