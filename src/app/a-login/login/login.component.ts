import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginUsersService} from 'src/app/shared/login-users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  error:string;
  constructor(private formBuilder:FormBuilder,
    private loginService:LoginUsersService,
    private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
    UserName:['',[Validators.required]],
    Password:['',[Validators.required]],
    });
  }

  get formControls(){
    return this.loginForm.controls;
}

LoginCredentials()
{
  console.log(this.loginForm.value);
  this.isSubmitted=true;
  console.log("Submitted form for credentials")

  //if invalid
  if(this.loginForm.invalid)
  {
    this.error="Invalid Username / Password";
  }

  //if form is valid
  if(this.loginForm.valid)
  {
    console.log("Successfully Logged In");

    //calling method from AuthService
    this.loginService.loginVerify(this.loginForm.value).subscribe(
      response=>{
        this.error='';
        console.log(response);

        //set Sessionstorage and localstorage (browser -> inspect -> application)
        //SessionStorage -- changes browser to browser
        sessionStorage.setItem('USERNAME', response.userName);
        sessionStorage.setItem('ACCESS_ROLE',response.rId.toString());

         //Localstorage -- changes
         localStorage.setItem('USERNAME', response.userName);
         localStorage.setItem('ACCESS_ROLE',response.rId.toString());


        if(response == null)
        {
          this.error="Invalid UserName and/or Password";
        }
        else if(response.rId==1)
        {
          this.router.navigateByUrl('a-home/adminhome');
        }
        else if(response.rId==2)
        {
          this.router.navigateByUrl('r-appointment/home');
        }
        else if(response.rId==3)
        {
          this.router.navigateByUrl('d-doctor/listAppointments');
        }
        else if(response.rId==4)
        {
          this.router.navigateByUrl('l-laboratory/list');
        }
        else if(response.rId==5)
        {
          this.router.navigateByUrl('p-pharmacist/home');
        }
        else
        {
          this.error="You are not allowed to access the system!"
        }
      },
      error=>{
      console.log(error);
      this.error="Invalid UserName and/or Password! Please Try again! "
    }
    );
  }
}

}
