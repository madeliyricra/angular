import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from '../constants/global';

@Injectable({
  providedIn: 'root',
})
export class CicloService {
  constructor(private http: HttpClient) {}

  listaCiclo(): Observable<string[]> {
    return this.http.get<string[]>(URL + '/ciclo');
  }
}
