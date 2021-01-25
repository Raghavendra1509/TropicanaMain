import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { AccountRoutingModule } from './account-routing.module';
import { PaymentsComponent } from './payments/payments.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [PaymentsComponent, DetailsComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule
  ]
})
export class AccountModule { }
