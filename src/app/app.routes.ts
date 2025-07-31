import { Routes } from '@angular/router';
import {HomeComponent} from './home/home';
import {CompetenceComponent} from './competence/competence';
import {AddCompetence} from './add-competence/add-competence';


export const routes: Routes = [
  { path: 'competence', component: CompetenceComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addCompetence', component: AddCompetence }
];
