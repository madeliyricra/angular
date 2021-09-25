import { Component, OnInit } from '@angular/core';
import { dia } from 'src/app/constants/global';
import { Ciclo } from 'src/app/interface/ciclo.interface';
import { Disponibilidad } from 'src/app/interface/disponibilidad.interface';
import { Usuario } from 'src/app/interface/usuario.interface';
import { CicloService } from 'src/app/services/ciclo.service';
import { DisponibilidadService } from 'src/app/services/disponibilidad.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.component.html',
  styleUrls: ['./disponibilidad.component.scss'],
})
export class DisponibilidadComponent implements OnInit {
  disponibilidad: Disponibilidad = {
    ciclo: {
      idCiclo: -1,
    },
    usuario: {
      idUsuario: -1,
    },
  };
  diaSelect: string[] = dia;
  usuario: any = [];
  ciclo: any = [];
  constructor(
    private disponibilidadService: DisponibilidadService,
    private cicloService: CicloService,
    private usuarioService: UsuarioService
  ) {
    this.cicloService.listaCiclo().subscribe((c) => (this.ciclo = c));
    this.usuarioService.listaUsuario().subscribe((u) => (this.usuario = u));
  }

  ngOnInit(): void {}

  registrarDisponibilidad() {
    this.disponibilidadService
      .registrarDisponibilidad(this.disponibilidad)
      .subscribe(
        (response) => {
          alert(response.mensaje);
          let form: any = document.getElementById('formulario');
          form.reset();
          this.disponibilidad = {
            ciclo: {
              idCiclo: -1,
            },
            usuario: {
              idUsuario: -1,
            },
          };
        },
        (error) => {
          alert(error);
        }
      );
  }
}
