import { Injectable } from '@angular/core';
import { Staffs } from './staffs';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import{environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class StaffsService {
  staffs:Staffs[];
  formData:Staffs=new Staffs();

  constructor(private httpClient:HttpClient) { }



  


  updateStaffs(staffs:Staffs):Observable<any>{
    return this.httpClient.put(environment.apiUrl + "api/A_Staff/", staffs)
  }
}
