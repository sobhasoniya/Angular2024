import { Injectable } from '@angular/core';
import { Departments } from './departments';
import { Specializations } from './specializations';
import { RDoctorViewModel } from './r-doctor-view-model';
import { RAppointmentViewModel } from './r-appointment-view-model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RAppointmentViewModelService {
  departments:Departments[];
  specializations:Specializations[];
  doctorviewModal:RDoctorViewModel[];
  formData_b:RAppointmentViewModel=new RAppointmentViewModel();
  formData_s:Specializations=new Specializations();
  formData_d:RDoctorViewModel=new RDoctorViewModel();

  constructor(private httpClient: HttpClient) { }
  //Get All Departments
  BindDeparment(){
    this.httpClient.get(environment.apiUrl+'/api/RAppointments/List').toPromise().then(
      response=>{
        this.departments=response as Departments[];
        console.log(this.departments);
      }
    ).catch(error=>{console.error('Error: ',error)});
  }

  //Get All Specialization By Id
  BindSpecializationByDepartmentId(deparmentId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/RAppointments/GetSpecializationByDepartmentId/'+deparmentId);
  }
   //Bind All Doctors By SpecializationId
   BindDoctorBySpecializationId(specializationId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/RAppointments/GetDoctorBySpecializationId/'+specializationId);
  }

  //To Add Appointment and Bill 
  insertAppointmentandBill(appointmentViewmodel:RAppointmentViewModel,isNewPatient:boolean):Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/RAppointments/BookAppointment',appointmentViewmodel,{params:{isNewPatient:isNewPatient.toString()}});
  }
}
