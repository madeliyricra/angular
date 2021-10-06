import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DocenteComponent } from './pages/docente/docente.component';

@NgModule({
  declarations: [DashboardComponent, DocenteComponent],
  imports: [CommonModule, ModulesRoutingModule, FormsModule],
})
export class ModulesModule {}
