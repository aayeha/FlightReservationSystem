import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from '../model/booking.component';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-confirmed',
  templateUrl: './booking-confirmed.component.html',
  styleUrls: ['./booking-confirmed.component.css']
})
export class BookingConfirmedComponent implements OnInit {
  submitted: false;
  bookingId: number;
  booking: Booking;
  bookings: Observable<Booking[]>;

  constructor(private route: ActivatedRoute, private router: Router,
    private bookingService: BookingService) { 
      this.route.params. subscribe(
        data=>{
         console.log(data);
         this.bookingId = data.id;
         //console.log(this.bookingId);
        }
      )
    }

  ngOnInit() {
  //  this.booking = new Booking();

  //  this.bookingId = this.route.snapshot.params['bookingId'];

    this.bookingService.getBooking(this.bookingId)
    .subscribe(data => {
      console.log(data);
      this.booking = data;
      },
      error => console.log(error)); 
  } 
  gotoList() {
    this.router.navigate(['/bookings']);
  }

}
