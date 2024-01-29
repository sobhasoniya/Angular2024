import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ToastrService} from 'ngx-toastr';
import { AStaffVM } from 'src/app/shared/astaff-vm';
import { NgForm } from '@angular/forms';
import { AStaffVMService } from 'src/app/shared/astaff-vm.service';
import { StaffsService } from 'src/app/shared/staffs.service';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {
  getMinDOBDate(): string {
    const currentDate = new Date();
    const minDOBDate = new Date(currentDate);
    minDOBDate.setFullYear(currentDate.getFullYear() - 60); // Set 18 years ago
    return this.formatDate(minDOBDate);
  }

  getMaxDOBDate(): string {
    const currentDate = new Date();
    const maxDOBDate = new Date(currentDate);
    maxDOBDate.setFullYear(currentDate.getFullYear() - 18); // Set 60 years ago
    return this.formatDate(maxDOBDate);
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }



  getMinDOBDate1(): string {
    const currentDate = new Date();
    const minJoinDate = new Date(currentDate);
    minJoinDate.setDate(currentDate.getDate() - 10); // Set 10 days ago
    return this.formatDate2(minJoinDate);
  }
  getMaxDOBDate2(): string {
    const currentDate = new Date();
    const minJoinDate = new Date(currentDate);
    minJoinDate.setDate(currentDate.getDate());
    return this.formatDate2(minJoinDate);
  }
  formatDate2(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }



  minDob: string = '1900-01-01'; // Update with your desired minimum date for Dob
  maxJoiningDate: string = '2024-01-19'; // Update with your desired maximum date for JoiningDate
  passwordInvalid = false;
  viewClicked: boolean = false;
  listPatientRecord = [];
  isDuplicate: boolean = false;
  constructor(
    public staffService:AStaffVMService,
    public staffsService:StaffsService,
    private router:Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.staffService.BindListStaffs();
    this.staffService.formData=new AStaffVM();

  }



  onSubmit(form: NgForm) {

    // Check if the username and password already exist
    this.staffService.checkDuplicateUsernamePassword(form.value.UserName, form.value.Password)
      .subscribe((isDuplicate: boolean) => {
        if (isDuplicate) {
          this.toastr.error('Username or password already exists', 'Validation Error');
          this.isDuplicate = true;
        } else {
          let staffId = this.staffService.formData.StaffId;
          if (staffId == 0 || staffId == null) {
            this.InsertRecord(form);
          } else {
            this.UpdateRecord(form);
          }
        }
      }, (error) => {
        console.error('Error checking duplicates:', error);
        // Handle error as needed
      });
  }




  resetForm(form:NgForm){
    if(form!=null){
      form.resetForm();
    }
  }

  InsertRecord(form:NgForm)
  {
    console.log("Inserting");
    this.staffService.insertStaff(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.resetForm(form)
        //alert("Added Successfully");
        this.toastr.success('Added Successfully' ,'EMS App 2024')
        this.router.navigate(['a-staff/list-staff']);
      }
    )

  }

  goBack():void{
    this.viewClicked = false;
    this.listPatientRecord = [];

    // Navigate back to the home page
    this.router.navigate(['a-staff/list-staff']);
  }

  UpdateRecord(form:NgForm)
  {
    console.log("Updating ...");
    this.staffsService.updateStaffs(form.value).subscribe(
      (result)=>{
      console.log(result);
      this.resetForm(form);
      this.toastr.success('Updated SUccessfully ','EMS App 2024');
      this.router.navigate(['a-staff/list-staff']);
      }

    )

  }



}
