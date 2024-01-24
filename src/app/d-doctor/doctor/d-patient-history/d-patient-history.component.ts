import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DPatientHistoryVM} from 'src/app/shared/d-patient-history-vm'
import {DPatientHistoryVMService} from 'src/app/shared/d-patient-history-vm.service'

@Component({
  selector: 'app-d-patient-history',
  templateUrl: './d-patient-history.component.html',
  styleUrls: ['./d-patient-history.component.scss']
})
export class DPatientHistoryComponent implements OnInit {
  patientId:number;
  patientHistory:DPatientHistoryVM=new DPatientHistoryVM;
  AppointmentId:number;
  page:number=1;
  filter:string;
  constructor(private route:ActivatedRoute,
    public dpatientHistoryService:DPatientHistoryVMService,
    private router:Router) { }

  ngOnInit(): void {
    this.patientId=this.route.snapshot.params['patientId'];
    console.log("Welcome to Patient History");
    this.dpatientHistoryService.PatientHistory(this.patientId).subscribe((data: DPatientHistoryVM[]) => {console.log(data);
      this.dpatientHistoryService.historyList = data.reverse();

      if (this.dpatientHistoryService.historyList.length > 0) {
        this.AppointmentId = this.dpatientHistoryService.historyList[0].AppointmentId;
      }
    });
  }
  ViewPatientDetails()
  {
    if (this.AppointmentId) {
      console.log("from patient history" + this.AppointmentId);
      this.router.navigate(['d-doctor/patientDetails', this.AppointmentId]);
    }
  }



}
