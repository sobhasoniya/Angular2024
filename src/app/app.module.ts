import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { DAppointmentViewComponent } from './d-doctor/doctor/d-appointment-view/d-appointment-view.component';
import { DoctorComponent } from './d-doctor/doctor/doctor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule,  
    Ng2SearchPipeModule,

    ToastrModule.forRoot( {timeOut:10000,positionClass:'toast-top-right',preventDuplicates:true}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
