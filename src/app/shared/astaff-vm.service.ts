import { Injectable } from '@angular/core';
import { AStaffVM } from './astaff-vm';
import { Staffs } from './staffs';
import { Departments } from './departments';
import { Doctors } from './doctors';
import { LoginUsers } from './login-users';
import { Qualifications } from './qualifications';
import { Roles } from './roles';
import { Specializations } from './specializations';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AStaffVMService {

  formData:AStaffVM = new AStaffVM();
  staffdetailsviewmodel:AStaffVM[];
  staff:Staffs[];
  departments:Departments[];
  doctor:Doctors[];
  loginuser:LoginUsers[];
  qualification:Qualifications[];
  role:Roles[];
  specialization:Specializations[];


  constructor(private httpClient:HttpClient) { }


  BindListStaffs(){
    this.httpClient.get(environment.apiUrl + "/api/A_Staff/ViewModelGetStaff")
    .toPromise().then(response =>{
      this.staffdetailsviewmodel=response as AStaffVM[];
      console.log(this.staff)
    });
  }


  insertStaff(staff:AStaffVM):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/A_Staff",staff);
  }

  getStaff(staffId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/A_Staff/"+staffId);
  }


}
