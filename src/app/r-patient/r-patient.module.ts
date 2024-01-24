import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RPatientRoutingModule } from './r-patient-routing.module';
import { PatientComponent } from './patient/patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';



@NgModule({
  declarations: [PatientComponent, ListPatientComponent, AddPatientComponent, EditPatientComponent, DetailsPatientComponent],
  imports: [
    CommonModule,
    RPatientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RPatientModule { }
