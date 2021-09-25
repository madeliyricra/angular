import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DisponibilidadComponent } from './pages/disponibilidad/disponibilidad.component';
const routes: Routes = [
  {
    path: 'disponibilidad',
    pathMatch: 'full',
    component: DisponibilidadComponent,
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
