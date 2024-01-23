import { Injectable } from '@angular/core';
import { DPatientHistoryVM } from './d-patient-history-vm';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DPatientHistoryVMService {
historyList:DPatientHistoryVM[]; //For patient history list
  constructor(private httpClient:HttpClient) { }

  PatientHistory(patientId: number):Observable<DPatientHistoryVM[]>
  {
return this.httpClient.get<DPatientHistoryVM[]>(environment.apiUrl+"/api/Doctor/"+patientId);
  }
}
