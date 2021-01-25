import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../src/app/services/security/auth.guard';
const routes = [
    {
        path: 'login',
        loadChildren: () => import('./features/security/security.module').then(m => m.SecurityModule)
    },
    {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'account',
        canActivate: [AuthGuard],
        loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule)
    },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map