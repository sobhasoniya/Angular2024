import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
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
     ReactiveFormsModule,


    ToastrModule.forRoot( {timeOut:10000,positionClass:'toast-top-right',preventDuplicates:true}),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
