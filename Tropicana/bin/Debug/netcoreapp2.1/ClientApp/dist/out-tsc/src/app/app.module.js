import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './features/home/home.module';
import { SecurityModule } from './features/security/security.module';
import { HomeService } from './services/home.service';
import { AccountModule } from './features/account/account.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ErrorInterceptor } from './services/interceptors/error.interceptor';
import { AppHttpInterceptor } from './services/interceptors/http.interceptor';
import { UserService } from './services/user.service';
import { AccountService } from './services/account.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/security/authentication.service';
import { AuthGuard } from './services/security/auth.guard';
import { ErrorService } from './services/error.service';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            NavigationComponent
        ],
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialModule,
            AppRoutingModule,
            HttpClientModule,
            HomeModule,
            SecurityModule,
            AccountModule,
            LayoutModule
        ],
        providers: [
            { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
            { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
            HomeService,
            UserService,
            AccountService,
            AuthGuard,
            AuthenticationService,
            ErrorService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map