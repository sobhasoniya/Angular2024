import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DDoctorRoutingModule } from './d-doctor-routing.module';
import { DAppointmentViewComponent } from './doctor/d-appointment-view/d-appointment-view.component';
import { DoctorComponent } from './doctor/doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule, PaginationService } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Injectable } from '@angular/core';
import { DPatientDetailsComponent } from './doctor/d-patient-details/d-patient-details.component';
import { DPatientHistoryComponent } from './doctor/d-patient-history/d-patient-history.component';
import { DAddDiagnosisComponent } from './doctor/d-add-diagnosis/d-add-diagnosis.component';



@NgModule({
  declarations: [DoctorComponent,DAppointmentViewComponent, DPatientDetailsComponent, DPatientHistoryComponent, DAddDiagnosisComponent ],
  imports: [
    CommonModule,
    DDoctorRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [PaginationService],
})
export class DDoctorModule { }
