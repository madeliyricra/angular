import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/interface/medicamento.interface';
@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.scss'],
})
export class MedicamentoComponent implements OnInit {
  medicamento: Medicamento = {};
  constructor() {}

  ngOnInit(): void {}

  registarMedicamento() {
    // this.medicamentoService.registrarProducto(this.medicamento).subscribe(
    //   (response) => {
    //     alert(response.mensaje);
    //     let form: any = document.getElementById('formulario');
    //     form.reset();
    //   },
    //   (error) => {
    //     alert(error);
    //   }
    // );
  }
}
