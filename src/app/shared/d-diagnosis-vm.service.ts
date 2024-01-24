import { Injectable } from '@angular/core';
import { DDiagnosisVM } from './d-diagnosis-vm';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {LabTests} from './lab-tests';
import {Medicines} from './medicines';

@Injectable({
  providedIn: 'root'
})
export class DDiagnosisVMService {
  labTests:LabTests[];
  medicines:Medicines[];
  formData:DDiagnosisVM=new DDiagnosisVM();
  constructor(private httpClient:HttpClient) { }

  //Get all LabTests
  BindListLabTest()
  {
    this.httpClient.get(environment.apiUrl+ "/api/A_LabTests")
    .toPromise().then(response => {
      this.labTests=response as LabTests[];
      console.log(this.labTests);
    })
  }

  //Get all medicines
  BindListMedicines()
  {
    this.httpClient.get(environment.apiUrl+ "/api/A_Medicine")
    .toPromise().then(response => {
      this.medicines=response as Medicines[];
      console.log(this.medicines);
    })
  }

  InsertDiagnosis(diag:DDiagnosisVM):Observable<any>
  {
    return this.httpClient.post(environment.apiUrl + "/api/Doctor", diag);
  }


}
