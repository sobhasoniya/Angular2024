import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { HomeComponent } from './home/home.component';
import { ListPatientComponent } from '../r-patient/list-patient/list-patient.component';
import { AddPatientComponent } from '../r-patient/add-patient/add-patient.component';

const routes: Routes = [
  {path:'book-appointment/:PatientId',component:BookAppointmentComponent},
  {path:'home',component:HomeComponent},
  {path:'listPatient',component:ListPatientComponent},
  {path:'addPatient',component:AddPatientComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RAppointmentRoutingModule { }
