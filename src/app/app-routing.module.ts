import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponentComponent } from "./components/login-component/login-component.component";
import { LandingComponent } from "./components/landing/landing.component";
import { ErrorComponent } from "./components/error/error.component";
import { ControlEntidadComponent } from './components/control-entidad/control-entidad.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenido',
    pathMatch: 'full'
  },
  {
    path: 'bienvenido',
    component: LandingComponent
  },{
    path: 'paises/listado',
    component: ControlEntidadComponent
  },
  {
    path: 'login',
    component: LoginComponentComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
