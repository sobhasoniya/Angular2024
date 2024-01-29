import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LBillService } from 'src/app/shared/l-bill.service';
import{LLabReportVMService} from 'src/app/shared/l-lab-report-vm.service'
import { LLabTestsVMService } from 'src/app/shared/l-lab-tests-vm.service';

@Component({
  selector: 'app-list-report',
  templateUrl: './list-report.component.html',
  styleUrls: ['./list-report.component.scss']
})
export class ListReportComponent implements OnInit {
  data: any;

  constructor(public lLabReportVMService:LLabReportVMService,private router : Router,
    public lLabTestsVMService:LLabTestsVMService,public lbillService:LBillService) { }

  ngOnInit(): void {
    console.log("welcome to life cycle hook");
    this.lLabReportVMService.BindListReport();
  }
  
  
  generateBill(lab:any){
    this.lbillService.formData_L.BillId= lab.BillId;
    this.lbillService.formData_L.BillDate= lab.BillDate;
    this.lbillService.formData_L.TotalAmount= lab.TotalAmount;
    this.lbillService.formData_L.Price= lab.Price;
    this.lbillService.formData_L.PatientId= lab.PatientId;
    this.lbillService.formData_L.TestId= lab.TestId;
    this.lbillService.formData_L.ReportId= lab.LabreportId;
    this.lbillService.formData_L.AppointmentId= lab.AppointmentId;
    this.lbillService.formData_L.PatientName= lab.PatientName;
    console.log(this.lbillService.formData_L);

    this.router.navigate(['/l-laboratory/bill'],{
      queryParams: {
        BillId:lab.BillId,
        BillDate:lab.BillDate,
        TotalAmount:lab.TotalAmount,
        Price:lab.Price,
        PatientId:lab.PatientId,
        TestId:lab.TestId,
        ReportId:lab.ReportId,
        AppointmentId:lab.AppointmentId,
        PatientName:lab.PatientName,


      }
    })

  }

  ViewReport(lab:any){
    this.lLabReportVMService.formData.ReportId = lab.ReportId;
     this.lLabReportVMService.formData.ReportDate = lab.ReportDate;
     this.lLabReportVMService.formData.PatientName = lab.PatientName;
     this.lLabReportVMService.formData.TestName = lab.TestName;
     this.lLabReportVMService.formData.LowRange = lab.LowRange;
     this.lLabReportVMService.formData.HighRange = lab.HighRange;
     this.lLabReportVMService.formData.TestResult = lab.TestResult;
     this.lLabReportVMService.formData.Remarks = lab.Remarks;
     
    this.router.navigate(['/l-laboratory/view',lab])

  }



  

}
