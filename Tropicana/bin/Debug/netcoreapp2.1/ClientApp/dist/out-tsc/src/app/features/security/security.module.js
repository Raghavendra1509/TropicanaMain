import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    NgModule({
        declarations: [LoginComponent, SignupComponent],
        imports: [
            CommonModule,
            SecurityRoutingModule,
            MaterialModule,
            FormsModule,
            ReactiveFormsModule
        ]
    })
], SecurityModule);
export { SecurityModule };
//# sourceMappingURL=security.module.js.map