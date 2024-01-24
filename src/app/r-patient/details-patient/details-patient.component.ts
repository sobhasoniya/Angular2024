import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Patients } from 'src/app/shared/patients';
import { PatientsService } from 'src/app/shared/patients.service';

@Component({
  selector: 'app-details-patient',
  templateUrl: './details-patient.component.html',
  styleUrls: ['./details-patient.component.scss']
})
export class DetailsPatientComponent implements OnInit {
  patientId:number;
  Patient_d:Patients=new Patients();
  constructor(private route:ActivatedRoute,private router:Router,private patientsService:PatientsService) { }

  ngOnInit(): void {
    this.patientId=this.route.snapshot.params['PatientId'];
    console.log("Populating(details)");
    console.log(this.patientId);
    //subscriber
    this.patientsService.getPatientById(this.patientId).subscribe(
      data=>
      {
        console.log(data);
        this.Patient_d=data;

        var datePipe=new DatePipe('en-UK');
        let formatedyear:any=datePipe.transform(data.PatientDob,'yyyy-MM-dd');
        data.PatientDob=formatedyear;

        this.patientsService.formData=Object.assign({},data);
        console.log(FormData);
      },error=>console.log(error)
    );
  }
  backtoPatientList(){
    this.router.navigate(['/r-patient/listPatient']);
  }

}