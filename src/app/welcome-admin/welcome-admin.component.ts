import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addFlight(): void{
    this.router.navigate(['addFlight']);
  }

  viewFlight(): void{
    this.router.navigate(['flights']);
  }

  addAirport(): void{
    this.router.navigate(['addAirport']);
  }

  viewAirport(): void{
    this.router.navigate(['airports']);
  }
  
  updateAirport(): void{
    this.router.navigate(['update/:airportCode']);
  }
  updateFlight(): void{
    this.router.navigate(['update-flight/:flightNo']);
  }

}