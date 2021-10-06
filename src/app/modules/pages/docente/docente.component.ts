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
    this.listaDocente();
  }

  ngOnInit(): void {}

  listaDocente() {
    this.docenteService
      .listaDocente()
      .subscribe((docente) => (this.docentes = docente));
  }
  filtrarDocente() {
    if (this.dni && this.nombre) {
      this.docenteService
        .listaDocentePorNombreAndDni(this.nombre, this.dni)
        .subscribe((docente) => (this.docentes = docente));
    } else {
      if (this.dni) {
        this.docenteService
          .listaDocentePorDni(this.dni)
          .subscribe((docente) => (this.docentes = docente));
      } else if (this.nombre) {
        this.docenteService
          .listaDocentePorNombre(this.nombre)
          .subscribe((docente) => (this.docentes = docente));
      } else {
        this.listaDocente();
        alert('Ingresa datos');
      }
    }
    let form: any = document.getElementById('docente');
    form.reset();
  }
}
