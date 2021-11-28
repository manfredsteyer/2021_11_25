

import { Injectable } from '@angular/core';
import { Flight, FlightService } from '@flight-workspace/flight-lib';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { flightsLoaded, loadFlights } from './flight-booking.actions';
import { FlightBookingAppState } from './flight-booking.reducer';
import { selectUnlisted } from './flight-booking.selectors';

// -- 4 --
@Injectable({providedIn: 'root'})
export class FlightBookingFacade {
    
    readonly flights$ = this.store.select(selectUnlisted);

    constructor(private store: Store) { }
    
    load(from: string, to: string): void {
        this.store.dispatch(loadFlights({from, to}));
    }
}


// -- 3 --
// @Injectable({providedIn: 'root'})
// export class FlightBookingFacade {
    
//     readonly flights$ = this.store.select(selectUnlisted);

//     constructor(
//         private flightService: FlightService,
//         private store: Store
//         ) { }
    
//     load(from: string, to: string): void {
//         this.flightService.find(from, to).subscribe(
//             flights => {

//                 this.store.dispatch(flightsLoaded({flights}));

//             }
//         );   
//     }

// }

// -- 2 --
// @Injectable({providedIn: 'root'})
// export class FlightBookingFacade {
    
//     readonly flights$ = this.store.select(root => root.flightBooking.flights);

//     constructor(
//         private flightService: FlightService,
//         private store: Store<FlightBookingAppState>
//         ) { }
    
//     load(from: string, to: string): void {
//         this.flightService.find(from, to).subscribe(
//             flights => {

//                 this.store.dispatch(flightsLoaded({flights}));

//             }
//         );   
//     }

//}

// -- 1 --
// @Injectable({providedIn: 'root'})
// export class FlightBookingFacade {
    
//     private flightsSubject = new BehaviorSubject<Flight[]>([]);
//     readonly flights$ = this.flightsSubject.asObservable();

//     constructor(private flightService: FlightService) { }
    
//     load(from: string, to: string): void {
//         this.flightService.find(from, to).subscribe(
//             flights => {

//                 this.flightsSubject.next(flights);

//             }
//         )   
//     }

// }