import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { MedicamentoComponent } from './pages/medicamento/medicamento.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DisponibilidadComponent } from './pages/disponibilidad/disponibilidad.component';

@NgModule({
  declarations: [MedicamentoComponent, DashboardComponent, DisponibilidadComponent],
  imports: [CommonModule, ModulesRoutingModule, FormsModule],
})
export class ModulesModule {}
