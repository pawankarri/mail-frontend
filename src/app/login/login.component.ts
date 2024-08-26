import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailId:String='';
  password:String=''

  constructor(private route:Router,private apiService:ApiService){}
  navigateToSignUpPage(){
    this.route.navigateByUrl('/signUp')
  }

  login(){
    this.apiService.loginCall(this.emailId,this.password).subscribe(
      response=>{
        if(response.status===200)
        {
          Swal.fire({
            position:'center',
            title:response.message,
            timer:1500,
            icon:'success'
          })
          console.log('login success',response);
          
        }
      },
      error=>{
        console.log("login failed");
        
      }
    )
  }

}
