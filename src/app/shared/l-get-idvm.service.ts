import { Injectable } from '@angular/core';
import { LGetIDVM } from './l-get-idvm';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LGetIDVMService {
  lGetIDVM:LGetIDVM[];
  getidvm1:LGetIDVM=new LGetIDVM();
  constructor(private httpClient:HttpClient) { }
  

   //Bind Get IDVM
   BindListIDVM(LabPrescId:number):Observable<any>{
    console.log(String(LabPrescId))
    return this.httpClient.get(environment.apiUrl + '/api/LlabTests/Get', { params: { AppointmentId: String(LabPrescId) } });
  }

}
