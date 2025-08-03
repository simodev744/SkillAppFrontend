import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login';
import {RegisterComponent} from './register/register';

import {Auth} from './auth';


const routes: Routes = [
  {
    path:"auth",component:Auth,children:[
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path:'register',
          component:RegisterComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
