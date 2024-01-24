import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ListLabComponent} from './list-lab/list-lab.component'
import { AddLabComponent } from './add-lab/add-lab.component';
import { EditLabComponent } from './edit-lab/edit-lab.component';

const routes: Routes = [
  {path:'list-labtests',component:ListLabComponent},
  {path:'add-labtests',component:AddLabComponent},
  {path:'editlabTests/:labId',component:EditLabComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ALabRoutingModule { }
