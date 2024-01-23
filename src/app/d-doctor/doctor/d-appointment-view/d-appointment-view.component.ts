import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {DAppointmentsVMService} from 'src/app/shared/d-appointments-vm.service'

@Component({
  selector: 'app-d-appointment-view',
  templateUrl: './d-appointment-view.component.html',
  styleUrls: ['./d-appointment-view.component.scss']
})
export class DAppointmentViewComponent implements OnInit {
 page:number=1;
 filter:string;
  constructor(public doctorAppointmentService:DAppointmentsVMService,
    private router:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    console.log("Welcome to the life cycle hook");
    this.doctorAppointmentService.BindAppointmentsList(5001);
  }
  ViewPatientDetails(appointmentId: number)
  {
    console.log("appointment view component log: "+appointmentId);
    this.router.navigate(['d-doctor/patientDetails', appointmentId])
  }
}
