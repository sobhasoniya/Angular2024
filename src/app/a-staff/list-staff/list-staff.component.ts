import { Component, OnInit } from '@angular/core';
import{AStaffVMService} from 'src/app/shared/astaff-vm.service'
import { AStaffVM } from 'src/app/shared/astaff-vm';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss']
})
export class ListStaffComponent implements OnInit {
  filter:string;
  disabledStaff: Set<number> = new Set<number>();

  constructor(public staffService:AStaffVMService) { }

  ngOnInit(): void {
    console.log("Welcome Sofiya")
    this.staffService.BindListStaffs();

  }


  // Method to disable a staff member
  isStaffDisabled(staffId: number): boolean {
    return this.disabledStaff.has(staffId);
  }

  // Method to toggle the disabled status of a staff member
  toggleDisable(staffId: number): void {
    console.log("Disabling")
    if (this.disabledStaff.has(staffId)) {
      this.disabledStaff.delete(staffId);
    } else {
      this.disabledStaff.add(staffId);
    }
  }

}
