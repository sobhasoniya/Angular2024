import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AStaffRoutingModule } from './a-staff-routing.module';
import { StaffComponent } from './staff/staff.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [StaffComponent, ListStaffComponent, AddStaffComponent, EditStaffComponent],
  imports: [
    CommonModule,
    AStaffRoutingModule,
    FormsModule,
    
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:10000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    }),
    Ng2SearchPipeModule
  ]
})
export class AStaffModule { }
