import { Component, OnInit } from '@angular/core';
import{AStaffVMService} from 'src/app/shared/astaff-vm.service'
import { AStaffVM } from 'src/app/shared/astaff-vm';
import { Router } from '@angular/router';
import { StaffsService } from 'src/app/shared/staffs.service';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss']
})
export class ListStaffComponent implements OnInit {
  filter:string;
  disabledStaff: Set<number> = new Set<number>();

  constructor(public staffService:AStaffVMService,
    staffsService:StaffsService,
    private router:Router) { }

  ngOnInit(): void {
    console.log("Welcome Sofiya")
    this.staffService.BindListStaffs();

  }


  updateStaffs(staffId:number){
    console.log(staffId);
    this.router.navigate(['/a-staff/editStaff',staffId])
  }

  deleteMedicine(index: number): void {
    // Remove the item from the array
    this.staffService.staff.splice(index, 1);
    // Optionally, you can also call an API to delete the item from the server
    // this.medicineService.deleteMedicine(this.medicineService.medicine[index].MedicineId);
  }

}
