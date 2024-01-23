import { Injectable } from '@angular/core';
import { PPharmacistViewModel } from './p-pharmacist-view-model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PPharmacistViewModelService {
 
  patients:PPharmacistViewModel[]; //for medicine list
  formData:PPharmacistViewModel=new PPharmacistViewModel();


  constructor(private httpClient:HttpClient) { }
    BindListpatients()
    {
      this.httpClient.get(environment.apiUrl + "/api/PharmPatientPharmacist")
      .toPromise().then(response=>
      this.patients=response as PPharmacistViewModel[]);
    
  }
}
