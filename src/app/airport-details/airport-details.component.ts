import { Component, OnInit } from '@angular/core';
import { Airport } from '../model/airport.component'
import { ActivatedRoute, Router } from '@angular/router';
import { AirportService } from '../services/airport.service';

@Component({
  selector: 'app-airport-details',
  templateUrl: './airport-details.component.html',
  styleUrls: ['./airport-details.component.css']
})
export class AirportDetailsComponent implements OnInit {
  airportCode: string;
  airport:Airport;
  constructor(private route: ActivatedRoute,private router: Router,
    private airportService: AirportService) {
      this.route.params. subscribe(
        data=>{
          console.log(data);
         this.airportCode = data.id;
         console.log(this.airportCode);
        }
      )
     }

  ngOnInit(){
   // this.airport = new  Airport();

   // this.airportCode = this.route.snapshot.params['airportCode'];
    console.log(this.airportCode);
    this.airportService.viewAirport(this.airportCode)
      .subscribe(data => {
        console.log(data)
        this.airport = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['airports']);
  }

}
