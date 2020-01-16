import { Injectable } from '@angular/core';
import {Flight} from './flight/models/flight.model';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {FlightService} from './flight/flight.service';

@Injectable({
  providedIn: 'root'
})
export class FlightDetailResolverService implements Resolve<Flight> {

  constructor(private flightService: FlightService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight> | Promise<Flight> | Flight {
    const flightId = Number(route.paramMap.get('id'));

    return this.flightService.getFlight(flightId);
  }
}
