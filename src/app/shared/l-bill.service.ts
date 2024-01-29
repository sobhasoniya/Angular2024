import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LBill } from './l-bill';

@Injectable({
  providedIn: 'root'
})
export class LBillService {
  labBillVM:LBill[];
  formData_L:LBill=new LBill()


  constructor(private httpClient:HttpClient) { }

  BindListLabBill(ReportId:number)
  {
    return this.httpClient.get(environment.apiUrl + "/api/LlabTests/Bill", { params: { ReportId: String(ReportId) } })
    
}
}
