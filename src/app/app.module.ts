import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RelSkillsComponent } from './rel-skills/rel-skills.component';
//import { LoginComponent } from './login/login.component';

import { LoginComponent } from './auth/login.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './users/user.component';
import { AdminComponent } from './users/admin.component';

import { interceptorProvider } from './interceptors/producto-interceptor.service';
import { CarreraInterceptorProvider } from './interceptors/carrera-interceptor.service';
import { FuncionInterceptorProvider } from './interceptors/funcion-interceptor.service';
import { HabilidadInterceptorProvider } from './interceptors/habilidad-interceptor.service';
import { InstitucionInterceptorProvider } from './interceptors/institucion-interceptor.service';
import { PersonaInterceptorProvider } from './interceptors/persona-interceptor.service';

//módulos para el cliente http y los formularios:
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { DetallePersonaComponent } from './persona/detalle-persona.component';
import { NuevoPersonaComponent } from './persona/nuevo-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona.component';
import { ListaPersonaComponent } from './persona/lista-persona.component';
import { ListaCarreraComponent } from './carrera/lista-carrera.component';
import { DetalleCarreraComponent } from './carrera/detalle-carrera.component';
import { NuevoCarreraComponent } from './carrera/nuevo-carrera.component';
import { EditarCarreraComponent } from './carrera/editar-carrera.component';
import { ListaHabilidadComponent } from './habilidad/lista-habilidad.component';
import { DetalleHabilidadComponent } from './habilidad/detalle-habilidad.component';
import { NuevoHabilidadComponent } from './habilidad/nuevo-habilidad.component';
import { EditarHabilidadComponent } from './habilidad/editar-habilidad.component';
import { ListaInstitucionComponent } from './institucion/lista-institucion.component';
import { DetalleInstitucionComponent } from './institucion/detalle-institucion.component';
import { NuevoInstitucionComponent } from './institucion/nuevo-institucion.component';
import { EditarInstitucionComponent } from './institucion/editar-institucion.component';
import { DetalleFuncionComponent } from './funcion/detalle-funcion.component';
import { NuevoFuncionComponent } from './funcion/nuevo-funcion.component';
import { EditarFuncionComponent } from './funcion/editar-funcion.component';
import { ListaFuncionComponent } from './funcion/lista-funcion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RelSkillsComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    EditarProductoComponent,
    NuevoProductoComponent,
    DetallePersonaComponent,
    NuevoPersonaComponent,
    EditarPersonaComponent,
    ListaPersonaComponent,
    ListaCarreraComponent,
    DetalleCarreraComponent,
    NuevoCarreraComponent,
    EditarCarreraComponent,
    ListaHabilidadComponent,
    DetalleHabilidadComponent,
    NuevoHabilidadComponent,
    EditarHabilidadComponent,
    ListaInstitucionComponent,
    DetalleInstitucionComponent,
    NuevoInstitucionComponent,
    EditarInstitucionComponent,
    DetalleFuncionComponent,
    NuevoFuncionComponent,
    EditarFuncionComponent,
    ListaFuncionComponent,
    LoginComponent,
    FooterComponent,
    UserComponent,
    AdminComponent,
//    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [interceptorProvider,
  CarreraInterceptorProvider,
  FuncionInterceptorProvider,
  HabilidadInterceptorProvider,
  InstitucionInterceptorProvider,
  PersonaInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
