import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot} from '@angular/router';
import { LLabTestsVMService } from 'src/app/shared/l-lab-tests-vm.service';
import{LBillService}from 'src/app/shared/l-bill.service';
import { LLabReportVMService } from 'src/app/shared/l-lab-report-vm.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { error } from '@angular/compiler/src/util';
import { LBill } from 'src/app/shared/l-bill';





@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  ReportId:number;
  billvm:LBill=new LBill()

  
  constructor(public lLabTestsVMService:LLabTestsVMService,private router : Router,
    public lbillService:LBillService,
    public lLabReportVMService: LLabReportVMService, private route: ActivatedRoute
    ) {
      this.route.queryParams.subscribe(params => {
        this.ReportId = params['ReportId'];
        console.log(this.ReportId); // Print the parameter to the console. 
    });
     }

    ngOnInit(): void {
      console.log("Welcome to Lab bill Generation");
      //this.ReportId = Number(this.route.snapshot.paramMap.get('ReportId'));//this.route.snapshot.paramMap.get('id');
      console.log(this.ReportId); 
      this.lbillService.BindListLabBill(this.ReportId).subscribe(
        (data: LBill) => { // Specify the type as LBill
          console.log(data);
          this.billvm = data;
    
          // Format the BillDate using DatePipe
          var datePipe = new DatePipe("en-UK");
          let formatedyear: any = datePipe.transform(data.BillDate, 'yyyy-MM-dd');
          data.BillDate = formatedyear;
    
          // Assign the formatted data to formData_L
          this.lbillService.formData_L = Object.assign({}, data);
    
          // Corrected log statement
          console.log(this.lbillService.formData_L);
        },
        error => console.log(error)
      );
    }
  //generate report
  generateReport(lab:any){
    this.lbillService.formData_L.BillId= lab.LabbillId;
    this.lbillService.formData_L.BillDate= lab.BillDate;
    this.lbillService.formData_L.TotalAmount= lab.TotalAmount;
    this.lbillService.formData_L.Price= lab.Price;
    this.lbillService.formData_L.PatientId= lab.PatientId;
    this.lbillService.formData_L.TestId= lab.TestId;
    this.lbillService.formData_L.ReportId= lab.LabreportId;
    this.lbillService.formData_L.AppointmentId= lab.AppointmentId;
    this.lbillService.formData_L.PatientName= lab.PatientName;
    console.log(this.lbillService.formData_L);

    this.router.navigate(['/labtechnician/bill'],{
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

  printLabReport() {
    // You can implement the print logic here

    alert('Please connect the printer.');
    window.print();
  }
  goBack() {
    this.router.navigate(['/l-laboratory/report']);
    }
  
}
