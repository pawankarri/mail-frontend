import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name:String='';
  emailId:String='';
  password:String='';
  phoneNumber:String=''
  constructor(private apiService:ApiService,private route:Router){}

  


  callSignUpApi(){
    this.apiService.signUpCall(this.name,this.emailId,this.password,this.phoneNumber).subscribe(
     response=>{
      if(response.status===201)
      {
        Swal.fire({
          position:'center',
          icon:'success',
          timer:1500,
          title:response.message
        })
        this.route.navigateByUrl('/login')
        console.log("signUp success",response);
      }
      else{
        Swal.fire({
          position:'center',
          icon:'error',
          timer:1500,
          title:"something went wrong"
        })
      }

     
      
     },
     error=>{
      console.log("error");
      
     }
    )
  }


}
