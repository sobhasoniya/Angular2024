import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PPharmasistRoutingModule } from './p-pharmasist-routing.module';
import { PharmasistComponent } from './pharmasist/pharmasist.component';
import { MedicineListComponent } from './pharmasist/medicine-list/medicine-list.component';
import { PatientVMListComponent } from './pharmasist/patient-vm-list/patient-vm-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './pharmasist/home/home.component';


@NgModule({
  declarations: [PharmasistComponent, MedicineListComponent, PatientVMListComponent, HomeComponent],
  imports: [
    CommonModule,
    PPharmasistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule 

  ]
})
export class PPharmasistModule { }
