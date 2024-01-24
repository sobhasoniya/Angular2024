import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToLaboratoryManagement() {
    console.log("Hello");
   
    this.router.navigate(['a-lab/list-labtests']);
  }
  navigateToMedicineManagement() {
    console.log("Hello");
   
    this.router.navigate(['a-medicine/list-medicine']);
  }
  navigateToStaffManagement() {
    console.log("Hello");
   
    this.router.navigate(['a-staff/list-staff']);
  }

}
