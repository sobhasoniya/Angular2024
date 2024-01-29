import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientsService } from 'src/app/shared/patients.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  getMinDOBDate(): string {
    const currentDate = new Date();
    const minDOBDate = new Date(currentDate);
    minDOBDate.setFullYear(currentDate.getFullYear() - 60); // Set 18 years ago
    return this.formatDate(minDOBDate);
  }

  getMaxDOBDate(): string {
    const currentDate = new Date();
    const maxDOBDate = new Date(currentDate);
    maxDOBDate.setFullYear(currentDate.getFullYear()); // Set 60 years ago
    return this.formatDate(maxDOBDate);
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  constructor(public patientsServices:PatientsService,
    private toastr:ToastrService, private router:Router  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let addid = this.patientsServices.formData.PatientId;
    if (addid == 0 || addid == null) {
      console.log(form.value);
      this.InsertRecord(form);
      //window.location.reload();
      this.router.navigate(['r-patient/listPatient']);
    }
    else {
      this.UpdateRecord(form);
    }
  }
  //insert
  InsertRecord(form: NgForm) {
    console.log("inserting");
    this.patientsServices.insertPatient(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);
        //alert
        this.toastr.success('added sucessfully', 'Maple Health Care');

        this.router.navigate(['r-patient/listPatient']);

      }
      
    )
  }
  UpdateRecord(form: NgForm) 
  {

    //console.log("updateing");
    this.patientsServices.updatePatient(form.value).subscribe(
      (result)=>{
        //console.log(result);
        this.resetForm(form);
        this.toastr.success('Updated sucessfully','MAPLE HEALTH CARE');
        this.router.navigate(['r-patient/listPatient']);
      }
    )

  }

  //reset form
  resetForm(form:NgForm)
  {
    if(form !=null)
    {
      form.resetForm();
    }
  }


  backtoPatientList(){
    this.router.navigate(['/r-patient/listPatient']);
  }
}

      

