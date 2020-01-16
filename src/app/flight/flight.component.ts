import {Component, OnDestroy, OnInit} from '@angular/core';
import {FlightService} from './flight.service';
import {Flight} from './models/flight.model';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit, OnDestroy {
  flights: Flight[];
  flightId: string;
  displayedColumns = ['flightNumber', 'departureCity', 'arrivalCity'];
  paramSubcription: Subscription;

  constructor(private flightService: FlightService,
              private activatedRoute: ActivatedRoute) {
   this.paramSubcription = this.activatedRoute.data
     .subscribe((data: {flight: Flight}) => console.log('Data: ', data.flight));
  }

  ngOnInit() {
    this.flightService.listFlights().subscribe(
      (fligths) => {
        this.flights = fligths;
      },
      error => {}
    );
  }

  ngOnDestroy(): void {
    this.paramSubcription.unsubscribe();
  }

}
