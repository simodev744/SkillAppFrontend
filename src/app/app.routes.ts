import { Routes } from '@angular/router';
import {HomeComponent} from './home/home';
import {CompetenceComponent} from './competence/competence';
import {AddCompetence} from './add-competence/add-competence';
import {Formateur} from './dashboard/formateur/formateur';
import {Apprenant} from './dashboard/apprenant/apprenant';
import {Administrateur} from './dashboard/administrateur/administrateur';
import {LoginComponent} from './fonctionalite/auth/login/login';
import {RegisterComponent} from './fonctionalite/auth/register/register';

export const routes: Routes = [
  { path: 'competence', component: CompetenceComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addCompetence', component: AddCompetence },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:"formateur",component:Formateur,canActivate:[authGuard,RoleGuard],data: { role: 'FORMATEUR' }},
  {path:"apprenant",component:Apprenant,canActivate:[authGuard,RoleGuard],data:{role:'APPRENANT'}},
  {path:"admin",component:Administrateur,canActivate:[authGuard,RoleGuard],data:{role:'ADMIN'}},
];
