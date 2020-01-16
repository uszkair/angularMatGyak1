import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FlightComponent} from './flight.component';
import {FlightDetailResolverService} from '../flight-detail-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: FlightComponent
  },
  {
    path: ':id',
    component: FlightComponent,
    resolve: {
      flight: FlightDetailResolverService // a flight változó értékét a flight resolver megoldja
    }
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule {
}
