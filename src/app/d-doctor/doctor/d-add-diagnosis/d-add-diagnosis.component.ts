import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DDiagnosisVM } from 'src/app/shared/d-diagnosis-vm';
import {DDiagnosisVMService} from 'src/app/shared/d-diagnosis-vm.service'


@Component({
  selector: 'app-d-add-diagnosis',
  templateUrl: './d-add-diagnosis.component.html',
  styleUrls: ['./d-add-diagnosis.component.scss']
})
export class DAddDiagnosisComponent implements OnInit {
public AppointmentID:number;
DefaultLabTestStatus:string="PENDING";
dosages: string[] = this.GenerateDosages();
public medicineQuantity: number = 0;

  constructor(public diagnosisService:DDiagnosisVMService,
    private router:Router,
    private toastr:ToastrService,
    private route:ActivatedRoute,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.AppointmentID=this.route.snapshot.params['appointmentId'];
    console.log("Welcome to Diagnosis Form");
    console.log(this.AppointmentID);
    this.diagnosisService.BindListLabTest();
    this.diagnosisService.BindListMedicines();
    this.diagnosisService.formData=new DDiagnosisVM();  // to reset the form if it's autoifilled
    this.diagnosisService.formData.AppointmentId = this.AppointmentID;
    this.diagnosisService.formData.LabTestStatus=this.DefaultLabTestStatus;
    this.diagnosisService.formData.MedicineQuantity=this.medicineQuantity;
    this.cdr.detectChanges();
  }
 OnSubmit(form:NgForm)
 {
  let addId=this.diagnosisService.formData.DiagnosisId;
  if(addId==0 || addId==null)
  {
    console.log(form.value);
    this.InsertDiagnosis(form);
  }
  else{
    console.log("Diagnosis Id already exists");
  }
 }

 InsertDiagnosis(form:NgForm)
 {
  console.log("started to insert");
  this.diagnosisService.InsertDiagnosis(form.value).subscribe(
    (result) => {
      console.log(result);
      this.ResetForm(form);
      this.toastr.success('Diagnosis added successfully', 'Maple CMS 2024');
      if (this.AppointmentID) {
        console.log("from patient history" + this.AppointmentID);
        this.router.navigate(['d-doctor/patientDetails', this.AppointmentID]);
      }
    }
  )
 }

 ResetForm(form:NgForm)
 {
  if(form!=null){
    form.resetForm();
  }
 }

 GenerateDosages(): string[] {
  const dosages = [];

  for (let morning = 0; morning <= 3; morning++) {
    for (let noon = 0; noon <= 3; noon++) {
      for (let night = 0; night <= 3; night++) {
        const dosageString = `${morning}-${noon}-${night}`;
        dosages.push(dosageString);
      }
    }
  }

  return dosages;
}

calculateMedicineQuantity(): void {
  console.log(this.diagnosisService.formData.Dosage);
  const dosageParts = this.diagnosisService.formData.Dosage.split('-').map(part => +part);
  const days = this.diagnosisService.formData.DosageDays;

  // Calculate the sum of dosage parts
  const sumOfDosageParts = dosageParts.reduce((sum, part) => sum + part, 0);

  // Calculate the medicine quantity
  this.medicineQuantity = sumOfDosageParts * days;
  console.log(this.medicineQuantity);
}

ViewPatientDetails()
  {
    if (this.AppointmentID) {
      console.log("from patient history" + this.AppointmentID);
      this.router.navigate(['d-doctor/patientDetails', this.AppointmentID]);
    }
  }

}
