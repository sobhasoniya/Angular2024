import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RBillViewModel } from './r-bill-view-model';
import { error } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class BillviewmodelService {
  bill_rs:RBillViewModel[];
  bill_r:RBillViewModel=new RBillViewModel();
  constructor(private httpClient:HttpClient) { }
  //Populating Patient Records
getBill(BillId:number):Observable<any>{
  return this.httpClient.get(environment.apiUrl+'/api/RAppointments/GetBillDetails/'+BillId);
}
//Get All Appointments in the clinic
BindAppointments(){
  return this.httpClient.get(environment.apiUrl+'/api/RAppointments/GetAllAppointments').toPromise().then(
    response=>{
      this.bill_rs=response as RBillViewModel[];
      console.log(this.bill_rs);
    },error=>{
      console.log(error);
    }
  );
}
//Canceling the Appointments
CancelAppointments(AppointmentId:number){
  return this.httpClient.patch(environment.apiUrl+'/api/RAppointments/cancelAppointment/{appointmentId}'+AppointmentId,{});
}
}
