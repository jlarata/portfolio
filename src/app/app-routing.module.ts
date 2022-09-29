import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './auth/login.component';
import { AdminComponent } from './users/admin.component';
import { UserComponent } from './users/user.component';
import { GuardService as guard } from './guards/guard.service';

import { HomeComponent } from './home/home.component';
import { WExpComponent } from './w-exp/w-exp.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducactionComponent } from './educaction/educaction.component';
import { RelSkillsComponent } from './rel-skills/rel-skills.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { ListaPersonaComponent } from './persona/lista-persona.component' ;
import { DetallePersonaComponent } from './persona/detalle-persona.component';
import { NuevoPersonaComponent } from './persona/nuevo-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona.component';
import { ListaCarreraComponent } from './carrera/lista-carrera.component';
import { DetalleCarreraComponent } from './carrera/detalle-carrera.component';
import { NuevoCarreraComponent } from './carrera/nuevo-carrera.component';
import { EditarCarreraComponent } from './carrera/editar-carrera.component';
import { ListaHabilidadComponent } from './habilidad/lista-habilidad.component';
import { DetalleHabilidadComponent } from './habilidad/detalle-habilidad.component';
import { EditarHabilidadComponent } from './habilidad/editar-habilidad.component';
import { NuevoHabilidadComponent } from './habilidad/nuevo-habilidad.component';
import { NuevoInstitucionComponent } from './institucion/nuevo-institucion.component';
import { EditarInstitucionComponent } from './institucion/editar-institucion.component';
import { ListaInstitucionComponent } from './institucion/lista-institucion.component';
import { DetalleInstitucionComponent } from './institucion/detalle-institucion.component';
import { DetalleFuncionComponent } from './funcion/detalle-funcion.component';
import { NuevoFuncionComponent } from './funcion/nuevo-funcion.component';
import { ListaFuncionComponent } from './funcion/lista-funcion.component';
import { EditarFuncionComponent } from './funcion/editar-funcion.component';




const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'admin', component: AdminComponent, canActivate: [guard], data: {expectedRol: ['admin']}
    },
    {
        path: 'user', component: UserComponent, canActivate: [guard], data: {expectedRol: ['user']}
    },
    //{
    //    path: 'home',
    //    component: HomeComponent
    //},
    {
        path: 'home',
        component: ListaPersonaComponent
    },
    {
        path: 'wexp',
        component: WExpComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    //{
    //    path: 'education',
    //    component: EducactionComponent
    //},
    {
        path: 'education', redirectTo: 'carrlista'
    },
    {
        path: 'rel-skills',
        component: RelSkillsComponent
    },
    {
        path: 'prodlista',
        component: ListaProductoComponent
    },
    {
        path: 'proddetalle/:id',
        component: DetalleProductoComponent,
        canActivate: [guard], data: {expectedRol: ['admin', 'user']}
    },
    {
        path: 'prodnuevo',
        component: NuevoProductoComponent,
        canActivate: [guard], data: {expectedRol: ['admin']}
    },
    {
        path: 'prodeditar/:id',
        component: EditarProductoComponent,
        canActivate: [guard], data: {expectedRol: ['admin']}
    },
    {
        path: 'perslista',
        component: ListaPersonaComponent
    },
    {
        path: 'persdetalle/:id',
        component: DetallePersonaComponent,
        canActivate: [guard], data: {expectedRol: ['admin', 'user']}
    },
    {
        path: 'persnuevo',
        component: NuevoPersonaComponent,
        canActivate: [guard], data: {expectedRol: ['admin']}
    },
    {
        path: 'perseditar/:id',
        component: EditarPersonaComponent,
        canActivate: [guard], data: {expectedRol: ['admin']}
    },
    {
        path: 'carrlista',
        component: ListaCarreraComponent
    },
    {
        path: 'carrdetalle/:id',
        component: DetalleCarreraComponent,
        canActivate: [guard], data: {expectedRol: ['admin', 'user']}
    },
    {
        path: 'carrnuevo',
        component: NuevoCarreraComponent,
        canActivate: [guard], data: {expectedRol: ['admin']}
    },
    {
        path: 'carreditar/:id',
        component: EditarCarreraComponent,
        canActivate: [guard], data: {expectedRol: ['admin']}
    },
    {
        path: 'habilista',
        component: ListaHabilidadComponent
    },
    {
        path: 'habidetalle/:id',
        component: DetalleHabilidadComponent,
        canActivate: [guard], data: {expectedRol: ['admin', 'user']}
    },
    {
        path: 'habinuevo',
        component: NuevoHabilidadComponent,
        canActivate: [guard], data: {expectedRol: ['admin']}
    },
    {
        path: 'habieditar/:id',
        component: EditarHabilidadComponent,
        canActivate: [guard], data: {expectedRol: ['admin']}
    },
    {
        path: 'instlista',
        component: ListaInstitucionComponent
    },
    {
        path: 'instdetalle/:id',
        component: DetalleInstitucionComponent,
        canActivate: [guard], data: {expectedRol: ['admin', 'user']}
    },
    {
        path: 'instnuevo',
        component: NuevoInstitucionComponent,
        canActivate: [guard], data: {expectedRol: ['admin']}
    },
    {
        path: 'insteditar/:id',
        component: EditarInstitucionComponent,
        canActivate: [guard], data: {expectedRol: ['admin']}
    },
    {
        path: 'funclista',
        component: ListaFuncionComponent
    },
    {
        path: 'funcdetalle/:id',
        component: DetalleFuncionComponent,
        canActivate: [guard], data: {expectedRol: ['admin', 'user']}
    },
    {
        path: 'funcnuevo',
        component: NuevoFuncionComponent,
        canActivate: [guard], data: {expectedRol: ['admin']}
    },
    {
        path: 'funceditar/:id',
        component: EditarFuncionComponent,
        canActivate: [guard], data: {expectedRol: ['admin']}
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }