import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl=`http://localhost:5555/api/v1/`


  constructor(private http:HttpClient) { }

  signUpCall(name:String,emailId:String,password:String,phoneNumber:String):Observable<any>{
    const signUpData={name,emailId,password,phoneNumber}
    return this.http.post(`${this.baseUrl}auth/create-user`,signUpData)
  }

  loginCall(emailId:String,password:String):Observable<any>{
    const loginData={emailId,password}
    return this.http.post(`${this.baseUrl}auth/login`,loginData)
  }
 


}
