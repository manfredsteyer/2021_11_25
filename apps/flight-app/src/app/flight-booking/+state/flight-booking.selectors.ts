import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFlightBooking from './flight-booking.reducer';
import { FlightBookingAppState } from './flight-booking.reducer';

export const selectFlightBookingState = createFeatureSelector<fromFlightBooking.FlightBookingState>(
  fromFlightBooking.flightBookingFeatureKey
);

export const selectAllFlights2 = createSelector(
  selectFlightBookingState,
  fbs => fbs.flights
);

export const selectUnlisted = createSelector(
  selectFlightBookingState,
  fbs => fbs.unlisted
);


export const selectAllFlights = 
  (root: FlightBookingAppState) => root.flightBooking.flights;

// ViewModel?
export const selectFlights = createSelector(
  (root: FlightBookingAppState) => root.flightBooking.flights,
  (root: FlightBookingAppState) => root.flightBooking.unlisted,
  (flights, unlisted) => flights.filter(f => !unlisted.includes(f.id))  
);

// ViewModel?
export const selectFilteredFlights = createSelector(
  selectAllFlights2,
  selectUnlisted,
  (flights, unlisted) => flights.filter(f => !unlisted.includes(f.id))  
);

export function selectUnlistedWithParams(unlisted: number[]) {
  return createSelector(
    selectAllFlights2,
    (flights) => flights.filter(f => !unlisted.includes(f.id))  
  );
}