import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateAirportComponent } from './create-airport/create-airport.component';
import { AirportListComponent } from './airport-list/airport-list.component';
import { AirportDetailsComponent } from './airport-details/airport-details.component';
import { UpdateAirportComponent } from './update-airport/update-airport.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { AuthenticationService } from './services/authentication.service';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { Auth } from './auth.guard';
import { BookingConfirmedComponent } from './booking-confirmed/booking-confirmed.component';
import { AirportsComponent } from './airports/airports.component';
import { FlightsComponent } from './flights/flights.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CreateBookingComponent,
    BookingListComponent,
    BookingDetailsComponent,
    UpdateBookingComponent,
    BookingConfirmedComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CreateAirportComponent,
    AirportListComponent,
    AirportDetailsComponent,
    UpdateAirportComponent,
    CreateFlightComponent,
    FlightDetailsComponent,
    FlightListComponent,
    AirportsComponent,
    FlightsComponent,
    CreateFlightComponent,
    UpdateFlightComponent,
    WelcomeAdminComponent,
    UserPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService,Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
