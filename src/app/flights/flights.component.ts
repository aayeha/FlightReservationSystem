import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight.component';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights:Observable<Flight[]>;

  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData()
  {
    this.flights=this.flightService.viewAllFlight();
  }
  back(){
    this.router.navigate(['user-panel']);
  }
}
