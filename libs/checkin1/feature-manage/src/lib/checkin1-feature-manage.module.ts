import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Checkin1DomainModule } from '@flight-workspace/checkin1/domain';
import { ManageComponent } from './manage.component';

@NgModule({
  imports: [CommonModule, Checkin1DomainModule],
  declarations: [ManageComponent],
  exports: [ManageComponent],
})
export class Checkin1FeatureManageModule {}
