import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight.component';
import {MatTableModule} from '@angular/material';



@NgModule({
  declarations: [FlightComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [FlightComponent]
})
export class FlightModule { }
