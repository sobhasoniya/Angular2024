import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AStaffVM } from 'src/app/shared/astaff-vm';
import { AStaffVMService } from 'src/app/shared/astaff-vm.service';
import { Staffs } from 'src/app/shared/staffs';
import{StaffsService} from 'src/app/shared/staffs.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.scss']
})
export class EditStaffComponent implements OnInit {

  staffId:number;
  stafff:Staffs=new Staffs();
  stafffs:AStaffVM=new AStaffVM();

  constructor(
    private route:ActivatedRoute,
    public staffService:StaffsService,
    public staffsService:AStaffVMService
  ) { }

  ngOnInit(): void {
    this.staffId=this.route.snapshot.params['staffId']

   console.log("Aadithya is shit")
   console.log(this.staffId)

    this.staffsService.getStaff(this.staffId)
    .subscribe(data=>{
      console.log(data);
      this.stafffs=data;


      var datePipe = new DatePipe("en-UK");
        let formatedyear: any = datePipe.transform(data.JoiningDate, 'yyyy-MM-dd');
        data.JoiningDate = formatedyear;


        var datePipe = new DatePipe("en-UK");
        let formatedyear2: any = datePipe.transform(data.Dob, 'yyyy-MM-dd');
        data.Dob = formatedyear2;

      this.staffsService.formData=Object.assign({},data);
    },error=>console.log(error))
  
  
  };

}
