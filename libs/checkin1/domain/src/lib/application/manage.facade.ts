import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromTicket from '../+state/ticket/ticket.reducer';
import * as TicketSelectors from '../+state/ticket/ticket.selectors';
import { loadTicket } from '../..';

@Injectable({ providedIn: 'root' })
export class ManageFacade {
  loaded$ = this.store.pipe(select(TicketSelectors.getTicketLoaded));
  ticketList$ = this.store.pipe(select(TicketSelectors.getAllTicket));
  selectedTicket$ = this.store.pipe(select(TicketSelectors.getSelected));

  constructor(private store: Store<fromTicket.TicketPartialState>) { }

  load() {
    this.store.dispatch(loadTicket());
  }
}
