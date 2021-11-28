import { Flight } from '@flight-workspace/flight-lib';
import { createAction, props } from '@ngrx/store';

export const flightsLoaded = createAction(      // Event
  '[FlightBooking] flightsLoaded',
  props<{flights: Flight[]}>()
);


export const loadFlights = createAction(      // Event
  '[FlightBooking] loadFlights',
  props<{from: string, to: string}>()
);



export const updateFlight = createAction(      // Command
  '[FlightBooking] updateFlight',
  props<{flight: Flight}>()
);




