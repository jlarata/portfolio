import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RelSkillsComponent } from './rel-skills/rel-skills.component';
//import { LoginComponent } from './login/login.component';

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
//    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
