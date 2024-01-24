import { DatePipe } from '@angular/common';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RBillViewModel} from 'src/app/shared/r-bill-view-model'
import {BillviewmodelService} from 'src/app/shared/r-bill-view-model.service'
@Component({
  selector: 'app-bill-generation',
  templateUrl: './bill-generation.component.html',
  styleUrls: ['./bill-generation.component.scss']
})
export class BillGenerationComponent implements OnInit {
  BillId:number;
  bill_r:RBillViewModel=new RBillViewModel();
  constructor(private route:ActivatedRoute,private BillingService:BillviewmodelService,private router:Router) { }

  ngOnInit(): void {
    this.BillId=this.route.snapshot.params['BillId'];
    console.log('populating Bill Details');
    console.log('BillID:',this.BillId);
    this.BillingService.getBill(this.BillId).subscribe(
      data=>
      {
       console.log(data);
       this.bill_r=data;

        var datePipe=new DatePipe('en-UK');
        let formatedyear:any=datePipe.transform(data.AppointmentDate,'yyyy-MM-dd');
        data.AppointmentDate=formatedyear;

        this.BillingService.bill_r=Object.assign({},data);
        console.log(FormData);
      },error=>{
        console.log(error);
      }
    )
  }
  goBack(){
    this.router.navigate(['/r-patient/listPatient']);
  }
  
}