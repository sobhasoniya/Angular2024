import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ALoginRoutingModule } from './a-login-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ALoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ALoginModule { }
