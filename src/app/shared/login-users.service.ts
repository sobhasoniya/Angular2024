import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUsers } from './login-users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginUsersService {

  constructor(private httpClient:HttpClient) { }

  public loginVerify(user:LoginUsers){
    return this.httpClient.get<LoginUsers>(environment.apiUrl+"/api/Login/"+ user.UserName+ '/'+ user.Password);
  }
}
