import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LLaboratoryRoutingModule } from './l-laboratory-routing.module';
import { LaboratoryComponent } from './laboratory/laboratory.component';


@NgModule({
  declarations: [LaboratoryComponent],
  imports: [
    CommonModule,
    LLaboratoryRoutingModule
  ]
})
export class LLaboratoryModule { }
