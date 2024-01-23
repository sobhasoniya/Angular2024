import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMedcineComponent } from './medicine/list-medcine/list-medcine.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';

const routes: Routes = [
  {path:'list-medicine',component:ListMedcineComponent},
  {path:'add-medicine',component:AddMedicineComponent},
  {path:'editMedicine/:medId',component:EditMedicineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AMedicineRoutingModule { }
