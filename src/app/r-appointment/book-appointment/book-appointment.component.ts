// booking-appointment.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DoctorService} from 'src/app/shared/doctors.service';
import { DepartmentService } from 'src/app/shared/departments.service';
import { SpecializationService } from 'src/app/shared/specializations.service';
import { Doctors } from 'src/app/shared/doctors';
import { Departments } from 'src/app/shared/departments';
import { Specializations } from 'src/app/shared/specializations';
import { Patients } from 'src/app/shared/patients';
import { RAppointmentViewModel } from 'src/app/shared/r-appointment-view-model';
import{RDoctorViewModel} from 'src/app/shared/r-doctor-view-model';
import { PatientsService } from 'src/app/shared/patients.service';
import{RAppointmentViewModelService} from 'src/app/shared/r-appointment-view-model.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DateAdapter } from '@angular/material/core';
import { ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {
  appointmentForm:FormGroup;
  patientId:number;
  Patient_d:Patients=new Patients();
  appointmentViewModel:RAppointmentViewModel=new RAppointmentViewModel();
  selectedDoctor: RDoctorViewModel | null = null;
  selectedDoctorID:number|null=null;
  selectedDoctorConsultationFee: number | null = null;
  isNewPatient:boolean=false;
  specializations:any[]=[];
  doctors:any[]=[];
  departmentId:number=11;
 
  minDate:Date=new Date();
  maxDate:Date=new Date();
  // Use BehaviorSubject to store the doctors and initialize with an empty array
  private doctorsSubject = new BehaviorSubject<RDoctorViewModel[]>([]);
  // Expose the doctors as an observable
  doctors$ = this.doctorsSubject.asObservable();
  constructor(private patientService:PatientsService,private route:ActivatedRoute,private router:Router,public bookingService:RAppointmentViewModelService,private dateAdapter:DateAdapter<Date>,private cdr: ChangeDetectorRef,private fb:FormBuilder,private toastr:ToastrService) {
      // Set the minimum date to today
      this.minDate = this.dateAdapter.today();

      // Set the maximum date to 2 weeks from today
      this.maxDate = new Date();
      this.maxDate.setDate(this.maxDate.getDate() + 14);
        // Initialize the form group
    this.appointmentForm = this.fb.group({
      DepartmentId: [null, Validators.required],
      // SpecializationId: [null, Validators.required],
      DoctorId: [null, Validators.required],
      AppointmentDate: [null, Validators.required],
    });
    
   }


   getMinDOBDate1(): string {
    const currentDate = new Date();
    const minJoinDate = new Date(currentDate);
    minJoinDate.setDate(currentDate.getDate() ); // Disable the current day and preceding days
    return this.formatDate2(minJoinDate);
  }
  
  getMaxDOBDate2(): string {
    const currentDate = new Date();
    const maxJoinDate = new Date(currentDate);
    maxJoinDate.setDate(currentDate.getDate() + 7); // Enable the current day and next 7 days
    return this.formatDate2(maxJoinDate);
  }
  
  formatDate2(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  

   ngOnInit(): void {


    
    this.patientId=this.route.snapshot.params['PatientId'];
    // Retrieve isNewPatient from query parameters
  this.isNewPatient = this.route.snapshot.queryParams['isNewPatient'] === 'true';
  console.log(this.isNewPatient);
    console.log("Populating(details)");
    console.log(this.patientId);
    
    //subscriber
    this.patientService.getPatientById(this.patientId).subscribe(
      data=>
      {
        console.log(data);
        this.Patient_d=data;

        var datePipe=new DatePipe('en-UK');
        let formatedyear:any=datePipe.transform(data.PatientDob,'yyyy-MM-dd');
        data.PatientDob=formatedyear;

        this.patientService.formData=Object.assign({},data);
        console.log(FormData);
      },error=>console.log(error)
    );

    this.bookingService.BindDeparment();
    

  }
  backtoPatientList(){
    this.router.navigate(['/r-patient/listPatient']);
  }
  //Filtering Specialization By DepartmentId
  onDepartmentChange() {
    console.log('Department change')
    this.specializations=[];
    console.log("Entering On Department Changes")
    if (this.appointmentForm.get('DepartmentId').value !== 0) {
      this.departmentId = 11;
      console.log('ID:', this.departmentId);
  
      this.bookingService.BindSpecializationByDepartmentId(this.departmentId).subscribe(
        response => {

          console.log('Specializations:', this.departmentId);
          this.bookingService.specializations = [...response] as Specializations[]; // Create a new array
          this.specializations=this.bookingService.specializations;
          this.bookingService.BindDoctorBySpecializationId(this.appointmentForm.get('SpecializationId').value);
          this.doctors=[];
        },
        error => {
          console.error('Error fetching specializations: ', error);
        }
      );
    }
  }
  onSpecializationChange() {
    console.log("specializaiton changes")
    if (this.appointmentForm.get('SpecializationId') == null) {
      console.log("specializaiton changes")
      const specializationId = 22;
  
      this.bookingService.BindDoctorBySpecializationId(22).subscribe(
        response => {
          console.log('Doctors:', response);
          this.bookingService.doctorviewModal = [...response] as RDoctorViewModel[]; // Create a new array
          this.doctors=this.bookingService.doctorviewModal;
          this.selectedDoctor = null; // Reset the selected doctor when specialization changes
          // Trigger change detection
          this.cdr.detectChanges();
        },
        error => {
          console.error('Error fetching doctors: ', error);
        }
      );
    } else {
      // Reset the doctor dropdown when SpecializationId is 0
      console.log("Doctor")
      this.bookingService.doctorviewModal = [];
      this.selectedDoctor = null;
      // Trigger change detection
      this.cdr.detectChanges();
    }
  } 
  onDoctorChange() {
    console.log("Doctor change");
  
    const selectedDoctor = this.appointmentForm.get('DoctorId').value;
    
    // Log the current value of selectedDoctor
    console.log("Selected Doctor:", selectedDoctor);
  
    if (selectedDoctor) {
      // Set the selectedDoctorConsultationFee
      this.selectedDoctorID = selectedDoctor.DoctorId;
      this.selectedDoctorConsultationFee = selectedDoctor.ConsultationFee;
      console.log("Doctor ID:", selectedDoctor.DoctorId);
      console.log("Consultation Fee:", selectedDoctor.ConsultationFee);
    } else {
      // Handle the case where the selectedDoctor is not found in the updated list
      console.warn("Invalid selection");
      this.selectedDoctorConsultationFee = null;
      this.selectedDoctor = null;
    }
  }

  onSubmit(form:FormGroup){

    form.value.PatientId=this.patientId;
    this.appointmentViewModel.PatientId=form.value.PatientId;
    this.appointmentViewModel.DocId=this.selectedDoctorID;
    this.appointmentViewModel.AppointmentDate=form.value.AppointmentDate;
    this.appointmentViewModel.ConsultationFee=this.selectedDoctorConsultationFee;
    
    console.log(this.isNewPatient);
    console.log(form.value.PatientId);
    console.log(form.value);
    console.log(this.appointmentViewModel);
    this.bookingService.insertAppointmentandBill(this.appointmentViewModel,this.isNewPatient).subscribe(
      response=>
      {
        console.log(response);
        this.appointmentViewModel=response as RAppointmentViewModel;
        console.log(response.ConsultationFee)
        console.log('Appointment Booked');
        this.router.navigate(['appointment/bill-generation',this.appointmentViewModel.BillId]);
        this.toastr.success('Appointment Booked Successfully');
        this.bookingService.departments=null;
      },error=>{
        console.error('Error Booking Appointment:',error);
         // Log the response body for more details
    if (error instanceof HttpErrorResponse && error.error) {
      console.log('Error Details:', error.error);
      this.router.navigate(['r-appointment/listAppointment']);
      this.toastr.success("Appointment Booked successfully");
      this.bookingService.departments=null;
    }
      }
    );
  }


}