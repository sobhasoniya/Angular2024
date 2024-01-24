import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ToastrService} from 'ngx-toastr'
import { Medicines } from 'src/app/shared/medicines';
import { MedicinesService } from 'src/app/shared/medicines.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss']
})
export class AddMedicineComponent implements OnInit {
  viewClicked: boolean = false;
  listPatientRecord = [];
  constructor(
    public medicineService:MedicinesService,
    private router:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.medicineService.BindListMedicine();
    this.medicineService.formData=new Medicines();
  }
  goBack():void{
    this.viewClicked = false;
    this.listPatientRecord = [];

    // Navigate back to the home page
    this.router.navigate(['a-medicine/list-medicine']);
  }

  onSubmit(form:NgForm)
  {
    let medId=this.medicineService.formData.MedicineId;
    if(medId==0||medId==null)
    {
      //alert(addId)
      console.log(form.value);
      this.InsertRecord(form);
      //window.location.reload();
    }
    else
    {
      //alert("Emp Id is Greater");
      console.log(form.value);
      this.UpdateRecord(form);
    }
  }



  resetForm(form:NgForm){
    if(form!=null){
      form.resetForm();
    }
  }

  InsertRecord(form:NgForm)
  {
    console.log("Inserting");
    this.medicineService.insertMedicines(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.resetForm(form)
        //alert("Added Successfully");
        this.toastr.success('Added Successfully' ,'EMS App 2024')
        this.router.navigate(['a-medicine/list-medicine']);
      }
    )

  }

  UpdateRecord(form:NgForm)
  {

    console.log("Updating ...");
    this.medicineService.updateMedicines(form.value).subscribe(
      (result)=>{
      console.log(result);
      this.resetForm(form);
      this.toastr.success('Updated SUccessfully ','EMS App 2024');
      this.router.navigate(['a-medicine/list-medicine']);
      }

    )

  }

}
