import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

  redirectToMedicineManagement() {
    this.router.navigate(['../medicine-list']);
  }

  redirectToPatientPrescriptions() {
    this.router.navigate(['../patient-list']);
  }

}