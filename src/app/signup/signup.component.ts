import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { customValidator } from './validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  constructor(private builder:FormBuilder,private router:Router) {
  }
  registrationGroup

 ngOnInit() {

   this.registrationGroup=this.builder.group({
     name:['',[Validators.required,Validators.minLength(5)]],
     mobileNumber:[0,[Validators.required]],
     emailId:['',[Validators.required, Validators.email]],
     role:['',[Validators.required]],
     password:['',[Validators.required]],
     

   },{validator:customValidator})
 

 }
 submit(){
   console.log(this.registrationGroup.value)
   let userString=JSON.stringify(this.registrationGroup.value)
   localStorage.setItem(/*"user" if we use this it get overrided*/this.registrationGroup.value.emailId,userString)
   this.router.navigate(["/login"])
 
 
 }

  
}
