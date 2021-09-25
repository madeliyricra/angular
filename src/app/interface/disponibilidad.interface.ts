import { Ciclo } from './ciclo.interface';
import { Usuario } from './usuario.interface';

export interface Disponibilidad {
  idDisponibilidad?: number;
  horaInicio?: string;
  horaFin?: string;
  dia?: string;
  ciclo?: Ciclo;
  usuario?: Usuario;
}
