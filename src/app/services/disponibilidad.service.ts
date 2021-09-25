import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from '../constants/global';
import { Disponibilidad } from '../interface/disponibilidad.interface';

@Injectable({
  providedIn: 'root',
})
export class DisponibilidadService {
  constructor(private http: HttpClient) {}

  registrarDisponibilidad(data: Disponibilidad): Observable<any> {
    return this.http.post(URL + '/disponibilidad', data);
  }
  listaDisponibilidad(): Observable<string[]> {
    return this.http.get<string[]>(URL + '/disponibilidad');
  }
}
