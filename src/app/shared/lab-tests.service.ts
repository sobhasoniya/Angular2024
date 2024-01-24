import { Injectable } from '@angular/core';
import { LabTests } from './lab-tests';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabTestsService {
  lab:LabTests[];
  formData:LabTests=new LabTests();

  constructor(private httpClient:HttpClient) { }

  BindListlab(){
    this.httpClient.get(environment.apiUrl+"/api/A_LabTests")
    .toPromise().then(response=>
      {
        this.lab=response as LabTests[];
        console.log(this.lab);
      }).catch(error=>{console.error('Error: ',error)})
  }



  insertLabTests(lab:LabTests):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/A_LabTests",lab);
  }

  getLabTests(labId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/A_LabTests/"+labId);
  }

  updateLabTests(lab:LabTests):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/A_LabTests",lab);
  }




}
