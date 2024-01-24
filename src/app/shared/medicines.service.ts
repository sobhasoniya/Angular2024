import { Injectable } from '@angular/core';
import { Medicines}  from './medicines';
import {HttpClient} from '@angular/common/http';
import { environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {
  medicine:Medicines[]; //for medicine list
  formData:Medicines=new Medicines();

  constructor(private httpClient:HttpClient) { }
  BindListMedicines()
  {
    this.httpClient.get(environment.apiUrl + "/api/Pmedicine")
    .toPromise().then(response=>
      this.medicine=response as Medicines[]);
  }
}
