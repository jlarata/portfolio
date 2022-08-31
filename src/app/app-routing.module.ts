import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WExpComponent } from './w-exp/w-exp.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducactionComponent } from './educaction/educaction.component';
import { RelSkillsComponent } from './rel-skills/rel-skills.component';

const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'wexp',
        component: WExpComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'education',
        component: EducactionComponent
    },
    {
        path: 'rel-skills',
        component: RelSkillsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }