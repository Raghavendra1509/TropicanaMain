import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
const routes = [
    { path: 'details', component: DetailsComponent },
    { path: '', component: DetailsComponent }
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AccountRoutingModule);
export { AccountRoutingModule };
//# sourceMappingURL=account-routing.module.js.map