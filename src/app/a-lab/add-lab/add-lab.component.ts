import { Component, OnInit } from '@angular/core';
import { LabTestsService } from 'src/app/shared/lab-tests.service';
  import { Router } from '@angular/router';
  import{ToastrService} from 'ngx-toastr'
import { LabTests } from 'src/app/shared/lab-tests';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-lab',
  templateUrl: './add-lab.component.html',
  styleUrls: ['./add-lab.component.scss']
})
export class AddLabComponent implements OnInit {

  constructor(
    public labService:LabTestsService,
    private router:Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.labService.BindListlab();
    this.labService.formData=new LabTests();
  }


  onSubmit(form:NgForm)
  {
    let addId=this.labService.formData.TestId;
    if(addId==0||addId==null)
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
    this.labService.insertLabTests(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.resetForm(form)
        //alert("Added Successfully");
        this.toastr.success('Added Successfully' ,'EMS App 2024')
        this.router.navigate(['a-lab/list-labtests']);
      }
    )

  }

  UpdateRecord(form:NgForm)
  {

    console.log("Updating ...");
    this.labService.updateLabTests(form.value).subscribe(
      (result)=>{
      console.log(result);
      this.resetForm(form);
      this.toastr.success('Updated SUccessfully ','EMS App 2024');
      this.router.navigate(['a-lab/list-labtests']);
      }

    )


  }

}
