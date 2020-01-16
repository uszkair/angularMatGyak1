import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Flight} from './models/flight.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }


  listFlights(): Observable<Flight[]> {
    return this.http
      .get<Flight[]>(`${environment.baseUrl}`);
  }

  getFlight(flightId: number) {
    return this.http.
      get<Flight>(`${environment.baseUrl}/${flightId}`);
  }
}
