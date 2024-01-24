import { Injectable } from '@angular/core';
import { Patients} from './patients';
import{HttpClient,HttpClientModule} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patients:Patients[];
  formData:Patients=new Patients();


  constructor(private httpClient:HttpClient) { }
  BindListPatients()
  {
    this.httpClient.get(environment.apiUrl + "/api/Rpatients/List")
    .toPromise().then(response=>
      this.patients=response as Patients[]);
  }
   //insert a patient
   insertPatient(pa : Patients): Observable<any>
   {
     return this.httpClient.post(environment.apiUrl + "/api/RPatients/Insert",pa)
   }

   //update  Patient
updatePatient(pId:number):Observable<any>{
  return this.httpClient.put(environment.apiUrl+"/api/RPatients/Update",pId);


}

getPatientById(patientId:number):Observable<any>{
  return this.httpClient.get(environment.apiUrl+ "/api/Rpatients/" + patientId)
}

}
