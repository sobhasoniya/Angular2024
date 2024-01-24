import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ListStaffComponent} from './list-staff/list-staff.component'
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';

const routes: Routes = [
  {path:'list-staff',component:ListStaffComponent},
  {path:'add-staff',component:AddStaffComponent},
  {path:'editStaff/:staffId',component:EditStaffComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AStaffRoutingModule { }
