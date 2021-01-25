import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ErrorComponent } from './error/error.component';
const routes = [{ path: '', component: LandingComponent },
    { path: 'error', component: ErrorComponent }];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], HomeRoutingModule);
export { HomeRoutingModule };
//# sourceMappingURL=home-routing.module.js.map