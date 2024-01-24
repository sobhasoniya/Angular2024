import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {DAppointmentsVM} from './d-appointments-vm'

@Injectable({
  providedIn: 'root'
})
export class DAppointmentsVMService {
  formData:DAppointmentsVM=new DAppointmentsVM();
  appointments:DAppointmentsVM[]; //For Appointments List

  constructor(private httpclient:HttpClient) { }

  BindAppointmentsList(docId:number)
  {
    this.httpclient.get(environment.apiUrl + "api/Doctor/GetAppointmentView?docId=" + docId)
    .toPromise().then(response =>{
      this.appointments=response as DAppointmentsVM[];
      console.log(this.appointments);
    });
  }
}
