import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { LandingComponent } from './components/landing/landing.component';
import { ErrorComponent } from './components/error/error.component';
import { ListadoEntidadComponent } from './components/listado-entidad/listado-entidad.component';
import { ControlEntidadComponent } from './components/control-entidad/control-entidad.component';
import { DetalleEntidadComponent } from './components/detalle-entidad/detalle-entidad.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    LandingComponent,
    ErrorComponent,
    ListadoEntidadComponent,
    ControlEntidadComponent,
    DetalleEntidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
