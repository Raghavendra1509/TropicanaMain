import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes = [{ path: '', component: LoginComponent },];
let SecurityRoutingModule = class SecurityRoutingModule {
};
SecurityRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], SecurityRoutingModule);
export { SecurityRoutingModule };
//# sourceMappingURL=security-routing.module.js.map