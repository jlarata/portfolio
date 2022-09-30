import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrera } from '../models/carrera';

const cabecera = {headers : new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class CarreraService {


  //carreraURL = 'http://localhost:8080/api/carrera/
  carreraURL = 'https://fspf.herokuapp.com/api/carrera/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Carrera[]> {
    return this.httpClient.get<Carrera[]>(this.carreraURL + 'lista', cabecera);
  }

  public listaporid(id:number): Observable<Carrera[]> {
    return this.httpClient.get<Carrera[]>(this.carreraURL + `listaporid/${id}`, cabecera);
  }

  public detalle(id:number): Observable<Carrera> {
    return this.httpClient.get<Carrera>(this.carreraURL + `detalle/${id}`, cabecera);
  }

  public crear(carrera: Carrera): Observable<any> {
    return this.httpClient.post<any>(this.carreraURL + 'nuevo', carrera, cabecera);
  }

  public editar(carrera: Carrera, id: number): Observable<any> {
    return this.httpClient.put<any>(this.carreraURL + `actualizar/${id}`,carrera, cabecera);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.carreraURL + `borrar/${id}`, cabecera);
  }



}
