import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import{AppointmentService} from'src/app/shared/appointment.service'
import { DAppointmentsVMService } from 'src/app/shared/d-appointments-vm.service';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.scss']
})
export class ListAppointmentComponent implements OnInit {

  page:number=1;
  filter:string;
   constructor(public doctorAppointmentService:DAppointmentsVMService,
   private appointmentService:AppointmentService,
     private router:Router,
     private toastr:ToastrService,
     ) { }

   ngOnInit(): void {
     console.log("Welcome to the life cycle hook");
     this.doctorAppointmentService.BindAppointmentsList(5001);
   }
   deleteMedicine(index: number): void {
    // Remove the item from the array
    this.doctorAppointmentService.appointments.splice(index, 1);
    // Optionally, you can also call an API to delete the item from the server
    // this.medicineService.deleteMedicine(this.medicineService.medicine[index].MedicineId);
  }
  backtoPatientList(){
    this.router.navigate(['/r-appointment/home']);
  }

}
