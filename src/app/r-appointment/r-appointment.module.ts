import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RAppointmentRoutingModule } from './r-appointment-routing.module';
import { AppointmentComponent } from './appointment/appointment.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RPatientModule } from '../r-patient/r-patient.module';

import { BillGenerationComponent } from './bill-generation/bill-generation.component';
import { HomeComponent } from './home/home.component';
import { ListAppointmentComponent } from './list-appointment/list-appointment.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [AppointmentComponent, BookAppointmentComponent, BillGenerationComponent, HomeComponent, ListAppointmentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RPatientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule,
    RAppointmentRoutingModule
  ]
})
export class RAppointmentModule { }
