import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{MedicinesService} from 'src/app/shared/medicines.service'

@Component({
  selector: 'app-list-medcine',
  templateUrl: './list-medcine.component.html',
  styleUrls: ['./list-medcine.component.scss']
})
export class ListMedcineComponent implements OnInit {
  filter:string;
  viewClicked: boolean = false;
  listPatientRecord = [];

  constructor(public medicineService:MedicinesService,
    private router:Router) { }

  ngOnInit(): void {
    console.log("Welcome to LifeCycle Hook")
    this.medicineService.BindListMedicine();
  }

  goBack():void{
    this.viewClicked = false;
    this.listPatientRecord = [];

    // Navigate back to the home page
    this.router.navigate(['a-home/adminhome']);
  }


  updateMedicine(medId:number){
    console.log(medId);
    this.router.navigate(['a-medicine/editMedicine',medId])
  }

  deleteMedicine(index: number): void {
    // Remove the item from the array
    this.medicineService.medicine.splice(index,1);
    // Optionally, you can also call an API to delete the item from the server
    // this.medicineService.deleteMedicine(this.medicineService.medicine[index].MedicineId);
  }



}
