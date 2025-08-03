import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import {LoginComponent} from './login/login';
import {RegisterComponent} from './register/register';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [RegisterComponent,LoginComponent],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,

  ]
})
export class AuthModule { }
