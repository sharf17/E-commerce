import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  constructor(private hc:HttpClient) { }

  isloggedIn:boolean=false;
  //login req sending
  loginUser(user):Observable<any>
  {
   return this.hc.post('/login',user);
  }

  //admin 
  loginAdmin(user):Observable<any>
  {
    return this.hc.post('/adminlogin',user);
  }
  //logout method
  logout()
  {
    //write logout logic here
    localStorage.clear();
    this.isloggedIn=false;
  }
  //tells whether he is logged in or not
  isLoggedIn()
  {
  return !!localStorage.getItem("token");
  }

  //tells whether admin is logged in or not
  isAdminLoggedIn()
  {
  return !!localStorage.getItem("admintoken");
  }

}

