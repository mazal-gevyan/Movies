import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './container/auth.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
