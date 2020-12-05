import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';


//Author: SANCHIT SINGHAL
//Description: Performs Routing for invalid user
//Created On: 08/05/2020

@Injectable({
  providedIn: 'root'
})
export class Auth implements CanActivate { path:ActivatedRouteSnapshot[];
  route:ActivatedRouteSnapshot;

  constructor(private router:Router){
  }
  canActivate(next:ActivatedRouteSnapshot,state: RouterStateSnapshot){
    console.log("inside security gaurd")
    let user=sessionStorage.getItem("user")
    console.log(user)
    if(user!=null){
      return true; 
    }
   else{
     this.router.navigate(["/login"]) 
}
  }
}