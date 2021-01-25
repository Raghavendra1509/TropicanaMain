import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { AccountRoutingModule } from './account-routing.module';
import { PaymentsComponent } from './payments/payments.component';
import { DetailsComponent } from './details/details.component';
let AccountModule = class AccountModule {
};
AccountModule = __decorate([
    NgModule({
        declarations: [PaymentsComponent, DetailsComponent],
        imports: [
            CommonModule,
            AccountRoutingModule,
            MaterialModule
        ]
    })
], AccountModule);
export { AccountModule };
//# sourceMappingURL=account.module.js.map