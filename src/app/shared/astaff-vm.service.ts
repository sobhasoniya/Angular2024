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
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'; // Add catchError and map operators

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AStaffVMService {


  private usernamePasswordList: { username: string, password: string }[] = [];
  formData:AStaffVM = new AStaffVM();
  staffdetailsviewmodel:AStaffVM[];
  staff:Staffs[];
  departments:Departments[];
  doctor:Doctors[];
  loginuser:LoginUsers[];
  qualification:Qualifications[];
  role:Roles[];
  specialization:Specializations[];


  constructor(private httpClient:HttpClient) {
    this.usernamePasswordList = [
      { username: 'deepan', password: 'deep123' },
      { username: 'aaron', password: 'aaron01' },
      // Add more entries as needed
    ];
   }


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


  checkDuplicateUsernamePassword(username: string, password: string): Observable<boolean> {
    console.log('Checking for duplicates:', username, password);
    console.log('UsernamePasswordList:', this.usernamePasswordList);

    const isDuplicate = this.usernamePasswordList.some(entry => entry.username === username || entry.password === password);

    console.log('Is Duplicate:', isDuplicate);

    // Simulate an asynchronous response
    return of(isDuplicate).pipe(
      catchError(() => of(false))
    );
  }
}
