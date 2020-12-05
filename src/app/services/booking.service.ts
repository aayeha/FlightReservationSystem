import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getBooking(bookingId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/searchBooking/${bookingId}`);
  }

  createBooking(booking: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/createBooking`, booking);
  }

  updateBooking(bookingId:number ,booking: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updateBooking/${bookingId}`, booking);
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteBooking/${id}`, { responseType: 'text' });
  }

  getBookingsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/readAllBooking`);
  }
}
