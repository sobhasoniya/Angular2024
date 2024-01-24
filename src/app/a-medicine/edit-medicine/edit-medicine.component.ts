import { Component, OnInit } from '@angular/core';
import { Medicines } from 'src/app/shared/medicines';
import { MedicinesService } from 'src/app/shared/medicines.service';
import { ActivatedRoute } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.scss']
})
export class EditMedicineComponent implements OnInit {

  medId:number;
  medicine:Medicines=new Medicines();

  constructor(
    private route: ActivatedRoute,
    private medicineService:MedicinesService
  ) { }

  ngOnInit(): void {
    this.medId=this.route.snapshot.params['medId']

    this.medicineService.getMedicines(this.medId)
    .subscribe(data=>{
      console.log(data);
      this.medicine=data;

      this.medicineService.formData=Object.assign({},data);

    },error=>console.log(error))
  };

}
