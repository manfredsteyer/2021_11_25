import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { CheckinComponent } from './checkin.component';
// import { FakeFlightService } from '@flight-workspace/flight-lib'

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [CheckinComponent],
  exports: [CheckinComponent],
})
export class LuggageFeatureCheckinModule {}




// Manfred was here!! You've been haaaacked!!!

// One more change!

// A last change to make it perfect!