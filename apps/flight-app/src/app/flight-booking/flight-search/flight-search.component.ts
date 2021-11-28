/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import {Component, OnInit} from '@angular/core';

import {FlightService} from '@flight-workspace/flight-lib';
import { Store } from '@ngrx/store';
import { debounceTime, first } from 'rxjs';
import { flightsLoaded, loadFlights, updateFlight } from '../+state/flight-booking.actions';
import { FlightBookingAppState } from '../+state/flight-booking.reducer';
import { selectAllFlights, selectFlights, selectUnlistedWithParams } from '../+state/flight-booking.selectors';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  // Deprecated!
  get flights() {
    return []
  }

  // "shopping basket" with selected flights
  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };

  flights$ = this.store.select(selectUnlistedWithParams([4, 6]))

  constructor(
    private store: Store<FlightBookingAppState>) {
  }

  ngOnInit() {
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.store.dispatch(loadFlights({from: this.from, to: this.to}));

  }

  delay(): void {

    this.flights$.pipe(first()).subscribe(flights => {
      const flight = flights[0];
      const newFlight = {...flight, date: new Date().toISOString() };
      this.store.dispatch(updateFlight({flight: newFlight}));
    });

  }

}
