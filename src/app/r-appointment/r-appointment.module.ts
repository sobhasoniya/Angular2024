import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RAppointmentRoutingModule } from './r-appointment-routing.module';
import { AppointmentComponent } from './appointment/appointment.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ReactiveFormsModule } from '@angular/forms';
import{MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RPatientModule } from '../r-patient/r-patient.module';
import { MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { BillGenerationComponent } from './bill-generation/bill-generation.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [AppointmentComponent, BookAppointmentComponent, BillGenerationComponent, HomeComponent],
  imports: [
    CommonModule,
    RAppointmentRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    RPatientModule,
    MatNativeDateModule
  ]
})
export class RAppointmentModule { }
