import { Injectable } from '@angular/core';

import { Medicines } from './medicines';
import{HttpClient} from '@angular/common/http';
import{environment} from 'src/environments/environment'
import{Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  medicine:Medicines[];
  formData:Medicines=new Medicines();

  constructor(private httpClient:HttpClient) { }


  BindListMedicine(){
    this.httpClient.get(environment.apiUrl+"/api/A_Medicine")
    .toPromise().then(response=>
      {
        this.medicine=response as Medicines[];
        console.log(this.medicine);
      }).catch(error=>{console.error('Error:',error)})
  }


  insertMedicines(med:Medicines):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/A_Medicine",med);
  }

  getMedicines(medId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/A_Medicine/"+medId);

  }

  updateMedicines(medicine:Medicines):Observable<any>{
    return this.httpClient.put(environment.apiUrl + "/api/A_Medicine", medicine)
  }




}
