import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from 'src/app/shared/patients.service';
import { Patients } from 'src/app/shared/patients';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {
  patientId: number;
  patients: Patients = new Patients();

  constructor(
    private route: ActivatedRoute,
    private patientsService: PatientsService,
    private cdr: ChangeDetectorRef ,// Inject ChangeDetectorRef
    private router:Router
  ) { }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.params['patientId'];

    this.patientsService.getPatientById(this.patientId)
      .subscribe(data => {
        console.log(data);
        this.patients = data;

        // Changing date format to 'yyyy-MM-dd'
        var datePipe = new DatePipe("en-UK");
        let formattedDate: any = datePipe.transform(data.PatientDob, 'yyyy-MM-dd');
        data.PatientDob = formattedDate;

        this.patientsService.formData = Object.assign({}, data);

        // Manually trigger change detection
        this.cdr.detectChanges();
      }, error => console.log(error));
  }

  onSubmit() {
    this.patientsService.updatePatient(this.patientId)
      .subscribe(result => {
        console.log(result);
        // Reload patient list after successful update
        this.reloadPatientList();
      }, error => console.log(error));
  }

  reloadPatientList() {
    // Refetch the updated patient data
    this.patientsService.getPatientById(this.patientId)
      .subscribe(updatedPatient => {
        // Manually update the patient list in the service
        this.patientsService.updatePatient(updatedPatient);
      }, error => {
        console.error('Error reloading patient list:', error);
      });
  }

  backtoPatientList(){
    this.router.navigate(['/r-patient/listPatient']);
  }
}
