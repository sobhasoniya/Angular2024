import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';

const routes: Routes = [
  {path:'listPatient',component:ListPatientComponent},
  {path:'addPatient',component:AddPatientComponent},
  {path:'edit-patient/:patientId',component:EditPatientComponent},
  {path:'details-patient/:PatientId',component:DetailsPatientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RPatientRoutingModule { }
