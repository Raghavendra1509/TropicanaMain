import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsComponent } from './payments/payments.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: '', component: DetailsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
