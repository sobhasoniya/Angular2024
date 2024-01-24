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

    redirectToPatientRecord() {
     this.router.navigate(['../list-patient']);

    }

    redirectToAdd() {
      this.router.navigate(['../add-patient']);
    }
    redirectToAppointments() {
      this.router.navigate(['d-doctor/listAppointments']);
    }

    LogOut()
  {
      console.log("Logging out" );
      this.router.navigate(['']);
    }

  }
