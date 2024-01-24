import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineListComponent } from './pharmasist/medicine-list/medicine-list.component';
import { PatientVMListComponent } from './pharmasist/patient-vm-list/patient-vm-list.component';
import { HomeComponent } from './pharmasist/home/home.component';

const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'medicine-list',component:MedicineListComponent},
  {path:'patient-list',component:PatientVMListComponent},
  { path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PPharmasistRoutingModule { }
