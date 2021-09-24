import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { MedicamentoComponent } from './pages/medicamento/medicamento.component';


@NgModule({
  declarations: [
    MedicamentoComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
