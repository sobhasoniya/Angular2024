import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AHomeRoutingModule } from './a-home-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [AdminhomeComponent, HomeComponent],
  imports: [
    CommonModule,
    AHomeRoutingModule
  ]
})
export class AHomeModule { }
