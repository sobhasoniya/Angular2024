import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DPatientDetailsVM } from './d-patient-details-vm';

@Injectable({
  providedIn: 'root'
})
export class DPatientDetailsVMService {
 patientDetails:DPatientDetailsVM=new DPatientDetailsVM();
  constructor(private httpClient:HttpClient) { }

  GetPatientDetails(appointmentId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/Doctor/GetPatientView?appointmentId="+appointmentId);
  }
}
