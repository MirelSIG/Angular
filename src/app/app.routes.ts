import { Routes } from '@angular/router';
import { Presentacion } from './components/presentacion/presentacion';
import { Hola } from './hola/hola';
import { MiComponente } from './mi-componente/mi-componente';

export const routes: Routes = [
  { path: '', component: Presentacion },
  { path: 'instalacion', component: Hola },
  { path: 'primero-pasos', component: MiComponente },
  { path: 'componentes', component: Presentacion },
  { path: 'routes', component: MiComponente },
  { path: '**', redirectTo: '' }
];