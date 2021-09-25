import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicamento } from '../interface/medicamento.interface';
import { Observable } from 'rxjs';
import { URL } from '../constants/global';

@Injectable({
  providedIn: 'root',
})
export class MedicamentoService {
  constructor(private http: HttpClient) {}

  registrarProducto(data: Medicamento): Observable<any> {
    return this.http.post(URL, data);
  }
}
