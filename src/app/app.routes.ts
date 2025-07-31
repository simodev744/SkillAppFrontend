import { Routes } from '@angular/router';
import {HomeComponent} from './home/home';
import {CompetenceComponent} from './competence/competence';


export const routes: Routes = [
  { path: 'competence', component: CompetenceComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }
];
