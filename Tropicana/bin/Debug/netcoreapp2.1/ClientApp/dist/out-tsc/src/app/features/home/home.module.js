import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ErrorComponent } from './error/error.component';
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    NgModule({
        declarations: [LandingComponent, ErrorComponent],
        imports: [
            CommonModule,
            HomeRoutingModule,
            MaterialModule
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map