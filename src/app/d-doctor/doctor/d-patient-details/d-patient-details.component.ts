import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DPatientDetailsVMService} from 'src/app/shared/d-patient-details-vm.service'
import {DPatientDetailsVM} from 'src/app/shared/d-patient-details-vm'

@Component({
  selector: 'app-d-patient-details',
  templateUrl: './d-patient-details.component.html',
  styleUrls: ['./d-patient-details.component.scss']
})
export class DPatientDetailsComponent implements OnInit {
  appointmentId:number;
  patient:DPatientDetailsVM=new DPatientDetailsVM();
  constructor(private route:ActivatedRoute,private dpatientDetailsService:DPatientDetailsVMService,
    private router:Router) { }

  ngOnInit(): void {
    this.appointmentId=this.route.snapshot.params['appointmentId'];
    console.log("Welcome to PatientDetails");
    this.dpatientDetailsService.GetPatientDetails(this.appointmentId).subscribe(data => {
      console.log(data);
      this.patient=data;
    })
  }
  AppointmentListView()
  {
    console.log("appointment view component" );
    this.router.navigate(['d-doctor/listAppointments'])
  }

  AddDiagnosis(appointmentId:number)
  {
console.log("appointment view component");
this.router.navigate(['d-doctor/addDiagnosis',appointmentId])
  }

  PatientHistory(patientId: number){
    console.log("patient history component" );
    this.router.navigate(['d-doctor/patientHistory',patientId])
  }

}
