import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_DOCENTE } from '../constants/global';

@Injectable({
  providedIn: 'root',
})
export class DocenteService {
  constructor(private http: HttpClient) {}

  // listaDocentePorNombre(nombre: String): Observable<string[]> {
  //   return this.http.get<string[]>(URL_DOCENTE + '/filtro?nombre=' + nombre);
  // }
  // listaDocentePorDni(dni: String): Observable<string[]> {
  //   return this.http.get<string[]>(URL_DOCENTE + '/filtro?dni=' + dni);
  // }
  listaDocenteFiltro(nombre: String, dni: String): Observable<string[]> {
    return this.http.get<string[]>(
      URL_DOCENTE + '/filtro?nombre=' + nombre + '&dni=' + dni
    );
  }
  listaDocente(): Observable<string[]> {
    return this.http.get<string[]>(URL_DOCENTE);
  }
}
