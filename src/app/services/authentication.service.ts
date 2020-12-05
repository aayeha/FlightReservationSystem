import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

   //localStorage.setItem("UserDetails", JSON.stringify(users));

  
  /*return this.httpClient.post<any>('http://localhost:8080/readAllUsers',
  {username, password}).subscribe(
    userData => {
      LocalStorage.setItem('username', username);
      LocalStorage.setItem('Password', password);
      return userData;
    }
  );
}*/
constructor(){}

  // Checks whether the user is logged in
  isUserLoggedIn():boolean {
    let user = localStorage.getItem('user')
    return !(user === null)
  }

  // Removes user session(logout)
  logOut() {
    localStorage.removeItem('user');
  }

 
}