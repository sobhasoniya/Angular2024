import { Component, OnInit } from '@angular/core';
import {PatientsService} from 'src/app/shared/patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {
  page:number=1;
  filter:string;

  constructor(public patientsService:PatientsService,
    private router:Router) { }


  ngOnInit(): void {
    console.log("welcome to life cycle hook")
    this.patientsService.BindListPatients();
  }
  updatepatient(patientId: number){
    console.log(patientId);
    this.router.navigate(['r-patient/edit-patient',patientId])

  }
  Add(){
    this.router.navigate(["r-patient/Add-patient"])
  }
  detailsPatient(PatientId:number) {
    console.log(PatientId);
    this.router.navigate(['r-patient/details-patient',PatientId])
  }
  bookAppointment(PatientId:number)
  {
    console.log(PatientId);
    this.router.navigate(['/r-appointment/book-appointment',PatientId])

  }


  deleteMedicine(index: number): void {
    // Remove the item from the array
    this.patientsService.patients.splice(index, 1);
    // Optionally, you can also call an API to delete the item from the server
    // this.medicineService.deleteMedicine(this.medicineService.medicine[index].MedicineId);
  }
  goBack(){
    this.router.navigate(['/r-appointment/home'])
  }
}
