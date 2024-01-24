import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MedicinesService } from 'src/app/shared/medicines.service';
@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.scss']
})
export class MedicineListComponent implements OnInit {
  filter: string;
  viewClicked: boolean = false;
  listPatientRecord = [];


  constructor(public medicinesService: MedicinesService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    console.log("Medicine Management");
    this.medicinesService.BindListMedicine();
  }

  onClickReorder() {
    this.toastr.success('Your reorder has been placed successfully!');
  }

  onClickBack(): void {
    this.viewClicked = false;
    this.listPatientRecord = [];

    // Navigate back to the home page
    this.router.navigate(['/p-pharmacist/home']);
  }

}
