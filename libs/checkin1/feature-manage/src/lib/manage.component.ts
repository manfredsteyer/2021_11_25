import { Component, OnInit} from '@angular/core';
import { ManageFacade, loadTicket } from '@flight-workspace/checkin1/domain';

@Component({
  selector: 'checkin1-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
    
    
    ticketList$ = this.manageFacade.ticketList$;


    constructor(private manageFacade: ManageFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.manageFacade.dispatch(loadTicket());
    }

}

