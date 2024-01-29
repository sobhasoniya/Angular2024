
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AMedicineRoutingModule } from './a-medicine-routing.module';
import { MedicineComponent } from './medicine/medicine.component';
import { ListMedcineComponent } from './medicine/list-medcine/list-medcine.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [MedicineComponent, ListMedcineComponent, AddMedicineComponent, EditMedicineComponent],
  imports: [
    CommonModule,
    AMedicineRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,

    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:10000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    }),
  ]
})
export class AMedicineModule { }
