import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight.component';
import {MatTableModule} from '@angular/material';
import {FlightRoutingModule} from './flight-routing.module';



@NgModule({
  declarations: [FlightComponent],
  imports: [
    CommonModule,
    MatTableModule,
    FlightRoutingModule
  ],
  exports: [FlightComponent]
})
export class FlightModule { }
