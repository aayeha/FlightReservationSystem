import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm }  from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { format } from 'url';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private builder:FormBuilder,private router:Router ,private auth:AuthenticationService) { }
  loginGroup
  showError
  ngOnInit() {


    this.loginGroup=this.builder.group({
      emailId:['',[Validators.required]],
      password:['',[Validators.required]]
    })
 
  }
  
 
  routeToRegistration(){
    this.router.navigate(["/signup"])

    
  }
  login(){
    console.log(this.loginGroup.value)
    let userString=localStorage.getItem(this.loginGroup.value.emailId)
    console.log(userString)
    if(userString!=null){
      let userObj=JSON.parse(userString)
      //authentication logic
      console.log(userObj,this.loginGroup.value.emailId,this.loginGroup.value.password)
      if(userObj.emailId==this.loginGroup.value.emailId && userObj.password==this.loginGroup.value.password ){
         
        //setting the session storage for security
        
        sessionStorage.setItem("user",this.loginGroup.value.emailId)
        if(userObj.role==='admin'){
        this.router.navigate(["/welcome-admin"])
        } else if (userObj.role === 'user'){
          this.router.navigate(["/user-panel"])
        } else{
          console.log("role is required");
        }
      
      }else{
        this.showError=true
      }
    }else{
      this.showError=true
    }
  }
  }

 /* // Redirect based on the user role
  redirect() {
    if(this.user.roles === 'user') {
      sessionStorage.setItem('role', 'user');
      sessionStorage.setItem('userId', String(this.user.userId));
      this.invalidLogin = false;
      this.router.navigate(["/userpanel"]).then(()=> {
        window.location.reload();
      });
    }
    else if(this.user.roles === 'admin') {
      sessionStorage.setItem('role', 'admin');
      sessionStorage.setItem('userId', String(this.user.userId));
      this.invalidLogin = false;
      this.router.navigate(["/welcome_admin"]).then(()=> {
        window.location.reload();
      });
    }
  } */

