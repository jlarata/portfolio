import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

//import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
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
        component: DetalleProductoComponent
    },
    {
        path: 'prodnuevo',
        component: NuevoProductoComponent
    },
    {
        path: 'prodeditar/:id',
        component: EditarProductoComponent
    },
    {
        path: 'perslista',
        component: ListaPersonaComponent
    },
    {
        path: 'persdetalle/:id',
        component: DetallePersonaComponent
    },
    {
        path: 'persnuevo',
        component: NuevoPersonaComponent
    },
    {
        path: 'perseditar/:id',
        component: EditarPersonaComponent
    },
    {
        path: 'carrlista',
        component: ListaCarreraComponent
    },
    {
        path: 'carrdetalle/:id',
        component: DetalleCarreraComponent
    },
    {
        path: 'carrnuevo',
        component: NuevoCarreraComponent
    },
    {
        path: 'carreditar/:id',
        component: EditarCarreraComponent
    }
//    {
//        path: 'login',
//        component: LoginComponent
//    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }