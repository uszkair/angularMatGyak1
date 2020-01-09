import { Component, OnInit } from '@angular/core';
import {FlightService} from './flight.service';
import {Flight} from './models/flight.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  flights: Flight[];
  displayedColumns = ['flightNumber', 'departureCity', 'arrivalCity']

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.flightService.listFlights().subscribe(
      (fligths) => {
        this.flights = fligths;
      },
      error => {}
    );
  }

}
