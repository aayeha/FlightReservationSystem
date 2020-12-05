import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Airport } from '../model/airport.component';
import { AirportService } from '../services/airport.service';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit {
  airport: Airport=new Airport();
  airports: Observable<Airport[]>;

  constructor(private airportService: AirportService,private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData()
  {
    this.airport = new Airport();
    this.airports=this.airportService.viewAllAirport();
  }
  back(){
    this.router.navigate(['user-panel']);
  }

}
