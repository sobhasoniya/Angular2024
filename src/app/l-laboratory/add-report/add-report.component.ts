import { Component, OnInit } from '@angular/core';
import { LLabReportVMService } from 'src/app/shared/l-lab-report-vm.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import{Router} from '@angular/router';
import { LLabTestsVMService } from 'src/app/shared/l-lab-tests-vm.service';
import{LGetIDVMService}from 'src/app/shared/l-get-idvm.service'
import { LabReportGenerationService } from 'src/app/shared/lab-report-generation.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent implements OnInit {
  generatedReport: any;
  reportTable: any[] = [];
  staffId:number=5001;
  TestId:number=502;
  minDate: string;
  maxDate: string;

  constructor(public lLabReportVMService:LLabReportVMService,
    public lLabTestsVMService:LLabTestsVMService,
    private toastr: ToastrService,
    private router:Router,
    public lgetidvmService: LGetIDVMService,
    public labreportgeneration:LabReportGenerationService)
 {}
  // formatDate(date: Date): string {
  //   const year = date.getFullYear();
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0');
  //   const day = date.getDate().toString().padStart(2, '0');
  //   return ${year}-${month}-${day};
  // }



  ngOnInit(): void {
    this.labreportgeneration.formData.AppointmentId=this.lLabTestsVMService.formData.AppointmentId;
    this.labreportgeneration.formData.TestId=this.TestId;
    this.labreportgeneration.formData.StaffId=this.staffId;

  }




onSubmit(form: NgForm){
  this.lLabTestsVMService.formData.AppointmentId =0;

  let addId =this.labreportgeneration.formData.ReportId;
  if(addId ==0 || addId == null){

    console.log(form.value);
    this.reportTable.push(form.value);
    this.InsertRecord(form);
  }

}


InsertRecord(form: NgForm){
  console.log("inserting");
  this.labreportgeneration.insertLabReport(form.value).subscribe(
    (result)=>{
      console.log(result);
      this.resetForm(form);
      //alert
      this.toastr.success('added successFully','CMS App 2024');
      this.router.navigate(['l-laboratory/report'], { state: { data: this.generatedReport } });

    },
    (error) => {
      console.error('Error inserting record:', error);
    }
  );

}


resetForm(form:NgForm){
  if(form!=null){
   form.resetForm();

}
}

generateReport() {
  // Navigate to the lab report form
  this.router.navigate(['l-laboratory/report'], { state: { data: this.generatedReport } });
}

goBack() {
this.router.navigate(['/l-laboratory/list']);
}





}
