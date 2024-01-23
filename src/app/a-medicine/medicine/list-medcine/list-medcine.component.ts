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

  constructor(public medicineService:MedicinesService,
    private router:Router) { }

  ngOnInit(): void {
    console.log("Welcome to LifeCycle Hook")
    this.medicineService.BindListMedicine();
  }


  updateMedicine(medId:number){
    console.log(medId);
    this.router.navigate(['a-medicine/editMedicine',medId])
  }

}
