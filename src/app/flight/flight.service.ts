import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Flight} from './models/flight.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }


  listFlights(): Observable<Flight[]> {
    return this.http
      .get<Flight[]>('http://szia-backend.herokuapp.com/api/Flights');
  }
}
