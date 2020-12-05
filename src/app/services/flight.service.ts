import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private Url = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  viewFlight(flightNo: number): Observable<any> {
    return this.http.get(`${this.Url}/viewFlight/${flightNo}`);
  }

  addFlight(flight: Object): Observable<Object> {
    return this.http.post(`${this.Url}/addFlight`, flight);
  }

  modifyFlight(flightNo: number,flight:Object): Observable<Object> {
    return this.http.put(`${this.Url}/updateFlight/${flightNo}`, flight);
  }

  removeFlight(flightNo: number): Observable<any> {
    return this.http.delete(`${this.Url}/deleteFlight/${flightNo}`, { responseType: 'text' });
  }

  viewAllFlight(): Observable<any> {
    return this.http.get(`${this.Url}/allFlight`);
  }

}
