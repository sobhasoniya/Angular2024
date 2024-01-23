import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ToastrService} from 'ngx-toastr';
import { AStaffVM } from 'src/app/shared/astaff-vm';
import { NgForm } from '@angular/forms';
import { AStaffVMService } from 'src/app/shared/astaff-vm.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {

  constructor(
    public staffService:AStaffVMService,
    private router:Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.staffService.BindListStaffs();
    this.staffService.formData=new AStaffVM();
  }


  onSubmit(form:NgForm)
  {
    let staffId=this.staffService.formData.StaffId;
    if(staffId==0||staffId==null)
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

  UpdateRecord(form:NgForm)
  {

  }

}
