import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DAppointmentViewComponent } from './doctor/d-appointment-view/d-appointment-view.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DPatientDetailsComponent } from './doctor/d-patient-details/d-patient-details.component';
import { DPatientHistoryComponent } from './doctor/d-patient-history/d-patient-history.component';
import { DAddDiagnosisComponent } from './doctor/d-add-diagnosis/d-add-diagnosis.component';

const routes: Routes = [
  {path:'listAppointments', component: DAppointmentViewComponent},
  {path:'patientDetails/:appointmentId', component:DPatientDetailsComponent},
  {path:'patientHistory/:patientId', component:DPatientHistoryComponent},
  {path:'addDiagnosis/:appointmentId', component:DAddDiagnosisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DDoctorRoutingModule { }
