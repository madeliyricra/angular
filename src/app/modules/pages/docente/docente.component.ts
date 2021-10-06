import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Docente } from 'src/app/interface/docente.interface';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss'],
})
export class DocenteComponent implements OnInit {
  docentes: any[] = [];
  dni: String = '';
  nombre: String = '';

  constructor(private docenteService: DocenteService) {
    this.docenteService
      .listaDocenteFiltro(this.nombre, this.dni)
      .subscribe((docente) => (this.docentes = docente));
  }

  ngOnInit(): void {}

  listaDocente() {
    this.docenteService
      .listaDocenteFiltro(this.nombre, this.dni)
      .subscribe((docente) => (this.docentes = docente));
    this.dni = '';
    this.nombre = '';
  }
}
