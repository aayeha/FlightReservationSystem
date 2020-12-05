import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  viewFlight(): void{
    this.router.navigate(['flight-list']);
  }
  viewAirport(): void{
    this.router.navigate(['airport-list']);
  }
  createBooking(): void{
    this.router.navigate(['/createBooking']);
  }
  updateBooking():void{
    this.router.navigate(['updateBooking/:id'])
  }
  getBookingsList():void{
    this.router.navigate(['/bookings'])
  }
  getBooking(): void{
    this.router.navigate(['/bookingDetails/:id'])
  }
  

}
